# CMS + Newsletter setup

## 1. Install the new dependencies (required before `npm run build`)
```bash
npm install sanity next-sanity @sanity/vision @sanity/image-url @portabletext/react styled-components
```

## 2. Sanity project
1. Create a free project at https://www.sanity.io/manage (note the **Project ID**).
2. Copy `.env.local.example` to `.env.local` and fill in `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. In the Sanity project's **API > CORS origins**, add `http://localhost:3000` and your production domain.
4. Run `npm run dev` and open **http://localhost:3000/studio** to log in and start entering content.

Schemas included: Site Settings, Album/Release Feature, Release (discography), Video, Band Member, Merch Item.
Next step (later): wire the site pages to read from Sanity via `sanity/lib/client.js`, then retire the static data in `content/site.js`.

## 3. Buttondown newsletter
1. Grab your API key at https://buttondown.email/settings/api.
2. Add `BUTTONDOWN_API_KEY` to `.env.local` (and to your Vercel project's env vars).
3. The contact-page form already posts to `/api/subscribe`, which subscribes the address to Buttondown.

> Note: the `/studio` route and the site won't build until the packages in step 1 are installed and committed (so Vercel installs them too).
