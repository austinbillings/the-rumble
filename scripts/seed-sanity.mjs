// Seeds Sanity with the static content in content/site.js.
//
//   node --env-file=.env.local scripts/seed-sanity.mjs
//
// Safe to re-run: every document gets a deterministic _id and is written with
// createOrReplace, and Sanity dedupes image uploads by content hash. Re-running
// DOES overwrite edits made in the Studio to these documents.
import { createReadStream } from "node:fs";
import { basename, join } from "node:path";
import { createClient } from "@sanity/client";
import {
  band,
  home,
  contact,
  social,
  merchShopUrl,
  featuredAlbum,
  bio,
  suit,
  releases,
  videos,
  merch,
} from "../content/site.js";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN (run with --env-file=.env.local).");
  process.exit(1);
}

// Errors from @sanity/client carry the full request, auth header included;
// print just the message.
process.on("uncaughtException", (err) => {
  console.error("Seed failed:", err?.message || err);
  process.exit(1);
});

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01",
  token,
  useCdn: false,
});

const slug = (s) =>
  s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

async function withRetry(fn, tries = 3) {
  for (let i = 1; ; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i >= tries) throw err;
      await new Promise((r) => setTimeout(r, 1000 * i));
    }
  }
}

// "/images/album/x.jpg" -> uploaded image field. Cached so shared art uploads once.
const uploaded = new Map();
async function image(publicPath) {
  if (!publicPath) return undefined;
  if (!uploaded.has(publicPath)) {
    const file = join(process.cwd(), "public", publicPath);
    uploaded.set(publicPath, (await withRetry(() =>
      client.assets.upload("image", createReadStream(file), { filename: basename(file) })
    ))._id);
  }
  return { _type: "image", asset: { _type: "reference", _ref: uploaded.get(publicPath) } };
}

// One upload at a time: parallel uploads have tripped DNS lookups.
async function sequential(items, fn) {
  const out = [];
  for (const item of items) out.push(await fn(item));
  return out;
}

// Array items that are objects need a unique _key.
const keyed = (items) => items.map((item, i) => ({ _key: `k${i}`, ...item }));

const docs = [];

// Singletons live at _id === type name (see singletonTypes in the schema).
docs.push({
  _id: "siteSettings",
  _type: "siteSettings",
  bandName: band.name,
  fullName: band.fullName,
  tagline: band.tagline,
  hometown: band.hometown,
  bookingEmail: contact.booking,
  generalEmail: contact.general,
  instagram: social.instagram,
  facebook: social.facebook,
  youtube: social.youtube,
  newsletterBlurb: contact.newsletterBlurb || undefined,
  merchShopUrl,
});

docs.push({
  _id: "homePage",
  _type: "homePage",
  heroSubtitle: home.heroSubtitle,
  heroBanner: home.heroBanner,
  heroBannerHref: home.heroBannerHref,
  heroImage: await image(home.heroImage),
  intro: home.intro,
  introImage: await image(home.galleryImages[1]),
  body: home.body,
});

docs.push({
  _id: "aboutPage",
  _type: "aboutPage",
  heading: bio.heading,
  lead: bio.lead,
  accolades: bio.accolades,
  image: await image(bio.image),
});

docs.push({
  _id: "suitPage",
  _type: "suitPage",
  heading: suit.heading,
  images: keyed(await sequential(suit.images, image)),
  sections: keyed(
    suit.sections.map((s) => ({
      _type: "suitSection",
      title: s.title,
      paragraphs: s.paragraphs,
      roles: s.roles && keyed(s.roles.map((r) => ({ _type: "role", ...r }))),
      outro: s.outro,
    }))
  ),
  donate: {
    title: suit.donate.title,
    blurb: suit.donate.blurb,
    statsIntro: suit.donate.statsIntro,
    stats: keyed(suit.donate.stats.map((st) => ({ _type: "stat", ...st }))),
    cta: suit.donate.cta,
  },
});

docs.push({
  _id: `album-${slug(featuredAlbum.title)}`,
  _type: "album",
  title: featuredAlbum.title,
  cover: await image(featuredAlbum.cover),
  coverAlt: featuredAlbum.coverAlt,
  featured: true,
  listenUrl: featuredAlbum.primaryCta.href,
  listenLabel: featuredAlbum.primaryCta.label,
  blurb: featuredAlbum.note,
});

for (const [i, r] of releases.entries()) {
  docs.push({
    _id: `release-${slug(r.title)}`,
    _type: "release",
    title: r.title,
    year: r.year,
    note: r.note,
    tag: r.tag,
    listenUrl: r.listenUrl,
    cover: await image(r.cover),
    featured: Boolean(r.featured),
    order: i,
  });
}

for (const [i, v] of videos.entries()) {
  docs.push({
    _id: `video-${v.id.replace(/[^A-Za-z0-9-]/g, "-")}`,
    _type: "video",
    title: v.title,
    youtubeId: v.id,
    context: v.context,
    category: v.category,
    order: i,
  });
}

for (const [i, m] of bio.members.entries()) {
  docs.push({
    _id: `member-${slug(m.name)}`,
    _type: "member",
    name: m.name,
    role: m.role,
    order: i,
  });
}

for (const [i, p] of merch.entries()) {
  docs.push({
    _id: `merch-${slug(p.name)}`,
    _type: "merchItem",
    name: p.name,
    price: p.price,
    image: await image(p.image),
    shopUrl: p.shopUrl,
    note: p.note,
    soldOut: Boolean(p.soldOut),
    order: i,
  });
}

// Drop undefined fields so Sanity doesn't store explicit nulls.
const clean = (d) => JSON.parse(JSON.stringify(d));

const tx = client.transaction();
for (const d of docs) tx.createOrReplace(clean(d));
await tx.commit();

const counts = docs.reduce((a, d) => ((a[d._type] = (a[d._type] || 0) + 1), a), {});
console.log(`Seeded ${docs.length} documents (${uploaded.size} images):`, counts);
