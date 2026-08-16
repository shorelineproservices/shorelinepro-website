# Shoreline Pro Services — Website Deployment Checklist

**Status:** READY TO DEPLOY  
**Date:** Aug 16, 2026  
**Timeline:** Deploy today (15 minutes setup)

---

## What's Ready

✅ Static HTML website built with real testimonials:
- Bruce B. (Yelp) — Quality & professionalism
- Kyle Oman (Facebook) — Integrity & talent
- Kelly Sams (Facebook) — Full-service, reasonable quote
- Alexis Miller (Facebook) — Professionalism, detail work, 2500 sq ft project

✅ Lead capture form (Formspree integration)  
✅ Mobile-responsive design  
✅ Brand colors & typography (navy, amber, cream; Playfair + DM Sans)  
✅ Call-to-action optimized for phone conversion  

---

## Your Action Items (15 minutes)

### 1. Create GitHub Repository (5 min)

Go to [github.com/new](https://github.com/new)

- **Repository name:** `shorelinepro-website`
- **Description:** "Shoreline Pro Services static website"
- **Visibility:** Public
- Click **Create repository**

Then in PowerShell (in your shorelinepro folder):

```powershell
git init
git add .
git commit -m "Initial: Shoreline Pro website"
git remote add origin https://github.com/YOUR-USERNAME/shorelinepro-website.git
git branch -M main
git push -u origin main
```

(Replace `YOUR-USERNAME` with your actual GitHub username)

### 2. Connect to Netlify (8 min)

Go to [netlify.com/signup](https://netlify.com/signup)

- Sign up with GitHub
- Click **"Add new site"**
- Select **shorelinepro-website** repo
- **Build directory:** `public`
- Click **Deploy site**
- **Copy the Netlify URL** (e.g., `shorelinepro-website.netlify.app`)

### 3. Update DNS (2 min)

Go to [dash.cloudflare.com](https://dash.cloudflare.com)

- Select `shorelineproservices.com`
- Go to **DNS**
- Find existing A record → Change to **CNAME**
- **Content:** Paste Netlify URL from step 2
- **Save**

Wait 5–10 minutes. Done.

---

## Verification Checklist

After deployment, confirm:

- [ ] Site loads at `shorelineproservices.com`
- [ ] Green HTTPS lock icon visible
- [ ] All 4 testimonials display
- [ ] Phone button clickable
- [ ] Form submits without error
- [ ] Mobile responsive (test on phone)

---

## What Happens After

1. **Form submissions** → Email to `shorelineproservices@gmail.com` (via Formspree)
2. **Auto-deployment** → Any push to GitHub = live update within 1–2 min
3. **Analytics** → Netlify dashboard shows traffic, errors, performance
4. **Zero cost** → Stays free forever at this volume

---

## Timeline: Ad Campaign to Live Website

| Step | Time | Responsible |
|------|------|---|
| Create GitHub repo | 5 min | You |
| Push code to GitHub | 1 min | You |
| Connect Netlify | 8 min | You |
| Update Cloudflare DNS | 2 min | You |
| Wait for DNS propagation | 5–10 min | System |
| Verify site live | 2 min | You |
| **Total** | **~30 min** | |

**Site is LIVE and ready for ads within 30 minutes.**

---

## What's NOT Included (Add Later)

- [ ] Job photos/gallery (can add anytime)
- [ ] More testimonials (can add anytime)
- [ ] Blog/articles (not required for lead gen)
- [ ] Custom backend (not needed yet)

These are nice-to-haves. Lead capture and conversion are what matter now.

---

## Support

**If you get stuck:**

1. Check [netlify.com/docs](https://netlify.com/docs)
2. Check [cloudflare.com/learning](https://www.cloudflare.com/learning/)
3. Formspree troubleshooting: [formspree.io/help](https://formspree.io/help)

---

## Next Phase (After Ads Launch)

- Monitor lead volume by source
- Optimize form copy based on submissions
- Add photos as jobs complete
- Track conversion rate (calls to estimates to booked jobs)
- Scale up ad spend based on ROI

---

**Ready to deploy?**

If yes → Follow the 3 action items above and you're live in 30 minutes.

If no → What questions before we proceed?
