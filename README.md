# Terra Pretiosa — Corporate Website

Bilingual (French / English) marketing website for **Terra Pretiosa**, covering mining
services, mineral governance, and raw materials consulting.

Built with Next.js (App Router). All content is stored in typed TypeScript files —
there is no CMS, no database, and no external API to configure.

---

## Table of contents

1. [Requirements](#requirements)
2. [Getting started](#getting-started)
3. [Available scripts](#available-scripts)
4. [Project structure](#project-structure)
5. [How routing and languages work](#how-routing-and-languages-work)
6. [Editing content](#editing-content)
7. [Images](#images)
8. [Branding and theme](#branding-and-theme)
9. [SEO](#seo)
10. [Deployment](#deployment)
11. [Known limitations](#known-limitations)

---

## Requirements

| Tool | Version |
| --- | --- |
| Node.js | **20.9 or newer** (developed on 22.17.1) |
| npm | 10 or newer |
| Git | any recent version |

Download Node.js from <https://nodejs.org>. Everything else installs through npm.

---

## Getting started

```bash
# 1. Clone the repository
git clone https://github.com/<your-account>/terra-pretiosa-site.git
cd terra-pretiosa-site

# 2. Install dependencies (first time only, takes a few minutes)
npm install

# 3. Start the development server
npm run dev
```

Open <http://localhost:3000> in your browser. The site redirects to `/fr` by default.

Any file you save is reflected in the browser immediately — no restart needed.

> **No environment variables are required.** There is no `.env` file, no API key, and no
> secret to configure. If you clone the repository and run `npm install`, it works.

---

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server on port 3000 |
| `npm run build` | Builds the production version — **run this before deploying** to confirm there are no errors |
| `npm run start` | Serves the production build locally (run `npm run build` first) |
| `npm run lint` | Checks the code for style and syntax problems |

If `npm run build` fails, the deployment will fail too. Always build locally before pushing
a large content change.

---

## Project structure

```
terra-pretiosa-site/
├── src/
│   ├── app/                     # Pages and routes (Next.js App Router)
│   │   ├── layout.tsx           # Global HTML shell, fonts, site-wide SEO metadata
│   │   ├── page.tsx             # Root "/" — redirects to "/fr"
│   │   ├── globals.css          # Brand colors, fonts, reusable CSS classes
│   │   ├── robots.ts            # Generates /robots.txt
│   │   ├── sitemap.ts           # Generates /sitemap.xml automatically
│   │   └── [lang]/              # Everything under /fr/... and /en/...
│   │       ├── page.tsx                 # Home page
│   │       ├── company/page.tsx         # Company page
│   │       ├── mission/page.tsx         # Start-a-mission page
│   │       ├── team/page.tsx            # Team page
│   │       ├── contact/page.tsx         # Contact page
│   │       ├── news/page.tsx            # News index
│   │       ├── news/[slug]/page.tsx     # Single article
│   │       └── services/
│   │           ├── page.tsx                       # Services landing
│   │           ├── [category]/page.tsx            # Service category
│   │           └── [category]/[slug]/page.tsx     # Single service
│   │
│   ├── components/              # Reusable interface pieces
│   │   ├── layout/              # Navbar, MegaMenu, Footer, SearchOverlay
│   │   ├── home/                # Home page sections (hero, cards, news, ...)
│   │   ├── services/            # Service page sections (spotlight hero, FAQ, ...)
│   │   ├── forms/               # ContactForm, MissionForm
│   │   └── motion/              # Reveal — scroll animation wrapper
│   │
│   ├── content/                 # ALL WEBSITE TEXT LIVES HERE
│   │   ├── fr.ts                # French content (the master source)
│   │   ├── en.ts                # English content
│   │   ├── serviceFaqs.ts       # Per-service FAQ, French and English
│   │   ├── media.ts             # Central list of every image path
│   │   ├── nav.ts               # Menu ordering
│   │   ├── types.ts             # Content shape definitions (TypeScript)
│   │   └── index.ts             # Helpers to look up a language / category / service
│   │
│   ├── hooks/                   # Small shared React utilities
│   └── lib/                     # Small shared helpers
│
├── public/                      # Files served as-is at the site root
│   ├── site-images/             # Optimised .webp photos used on the site
│   ├── brand/                   # Logo files used by the site
│   └── placeholders/            # Original high-resolution source images
│
├── IMages-websites-final/       # Raw client-supplied photography (archive)
├── Logo/                        # Vector logo original (.ai)
├── Instructions from victor/    # Original client brief (.docx)
├── FAQ.txt                      # Original client FAQ source material
└── ONBOARDING.md                # Access, working process, open items — READ THIS
```

---

## How routing and languages work

The site is bilingual, driven by the first segment of the URL:

| URL | Language |
| --- | --- |
| `/fr`, `/fr/services`, `/fr/contact` … | French |
| `/en`, `/en/services`, `/en/contact` … | English |
| `/` | Redirects to `/fr` |

The folder `src/app/[lang]/` maps to that first segment. `[lang]` is a variable — one set of
page files serves both languages. Each page calls `getDictionary(lang)` to fetch the right
text bundle, so **you never duplicate a page to translate it — you only add text**.

Any language other than `fr` or `en` returns a 404.

### The French / English relationship

`fr.ts` is the **master file**. It defines the site's structure: which categories exist,
which services belong to them, and their slugs.

`en.ts` provides English wording, and for the services section it *derives* its data from
the French structure through two lookup tables:

- `categoryTranslations` — English title and summary for each category slug
- `serviceTranslations` — English title and excerpt for each service slug

This means **the structure is defined once**. If you add a service in `fr.ts`, it also
appears on the English site — but with French wording until you add its entry to
`serviceTranslations` in `en.ts`.

---

## Editing content

> Content files are TypeScript. Keep quotes, commas, and braces intact. After editing, run
> `npm run build` — if you broke the syntax, the build tells you the exact file and line.

### Changing existing text

Open [`src/content/fr.ts`](src/content/fr.ts) for French or
[`src/content/en.ts`](src/content/en.ts) for English, search for the sentence you want to
change, and edit the text between the quotes. That's it.

Apostrophes inside French text must be escaped or written with a typographic apostrophe:
write `l'analyse` as `"l'analyse"` (double quotes) or `'l\'analyse'`. The existing files use
double quotes throughout — follow that.

### Adding a news article

News articles are defined **separately in each language file**, in the `news.articles` array
(near the bottom of `fr.ts` and `en.ts`). Copy an existing entry and edit it:

```ts
{
  slug: "my-new-article",          // URL: /fr/news/my-new-article — lowercase, dashes only
  title: "Article title",
  excerpt: "One or two sentences shown in listings.",
  date: "2026-09-15",              // YYYY-MM-DD
  image: newsMedia.governance,     // or any path from media.ts
  tag: "Gouvernance",              // small label shown on the card
  body: [
    "First paragraph.",
    "Second paragraph.",
    "Third paragraph.",
  ],
}
```

Add it to **both** `fr.ts` and `en.ts` so it exists in both languages. The article page, the
news index, and the home page highlights pick it up automatically.

### Adding a service

Services live inside categories in `fr.ts`, in the `services.categories` array. There are
currently 5 categories and 20 services.

1. **Add the photo** to `public/site-images/services/` as a `.webp` file named after the
   slug, e.g. `public/site-images/services/my-new-service.webp`.

2. **Register the image** in [`src/content/media.ts`](src/content/media.ts), inside
   `serviceMedia`:

   ```ts
   "my-new-service": "/site-images/services/my-new-service.webp",
   ```

3. **Add the service** to the right category in `fr.ts`, inside its `services: [ ... ]` array:

   ```ts
   makeService(
     "my-new-service",                       // slug — must match steps 1 and 2
     "Nom du service",                       // French title
     "Résumé d'une ou deux phrases.",        // French excerpt
     serviceMedia["my-new-service"],
   ),
   ```

   `makeService` automatically generates the detail paragraphs, the capability list, and the
   three highlight blocks. To write that copy yourself instead of using the generated text,
   add an entry for the slug to the `serviceDetails` object at the top of `fr.ts`
   (`paragraphs` and `capabilities`) — `makeService` uses it when present.

4. **Add the English wording** in `en.ts`, to `serviceTranslations`:

   ```ts
   "my-new-service": {
     title: "Service name",
     excerpt: "One or two sentence summary.",
   },
   ```

   Optionally add detailed English copy to the `serviceDetails` object in `en.ts`.

5. **Add FAQ entries** (optional) in
   [`src/content/serviceFaqs.ts`](src/content/serviceFaqs.ts) — there are two maps,
   `serviceFaqsBySlugFr` and `serviceFaqsBySlugEn`. Add the slug to both.

6. **Show it in the mega menu** (optional) by adding the image to the category's array in
   `megaMenuTileMedia`, at the bottom of `media.ts`.

The new service is now live at `/fr/services/<category>/my-new-service` and its English
equivalent, and is added to `sitemap.xml` automatically.

### Adding a service category

Same pattern, one level up: add an object to `services.categories` in `fr.ts` with `slug`,
`title`, `summary`, `icon` (two letters), `image`, `services: []`, and `faq: []`. Then add
the category image to `categoryMedia` in `media.ts`, the English wording to
`categoryTranslations` in `en.ts`, and the slug to `megaMenuCategoryOrder` in
[`src/content/nav.ts`](src/content/nav.ts) to control where it appears in the menu.

### Changing menu or footer links

Navigation labels and footer links are defined in the `nav` and `footer` sections of `fr.ts`
and `en.ts`. Menu **ordering** is controlled by `megaMenuCategoryOrder` in `nav.ts`.

---

## Images

- **Displayed images** live in `public/site-images/`, saved as `.webp` for speed. Every path
  is registered in [`src/content/media.ts`](src/content/media.ts) — always reference images
  through that file rather than typing paths into content.
- **Original high-resolution sources** are kept in `public/placeholders/` and
  `IMages-websites-final/` for future re-editing.
- Next.js resizes and re-encodes images automatically (AVIF/WebP, multiple widths) — this is
  configured in [`next.config.ts`](next.config.ts).

To replace a photo while keeping everything else identical, overwrite the `.webp` file in
`public/site-images/` with a new file of the same name. No code change needed.

---

## Branding and theme

Brand colors are defined once as CSS variables at the top of
[`src/app/globals.css`](src/app/globals.css):

| Variable | Value | Use |
| --- | --- | --- |
| `--tp-blue-900` | `#1a4d5f` | Deep brand blue |
| `--tp-blue-800` | `#1f6675` | Secondary blue |
| `--tp-accent-500` | `#66d5d5` | Turquoise accent (from the logo) |
| `--tp-charcoal-900` | `#171a1f` | Dark backgrounds |

The whole Tailwind `blue-*` scale is overridden in the same file to match the Terra Pretiosa
logo, so changing those values re-themes the entire site at once.

Reusable classes defined there: `.tp-container` (page width), `.tp-heading`,
`.tp-blue-button`, `.tp-outline-button`, `.tp-card-lift`.

**Fonts:** Barlow (body/UI) and Lora (accents), loaded via `next/font` in
[`src/app/layout.tsx`](src/app/layout.tsx).

---

## SEO

Already configured — no plugin needed:

- Site-wide title template, description, OpenGraph, and Twitter card in
  [`src/app/layout.tsx`](src/app/layout.tsx)
- Per-article metadata generated on news pages
- `/sitemap.xml` generated automatically from the content files — every language, category,
  service, and article is included ([`src/app/sitemap.ts`](src/app/sitemap.ts))
- `/robots.txt` generated by [`src/app/robots.ts`](src/app/robots.ts)

> ⚠️ The production domain `https://terrapretiosa.com` is hardcoded in three files:
> `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts`.
> **If the domain ever changes, all three must be updated together.**

---

## Deployment

The site is designed for **Vercel**, which builds Next.js with zero configuration.

**First-time setup:**

1. Create an account at <https://vercel.com> and connect it to your GitHub account.
2. Click **Add New → Project**, then import `terra-pretiosa-site`.
3. Leave every setting at its default (Framework: Next.js) and click **Deploy**.
4. When the domain is registered, add it under **Project → Settings → Domains** and follow
   Vercel's DNS instructions at your domain registrar.

**After that, deployment is automatic:** every push to the `main` branch rebuilds and
publishes the site. Pushing to any other branch produces a private preview URL.

```bash
git add .
git commit -m "Update services copy"
git push
```

Rolling back a bad deploy: Vercel dashboard → **Deployments** → pick the previous good one →
**Promote to Production**.

The site can also be hosted anywhere that runs Node.js (`npm run build` then `npm run start`),
but Vercel is the least maintenance.

---

## Known limitations

Please read [`ONBOARDING.md`](ONBOARDING.md) — it documents the working process for this
repository, what is finished, what was intentionally left for a later phase, and how to
complete each remaining item. The most important one: **the contact and mission forms do not
yet send email.**
