# The Rumble — Website

Rebuild of **therumbleband.com** for **The Rumble Ft. Big Chief Joseph Boudreaux Jr.**,
the Grammy-nominated New Orleans Mardi Gras Indian funk band.
Live preview: **the-rumble.vercel.app**.

Stack: **Next.js 15 (App Router) + React 19**, plain-CSS design system, `next/font`.
`content/site.js` is the single source of truth for all copy/data (until the CMS migration).

## Creative direction

- **Feature the new album heavily.** Cover art reads **"Ain't No Dying"**; a press listing
  shows **"Ain't No Dyin'"** with a single **"Burn It Down"** — **spelling still to be
  confirmed with the band.** The album cover (dark cemetery scene, blood-red Blackletter
  title) is the aesthetic anchor.
- **Aesthetic:** dark + blood red, cinematic, Blackletter display type.
- **Typography (decided):**
  - `Grenze Gotisch` → all display headings sitewide. Replaced `UnifrakturMaguntia`
    (Sept 2026) — same gothic flavour, far more legible.
  - `UnifrakturMaguntia` → kept for the two lockup-like spots only: the navbar
    wordmark (`.brand`) and the homepage hero title (`.hero h1.display`).
  - `Anton` → still the `--font-display` fallback; used by the mobile menu links
  - `Inter` → body and most of the site (stays sans-serif)

## Where things live

- **Typography:** `app/layout.js` (next/font imports) + display-type block at the bottom of
  `app/globals.css`. CSS vars `--font-gothic`, `--font-blackletter`.
- **Audio player:** `app/_components/AudioPlayer.js` — exports `AudioProvider`, `useAudio()`,
  `HeaderPlayer`, `ListenButton`. Single `<audio>` instance in the root layout (persists
  across routes), no autoplay. Track list is `tracks` + `featuredTrackId` in
  `content/site.js`. **`src` fields are empty — needs real hosted audio.** Any element can
  start playback via `useAudio().play(track)`.
- **Video page:** `app/media/page.js` renders `videos` from `content/site.js` (fields: `id`,
  `title`, `context`, `category` = `performance` | `feature`). `VideoCard` is click-to-play
  YouTube embed.
- **Newsletter (Buttondown):** `app/api/subscribe/route.js` (server-side; reads
  `BUTTONDOWN_API_KEY`) + `app/_components/NewsletterForm.js` posts to it. Used on `/contact`.
- **CMS (Sanity):** embedded Studio at `/studio` (`app/studio/[[...tool]]/page.jsx`),
  `sanity.config.js`, and `sanity/` (`env.js`, `lib/client.js`, `lib/image.js`,
  `schemaTypes/*`). Schemas: siteSettings, album, release, video, member, merchItem.
  **Pages do NOT read from Sanity yet** — that migration is pending.

## Setup required to run everything

```bash
# Sanity/Studio won't build until these are installed (commit package.json after):
npm install sanity next-sanity @sanity/vision @sanity/image-url @portabletext/react styled-components
```

`.env.local` (copy from `.env.local.example`):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=...      # create a free project at sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
BUTTONDOWN_API_KEY=...                  # buttondown.email/settings/api  (server-only)
```

Also add `localhost:3000` + the production domain to Sanity project **CORS origins**.
Full notes in `SANITY_SETUP.md`.

## Pending work (roughly prioritized)

1. **Images** — pull from the shared Google Drive "Photos" folder once available;
   resize/optimize into `public/images/`; wire the album cover as hero + refresh the
   gallery. Grab the hi-res "Ain't No Dying" cover.
2. **Sanity content migration** — after the project exists: fetch in pages via
   `sanity/lib/client.js`, then retire the static data in `content/site.js`.
3. **Shopify store** — need the store domain + a **Storefront API token**; build the
   storefront + product components into the site.
4. **Audio** — get hosted MP3s (previews or full tracks) from the band; fill
   `tracks[].src`; add play triggers on the Music page.
5. **Merch prices** — confirmed: `$35` tanks, `$9` sticker set. Tee prices unknown
   ("View in shop" placeholders). Repoint merch links when the store moves off the
   GoDaddy shop.
6. **Confirm album title spelling.**

## Notes

- `next/font` downloads fonts at build time → the build needs network access.

## Key references

- Deploy: the-rumble.vercel.app · Old site: therumbleband.com
- YouTube channel: `UCusEt8ovDC2KdHb1Hp7qC3g` · Bandsintown artist id: `id_15516447`
