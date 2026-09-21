# giants.jp は WebFetch(外部サーバー)だと403になるため、このPCから curl で直接取得する。
# 使い方: python scripts/fetch-giants.py list [pages]   … ニュース見出し一覧(既定5ページ)
#         python scripts/fetch-giants.py 31312 [chars]   … 記事本文(news ID)
#         python scripts/fetch-giants.py url https://www.giants.jp/events/ [chars]
import sys,io,re,html,subprocess
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
def get(u): return subprocess.run(['curl','-s','-A',UA,'-H','Accept-Language: ja','-L','--max-time','25',u],capture_output=True).stdout.decode('utf-8','ignore')
def text(h):
    m=re.search(r'<main.*?</main>',h,flags=re.S); h=m.group(0) if m else h
    h=re.sub(r'<(script|style)[^>]*>.*?</\1>','',h,flags=re.S); h=re.sub(r'<br\s*/?>|</p>|</li>|</tr>|</h\d>','\n',h); h=re.sub(r'</t[dh]>',' | ',h)
    t=html.unescape(re.sub(r'<[^>]+>','',h)); return re.sub(r'\n\s*\n+','\n',re.sub(r'[ \t]+',' ',t)).strip()
a=sys.argv[1:] or ['list']
if a[0]=='list':
    seen={}
    for p in range(1,int(a[1]) if len(a)>1 else 6):
        for m in re.finditer(r'href="(/news/\d+/)"[^>]*>(.*?)</a>',get(f'https://www.giants.jp/news/?page={p}'),flags=re.S):
            t=re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',m.group(2)))).strip()
            if t: seen.setdefault(m.group(1),t)
    for u,t in seen.items(): print(u,t[:120])
elif a[0]=='url': print(text(get(a[1]))[:int(a[2]) if len(a)>2 else 4000])
else: print(text(get(f'https://www.giants.jp/news/{a[0]}/'))[:int(a[1]) if len(a)>1 else 4000])
