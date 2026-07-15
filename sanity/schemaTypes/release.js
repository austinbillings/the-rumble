export default {
  name: "release",
  title: "Release (Discography)",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
    { name: "year", title: "Year", type: "string" },
    { name: "note", title: "Note", type: "string" },
    { name: "listenUrl", title: "Listen URL", type: "url" },
    { name: "cover", title: "Cover Art", type: "image", options: { hotspot: true } },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
