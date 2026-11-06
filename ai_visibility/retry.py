"""結果CSVのうち「エラー」の行だけを聞き直して上書きする。使い方: python retry.py results_xxx.csv"""
import csv, re, sys, time
from check import get_key, ask
path = sys.argv[1]; key = get_key()
rows = list(csv.reader(open(path, encoding="utf-8-sig")))
for i, r in enumerate(rows[1:], 1):
    if r[1] != "エラー": continue
    for wait in (5, 20, 60, 120):
        try:
            text, urls, _ = ask(key, r[0]); break
        except Exception as e:
            print("retry", i, e); time.sleep(wait)
    else:
        continue
    hit = bool(re.search(r"(?i)standmate|スタンドメイト", text)); own = any("standmate.jp" in x for x in urls)
    hosts = sorted({re.sub(r"^https?://([^/]+).*", r"\1", x) for x in urls})
    rows[i] = [r[0], "○" if hit else "", "○" if own else "", " ".join(hosts), text]
    print(i, "○" if hit else "-", r[0]); time.sleep(3)
    with open(path, "w", newline="", encoding="utf-8-sig") as f: csv.writer(f).writerows(rows)
