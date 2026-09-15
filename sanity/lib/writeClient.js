import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Authenticated client for server-side writes (mailing-list signups).
// SANITY_API_WRITE_TOKEN must never reach the browser: no NEXT_PUBLIC_ prefix.
const token = process.env.SANITY_API_WRITE_TOKEN;

export const writeClient =
  projectId && token
    ? createClient({ projectId, dataset, apiVersion, token, useCdn: false })
    : null;
