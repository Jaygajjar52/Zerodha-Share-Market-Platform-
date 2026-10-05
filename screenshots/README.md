# Screenshots

Visual walkthrough of the Zerodha Clone — landing site and trading dashboard.

Captured at **1440 px** viewport width from the production builds.

## `frontend/` — Marketing landing site

| File | Section | Route |
|---|---|---|
| `01-landing-home.png` | Home — hero, awards, trust, pricing, education, CTA, footer | `/` |
| `02-products-technology.png` | Products — Kite, Console, Coin, Kite Connect, Varsity, Universe | `/product` |
| `03-pricing.png` | Pricing — brokerage cards + calculator/charges list | `/pricing` |
| `04-about.png` | About — company story and team | `/about` |
| `05-support.png` | Support — portal hero, featured topics, ticket categories | `/support` |
| `06-signup.png` | Signup | `/signup` |
| `07-not-found-404.png` | Catch-all 404 route | any unknown path |

## `dashboard/` — Trading dashboard

| File | Section | Route |
|---|---|---|
| `01-dashboard-summary.png` | Summary — equity margin and holdings P&L | `/` |
| `02-holdings.png` | Holdings — live MongoDB data, watchlist, doughnut + bar charts | `/holdings` |
| `03-positions.png` | Positions | `/positions` |
| `04-orders-empty.png` | Orders — empty state | `/orders` |
| `05-funds.png` | Funds — margin breakdown | `/funds` |
| `06-apps.png` | Apps | `/apps` |

> **Note on `02-holdings.png`** — the Day chg. column shows losses in red and gains in
> green (e.g. INFY `-1.60%`, TCS `-0.25%` in red). This depends on the `isLoss` field
> being declared in `backend/schemas/HoldingsSchema.js`; without it Mongoose silently
> strips the value and every row renders green.

## Stack

- **Frontend / Dashboard** — React 19, React Router 7, Create React App
- **Charts** — chart.js 4 + react-chartjs-2, Material UI 7
- **Landing page styling** — Bootstrap 5 (CDN) + Font Awesome
- **Backend** — Node.js, Express 5, Mongoose 9, MongoDB Atlas