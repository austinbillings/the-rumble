// Mailing-list signups, written by app/api/subscribe/route.js.
// IDs are "subscriber.<sha256(email)>": the dot keeps them out of public
// (unauthenticated) dataset queries, and hashing the email dedupes signups.
export default {
  name: "subscriber",
  title: "Mailing List Signups",
  type: "document",
  readOnly: true,
  fields: [
    { name: "email", title: "Email", type: "string" },
    { name: "subscribedAt", title: "Signed Up", type: "datetime" },
    { name: "source", title: "Source", type: "string" },
  ],
  orderings: [
    {
      title: "Newest first",
      name: "subscribedAtDesc",
      by: [{ field: "subscribedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "email", date: "subscribedAt" },
    prepare: ({ title, date }) => ({
      title,
      subtitle: date ? new Date(date).toLocaleDateString("en-US", { dateStyle: "medium" }) : "",
    }),
  },
};
