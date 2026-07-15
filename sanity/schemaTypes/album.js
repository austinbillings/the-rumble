export default {
  name: "album",
  title: "Album / Release Feature",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
    { name: "releaseDate", title: "Release Date", type: "date" },
    { name: "cover", title: "Cover Art", type: "image", options: { hotspot: true } },
    { name: "featured", title: "Feature on homepage", type: "boolean", initialValue: false },
    { name: "listenUrl", title: "Listen / Pre-save URL", type: "url" },
    { name: "blurb", title: "Short Description", type: "text" },
    {
      name: "tracks",
      title: "Tracks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "audio", title: "Audio File", type: "file", options: { accept: "audio/*" } },
            { name: "previewUrl", title: "Or hosted audio URL", type: "url" },
          ],
        },
      ],
    },
  ],
};
