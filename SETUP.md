# Setup & Deployment Guide

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## Customize Your Site

### Edit Content
- **Projects**: Update `/data/projects.js` - add/remove projects, links, tags
- **Team Members**: Update `/data/team.js` - add/remove team members with roles and emails
- **Publications**: Update `/data/publications.js` - add/remove publications with citations

### Customize Components
- **Header**: `/app/components/Header.tsx` - navigation and branding
- **Hero**: `/app/components/Hero.tsx` - main landing section
- **About**: `/app/components/About.tsx` - mission and focus areas
- **Colors**: `tailwind.config.js` - change primary/secondary colors

## Build for Deployment

### 1. Build Static Files
```bash
npm run build
```

### 2. Deploy to GitHub Pages
The static files will be in the `out/` directory. For automatic deployment:

#### Option A: GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

#### Option B: Manual Deployment
1. Build: `npm run build`
2. Push `out/` folder to `gh-pages` branch:
```bash
git checkout --orphan gh-pages
git add out/
git commit -m "Deploy"
git push origin gh-pages
```

### 3. Configure GitHub Pages
In your GitHub repository:
1. Go to Settings → Pages
2. Select Source: "Deploy from a branch"
3. Select Branch: `gh-pages` / `root`
4. Save

Your site will be available at: `https://decision-support-systems.github.io`

## Project Structure

```
.
├── app/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   ├── Team.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── data/
│   ├── projects.js        # Projects data
│   ├── team.js            # Team members data
│   └── publications.js    # Publications data
├── public/                # Static assets (images, etc.)
├── package.json           # Dependencies
├── next.config.js         # Next.js config
├── tailwind.config.js     # Tailwind CSS config
└── postcss.config.js      # PostCSS config
```

## Adding Images

1. Place images in `/public/projects/` or `/public/` folder
2. Update data files with image paths: `/projects/image.jpg`
3. Reference in components using the image path

## Environment Variables

Create `.env.local` if needed for API keys or external services:
```
NEXT_PUBLIC_GITHUB_REPO=https://github.com/uoh-housing-and-ai
```

## Troubleshooting

**Build fails**: Run `npm install` again, ensure Node.js 16+
**Images not showing**: Check file paths in `data/` files
**Styles not applying**: Clear `.next/` and rebuild: `rm -rf .next && npm run build`
**GitHub Pages not updating**: Clear cache, wait 1-2 minutes, check gh-pages branch

## Resources

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
