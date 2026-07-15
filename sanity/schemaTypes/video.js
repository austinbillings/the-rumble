export default {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
    { name: "youtubeId", title: "YouTube ID", type: "string", description: "11-char ID from the watch?v= URL" },
    { name: "context", title: "Context / Venue", type: "string" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Performance", value: "performance" },
          { title: "Feature", value: "feature" },
        ],
        layout: "radio",
      },
      initialValue: "performance",
    },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
