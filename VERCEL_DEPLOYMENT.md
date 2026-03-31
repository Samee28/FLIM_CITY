# Vercel Deployment Setup Guide

## Prerequisites
- A Vercel account (sign up at https://vercel.com if you don't have one)
- Git installed on your machine
- GitHub, GitLab, or Bitbucket account (for connecting your repository)

---

## Step 1: Initialize Git Repository (if not already done)

```bash
cd /Users/sameerai/FLIM_CITY
git init
git add .
git commit -m "Initial commit: Gulab Singh FLIM City website"
```

---

## Step 2: Push Code to GitHub

### Option A: If the repository doesn't exist on GitHub yet

1. Go to https://github.com/new
2. Create a new repository named `gulab-singh-flim-city`
3. Choose **Private** or **Public** (your preference)
4. **Do NOT** initialize with README, .gitignore, or license

### Run these commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/gulab-singh-flim-city.git
git branch -M main
git push -u origin main
```

---

## Step 3: Connect to Vercel

### Option A: Using Vercel Web Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **Project**
3. Click **"Import Git Repository"**
4. Paste your GitHub repo URL: `https://github.com/YOUR_USERNAME/gulab-singh-flim-city.git`
5. Vercel will auto-detect Next.js configuration
6. Click **"Deploy"**

### Option B: Using Vercel CLI (Command Line)

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
cd /Users/sameerai/FLIM_CITY
vercel

# For production deployment
vercel --prod
```

---

## Step 4: Environment Variables (if needed)

If you plan to add backend functionality in the future:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add any required variables (e.g., API keys, database URLs)
4. Redeploy after adding variables

---

## Step 5: Verify Deployment

1. After deployment completes, you'll get a live URL like: `https://gulab-singh-flim-city.vercel.app`
2. Visit the URL to verify everything is working
3. Check browser console for any errors

---

## Automatic Deployments

Once connected to GitHub/GitLab/Bitbucket:
- **Every push to `main` branch** → Automatically deploys to production
- **Every pull request** → Creates a preview deployment
- **Other branches** → Creates preview deployments as needed

---

## Custom Domain Setup

If you want to use a custom domain (e.g., `www.gulabsinghflimcity.com`):

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Click **"Add Domain"**
   - Enter your domain name
   - Choose between Vercel nameservers or CNAME record

2. **Point your domain registrar:**
   - If using Vercel nameservers: Update nameservers at your domain registrar
   - If using CNAME: Add CNAME record pointing to your Vercel deployment

---

## Monitoring & Analytics

In Vercel Dashboard you can:
- **View Analytics** → See traffic, performance metrics
- **View Logs** → Check deployment errors, build logs
- **Check Deployments** → See history of all deployments
- **Manage Integrations** → Connect third-party services

---

## Troubleshooting

### Build Fails on Vercel
- Check the **Build Logs** in the Vercel dashboard
- Ensure `.next/` folder is in `.gitignore` ✓ (already configured)
- Clear Vercel cache: **Settings** → **Advanced** → **Clear Cache** → **Rebuild**

### Images Not Loading
- All images in `/public/images` are already configured
- Already using Next.js Image optimization
- images.unoptimized flag is set in next.config.mjs ✓

### Performance Issues
- Check **Analytics** tab in Vercel dashboard
- Use **Lighthouse CI** integration for performance monitoring
- Consider enabling **Image Optimization** in Vercel settings

---

## File Structure for Vercel (Already Optimal ✓)

```
FLIM_CITY/
├── app/               # Next.js app directory ✓
├── components/        # React components ✓
├── public/           # Static assets & images ✓
├── package.json      # Dependencies ✓
├── next.config.mjs   # Next.js config ✓
├── tsconfig.json     # TypeScript config ✓
├── tailwind.config.ts # Tailwind CSS ✓
├── .gitignore        # Git ignore rules ✓
└── .vercelignore     # Optional: Vercel ignore rules
```

---

## Next Steps After Deployment

1. **Monitor performance** using Vercel Analytics
2. **Enable automatic backups** in Vercel settings
3. **Set up email notifications** for deployment failures
4. **Add team collaborators** if needed (Settings → Team)
5. **Connect analytics tools** like Google Analytics for advanced tracking

---

## Support

- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Vercel Community:** https://github.com/vercel/vercel/discussions

---

**Your project is production-ready and can be deployed immediately!** 🚀
