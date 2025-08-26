# portfolio-v2

A clean, modern personal portfolio built with **Next.js + TypeScript + SupaBase** and styled with **SCSS**. This repo is fullstack-ready — lightweight and easy. The focus below is on how to use and evolve this project into a fullstack app.

---

## Live demo

Deployed on Vercel (update the URL if you deploy elsewhere):

`https://portfolio-v2-topaz-two.vercel.app`

---

## TL;DR

* **Tech:** Next.js (App Router), TypeScript, SCSS
* **Run locally:** `npm install && npm run dev`
* **Fullstack-ready:** a DB (SupaBase), filtering projects, contact messages.

---

## structure

A typical project layout you can expect (adjust if your repo differs):

```
.
├─ public/                # static assets: images, icons, SVGs
├─ src/
│  ├─ app/                # Next.js app router pages and layout
│  ├─ components/         # reusable UI components
│  └─ styles/             # SCSS modules / global styles
│  └─ json/             # local data skills.json, me.json
│  └─ utis/             # supabase connection
├─ package.json
├─ tsconfig.json
├─ next.config.js
└─ README.md
```
