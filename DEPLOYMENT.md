# Vercel Deployment (Dashboard & CLI)

This static project can be deployed to Vercel quickly. Choose one of the two options below.

Option A — Connect GitHub repo (recommended)

1. Push this project to GitHub (your repo URL: `https://github.com/rishiroshan20/June_16.git`).
2. Go to https://vercel.com and sign in with GitHub.
3. Click "New Project" → Import Git Repository → select `rishiroshan20/June_16`.
4. Vercel will detect a static site. If prompted, set the root to `/` and leave the build command empty.
5. Click "Deploy". Future pushes to `main` will auto-deploy.

Option B — Use the Vercel CLI

1. Install Node.js (if not installed) and then the Vercel CLI:

```powershell
npm i -g vercel
```

2. From the project folder run:

```powershell
cd "C:\Users\RISHI\OneDrive\Desktop\files"
vercel login
vercel --prod
```

Notes

- The included `vercel.json` routes all requests to `index.html` so the site behaves as a single-page app.
- If you prefer the dashboard flow, connecting the GitHub repo is the easiest and provides automatic deploy previews.
