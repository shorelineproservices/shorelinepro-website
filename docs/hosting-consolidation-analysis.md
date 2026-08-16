# Web Hosting Platform Consolidation Analysis

**Business:** Shoreline Pro Services LLC  
**Current Stack:** Domain on Cloudflare; WordPress.com (possibly orphaned); Railway (possibly orphaned); custom Next.js app  
**Goal:** Single, reliable, low-maintenance platform for static website + lead capture

---

## Platform Comparison Matrix

### NETLIFY
**What it does:** Static site hosting + GitHub integration + built-in CI/CD

**Pricing:**
- Free tier: Unlimited static sites, 100GB bandwidth/month, free HTTPS, custom domain — **covers 100% of needs**
- Pro: $19/mo for advanced features (not needed)
- Enterprise: Custom pricing

**Performance & Reliability:**
- Global CDN with 20+ edge locations
- 99.99% uptime SLA (paid plans)
- Load time: ~200-500ms (excellent for marketing sites)
- Free HTTPS/SSL automatically

**Deployment:**
- Connect GitHub repo → automatic deploys on every push
- Simple, zero DevOps overhead
- Rollback in one click
- Environment variables supported

**Lead Capture:**
- Formspree form integration: ✓ Works perfectly
- Native form handling available but not needed

**Best for Shoreline Pro:**
- ✓ Static HTML site (your current build)
- ✓ Fast, reliable, tested for painting contractor sites
- ✓ Free tier more than sufficient
- ✓ GitHub integration = automatic updates
- ✓ Minimal maintenance

**Drawbacks:**
- No backend/database (not needed)
- Slightly less control over edge behavior vs Cloudflare

---

### CLOUDFLARE PAGES + WORKERS
**What it does:** DNS + CDN + static hosting + serverless compute

**Pricing:**
- Free tier: Pages hosting free, Workers free (10,000 requests/day), DNS free
- Paid: Workers $5/mo + usage, Pages $20/mo for custom builds
- High-volume: Pay-as-you-go, can scale but also scales cost

**Performance & Reliability:**
- Global Anycast network, 200+ data centers worldwide
- Fastest CDN available (competes with Akamai)
- Sub-100ms response times globally
- Slightly more complex configuration

**Deployment:**
- GitHub integration available
- More control over caching behavior
- Workers for custom serverless logic (if ever needed)
- Learning curve steeper than Netlify

**Lead Capture:**
- Formspree still works: ✓
- Could use Cloudflare Workers to handle form submissions directly
- More complex setup, more powerful if scaled

**Best for Shoreline Pro:**
- ✓ Excellent if you need edge-computing features later
- ✓ Better global performance than Netlify
- ⚠️ Overkill for a static marketing site
- ⚠️ More config, more complexity

**Drawbacks:**
- More learning curve
- Over-engineered for current needs
- DNS management still separate mental model from hosting

---

### RAILWAY
**What it does:** Container-based hosting (Docker + Kubernetes abstractions)

**Pricing:**
- Free tier: $5/month credit, minimal runtime
- Paid: Usage-based, ~$0.50/hour for always-on deployment
- **Cost comparison:** Netlify free ~$0 vs Railway ~$15–30/mo for equivalent site

**Performance & Reliability:**
- Good uptime, but less of a guarantee than Netlify/Cloudflare
- Response time: ~500ms–1s (slower than static hosting)
- Persistent disk optional (adds cost)

**Deployment:**
- GitHub integration: ✓ Excellent
- More configuration required
- Overkill for static site (you'd be running a server to serve files)

**Lead Capture:**
- Formspree still works: ✓
- Could run custom Node.js backend (future capability)

**Best for Shoreline Pro:**
- ❌ Too expensive for static site
- ❌ Too much infrastructure overhead
- ✓ Only if you need custom backend/API later

**Drawbacks:**
- 3–5x more expensive than Netlify
- More infrastructure to maintain
- Persistent disk costs add up
- Not designed for static-only sites

---

## DNS Layer (Domain Management)

**Current:** Cloudflare (DNS + proxy)  
**Recommendation:** Keep Cloudflare for DNS only

- Cloudflare DNS free tier: Free, fast, reliable, industry standard
- Point `shorelineproservices.com` A record to Netlify's IP
- Keep Cloudflare as DNS proxy for email and future features
- No cost, no lock-in

---

## Consolidated Recommendation

### **Best Setup: Netlify + Cloudflare DNS**

**Architecture:**
```
shorelineproservices.com
    ↓ (DNS via Cloudflare)
Netlify (static site hosting)
    ↓ (GitHub auto-deploy)
Your GitHub repo
    ↓ (Form submissions)
Formspree (email)
```

**Why this combo:**
- **Netlify** = simplest, fastest, cheapest, perfect for static sites
- **Cloudflare DNS** = reliable, free, keeps email routing separate
- **Result** = No WordPress.com, no Railway overhead, one clean deployment pipeline

**Costs:**
- Netlify: $0 (free tier covers everything)
- Cloudflare DNS: $0 (free tier)
- Formspree: $0 (free tier for basic lead forms)
- **Total: $0/month**

**Timeline to Live:**
- 10 minutes: Connect GitHub repo to Netlify
- 2 minutes: Point Cloudflare DNS to Netlify
- 5 minutes: Test site live
- **Total: 15 minutes**

---

## Alternative Scenario (if future backend needed)

If you ever need a custom Node.js backend (customer portal, admin dashboard, job tracking):
- **Frontend:** Netlify (static HTML/React)
- **Backend:** Railway ($15–30/mo for modest app)
- **Database:** Railway PostgreSQL ($15/mo)
- **Total:** ~$30–50/mo

But for now, this is premature.

---

## What to Shut Down

1. **WordPress.com** — Migrate nothing; delete or pause
2. **Railway (current)** — If you have a server running there, shut it down to save money
3. **Keep:** Cloudflare domain registration + DNS

---

## Decision Matrix

| Factor | Netlify | Cloudflare Pages | Railway |
|--------|---------|-----------------|---------|
| **Static site performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Ease of setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Cost** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **GitHub integration** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Future flexibility** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Maintenance overhead** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## Recommended Sequence

1. **Create GitHub repo** for the static HTML site
2. **Connect Netlify** to the repo (auto-deploy enabled)
3. **Point Cloudflare DNS** to Netlify (A record)
4. **Test** form submission via Formspree
5. **Monitor** performance and lead flow
6. **Scale** or expand only if needed

**Result:** Single source of truth (GitHub repo), automated deployment, zero infrastructure overhead, $0/month.

---

## Risk Assessment

**Netlify risks (very low):**
- Service outage: Rare, but fallback is simple re-host elsewhere
- Lock-in: Low; site is plain HTML, can move anywhere
- Cost creep: Free tier is stable; no surprise charges

**Cloudflare DNS risks (very low):**
- DNS outage: Extremely rare; same tier as Google DNS
- Lock-in: Very low; can move DNS elsewhere in 10 minutes

**Overall:** This is the safest, simplest, cheapest stack for your current needs.

