export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "bandName", title: "Band Name", type: "string", description: "Short name, e.g. \"The Rumble\"." },
    { name: "fullName", title: "Full Band Name", type: "string", description: "Used in the footer copyright line." },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "hometown", title: "Hometown", type: "string" },
    { name: "bookingEmail", title: "Booking Email", type: "string" },
    { name: "generalEmail", title: "General Email", type: "string" },
    { name: "instagram", title: "Instagram URL", type: "url" },
    { name: "facebook", title: "Facebook URL", type: "url" },
    { name: "youtube", title: "YouTube URL", type: "url" },
    { name: "newsletterBlurb", title: "Mailing List Blurb", type: "text", description: "Shown above the signup form on /contact." },
    { name: "merchShopUrl", title: "Merch Store URL", type: "url", description: "Fallback link for merch items without their own Shop URL." },
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
};
