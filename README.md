# The Rumble, Official Site

A new Next.js (App Router) site for **The Rumble Ft. Big Chief Joseph Boudreaux Jr.**, the
Grammy-nominated New Orleans Mardi Gras Indian funk band. Dark, cinematic aesthetic with
bold condensed display type (Anton) and a crimson + gold palette.

Rebuild of the original [therumbleband.com](https://therumbleband.com), all copy and
imagery were carried over, plus the live Bandsintown tour widget and YouTube media.

## Stack

- **Next.js 15** (App Router) + **React 19**
- `next/font` (Anton + Inter), `next/image` for optimized local images
- Plain CSS design system in [`app/globals.css`](app/globals.css) (CSS custom properties)
- No external UI deps

## Run it

This project targets a modern Node (built/tested on **Node 24**). With nvm:

```bash
nvm use 24      # or any Node >= 18.18
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
app/
  layout.js            Root layout: fonts, <SiteHeader/>, <SiteFooter/>
  page.js              Home, hero, marquee, intro, gallery, releases, video, CTA
  bio/                 Band story + full roster
  suit/                The Black Masking Indian suit (long-form), stats, donate
  shows/               Live Bandsintown tour widget
  media/               YouTube performance videos (click-to-play)
  music/               Grammy-nominated releases + streaming links
  merch/               Product grid → official shop
  contact/             Mailing list form + booking/contact + socials
  _components/         SiteHeader, SiteFooter, VideoCard, BandsintownWidget,
                       NewsletterForm, Reveal, icons
content/
  site.js              SINGLE SOURCE OF TRUTH, all copy, links, releases,
                       videos, merch, members (scraped verbatim, June 2026)
public/images/
  band/ suit/ merch/   All imagery downloaded from the original site (high-res)
```

## Editing content

Almost everything lives in [`content/site.js`](content/site.js), band copy, nav, social
links, releases, video IDs, merch, member roster, and the Bandsintown artist ID
(`id_15516447`). Edit there; pages read from it.

## Notes / TODO before launch

- **Merch prices**: only `$35` (tanks), `$9` (R sticker set), and the sticker tiers were
  confirmed from the source site. Tee prices are shown as "View in shop" rather than guessed;
  fill in real prices in `content/site.js` when known.
- **Mailing list**: `NewsletterForm` currently captures intent client-side and confirms to
  the visitor. Wire it to a real provider (Mailchimp/Beehiiv/etc.) before launch.
- **Merch links** point to the existing GoDaddy shop; repoint when the store moves.
- Replace social/contact details in `content/site.js` if any change.
```
