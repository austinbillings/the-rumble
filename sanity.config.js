import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, singletonTypes } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

const singletons = new Set(singletonTypes);

// Singletons (site settings + the one-off pages) open straight into their one
// document; everything else is a normal list.
const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      ...singletonTypes.map((type) =>
        S.listItem()
          .title(schemaTypes.find((t) => t.name === type).title)
          .id(type)
          .child(S.document().schemaType(type).documentId(type))
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !singletons.has(item.getId())),
    ]);

export default defineConfig({
  name: "the-rumble",
  title: "The Rumble",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
    // Singletons can't be created from "New document"…
    templates: (prev) => prev.filter((t) => !singletons.has(t.schemaType)),
  },
  document: {
    // …and signups only ever come from the site.
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== "subscriber"),
    // …nor duplicated or deleted.
    actions: (prev, { schemaType }) =>
      singletons.has(schemaType)
        ? prev.filter(({ action }) => !["duplicate", "delete", "unpublish"].includes(action))
        : prev,
  },
});
