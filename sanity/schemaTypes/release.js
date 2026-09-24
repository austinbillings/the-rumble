export default {
  name: "release",
  title: "Release (Discography)",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
    { name: "year", title: "Year", type: "string" },
    { name: "note", title: "Note", type: "string" },
    { name: "tag", title: "Badge", type: "string", description: "Shown on /music, e.g. \"Single\" or \"New Album · Out Now\". Featured releases without one show \"Grammy Nominated\"." },
    { name: "listenUrl", title: "Listen URL", type: "url" },
    { name: "cover", title: "Cover Art", type: "image", options: { hotspot: true } },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
