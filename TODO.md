# Site build-out TODO

Working toward: a complete, self-sufficient (zero paid services) marketing site for Shoreline Pro Services, positioned as top-of-industry for Clark County, WA painting/exterior services.

## In progress / next up

- [x] **Portfolio page SEO pass** — enriched alt text + captions with location/service keywords across all 5 sections, added ImageGallery JSON-LD structured data, verified rendering.
- [x] **Reviewed newest photo batch** (IMG_3996, IMG_4003) — both mid-progress (ladders/tarps/tape), skipped per quality bar.
- [ ] **OG/thumbnail image with logo** — current `og:image` points to a raw jobsite photo. Build a proper 1200x630 social-share image that includes the logo, use across all pages' `og:image` meta tags.
- [x] **Services page** (`services.html`) — 9 service cards: exterior/interior repaints, pressure washing, log home restoration, siding repair, deck & fence staining, cabinet refinishing, new construction, commercial. Includes OfferCatalog structured data.
- [x] **Process page** (`process.html`) — 6-step process (call → estimate → schedule → prep → paint/stain → walkthrough). Still needs: real photos per step + SW product specs (see below).
- [x] **About Us page** (`about.html`) — scaffold with real facts (license, location, bonded/insured), clearly marked placeholder note for full content later.
- [x] **Mission & Vision page** (`mission.html`) — draft mission/vision copy, marked as draft for Tristen's review.
- [x] **Nav + footer updates** — services/portfolio/process/about added to nav + footer on index.html and portfolio.html. Deliberately left thank-you.html, 404.html, privacy-policy.html minimal (single-purpose UX, not an oversight).
- [x] **sitemap.xml** — added services, process, about, mission.
- [ ] **Process page: real project photos per step** — use the mid-project shots already reviewed (skipped for portfolio, perfect here): pressure washing, prep/masking/scraping, first coat spray & backroll, second coat, rotted wood replacement, priming worn areas. Match photos to the 6 process steps already written.
- [x] **Process page: Sherwin-Williams product specs** — researched via WebSearch (official SW data sheets): SuperPaint, Duration, Emerald Urethane Trim Enamel, Latitude (ClimateFlex), WoodScapes, SuperDeck. Adding materials section + real prep/paint-in-progress photos to process.html now.
- [x] **Process page: PCA (Painting Contractors Association) standards** — added the PCA "properly painted surface" quality standard (uniform color/texture/hiding/sheen, no drips/holidays/overspray visible from 39" under normal lighting) to the Final Walkthrough step.
- [x] **Process page: real project photos** — added prep/masking photo (IMG_4194) and paint application photo (IMG_3996) to the Prep and Paint/Stain steps.
- [ ] **Review 2 newest photos** (IMG_3996, IMG_4003 from latest iCloud batch) — categorize and slot into portfolio if usable.
- [ ] **Netlify deploy still blocked** ("Forbidden" on `netlify deploy --prod`) — needs Tristen to check the Deploys tab in the dashboard for an account-level restriction message; all local commits are pushed to GitHub and ready to go once unblocked.

## Done

- [x] Real jobsite photos in gallery + portfolio page (log cabin, fence/deck, interior, craftsman exterior, before/after navy repaint)
- [x] Real logo integrated (favicon, nav, brandmarks) replacing placeholder SVGs
- [x] Netlify Forms with photo/video upload on estimate form
- [x] Custom domain + DNS pointed at Netlify (HTTPS cert still pending Netlify-side)
- [x] robots.txt, sitemap.xml, 404 page, privacy policy
- [x] Facebook auto-posting repo (shorelinepro-social) — needs Tristen's one-time token setup
- [x] Documentation cleanup (README, copilot-instructions) to prevent repo mixups
