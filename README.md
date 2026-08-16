# Shoreline Pro Services LLC - Business Management System

A comprehensive Next.js web application for managing residential painting contractor operations in Clark County, Washington.

**Business Info:**
- Business: Shoreline Pro Services LLC
- Service Area: Clark County, Washington
- Type: Residential painting contractor

## Features

### 🏠 Customer Management
- Store customer contact information
- Track address history (defaults to Clark County, WA)
- Manage customer notes and preferences
- View job history for each customer

### 📋 Job Management
- Create and track painting jobs (interior, exterior, cabinet, custom)
- Generate job estimates with labor and material costs
- Track job status from quote through payment
- Schedule job dates and assign crew
- Attach before/after photos to jobs

### 💰 Invoicing
- Auto-generate invoice numbers
- Create line-item invoices with tax calculation
- Track payment status
- View invoice history and payment records
- Download/print invoices

### 👥 Team Management
- Add and manage crew members
- Assign roles (Owner, Foreman, Painter, Apprentice)
- Schedule crew availability

### 📊 Scheduling & Tracking
- Calendar-based job scheduling
- Crew assignment and tracking
- Job completion tracking
- Photo documentation support

### 💸 Expense Tracking
- Log material, equipment, and labor expenses
- Attach receipts
- Categorize by expense type
- Monthly expense reports

## Tech Stack

- **Framework:** Next.js 16+ (React 19)
- **Language:** TypeScript
- **Database:** SQLite with Prisma ORM
- **Styling:** Tailwind CSS
- **Package Manager:** npm

## Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Set up database
npx prisma db push

# Start development server
npm run dev
```

Visit http://localhost:3000

### Environment Configuration

Create/edit `.env.local`:

```env
DATABASE_URL="file:./data.db"
BUSINESS_NAME="Shoreline Pro Services LLC"
BUSINESS_PHONE=""
BUSINESS_EMAIL=""
INVOICE_TAX_RATE="0.1"
API_URL="http://localhost:3000"
```

## Database Schema

### Core Models

- **Customer** - Client information and contact details
- **Job** - Painting projects with status tracking
- **Invoice** - Billing and payment records
- **Schedule** - Job date/time assignments
- **TeamMember** - Crew information
- **Photo** - Before/after project photos
- **Expense** - Cost tracking

### Job Status Flow

`QUOTE` → `QUOTED` → `ACCEPTED` → `IN_PROGRESS` → `COMPLETED` → `INVOICED` → `PAID`

## API Endpoints

### Customers
- `GET /api/customers` - List all customers
- `POST /api/customers` - Create new customer
- `GET /api/customers/[id]` - Get customer details
- `PATCH /api/customers/[id]` - Update customer
- `DELETE /api/customers/[id]` - Delete customer

### Jobs
- `GET /api/jobs` - List jobs (filterable by status, customer)
- `POST /api/jobs` - Create new job
- `GET /api/jobs/[id]` - Get job details
- `PATCH /api/jobs/[id]` - Update job
- `DELETE /api/jobs/[id]` - Delete job

### Invoices
- `GET /api/invoices` - List invoices
- `POST /api/invoices` - Create invoice
- `PATCH /api/invoices/[id]` - Update invoice status/payment

### Schedules
- `GET /api/schedules` - List schedules (filterable by date)
- `POST /api/schedules` - Create schedule entry
- `PATCH /api/schedules/[id]` - Update schedule

## Development

### Creating Database Migrations

After updating `prisma/schema.prisma`:

```bash
npx prisma migrate dev --name add_description
```

### Generating Types

Prisma automatically generates types. Rebuild with:

```bash
npx prisma generate
```

### Using Prisma Studio

```bash
npx prisma studio
```

## Project Structure

```
shorelinepro/
├── app/
│   ├── api/              # API routes
│   ├── dashboard/        # Main dashboard
│   ├── customers/        # Customer management UI
│   ├── jobs/             # Job management UI
│   ├── invoices/         # Invoice management UI
│   ├── schedule/         # Scheduling UI
│   └── layout.tsx        # Root layout
├── components/           # Reusable React components
├── lib/
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Helper functions
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Schema migrations
├── public/               # Static assets
├── .env.local            # Environment variables
└── package.json          # Dependencies
```

## Deployment

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and link project
railway login
railway link

# Deploy
railway up
```

### Vercel

```bash
# Push to GitHub, connect repo to Vercel
# Auto-deploys on git push
```

### Self-Hosted

```bash
npm run build
npm start
```

## Default Settings

- **City:** Vancouver
- **State:** WA
- **Tax Rate:** 10%
- **Default Invoice Start Number:** 1001

## Notes

- All customer addresses default to Clark County, Washington
- Phone numbers are unique per customer
- Job statuses follow a specific workflow
- Photos are stored with stage tags (before/during/after)
- Expenses can be categorized for reporting

## Support

For issues or features, check the `.github/copilot-instructions.md` file for development guidelines.

## License

Commercial software for Shoreline Pro Services LLC use.
