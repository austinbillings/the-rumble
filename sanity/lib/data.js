import { client } from "./client";
import { projectId } from "../env";
import {
  releases as staticReleases,
  videos as staticVideos,
  merch as staticMerch,
} from "@/content/site";

// Until a Sanity project is configured (NEXT_PUBLIC_SANITY_PROJECT_ID) and has
// content, every getter falls back to the static data in content/site.js.
// Pages can migrate to these getters now; flipping to the CMS is then just an
// env var + publishing documents.
const cmsEnabled = Boolean(projectId);

async function fetchOrFallback(query, fallback) {
  if (!cmsEnabled) return fallback;
  try {
    const rows = await client.fetch(query);
    return Array.isArray(rows) && rows.length ? rows : fallback;
  } catch {
    return fallback;
  }
}

export function getReleases() {
  return fetchOrFallback(
    `*[_type == "release"] | order(order asc) {
      title, year, note, listenUrl, featured,
      "cover": cover.asset->url
    }`,
    staticReleases
  );
}

export function getVideos() {
  return fetchOrFallback(
    `*[_type == "video"] | order(order asc) {
      "id": youtubeId, title, context, category
    }`,
    staticVideos
  );
}

export function getMerch() {
  return fetchOrFallback(
    `*[_type == "merchItem"] | order(order asc) {
      name, price, shopUrl,
      "image": image.asset->url
    }`,
    staticMerch
  );
}
