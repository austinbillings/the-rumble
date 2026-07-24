export default {
  name: "merchItem",
  title: "Merch Item",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (r) => r.required() },
    { name: "price", title: "Price", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "shopUrl", title: "Shop URL", type: "url" },
    { name: "soldOut", title: "Sold Out", type: "boolean", initialValue: false },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
