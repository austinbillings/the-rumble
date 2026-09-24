export default {
  name: "suitPage",
  title: "The Suit Page",
  type: "document",
  fields: [
    { name: "heading", title: "Heading", type: "string" },
    {
      name: "images",
      title: "Images",
      type: "array",
      description: "Exactly three: one tall, then two smaller.",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (r) => r.length(3),
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "suitSection",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "paragraphs", title: "Paragraphs", type: "array", of: [{ type: "text", rows: 4 }] },
            {
              name: "roles",
              title: "Roles",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "role",
                  fields: [
                    { name: "name", title: "Name", type: "string" },
                    { name: "desc", title: "Description", type: "string" },
                  ],
                },
              ],
            },
            { name: "outro", title: "Closing Paragraph", type: "text", rows: 3 },
          ],
        },
      ],
    },
    {
      name: "donate",
      title: "Donate Section",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "blurb", title: "Blurb", type: "text", rows: 3 },
        { name: "statsIntro", title: "Stats Intro", type: "string" },
        {
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            {
              type: "object",
              name: "stat",
              fields: [
                { name: "value", title: "Value", type: "string" },
                { name: "label", title: "Label", type: "string" },
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            },
          ],
        },
        { name: "cta", title: "Button Label", type: "string" },
      ],
    },
  ],
  preview: { prepare: () => ({ title: "The Suit Page" }) },
};
