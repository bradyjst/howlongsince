const WIKI_API = "https://en.wikipedia.org/w/api.php";

export async function searchWiki(query: string) {
  const params = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: query,
    format: "json",
    origin: "*",
  });

  const res = await fetch(`${WIKI_API}?${params}`);
  const json = await res.json();
  return json.query.search;
}

export async function getWikiSummary(title: string) {
  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      title
    )}`
  );
  return res.json();
}
