export default {
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string", description: "Line under \"The Rumble\" in the hero." },
    { name: "heroBanner", title: "Hero Banner Text", type: "string", description: "The \"New\" pill link at the top of the hero." },
    { name: "heroBannerHref", title: "Hero Banner Link", type: "url" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
    { name: "intro", title: "Intro", type: "text", rows: 6, description: "\"The Band\" section. Also the first paragraph on /about." },
    { name: "introImage", title: "Intro Image", type: "image", options: { hotspot: true }, description: "Tall (3:4) photo beside the intro." },
    { name: "body", title: "Longer Bio Paragraph", type: "text", rows: 8, description: "Second paragraph on /about." },
  ],
  preview: { prepare: () => ({ title: "Homepage" }) },
};
