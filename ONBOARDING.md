# Developer Onboarding — Terra Pretiosa Website

This document is for a developer joining the Terra Pretiosa website project. It covers the
access you need, how the environments fit together, how we work together on one codebase,
the current state of the project, and what still needs building.

For installation, project structure, and content-editing instructions, read
[`README.md`](README.md) first — this document assumes it.

---

## 1. Access

| What | How you get it | Needed for |
| --- | --- | --- |
| **GitHub repository** | Invitation as a collaborator on `terra-pretiosa-site` | All code work |
| **Vercel** | Optional — see §2 | Build logs, environment variables, domain settings |
| **Domain registrar** | Held by Terra Pretiosa | DNS, once a domain is registered |

**There are no credentials to share.** The project has no `.env` file, no API keys, no
database, and no third-party service accounts. Clone the repository, run `npm install`, and
you have a complete working copy. Anything that later requires a secret (for example the
email service in §5.1) must be stored as an environment variable in Vercel — **never
committed to the repository**.

---

## 2. Environments

| Environment | Trigger | URL |
| --- | --- | --- |
| **Production** | Merge to `main` | The live site |
| **Preview** | Any pull request or non-`main` branch | Vercel posts a unique URL per branch |
| **Local** | `npm run dev` | <http://localhost:3000> |

Deployment is automatic. Pushing to `main` rebuilds and publishes production; pushing to any
other branch produces a private preview build. You do not need Vercel access to deploy — but
you do need it to read build logs, manage environment variables, or configure the domain. Ask
if you need it.

**Rolling back:** Vercel dashboard → **Deployments** → select the last good build →
**Promote to Production**. A failed build does not take the site down; the previous version
stays live until a successful build replaces it.

---

## 3. How we work on this repository

Two developers share this codebase, and `main` deploys straight to production. The process
exists to stop us overwriting each other or shipping a broken build to the client's live site.

**Never commit directly to `main`.** Work on a branch and open a pull request.

```bash
git checkout main
git pull                                  # always start from latest
git checkout -b fix/mobile-menu-overlap   # descriptive branch name

# ... make your changes ...

npm run build                             # MUST pass before you push
git add .
git commit -m "Fix mobile menu overlapping the hero on small screens"
git push -u origin fix/mobile-menu-overlap
```

Then open a pull request on GitHub. Vercel attaches a preview URL to it — **check your change
on that URL before asking for a merge**, especially on a phone, since a large part of this
site's work went into mobile behaviour.

**Ground rules:**

- `npm run build` must pass locally before you push. A build failure blocks deployment.
- Keep pull requests small and focused. One concern per branch.
- Never commit `node_modules/`, `.next/`, `out/`, `.vercel/`, or editor/tool directories —
  `.gitignore` covers these, so do not force-add them.
- Never commit an API key, token, or password. Use Vercel environment variables.
- Content changes and code changes are both PRs — content lives in TypeScript files
  (see the README), so a typo fix can break the build just like code can.
- Pull `main` before starting anything new. Both content files (`fr.ts`, `en.ts`) are large
  and edited often, which makes them the most likely place to hit a merge conflict.

---

## 4. Current state of the project

### Stack

| | |
| --- | --- |
| Framework | Next.js 16.1.6 (App Router) |
| UI library | React 19.2.3 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Size | ~7,800 lines across 47 source files |
| Build | Passes with no errors or warnings |
| Node | 20.9 or newer required |

### What is built

- **Bilingual French / English** across the entire site, driven by the `[lang]` URL segment.
  French is the default; `/` redirects to `/fr`.
- **Pages:** home, company, mission, team, contact, news index, news article, services
  landing, service category, service detail.
- **Content:** 5 service categories, 20 individual services, 4 news articles, per-service
  FAQs in both languages.
- **Custom components:** mega menu with category rail and tile gallery, mobile drawer with
  nested submenus, hero carousel, scroll-driven spotlight hero, search overlay, scroll-reveal
  animation system, multi-section footer, detailed two-column contact form.
- **SEO:** site-wide and per-article metadata, OpenGraph and Twitter tags, automatically
  generated `sitemap.xml` and `robots.txt`.

### The one architectural thing to understand before you edit content

`src/content/fr.ts` is the **master source**. It defines the structure of the services
section — which categories exist, which services belong to them, and their slugs.

`src/content/en.ts` supplies English wording, but for services it *derives* its data from the
French objects through two lookup tables, `categoryTranslations` and `serviceTranslations`.

The practical consequences:

- Add a service in `fr.ts` and it appears on **both** language sites automatically — but with
  French wording until you add its slug to `serviceTranslations` in `en.ts`.
- Slugs are shared across both languages by design. A service URL is
  `/fr/services/<category>/<slug>` and `/en/services/<category>/<slug>` with the same slug.
- Never restructure `en.ts` to be independent without understanding this — it exists to stop
  the two languages drifting apart.

The README has step-by-step instructions for adding a service, a category, or a news article.

---

## 5. Open items — what still needs building

These were outside the original build scope. They are the natural next pieces of work.

### 5.1 🔴 The contact and mission forms do not send anything

**Current behaviour:** both forms validate input correctly and show a success message, but
the data goes nowhere — it is written to the browser console only.

