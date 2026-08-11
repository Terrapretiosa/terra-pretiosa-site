# Project Handover — Terra Pretiosa Website

**Project:** Terra Pretiosa corporate website (bilingual FR/EN)
**Repository:** `terra-pretiosa-site`
**Development period:** 24 February 2026 → 20 March 2026
**Handover date:** 10 August 2026
**Status:** Delivered. Builds and runs without errors.

This document records what was delivered, what was deliberately left for a later phase, and
the steps required to transfer full ownership.

For day-to-day development and content editing instructions, see [`README.md`](README.md).

---

## 1. Ownership transfer checklist

Work through these in order. Items 1–3 are required for you to be fully independent.

### 1.1 Source code — GitHub

The code currently lives in a repository owned by the developer's personal GitHub account.

- [ ] Create a GitHub account (or organisation) for Terra Pretiosa at <https://github.com>
- [ ] The developer transfers the repository:
      **Repository → Settings → General → Danger Zone → Transfer ownership**
- [ ] Confirm the transfer from the receiving account (GitHub sends an email)
- [ ] Verify the full commit history (42 commits) is present after transfer
- [ ] Remove the developer's collaborator access once you are satisfied

> A transfer preserves the entire history. Alternatively the repository can be cloned and
> re-uploaded to a new account, but the commit history and its record of the work is more
> useful kept intact.

### 1.2 Hosting — Vercel

- [ ] Create an account at <https://vercel.com>, signing in with the GitHub account above
- [ ] **Add New → Project → Import** `terra-pretiosa-site`
- [ ] Accept all default settings (Vercel detects Next.js automatically) and deploy
- [ ] Confirm the site loads at the `.vercel.app` URL Vercel provides
- [ ] The developer then deletes the old Vercel project so there are no duplicate live copies

There is **nothing to copy across** — no environment variables, no secrets, no configuration.
A fresh import produces an identical site.

The free Hobby plan is sufficient for a marketing site. A commercial site technically falls
under Vercel's Pro plan terms; review <https://vercel.com/pricing> and choose accordingly.

### 1.3 Domain name

- [ ] Register `terra-pretiosa.com` **in Terra Pretiosa's own name** at a registrar
      (Namecheap, OVH, Gandi, Cloudflare, …)
- [ ] Add the domain in Vercel: **Project → Settings → Domains**
- [ ] Apply the DNS records Vercel displays at your registrar
- [ ] Wait for propagation (usually under an hour), then confirm HTTPS works — Vercel issues
      the SSL certificate automatically and free of charge

> **Important:** register the domain under a company account and company email, not a
> personal one. Renew it annually — an expired domain takes the website offline.

### 1.4 Assets already included in the repository

No separate delivery is needed — these are committed to the repository and transfer with it:

| Asset | Location |
| --- | --- |
| Vector logo original (`.ai`) | `Logo/logo TP TEXTE (1).ai` |
| Logo files used by the site | `public/brand/` |
| Client-supplied photography (raw) | `IMages-websites-final/` |
| High-resolution source images | `public/placeholders/` |
| Optimised web images | `public/site-images/` |
| Original written brief | `Instructions from victor/grands point pour le site WEB.docx` |
| Original FAQ source material | `FAQ.txt` |

### 1.5 Credentials

**None to transfer.** The project uses no third-party services, no API keys, no database, and
no `.env` file. The only accounts involved are GitHub, Vercel, and the domain registrar —
all created and owned by you.

---

## 2. What was delivered

### Technical foundation

| Item | Detail |
| --- | --- |
| Framework | Next.js 16.1.6 (App Router) |
| UI library | React 19.2.3 |
| Language | TypeScript (fully typed content model) |
| Styling | Tailwind CSS v4 |
| Source code | ~7,800 lines across 47 files |
| Build status | ✅ Passes with no errors or warnings |
| Rendering | Static pre-rendering for fixed pages, on-demand rendering for services and articles |

### Pages and content

- **Bilingual French / English** across the entire site — every page exists in both languages
- **Home page** — hero carousel, statistics band, service category cards, feature sections,
  news highlights
- **Company page** — with anchored sections (about, megatrends, sustainability, ambitions)
- **Services** — landing page, 5 categories, 20 individual service pages
- **News** — index page and 4 full articles
- **Team page** — structure complete, awaiting final photos and CVs (see §3.3)
- **Contact page** — detailed two-column enquiry form
- **Mission page** — dedicated "start a mission" enquiry route

### Interface work

Custom-built components, all responsive and mobile-optimised:

- Mega menu with category rail and circular tile gallery
- Mobile navigation drawer with nested service submenus
- Home page hero carousel
- Scroll-driven spotlight hero on services pages
- Site-wide search overlay
- Scroll-reveal animation system
- Multi-section footer
- Per-service FAQ accordions in both languages

### Search engine optimisation

- Site-wide metadata, OpenGraph, and Twitter card tags
- Per-article metadata on news pages
- `sitemap.xml` generated automatically from the content — all languages, categories,
  services, and articles included
- `robots.txt` configured to allow indexing
- Correct `lang` attribute per language, image optimisation, responsive layouts

