# AI with Decision Support Systems - Website

Official website for the University of Huddersfield AI with Decision Support Systems hub.

## About

This website showcases domain-focused research and implementation work across artificial intelligence, machine learning, generative AI, analytics, and decision support systems.

## Features

- **Responsive Design**: Built with Next.js and Tailwind CSS for academic/professional aesthetics
- **Static Export**: Deploys as a static site to GitHub Pages with zero runtime overhead
- **Project Showcases**: Link to external demo sites and research outputs
- **Team Directory**: Display team members with roles, bios, and contact information
- **Publications**: Curated list of peer-reviewed research and papers
- **Fast Loading**: Optimized performance with Next.js static generation

## Quick Start

See [SETUP.md](SETUP.md) for detailed setup and deployment instructions.

### Development
```bash
npm install
npm run dev
```

### Build & Deploy
```bash
npm run build
# Deploy to GitHub Pages using GitHub Actions (see SETUP.md)
```

## Customization

All content is data-driven and easy to update:
- **Projects**: Edit `data/projects.js`
- **Team**: Edit `data/team.js`  
- **Publications**: Edit `data/publications.js`
- **Styles**: Customize via `tailwind.config.js`
- **Colors**: Primary: `#1e40af` (blue), Secondary: `#7c3aed` (purple)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Deployment**: GitHub Pages (static export)
- **Language**: TypeScript/JavaScript

## Project Structure

```
├── app/components/          # React page components
├── data/                    # Content (projects, team, publications)
├── public/                  # Static assets (images)
├── SETUP.md                 # Setup & deployment guide
└── tailwind.config.js       # Style configuration
```

## Deployment

This site is deployed to GitHub Pages. Push to `main` branch to trigger automatic deployment.

**Site URL**: https://decision-support-systems.github.io

For GitHub Actions setup, see [SETUP.md](SETUP.md#github-actions-recommended)

## Related Resources

- **Main Repository**: https://github.com/decision-support-systems
- **Setup Guide**: See [SETUP.md](SETUP.md)
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs

Public-facing organisation site showcasing University of Huddersfield projects developed through the AI with Decision Support Systems hub.