- `src/components/forms/ContactForm.tsx` (line 85)
- `src/components/forms/MissionForm.tsx` (line 75)

**Impact:** enquiries submitted through the website reach nobody. Until this is done, the
phone number and email address on the contact page are the only working channels, so make
sure they are correct and monitored.

**To implement:**

1. Choose an email delivery service (<https://resend.com> has a free tier; Formspree,
   SendGrid, and EmailJS are alternatives).
2. Add a route handler at `src/app/api/contact/route.ts` that receives the submission and
   forwards it to the Terra Pretiosa inbox.
3. Store the API key as an environment variable in Vercel
   (**Settings → Environment Variables**). Do not commit it.
4. In both form components, replace the `console.log(...)` call with a `fetch()` to that
   route, and handle the loading, success, and failure states in the UI.
5. Add spam protection — a honeypot field at minimum, hCaptcha or Turnstile if the form
   attracts bots.

### 5.2 ✅ Production domain — resolved

The site is live at **<https://terrapretiosa.com>**, registered at Namecheap, with DNS served
by Namecheap's nameservers and an apex `A` record pointing at Vercel. Email for the domain
runs on Namecheap Private Email (`mx1/mx2.privateemail.com`), separately from the website.

The site canonical URL is **hardcoded in three files**. If the domain ever changes, all three
must be updated together:

| File | Affects |
| --- | --- |
| `src/app/layout.tsx` | `metadataBase` — social sharing preview URLs |
| `src/app/sitemap.ts` | `BASE_URL` — every URL in the sitemap |
| `src/app/robots.ts` | Sitemap location advertised to search engines |

> These three previously pointed at `terra-pretiosa.com` (hyphenated), which is not a
> registered domain — so the published `robots.txt` and `sitemap.xml` were referring search
> engines to a non-existent host. Corrected to `terrapretiosa.com`. After deploying the fix,
> resubmit the sitemap in Google Search Console.

### 5.3 🟡 The team page is an intentional placeholder

Agreed during the original build: the layout is complete, but final photographs and mini-CVs
were pending client validation. The page says so.

**To complete:** add the content to the `team` section of `fr.ts` and `en.ts`, create a
`public/site-images/team/` folder for the photos, and register them in
`src/content/media.ts` following the pattern used for service images.

### 5.4 🟡 English category-level FAQs fall back to French

In `src/content/en.ts`, the category mapping passes `faq: category.faq` straight through from
the French data, so category-level FAQ text on English service-category pages appears in
French. Per-service FAQs (`src/content/serviceFaqs.ts`) are properly translated in both
languages — only the category-level ones are affected.

**To fix:** supply English `faq` arrays in the category mapping in `en.ts`.

---

## 6. Maintenance notes

**Dependency updates.** Built in early 2026 against Next.js 16.1.6. Once or twice a year:

```bash
npm outdated
npm update
npm run build
```

Major version upgrades (Next.js 16 → 17) should follow the official upgrade guide and be
tested on a preview deployment before merging.

**Images.** Displayed images are `.webp` files in `public/site-images/`, and every path is
registered in `src/content/media.ts` — reference images through that file rather than
hardcoding paths. High-resolution originals are kept in `public/placeholders/` and
`IMages-websites-final/` for re-editing. The photography was supplied by Terra Pretiosa; the
archival PNGs retain the metadata they arrived with, while the optimised `.webp` files served
to visitors carry none, as the conversion strips it.

To swap a photo without touching code, overwrite the `.webp` file in `public/site-images/`
keeping the same filename.

**Repository size.** The repository is around 108 MB because the original photography and a
52 MB source archive (`IMages-websites-final.zip`) are committed. This is deliberate so the
source assets are never lost, but it makes the first clone slow. Once those assets are backed
up elsewhere, the archive can be removed to lighten the repository.

**Brand tokens.** All brand colours are CSS variables at the top of `src/app/globals.css`,
and the Tailwind `blue-*` scale is overridden there to match the logo. Changing those values
re-themes the whole site. Reusable classes: `.tp-container`, `.tp-heading`,
`.tp-blue-button`, `.tp-outline-button`, `.tp-card-lift`.

---

## 7. Project background

The site was designed and built between 24 February and 20 March 2026, from a written brief
and FAQ material supplied by the client (`Instructions from victor/` and `FAQ.txt`, both
committed to the repository for reference). The original developer retains repository access
and is familiar with every part of the codebase — ask rather than reverse-engineer, it will
be faster.

Scope, invoicing, and responsibility for future work are agreed separately between Terra
Pretiosa and each developer, and are not covered by this document.

---

## 8. Quick reference

| I want to… | Do this |
| --- | --- |
| Run the site locally | `npm install`, then `npm run dev` |
| Change wording on a page | Edit `src/content/fr.ts` or `src/content/en.ts` |
| Publish a news article | Add an entry to `news.articles` in both language files |
| Add a service | Follow "Adding a service" in the README |
| Replace a photo | Overwrite the `.webp` in `public/site-images/`, same filename |
| Change brand colours | Edit the variables at the top of `src/app/globals.css` |
| Ship a change | Branch → `npm run build` → push → pull request → check preview → merge |
| Undo a bad deployment | Vercel → Deployments → previous build → Promote to Production |
