# Shoreline Pro Services

This repository contains **two independent, unrelated projects**. Mixing them up in the past caused real incidents (an unfinished CRM template went live on the production domain via Railway; a Vercel deploy tried to build the CRM instead of the website). Read this before deploying anything from this repo.

| | Marketing website | Internal CRM |
|---|---|---|
| Where | `public/` | `app/`, `prisma/`, `lib/`, `components/` |
| Status | **Live** at [shorelineproservices.com](https://shorelineproservices.com) | Not deployed, in-progress |
| Stack | Plain static HTML/CSS/JS, no build step | Next.js + Prisma/SQLite |
| Hosted on | Cloudflare Pages (`shorelinepro-website` project) | Nowhere — do not deploy without adding auth first |

---

## Marketing website (`public/`)

The actual customer-facing site. No framework, no build step — just static files deployed as-is.

**Live sites:**
- Main site: https://shorelineproservices.com
- Dedicated PPC landing page: https://get-estimate.shorelineproservices.com (separate repo: [`shoreline-landing-pages`](https://github.com/shorelineproservices/shoreline-landing-pages))

**Pages:** `index.html` (home), `services.html`, `portfolio.html`, `process.html`, `about.html`, `mission.html`, `thank-you.html` (form success), `privacy-policy.html`, `404.html`.

**Form backend:** Netlify Forms — a holdover from when the site was hosted on Netlify. This still works fine standalone (Netlify Forms doesn't require the site to be hosted there, just a hidden `data-netlify` form tag and a POST to a Netlify endpoint), but if it ever becomes a problem, it's the one piece of the site still coupled to Netlify. Submissions include optional photo/video uploads, go through a honeypot spam field, and email-notify `shorelineproservices@gmail.com`. Redirects to `/thank-you.html` on success.

**To update the live site:**
```bash
# 1. Edit files under public/
# 2. Commit and push (source of truth / history)
git add public/ && git commit -m "..." && git push

# 3. Deploy — auto or manual depending on setup (see below)
npx wrangler pages deploy public --project-name=shorelinepro-website --branch=main
```

**Hosting: Cloudflare Pages** (migrated from Netlify 2026-08-29 — Netlify's Aug 19 2026 policy change added a forced "Powered by Netlify" badge on free-tier sites and a credit-metered production-deploy cap that blocked deploys mid-project). Deployed via `wrangler pages deploy`. If Git-connected continuous deployment was set up (Workers & Pages → project → Settings → Build & deployments → Connect to Git), a plain `git push` auto-deploys; otherwise the `wrangler pages deploy` command above needs to be run manually after each push — check the project's dashboard to see which is active.

**DNS / domain:** `shorelineproservices.com` is on Cloudflare DNS, **proxied** (orange cloud) — Cloudflare issues and serves the cert directly since Pages is a native Cloudflare product (no DNS-only workaround needed, unlike the old Netlify setup). Root record is a CNAME to `shorelinepro-website.pages.dev`.

**Old Netlify sites:** left dormant (not deleted) as a fallback — `shorelinepro-website` and `shorelinepro-landing` Netlify projects still exist but are no longer the DNS target.

**`netlify.toml` note (legacy):** Still present but no longer used for deploys. Historically needed `NETLIFY_NEXT_PLUGIN_SKIP=true` because Netlify's build system auto-detected `next` in `package.json` (from the CRM app below) and tried to build that instead of serving `public/`. Cloudflare Pages doesn't have this problem — `wrangler pages deploy public` only ever touches the `public/` directory.

---

## Internal CRM (`app/`, `prisma/`)

A separate, unfinished Next.js + Prisma tool for customer/job/invoice management — unrelated to the marketing site above. See inline code comments for what exists. Key facts:

- **Not deployed anywhere**, and shouldn't be until it has authentication — `/api/customers` and `/api/jobs` currently have none, and would expose real customer data to the internet unauthenticated the moment it's put online with real records in it.
- The local dev database (`prisma/prisma/data.db`) is gitignored — it was accidentally committed once before being caught; don't remove it from `.gitignore`.
- If you want to actually deploy this in the future: add auth to the API routes first, then deploy it as **its own site** (its own Netlify/Vercel/Railway project, not bolted onto the marketing site's deploy) so the two never collide again the way they did before.

### Local development
```bash
npm install
npx prisma db push
npm run dev   # http://localhost:3000
```

### Database models
`Customer`, `Job`, `Invoice`, `Schedule`, `TeamMember`, `Photo`, `Expense`. Job status flow: `QUOTE` → `QUOTED` → `ACCEPTED` → `IN_PROGRESS` → `COMPLETED` → `INVOICED` → `PAID`.

### API routes
- `GET/POST /api/customers`, `GET/PATCH/DELETE /api/customers/[id]`
- `GET/POST /api/jobs`, `GET/PATCH/DELETE /api/jobs/[id]`

---

## License

Commercial — Shoreline Pro Services LLC internal use.
