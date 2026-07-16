import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// No Sanity project configured yet → no client; data getters fall back to
// the static content in content/site.js.
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;
