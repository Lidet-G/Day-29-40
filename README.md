# Addis Eats — Day 40 Foundations

## Requirements
- Node.js and npm
- Next.js project dependencies already installed (`next`, `react`, `react-dom`, and `zod`)

## Run locally
```powershell
npm run dev
```
Open http://localhost:3000.

## Check routes
- `/` landing page and specials
- `/menu` all dishes
- `/menu?category=vegetarian` category filtering
- `/menu/kitfo` dish detail
- `/cart` cart lines and ETB total
- `/checkout` checkout (requires a `session` cookie to submit)
- `/api/dishes` GET all dishes
- `/api/dishes/kitfo` GET one dish
- `/api/orders` POST validated order

## Build
```powershell
npm run build
```
Record the actual output from your terminal here after the build completes. Do not write a made-up build result.

## Important course-project limits
The dish list is sample data. The order is validated but not stored, and no payment is taken. A `session` cookie check is only a demonstration and is not production authentication.
