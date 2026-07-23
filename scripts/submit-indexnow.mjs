const HOST = 'standmate.jp';
const KEY = '5ec4f45588bb40ec86ed08f0f0f4299e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  const sitemapRes = await fetch(SITEMAP_URL);
  if (!sitemapRes.ok) {
    throw new Error(`サイトマップの取得に失敗しました: HTTP ${sitemapRes.status}`);
  }
  const xml = await sitemapRes.text();
  const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urlList.length === 0) {
    throw new Error('サイトマップからURLを取得できませんでした');
  }

  const submitRes = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  console.log(`IndexNow送信: ${urlList.length}件のURL / HTTP ${submitRes.status}`);

  if (!submitRes.ok && submitRes.status !== 202) {
    const text = await submitRes.text();
    throw new Error(`IndexNow送信に失敗しました: HTTP ${submitRes.status} ${text}`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
