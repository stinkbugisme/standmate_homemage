"""ChatGPT(API + ウェブ検索)に質問して、スタンドメイトが答えに出るかを記録する。
使い方: python check.py [件数]   結果は results_YYYYMMDD.csv
キーは環境変数 OPENAI_API_KEY から読む(値は表示しない)。"""
import csv, datetime, json, os, re, sys, urllib.request

def get_key():
    k = os.environ.get("OPENAI_API_KEY")
    if not k and os.name == "nt":
        import winreg
        with winreg.OpenKey(winreg.HKEY_CURRENT_USER, "Environment") as h:
            k = winreg.QueryValueEx(h, "OPENAI_API_KEY")[0]
    return k

MODEL = os.environ.get("CHECK_MODEL", "gpt-4.1-mini")
HERE = os.path.dirname(os.path.abspath(__file__))

def ask(key, q):
    body = {"model": MODEL, "tools": [{"type": "web_search"}],
            "input": q + "\n(日本のサービスで具体的な名前を挙げて答えてください)"}
    req = urllib.request.Request("https://api.openai.com/v1/responses",
        data=json.dumps(body).encode(), headers={"Authorization": "Bearer " + key,
        "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        data = json.load(r)
    text, urls = "", []
    for item in data.get("output", []):
        for c in item.get("content", []) or []:
            if c.get("type") == "output_text":
                text += c.get("text", "")
                for a in c.get("annotations", []) or []:
                    if a.get("url"): urls.append(a["url"])
    return text, urls, data.get("usage", {})

def main():
    key = get_key()
    if not key: sys.exit("OPENAI_API_KEY が見つかりません")
    qs = [l.strip() for l in open(os.path.join(HERE, "questions.txt"), encoding="utf-8")
          if l.strip() and not l.startswith("#")]
    if len(sys.argv) > 1: qs = qs[: int(sys.argv[1])]
    out = os.path.join(HERE, f"results_{datetime.date.today():%Y%m%d}.csv")
    tin = tout = 0
    with open(out, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(["質問", "スタンドメイトが出た", "出典にstandmate.jp", "出典のサイト", "答え"])
        for i, q in enumerate(qs, 1):
            try:
                text, urls, u = ask(key, q)
            except Exception as e:
                w.writerow([q, "エラー", "", "", str(e)[:200]]); print(i, "ERR", e); continue
            tin += u.get("input_tokens", 0); tout += u.get("output_tokens", 0)
            hit = bool(re.search(r"(?i)standmate|スタンドメイト", text))
            own = any("standmate.jp" in x for x in urls)
            hosts = sorted({re.sub(r"^https?://([^/]+).*", r"\1", x) for x in urls})
            w.writerow([q, "○" if hit else "", "○" if own else "", " ".join(hosts), text])
            print(i, "○" if hit else "-", q)
    print("tokens in/out:", tin, tout, "->", out)

if __name__ == "__main__":
    main()
