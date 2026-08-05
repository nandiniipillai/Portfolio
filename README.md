# Nandini Pillai — Portfolio

Product & experience designer portfolio, built with Next.js 15 (App Router, JavaScript) and Tailwind CSS.

## Local dev

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
npm run lint
```

## Deploy directly to Vercel (CLI)

One-time setup (interactive, run it in a terminal):

```bash
npx vercel login
```

Then, from the repo root:

```bash
npm run deploy         # production deploy
npm run deploy:preview # preview deploy on a throwaway URL
```

The first `npm run deploy` prompts once to link this folder to a Vercel project (accept the defaults — name = `portfolio` or your choice, framework = Next.js, no env vars). Every subsequent run redeploys with no prompts.
