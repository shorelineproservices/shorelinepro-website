# Shoreline Pro Services

This repository contains **two independent, unrelated projects**. Mixing them up in the past caused real incidents (an unfinished CRM template went live on the production domain via Railway; a Vercel deploy tried to build the CRM instead of the website). Read this before deploying anything from this repo.

| | Marketing website | Internal CRM |
|---|---|---|
| Where | `public/` | `app/`, `prisma/`, `lib/`, `components/` |
| Status | **Live** at [shorelineproservices.com](https://shorelineproservices.com) | Not deployed, in-progress |
| Stack | Plain static HTML/CSS/JS, no build step | Next.js + Prisma/SQLite |
| Hosted on | Netlify (`shorelinepro-website` site) | Nowhere — do not deploy without adding auth first |

---

## Marketing website (`public/`)

The actual customer-facing site. No framework, no build step — just static files deployed as-is.

**Live sites:**
- Main site: https://shorelineproservices.com
- Dedicated PPC landing page: https://shorelinepro-landing.netlify.app (separate repo: [`shoreline-landing-pages`](https://github.com/shorelineproservices/shoreline-landing-pages))

**Pages:** `index.html` (home), `portfolio.html`, `thank-you.html` (form success), `privacy-policy.html`, `404.html`.

**Form backend:** Netlify Forms (not Formspree — migrated away since Formspree gates file attachments behind a paid plan). Submissions include optional photo/video uploads, go through a honeypot spam field, and email-notify `shorelineproservices@gmail.com` via a Netlify outgoing webhook. Redirects to `/thank-you.html` on success.

**To update the live site:**
```bash
# 1. Edit files under public/
# 2. Commit and push (source of truth / history)
git add public/ && git commit -m "..." && git push

# 3. Actually deploy (pushing to GitHub does NOT auto-deploy —
#    there's no CI/CD wired up; see note below)
netlify deploy --prod --dir=public
```

**No CI/CD yet.** A `git push` alone does not update the live site — someone has to run `netlify deploy --prod --dir=public` afterward. Setting up GitHub Actions auto-deploy is possible (a Netlify Personal Access Token as a repo secret) but hasn't been done.

**DNS / domain:** `shorelineproservices.com` is on Cloudflare DNS (not Cloudflare-proxied — DNS-only, so Netlify's Let's Encrypt cert can be issued directly). Root record is a CNAME to `shorelinepro-website.netlify.app`.

**`netlify.toml` note:** `NETLIFY_NEXT_PLUGIN_SKIP=true` is required — because this repo also contains the Next.js CRM app below, Netlify's build system auto-detects `next` in `package.json` and tries to build the CRM instead of serving `public/` as static files unless explicitly told not to.

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
