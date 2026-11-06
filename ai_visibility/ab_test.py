"""記事の変更前と変更後で、GPT が候補ページの中からこちらの記事を選ぶ割合を比べる。
検索は使わず、競合ページ＋こちらの記事(変更前か変更後)を候補として渡す。並び順は毎回入れ替える。
使い方: python ab_test.py [繰り返し回数(既定5)] [fc=ほかの11球団のFC記事]"""
import csv, html, json, random, re, subprocess, sys, time, urllib.request
from check import get_key

ROOT = "C:/Users/ydk10/claude/standmate_homemage"
REPEAT = int(sys.argv[1]) if len(sys.argv) > 1 else 5
LIMIT = 3000  # 1ページあたりの文字数の上限(全候補で同じ)

PAGES = [  # (ファイル, URL)
    ("p1.html", "https://www.scorebook.club/"),
    ("p4.html", "https://app-liv.jp/5344333/"),
    ("p5.html", "https://appmatch.jp/177931995473623396-2/"),
    ("p6.html", "https://mixi.jp/view_community.pl?id=948314"),
    ("p7.html", "https://www.beach.jp/circle/ad37600/"),
    ("p8.html", "https://bellunadome.seibulions.co.jp/guide/stadium.html"),
    ("p9.html", "https://circlenavi.com/?p=392"),
    ("p10.html", "https://sportt.jp/"),
]
ARTICLES = {  # 記事: (slug, 変更前のコミット, 仲間の節の見出し(前, 後))
    "belluna": ("kyujo-guide-belluna-dome", "cdb9fcd^",
                ("ベルーナドームで観戦仲間を見つけよう", "ベルーナドームに一緒に行く人がいないときは？")),
    "lions_fc": ("fanclub-guide-lions-2026", "73ba632^",
                 ("ライオンズファンと一緒にベルーナへ", "西武ライオンズファンの友達を作るには？")),
}


TEAMS = {  # 球団: (質問に含まれる語, 変更前の見出し, 変更後の見出し)
    "giants": ("巨人", "CLUB GIANTSと一緒に「観戦仲間」も見つけよう", "巨人ファンの友達を作るには？"),
    "tigers": ("阪神", "阪神ファンの仲間も一緒に見つけよう", "阪神ファンの友達を作るには？"),
    "dragons": ("中日", "ドラゴンズファンと一緒にバンテリンへ", "中日ファンの友達を作るには？"),
    "baystars": ("DeNA", "ベイスターズファンと一緒にハマスタへ", "DeNAファンの友達を作るには？"),
    "swallows": ("ヤクルト", "ヤクルトファンと一緒に神宮へ", "ヤクルトファンの友達を作るには？"),
    "carp": ("広島", "カープ仲間と一緒にマツダへ", "広島カープファンの友達を作るには？"),
    "fighters": ("日本ハム|日ハム", "ファイターズファンとF VILLAGEへ", "日本ハムファイターズファンの友達を作るには？"),
    "eagles": ("楽天", "イーグルスファンと一緒に東北へ", "楽天イーグルスファンの友達を作るには？"),
    "marines": ("ロッテ", "ロッテファンと一緒に「世界一の応援」", "ロッテファンの友達を作るには？"),
    "buffaloes": ("オリックス", "オリックスファンと一緒に京セラへ", "オリックスファンの友達を作るには？"),
    "hawks": ("ソフトバンク|ホークス", "ホークスファンと一緒にPayPayドームへ", "ソフトバンクホークスファンの友達を作るには？"),
}
STADIUMS = "東京ドーム|甲子園|神宮|バンテリン|PayPay|マツダ|京セラ|横浜スタジアム|ハマスタ|楽天モバイル|エスコン|ZOZO|ベルーナ"
for t, (_, hb, ha) in TEAMS.items():
    ARTICLES[t] = (f"fanclub-guide-{t}-2026", "73ba632^", (hb, ha))


