export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/studio" }],
    sitemap: "https://therumbleband.com/sitemap.xml",
  };
}
