# Capstone App

A modern, full-stack capstone application built with **Next.js 16**, **Tailwind CSS 4**, and **TypeScript**.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components by default)
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Language:** TypeScript 5
- **Deployment:** Vercel (preview deployments on every push)

## 📁 Routes

| Route | Description |
|---|---|
| `/` | Home / Landing page |
| `/about` | About page |
| `/products` | Products listing |
| `/products/[id]` | Product detail (dynamic) |
| `/pricing` | Pricing tiers |
| `/dashboard` | Dashboard overview |
| `/dashboard/analytics` | Analytics sub-page |
| `/dashboard/settings` | Settings sub-page |
| `/contact` | Contact form |
| `/login` | Login page |
| `/signup` | Sign up page |
| `/profile` | User profile |
| `/health` | Health check (fetches live data) |

## 🏗️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | Database connection string |
| `AUTH_SECRET` | Authentication secret key |
| `NEXT_PUBLIC_API_URL` | Public API endpoint |

> **⚠️ Never commit `.env.local` or secrets to the repo.** The `.gitignore` is already configured to exclude env files.

## 📱 Responsive Design

All pages are responsive and tested at:
- **Mobile:** 375px
- **Desktop:** 1280px

## 💚 Health Check

Visit `/health` to verify the app is running correctly. It fetches live data from:
- GitHub API
- JSONPlaceholder API
- Runtime environment info
