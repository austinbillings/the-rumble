export default {
  name: "member",
  title: "Band Member",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (r) => r.required() },
    { name: "role", title: "Role / Instrument", type: "string" },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "bio", title: "Bio", type: "text" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
