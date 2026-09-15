import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  name: "the-rumble",
  title: "The Rumble",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
  // Signups only ever come from the site, never "New document" in the Studio.
  document: {
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== "subscriber"),
  },
});
