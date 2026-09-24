import { client } from "./client";
import { projectId } from "../env";
import {
  band as staticBand,
  contact as staticContact,
  social as staticSocial,
  merchShopUrl as staticMerchShopUrl,
  home as staticHome,
  featuredAlbum as staticFeaturedAlbum,
  bio as staticBio,
  suit as staticSuit,
  tracks as staticTracks,
  featuredTrackId as staticFeaturedTrackId,
  releases as staticReleases,
  videos as staticVideos,
  merch as staticMerch,
} from "@/content/site";

// Until a Sanity project is configured (NEXT_PUBLIC_SANITY_PROJECT_ID) and has
// content, every getter falls back to the static data in content/site.js.
// Each GROQ projection returns the same shape as its static fallback, so pages
// don't care which one they got. Seed Sanity from the static data with
// scripts/seed-sanity.mjs.
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

const isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v);

// Field-by-field (recursing into nested objects, not arrays): anything left
// blank in the Studio keeps its static value.
function mergeFallback(doc, fallback) {
  return Object.fromEntries(
    Object.entries(fallback).map(([k, v]) => [
      k,
      isPlainObject(v) && isPlainObject(doc[k]) ? mergeFallback(doc[k], v) : doc[k] ?? v,
    ])
  );
}

// Singletons: a missing document, or a field left blank, falls back to the
// static value.
async function fetchDocOrFallback(query, fallback) {
  if (!cmsEnabled) return fallback;
  try {
    const doc = await client.fetch(query);
    return doc ? mergeFallback(doc, fallback) : fallback;
  } catch {
    return fallback;
  }
}

export function getSiteSettings() {
  return fetchDocOrFallback(
    `*[_id == "siteSettings"][0]{
      "band": { "name": bandName, fullName, tagline, hometown },
      "contact": { "booking": bookingEmail, "general": generalEmail, newsletterBlurb },
      "social": { instagram, facebook, youtube },
      merchShopUrl
    }`,
    {
      band: staticBand,
      contact: staticContact,
      social: staticSocial,
      merchShopUrl: staticMerchShopUrl,
    }
  );
}

export function getHomePage() {
  return fetchDocOrFallback(
    `*[_id == "homePage"][0]{
      heroSubtitle, heroBanner, heroBannerHref,
      "heroImage": heroImage.asset->url,
      intro, body,
      "introImage": introImage.asset->url
    }`,
    {
      heroSubtitle: staticHome.heroSubtitle,
      heroBanner: staticHome.heroBanner,
      heroBannerHref: staticHome.heroBannerHref,
      heroImage: staticHome.heroImage,
      intro: staticHome.intro,
      body: staticHome.body,
      introImage: staticHome.galleryImages[1],
    }
  );
}

const staticAlbum = {
  title: staticFeaturedAlbum.title,
  cover: staticFeaturedAlbum.cover,
  coverAlt: staticFeaturedAlbum.coverAlt,
  note: staticFeaturedAlbum.note,
  listenUrl: staticFeaturedAlbum.primaryCta.href,
  listenLabel: staticFeaturedAlbum.primaryCta.label,
  tracks: [],
};

export function getFeaturedAlbum() {
  return fetchDocOrFallback(
    `*[_type == "album" && featured == true] | order(releaseDate desc)[0]{
      title, "cover": cover.asset->url, coverAlt, "note": blurb,
      listenUrl, listenLabel,
      "tracks": tracks[]{ title, "src": coalesce(audio.asset->url, previewUrl) }
    }`,
    staticAlbum
  );
}

// The track the header's Listen button plays: the featured album's first
// track that has audio. `src` may be empty, in which case the button links to
// /music instead.
export async function getFeaturedTrack() {
  const album = await getFeaturedAlbum();
  const track = (album.tracks || []).find((t) => t.src);
  if (track) {
    return {
      id: `${album.title}-${track.title}`,
      title: track.title,
      artist: "The Rumble",
      src: track.src,
      cover: album.cover,
    };
  }
  return (
    staticTracks.find((t) => t.id === staticFeaturedTrackId) || staticTracks[0] || null
  );
}

export function getAboutPage() {
  return fetchDocOrFallback(
    `*[_id == "aboutPage"][0]{ heading, lead, accolades, "image": image.asset->url }`,
    {
      heading: staticBio.heading,
      lead: staticBio.lead,
      accolades: staticBio.accolades,
      image: staticBio.image,
    }
  );
}

export function getMembers() {
  return fetchOrFallback(
    `*[_type == "member"] | order(order asc) { name, role }`,
    staticBio.members
  );
}

export function getSuitPage() {
  return fetchDocOrFallback(
    `*[_id == "suitPage"][0]{
      heading,
      "images": images[].asset->url,
      sections[]{ title, "paragraphs": coalesce(paragraphs, []), roles[]{ name, desc }, outro },
      donate{ title, blurb, statsIntro, "stats": coalesce(stats[]{ value, label }, []), cta }
    }`,
    staticSuit
  );
}

export function getReleases() {
  return fetchOrFallback(
    `*[_type == "release"] | order(order asc) {
      title, year, note, tag, listenUrl, featured,
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
      name, price, shopUrl, soldOut, note,
      "image": image.asset->url
    }`,
    staticMerch
  );
}
