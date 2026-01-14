# Milsat Website

Official website for Milsat, built with Next.js and Letterhead.

## Technology Stack

This project is built using modern web technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **CMS & Data**: [Letterhead](https://letterhead.ai) (Core SDK & React Components)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler-icons.io/)

## Getting Started

### Prerequisites

- Node.js 22+
- npm, yarn, pnpm, or bun (Preferred: yarn)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_API_URL=https://api.letterhead.cloud
NEXT_PUBLIC_ORG_ID=<your_organization_id>
NEXT_PUBLIC_LETTERHEAD_API=<your_api_key>
```

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd milsat
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket).
2. Import the project into Vercel.
3. Add the **Environment Variables** listed above in the Vercel Project Settings.
4. Deploy.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
