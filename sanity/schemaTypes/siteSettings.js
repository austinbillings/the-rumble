export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "bandName", title: "Band Name", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "heroBanner", title: "Hero Banner Text", type: "string" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
    { name: "bookingEmail", title: "Booking Email", type: "string" },
    { name: "generalEmail", title: "General Email", type: "string" },
    { name: "instagram", title: "Instagram URL", type: "url" },
    { name: "facebook", title: "Facebook URL", type: "url" },
    { name: "youtube", title: "YouTube URL", type: "url" },
    { name: "newsletterBlurb", title: "Newsletter Blurb", type: "text" },
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
};
