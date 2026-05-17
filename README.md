# peng-lin.com

Personal website and portfolio. Live at [your-production-url](https://portfolio-kappa-three-17.vercel.app/).

## Stack

- [Next.js 15](https://nextjs.org) — App Router
- TypeScript (strict)
- [Tailwind CSS v3](https://tailwindcss.com)
- [motion](https://motion.dev) — animations
- [Geist](https://vercel.com/font) — typography
- Deployed on [Vercel](https://vercel.com)

## Running locally

```bash
git clone https://github.com/PengLin-Zilv/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/                  routes, layout, metadata, OG image
components/
  ├── layout/         navbar, footer, container
  └── sections/       hero, projects, research, about
lib/                  typed content data and utilities
public/               static assets (resume, fonts)
```

See `AGENTS.md` for project conventions and design decisions.