# Shoreline Pro Services LLC - Copilot Instructions

> **This repo contains two unrelated projects.** Everything below describes the internal CRM app (`app/`, `prisma/`) — it does not touch `public/`, which is the actual live marketing website at shorelineproservices.com (plain static HTML, no build step, deployed to Netlify). Do not deploy `app/` anywhere (Railway, Vercel, etc.) — its API routes have no authentication and would expose real customer data. See `README.md` for the full picture of both projects before making deployment decisions.

This workspace is for Shoreline Pro Services LLC, a residential painting contractor located in Clark County, Washington. This is a Next.js full-stack business management application for handling job scheduling, customer database, invoicing, and team management.

## Project Structure

```
shorelinepro/
├── app/
│   ├── api/
│   │   ├── customers/    # Customer management API
│   │   ├── jobs/         # Job management API
│   │   ├── invoices/     # Invoice API
│   │   └── schedules/    # Schedule API
│   ├── dashboard/        # Main dashboard page
│   ├── customers/        # Customer management UI
│   ├── jobs/             # Job management UI
│   └── invoices/         # Invoice management UI
├── components/           # Reusable React components
├── lib/                  # Utility functions and Prisma client
├── prisma/
│   └── schema.prisma     # Database schema
└── public/               # Static assets
```

## Key Features

1. **Customer Management** - Store customer contact info, address (Clark County focus), and job history
2. **Job Scheduling** - Create estimates, track job status (Quote → Paid), schedule crew
3. **Invoicing** - Generate invoices, track payments, manage line items
4. **Team Management** - Track crew members and their roles
5. **Photo Gallery** - Before/after photos for each job
6. **Expense Tracking** - Material, labor, and equipment costs

## Technology Stack

- **Framework**: Next.js 16+ with TypeScript
- **Database**: SQLite with Prisma ORM
- **Styling**: Tailwind CSS
- **UI**: React components with shadcn/ui (recommended)
- **Form Handling**: React Hook Form (recommended)

## Development Workflow

1. Create/update database schema in `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name description`
3. Generate API routes in `app/api/`
4. Create React components for UI
5. Test with `npm run dev`

## Default Locations

- All customers default to Clark County, Washington (Vancouver)
- Job addresses should be in WA state
- Tax rate defaults to 10% (update in .env.local)

## Naming Conventions

- Database: PascalCase for models (Customer, Job, Invoice)
- API routes: kebab-case (customers, jobs, invoices)
- Components: PascalCase (CustomerForm, JobCard)
- Files: camelCase (utils/jobHelpers.ts)

## API Response Format

All API endpoints return JSON with consistent structure:
- Success: `{ data: {...} }`
- Error: `{ error: "message", status: 400 }`

## Before Starting Development

1. Run `npm install`
2. Create database: `npx prisma db push`
3. Start dev server: `npm run dev`
4. Access at http://localhost:3000

## Important Notes

- This is a commercial business application for production use
- Ensure proper error handling and validation
- Use Prisma migrations for schema changes
- Never commit .env.local to version control
- Phone numbers should be unique per customer
