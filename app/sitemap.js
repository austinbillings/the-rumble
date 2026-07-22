const BASE = "https://therumbleband.com";

export default function sitemap() {
  const routes = ["", "/bio", "/suit", "/shows", "/media", "/music", "/merch", "/contact"];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