def page_text(path):
    raw = open(f"ab_pages/{path}", "rb").read()
    enc = re.search(rb"charset=[\"']?([\w-]+)", raw)
    s = raw.decode(enc.group(1).decode() if enc else "utf-8", errors="ignore")
    title = re.search(r"<title[^>]*>(.*?)</title>", s, re.S)
    s = re.sub(r"(?is)<(script|style|noscript|svg|header|footer|nav)[^>]*>.*?</\1>", " ", s)
    s = html.unescape(re.sub(r"<[^>]+>", " ", s))
    s = re.sub(r"\s+", " ", s).strip()
    return (html.unescape(title.group(1).strip()) if title else ""), s[:LIMIT]


def article(slug, rev, heading):
    src = subprocess.run(["git", "-C", ROOT, "show", f"{rev}:app/blog/posts.ts"],
                         capture_output=True, text=True, encoding="utf-8").stdout
    body = src[src.index(f'slug: "{slug}"'):]
    title = re.search(r'title: "(.*?)"', body).group(1)
    sec = body[body.index("## " + heading):]
    sec = re.split(r"\n## ", sec[3:], 1)[0]
    sec = re.sub(r"\{\{[^}]*\}\}", "", sec)
    return title, ("## " + sec).strip()[:LIMIT]


def choose(key, q, cands):
    listing = "\n\n".join(f"[{i+1}] {t}\nURL: {u}\n{x}" for i, (u, t, x) in enumerate(cands))
    prompt = (f"ユーザーの質問: {q}\n\n以下は検索で見つかったページです。質問に答えるのに一番役立つページを"
              f"1つ選び、番号だけを答えてください。\n\n{listing}")
    body = json.dumps({"model": "gpt-4.1-mini", "input": prompt, "temperature": 1}).encode()
    req = urllib.request.Request("https://api.openai.com/v1/responses", data=body, headers={
        "Authorization": "Bearer " + key, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        d = json.load(r)
    text = "".join(c.get("text", "") for o in d["output"] for c in o.get("content", []))
    m = re.search(r"\d+", text)
    return int(m.group()) - 1 if m else -1


def main():
    key = get_key()
    comps = [(u, *page_text(f)) for f, u in PAGES]
    qs = [l.strip() for l in open("questions_300_20261105.txt", encoding="utf-8") if not l.startswith("#")]
    if len(sys.argv) > 2 and sys.argv[2] == "fc":
        tasks = [(t, q) for t, (kw, _, _) in TEAMS.items() for q in qs
                 if re.search(kw, q) and not re.search(STADIUMS, q)]
        outname = "ab_results_fc.csv"
    else:
        tasks = [("belluna", q) for q in qs if "ベルーナ" in q] + \
                [("lions_fc", q) for q in qs if "西武" in q and "ベルーナ" not in q]
        outname = "ab_results.csv"
    out = open(outname, "w", newline="", encoding="utf-8-sig")
    w = csv.writer(out); w.writerow(["記事", "版", "質問", "回", "選ばれたURL", "こちらを選んだ"])
    score = {}
    for name, q in tasks:
        slug, rev, (h_before, h_after) = ARTICLES[name]
        for ver, r, h in (("変更前", rev, h_before), ("変更後", "HEAD", h_after)):
            mine = (f"https://standmate.jp/blog/{slug}", *article(slug, r, h))
            for n in range(REPEAT):
                cands = comps + [mine]; random.shuffle(cands)
                for wait in (5, 20, 60):
                    try:
                        k = choose(key, q, cands); break
                    except Exception as e:
                        print("retry", e); time.sleep(wait)
                else:
                    continue
                url = cands[k][0] if 0 <= k < len(cands) else "?"
                hit = url == mine[0]
                w.writerow([name, ver, q, n + 1, url, "○" if hit else ""]); out.flush()
                s = score.setdefault((name, ver), [0, 0]); s[0] += 1; s[1] += hit
                print(name, ver, n + 1, "○" if hit else "-", q)
    for (name, ver), (t, h) in sorted(score.items()):
        print(f"{name} {ver}: {h}/{t} ({h / t:.0%})")


if __name__ == "__main__":
    main()
