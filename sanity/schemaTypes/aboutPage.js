export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  description: "The band intro paragraphs come from the Homepage; the lineup from Band Members.",
  fields: [
    { name: "heading", title: "Heading", type: "string" },
    { name: "lead", title: "Lead", type: "text", rows: 5 },
    { name: "accolades", title: "Accolades", type: "text", rows: 3 },
    { name: "image", title: "Image", type: "image", options: { hotspot: true }, description: "Portrait (4:5)." },
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
};
