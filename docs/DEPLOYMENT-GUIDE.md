# GitHub + Netlify Deployment Guide

**Status:** Ready to deploy  
**Timeline:** 15 minutes to live  
**Cost:** $0/month

---

## Step-by-Step Deployment

### Phase 1: GitHub Setup (5 min)

#### 1. Create GitHub Repository

Go to [github.com/new](https://github.com/new)

- **Repository name:** `shorelinepro-website`
- **Description:** "Static website for Shoreline Pro Services LLC"
- **Public:** Yes (required for Netlify)
- **Add .gitignore:** Node.js (already have one)
- **License:** None (optional)
- **Create repository**

#### 2. Prepare Local Repo

In PowerShell at `C:\Users\EliteBook\Documents\shorelinepro`:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Shoreline Pro website with static HTML"

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/shorelinepro-website.git

# Push to main
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR-USERNAME` with your actual GitHub username.

---

### Phase 2: Netlify Deployment (8 min)

#### 3. Create Netlify Account

Go to [netlify.com/signup](https://netlify.com/signup)

- Sign up with GitHub account (easiest option)
- Authorize Netlify to access GitHub

#### 4. Connect Repository

In Netlify dashboard:

- Click **"Add new site"** → **"Import an existing project"**
- Choose **GitHub** as the Git provider
- Search for and select **`shorelinepro-website`**
- Click **Next**

#### 5. Build Settings

Leave defaults:

- **Branch to deploy:** `main`
- **Build command:** (leave empty — we're serving static HTML)
- **Publish directory:** `public`
- **Click Deploy site**

Netlify will:
- Clone your repo
- Build and publish to a temporary URL
- Provide you with a live site URL (e.g., `shorelinepro-website.netlify.app`)

**Save this URL** — you'll need it for DNS setup.

---

### Phase 3: DNS Setup (2 min)

#### 6. Update Cloudflare DNS

Go to [dash.cloudflare.com](https://dash.cloudflare.com)

- Select your domain: `shorelineproservices.com`
- Go to **DNS** section
- Find the existing A record pointing to the old host
- **Update A record:**
  - **Name:** `@` (or `shorelineproservices.com`)
  - **Type:** `CNAME` (not A)
  - **Content:** `shorelinepro-website.netlify.app` (from Netlify)
  - **TTL:** Auto
  - **Save**

Wait 5–10 minutes for DNS to propagate.

#### 7. Verify Domain in Netlify

In Netlify:

- Go to your site settings
- **Domain management**
- **Add custom domain**
- Enter: `shorelineproservices.com`
- Click **Verify & add domain**
- Netlify will confirm DNS is set up correctly

Once verified, Netlify automatically provisions HTTPS.

---

### Phase 4: Testing (optional, 5 min)

#### 8. Test Website

Open [shorelineproservices.com](https://shorelineproservices.com) in browser:

- ✓ Hero section loads
- ✓ Testimonials display correctly
- ✓ Form is accessible
- ✓ Mobile responsive (check on phone)
- ✓ Phone number clickable
- ✓ HTTPS badge visible

#### 9. Test Form Submission

- Fill out estimate form
- Submit
- Check email (Formspree sends to `shorelineproservices@gmail.com`)

---

## After Deployment

### Updates to Website

Any time you want to update the site:

1. Edit `public/index.html` (or other files)
2. Commit and push to GitHub:
   ```powershell
   git add .
   git commit -m "Update testimonials" (or description of change)
   git push
   ```
3. Netlify auto-deploys within 1–2 minutes
4. Check live site

### Adding Photos

1. Save photos to `public/photos/` folder
2. Add HTML reference in `public/index.html`
3. Push to GitHub
4. Done

### Monitoring

- **Netlify dashboard:** View deployment history, logs, analytics
- **Google Search Console:** Monitor organic search performance
- **Google Ads:** Track paid campaign performance

---

## Troubleshooting

### Site shows "Not Found" error

- Wait 10 minutes for DNS to propagate
- Clear browser cache (Ctrl+Shift+Del)
- Check Cloudflare DNS is pointing to Netlify

### Form submissions not working

- Confirm Formspree action in `public/index.html`: `https://formspree.io/f/xoeakala`
- Check spam/promotions folder in email

### HTTPS not working

- Wait 5 minutes after domain verification
- Refresh browser with hard refresh (Ctrl+F5)

### Changes not showing live

- Check Netlify deployment log (should show "Deployed successfully")
- Hard refresh browser (Ctrl+F5)
- Wait 2–3 minutes for CDN cache to clear

---

## Success Checklist

- [ ] GitHub repo created and pushed
- [ ] Netlify site created and connected to repo
- [ ] DNS A/CNAME record updated in Cloudflare
- [ ] Domain verified in Netlify
- [ ] HTTPS working (green lock icon)
- [ ] Website loads at `shorelineproservices.com`
- [ ] Testimonials visible
- [ ] Form submission works
- [ ] Mobile responsive

---

## Cost Summary

| Service | Cost |
|---------|------|
| Netlify (static hosting) | $0/mo (free tier) |
| Cloudflare (DNS) | $0/mo (free tier) |
| Formspree (lead forms) | $0/mo (free tier) |
| Domain (already owned) | $0/mo |
| **Total** | **$0/mo** |

---

## Next Steps

1. Follow steps 1–7 above
2. Test site is live
3. Start Google Ads campaign
4. Monitor form submissions
5. Add photos as projects complete

**Questions?** See Netlify docs: [netlify.com/docs](https://netlify.com/docs)

