"""トップページの変更前(本番)と変更後(ローカル)で、GPT が候補から選ぶ割合を比べる。使い方: python ab_top.py [繰り返し]"""
import csv, random, re, sys, time
import ab_test
from ab_test import page_text, choose, PAGES
from check import get_key
REPEAT = int(sys.argv[1]) if len(sys.argv) > 1 else 3
ab_test.LIMIT = 6000
QS = [l.strip() for l in open("q_ab_top.txt", encoding="utf-8") if l.strip()]
key = get_key(); comps = [(u, *page_text(f)) for f, u in PAGES if "bellunadome" not in u]
score = {}
w = csv.writer(open("ab_results_top.csv", "w", newline="", encoding="utf-8-sig")); w.writerow(["版", "質問", "回", "選ばれた"])
for q in QS:
    for ver in ("変更前", "変更後"):
        mine = ("https://standmate.jp/", *page_text(f"top_{'before' if ver=='変更前' else 'after'}.html"))
        for n in range(REPEAT):
            c = comps + [mine]; random.shuffle(c)
            for wt in (5, 20, 60):
                try: k = choose(key, q, c); break
                except Exception as e: print("retry", e); time.sleep(wt)
            else: continue
            hit = 0 <= k < len(c) and c[k][0] == mine[0]
            w.writerow([ver, q, n + 1, c[k][0] if 0 <= k < len(c) else "?"])
            s = score.setdefault(ver, [0, 0]); s[0] += 1; s[1] += hit
for v, (t, h) in score.items(): print(f"{v}: {h}/{t} ({h/t:.0%})")
