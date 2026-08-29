# Site build-out TODO

Working toward: a complete, self-sufficient (zero paid services) marketing site for Shoreline Pro Services, positioned as top-of-industry for Clark County, WA painting/exterior services.

## In progress / next up

- [x] **Portfolio page SEO pass** — enriched alt text + captions with location/service keywords across all 5 sections, added ImageGallery JSON-LD structured data, verified rendering.
- [x] **Reviewed newest photo batch** (IMG_3996, IMG_4003) — both mid-progress (ladders/tarps/tape), skipped per quality bar.
- [x] **OG/thumbnail image with logo** — built `og-image.jpg` (1200x630, navy background, full logo lockup) and wired into `og:image` on all 6 main pages. Also fixed a stray artifact line baked into the top edge of the original logo file that had been carried into every derived asset (favicon, nav, brandmark) — reprocessed from source with the fix.
- [x] **Services page** (`services.html`) — 9 service cards: exterior/interior repaints, pressure washing, log home restoration, siding repair, deck & fence staining, cabinet refinishing, new construction, commercial. Includes OfferCatalog structured data.
- [x] **Process page** (`process.html`) — 6-step process (call → estimate → schedule → prep → paint/stain → walkthrough). Still needs: real photos per step + SW product specs (see below).
- [x] **About Us page** (`about.html`) — scaffold with real facts (license, location, bonded/insured), clearly marked placeholder note for full content later.
- [x] **Mission & Vision page** (`mission.html`) — draft mission/vision copy, marked as draft for Tristen's review.
- [x] **Nav + footer updates** — services/portfolio/process/about added to nav + footer on index.html and portfolio.html. Deliberately left thank-you.html, 404.html, privacy-policy.html minimal (single-purpose UX, not an oversight).
- [x] **sitemap.xml** — added services, process, about, mission.
- [x] **Process page: Sherwin-Williams product specs** — researched via WebSearch (official SW data sheets): SuperPaint, Duration, Emerald Urethane Trim Enamel, Latitude (ClimateFlex), WoodScapes, SuperDeck. Added as a Materials We Use section.
- [x] **Process page: PCA (Painting Contractors Association) standards** — added the PCA "properly painted surface" quality standard (uniform color/texture/hiding/sheen, no drips/holidays/overspray visible from 39" under normal lighting) to the Final Walkthrough step.
- [x] **Process page: real project photos** — added prep/masking photo (IMG_4194) and paint application photo (IMG_3996) to the Prep and Paint/Stain steps. Only 2 of the requested phases (pressure washing, rotted wood replacement, priming, distinct first/second coat) have matching real photos on file — didn't fabricate captions for phases we don't have shots of.
- [x] **QA pass on new pages** — ran Lighthouse against a local server (Netlify deploy still blocked, see below) for services/process/about/mission. Found and fixed two real bugs: step-photo images were squished (missing `height:auto`), and gray caption/spec text (#888/#777) failed WCAG contrast — darkened to #666. All 4 pages now 100/100/100/100 (performance/accessibility/best-practices/seo).
- [x] **Structured data on remaining pages** — added HowTo schema to process.html (6 steps), AboutPage schema to about.html. Skipped mission.html — no good-fit schema.org type for a values/mission page, forcing one would be worse than none.
- [x] **Homepage services section** — was still showing only 4 old service chips ("Exterior Painting", "Interior Painting", "Cabinet Refinishing", "Deck & Fence Staining"), predating the full 9-service catalog. Expanded to all 9 + added a "See all services →" link to services.html.
- [x] **Landing page repo logo fix** — `shoreline-landing-pages` still referenced the old placeholder logo.svg/favicon.svg (never updated when the real logo was integrated into the main site). Replaced with real logo assets across index.html and thank-you.html, added missing OG tags (had none at all).
- [x] **Mobile nav breakpoint audit** — confirmed the 760px fix renders correctly at both desktop and just-above-breakpoint widths via headless screenshot; no overflow/wrap.
- [x] **Full internal link audit** — checked every href/src across all 9 main-repo pages against a local server; zero broken links.
- [x] **OSINT/security re-check on today's new photos** — confirmed no EXIF/GPS data on any of the 19 new portfolio/process photos (ImageMagick's `-strip` flag has been used consistently). Scanned all recent commits across all 3 repos for accidentally-committed secrets/tokens — clean.
- [x] **PCA research for site inspiration** — reviewed PCA's homepage positioning and homeowner "how to hire a painter" guidance. Confirmed the site already covers what these sources say homeowners should look for: license number, bonded/insured, named real reviews, itemized quotes (process.html step 2), transparent process. **One real gap found: no warranty/guarantee language anywhere on the site** — this is a business term only Tristen can set (what's actually warrantied, for how long), so I didn't fabricate one. Needs his input.
- [ ] **Netlify deploy still blocked** ("Forbidden" on `netlify deploy --prod`) — needs Tristen to check the Deploys tab in the dashboard for an account-level restriction message; all local commits are pushed to GitHub and ready to go once unblocked. **This is the one thing actually blocking on Tristen right now** — everything else this session has been completable independently.
- [ ] **Re-verify performance on live Netlify once deploy unblocks** — local python test server showed index.html performance dropping to 0.74 (LCP 6.2s), but only 287KB of images actually load on that page — almost certainly the single-threaded local test server (no compression/keep-alive), not a real regression. Should re-run Lighthouse against the real live URL once deploys work again to confirm.

## Done

- [x] Real jobsite photos in gallery + portfolio page (log cabin, fence/deck, interior, craftsman exterior, before/after navy repaint)
- [x] Real logo integrated (favicon, nav, brandmarks) replacing placeholder SVGs
- [x] Netlify Forms with photo/video upload on estimate form
- [x] Custom domain + DNS pointed at Netlify (HTTPS cert still pending Netlify-side)
- [x] robots.txt, sitemap.xml, 404 page, privacy policy
- [x] Facebook auto-posting repo (shorelinepro-social) — needs Tristen's one-time token setup
- [x] Documentation cleanup (README, copilot-instructions) to prevent repo mixups