### Content architecture

All text lives in typed TypeScript files under `src/content/`. French is the master source;
English derives its service structure from it through translation lookup tables. This means
a new service is defined once and appears in both languages — a deliberate choice to keep the
two versions from drifting apart over time.

---

## 3. Open items — not included in the delivered scope

These three items were outside the agreed build. Each is documented with what is needed to
complete it, so any developer can pick them up.

### 3.1 🔴 The contact and mission forms do not send email

**Current behaviour:** Both forms validate the visitor's input correctly and display a
success message, but the submitted data is **not sent anywhere** — it is written to the
browser console only.

**Affected files:**
- `src/components/forms/ContactForm.tsx` (line 85)
- `src/components/forms/MissionForm.tsx` (line 75)

**Impact:** Enquiries submitted through the website will not reach anyone. Until this is
completed, make sure the phone number and email address shown on the contact page are
correct and monitored, since those are the only working channels.

**How to complete it** — roughly one to two hours for a developer:

1. Create an account with an email delivery service (<https://resend.com> has a free tier;
   Formspree, SendGrid, or EmailJS are alternatives).
2. Add a route handler at `src/app/api/contact/route.ts` that receives the form data and
   sends it to the Terra Pretiosa inbox.
3. Store the service's API key as an environment variable in the Vercel dashboard
   (**Settings → Environment Variables**) — never commit it to the repository.
4. In both form components, replace the `console.log(...)` line with a `fetch()` call to that
   route, and handle the success and failure states in the interface.
5. Add spam protection (a honeypot field or hCaptcha) before publicising the site widely.

### 3.2 🔴 The production domain is not yet live

`terra-pretiosa.com` does not currently resolve — it has not been registered, or has not been
pointed at the hosting. Until then the site is reachable only at its `.vercel.app` address.

The domain is **hardcoded in three files** and must be updated together if the final domain
differs:

| File | What it affects |
| --- | --- |
| `src/app/layout.tsx` | `metadataBase` — social sharing previews |
| `src/app/sitemap.ts` | `BASE_URL` — every URL in the sitemap |
| `src/app/robots.ts` | Sitemap location advertised to search engines |

If these are left pointing at a domain you do not own, search engines and social previews
will reference the wrong address. See §1.3 for registration steps.

### 3.3 🟡 The team page is intentionally a placeholder

As agreed during the project, the team page ships with its layout and structure complete but
without final content. The page states that photographs and mini-CVs will be added once
profiles are validated.

**To complete it:** supply the photographs and biographies, then edit the `team` section in
`src/content/fr.ts` and `src/content/en.ts`. Create a `public/site-images/team/` folder for
the photos and register them in `src/content/media.ts`, following the same pattern used for
service images (see the README).

---

## 4. Maintenance notes

**Dependency updates.** The project was built in early 2026 against Next.js 16.1.6. Framework
and security updates are released regularly. Once or twice a year, run:

```bash
npm outdated          # see what has newer versions
npm update            # apply minor and patch updates
npm run build         # confirm nothing broke
```

Major version upgrades (for example Next.js 16 → 17) should be done by a developer, following
the official upgrade guide, and tested before pushing.

**Before pushing any change,** run `npm run build` locally. A build failure on Vercel means
the site does not update — the previous version stays live, so there is no outage, but the
change will not appear until the error is fixed.

**Repository size.** The repository is around 108 MB because the original high-resolution
photography and a 52 MB source archive (`IMages-websites-final.zip`) are committed. This is
intentional — it guarantees you keep the source assets — but makes the first `git clone`
slow. Once the assets are backed up elsewhere, the archive can safely be removed from the
repository to make it lighter.

**Backups.** GitHub holds the code and its full history. Keep the domain registrar and Vercel
accounts under company email addresses, with access recorded somewhere more than one person
can reach.

**Minor known detail.** Category-level FAQ text on English service-category pages falls back
to the French entries where no English translation was supplied (`src/content/en.ts`, in the
`categories` mapping). Per-service FAQs are fully translated in both languages. To complete
the category-level ones, add English `faq` arrays to the category mapping in `en.ts`.

---

## 5. Support scope

Development work under this engagement is complete and has been paid in full. The deliverable
is the source code, its full commit history, the accompanying assets, and this documentation.

The three open items in §3 were outside the agreed scope. They are documented above in enough
detail for any competent Next.js developer to complete, and the original developer can be
engaged separately for them if preferred.

---

## 6. Quick reference

| I want to… | Do this |
| --- | --- |
| Change wording on a page | Edit `src/content/fr.ts` or `src/content/en.ts` |
| Publish a news article | Add an entry to `news.articles` in both language files |
| Add a service | Follow "Adding a service" in the README |
| Replace a photo | Overwrite the `.webp` file in `public/site-images/`, same filename |
| Change brand colours | Edit the variables at the top of `src/app/globals.css` |
| Publish changes | `git add . && git commit -m "message" && git push` |
| Undo a bad deployment | Vercel → Deployments → previous build → Promote to Production |
| Run the site locally | `npm install` then `npm run dev`, open <http://localhost:3000> |
