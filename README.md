# Chosen and Cherished

A faith-based nonprofit website supporting mothers and families with essential baby supplies, resources, and compassionate support.

**Live Site:** https://chosenandcherished.org

## About

Chosen and Cherished is dedicated to providing essential baby supplies, resources, and compassionate support to pregnant mothers and families experiencing financial hardship. Our mission is to ensure babies have access to basic necessities during pregnancy, infancy, and early childhood.

### Our Three Pillars

1. **Providing Baby Essentials** - Diapers, formula, clothing, and more
2. **Offering Encouragement** - Emotional support and resources for mothers
3. **Building Community** - Connection with other families and support networks

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity (embedded studio at `/studio`)
- **Deployment:** Vercel (recommended)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Nezuko3131/chosen-and-cherished.git
cd chosen-and-cherished
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** Until Sanity is configured, the site will display placeholder content.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
chosen-and-cherished/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── donate/            # Donation page (Zeffy)
│   ├── get-involved/      # Get involved page
│   ├── mission/           # Our Mission page
│   ├── news/              # News & Stories
│   │   └── [slug]/        # Individual article pages
│   ├── privacy/           # Privacy Policy
│   ├── wishlist/          # Amazon Wishlist page
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # React components
│   ├── Header.tsx         # Site header with navigation
│   └── Footer.tsx         # Site footer
├── lib/                   # Utilities
│   └── sanity.ts         # Sanity client, types, and helpers
├── schemas/              # Sanity CMS schemas
│   ├── siteSettings.ts   # Site-wide settings
│   ├── newsArticle.ts    # News articles
│   ├── homepage.ts       # Homepage content
│   ├── aboutPage.ts      # About page content
│   ├── missionPage.ts    # Mission page content
│   ├── getInvolvedPage.ts # Get involved page content
│   └── index.ts          # Schema exports
├── public/               # Static files
├── .env.local.example    # Environment variables template
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, mission, impact, ways to help |
| About Us | `/about` | Our story, mission, vision, values |
| Our Mission | `/mission` | Programs and services |
| Get Involved | `/get-involved` | Ways to support our work |
| Baby Wishlist | `/wishlist` | Amazon Wishlist integration |
| Donate | `/donate` | Zeffy donation integration |
| Contact | `/contact` | Contact form and information |
| News | `/news` | Latest news and stories |
| Privacy | `/privacy` | Privacy policy |

## Sanity CMS

### Setting Up Sanity

1. Create a project at [sanity.studio](https://sanity.studio)
2. Note your Project ID
3. Create a dataset (usually `production`)
4. Add the Project ID to your `.env.local`

### CMS Content Types

- **Site Settings** - Global links (Amazon, Zeffy, Contact Form), social media, contact info
- **Homepage** - Hero content, mission statement, impact section, ways to help
- **About Page** - Our story, mission, vision, values, who we serve
- **Mission Page** - Introduction, programs and services
- **Get Involved Page** - Ways to participate
- **News Articles** - Title, content, excerpt, image, categories, date

### Publishing Content

1. Access Sanity Studio at `/studio` (when configured)
2. Create or edit content
3. Click "Publish" to make it live
4. The website automatically updates (with caching, changes may take a few minutes)

## External Integrations

### Amazon Wishlist

URL configured in Site Settings → displayed on `/wishlist`

### Zeffy Donations

URL configured in Site Settings → displayed on `/donate`

### Contact Form

URL configured in Site Settings → linked on `/contact`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Docker containers

## Color Palette

Based on the Chosen and Cherished logo:

| Color | Hex | Usage |
|-------|-----|-------|
| Sage Green | `#8B9474` | Primary - buttons, accents |
| Dusty Rose | `#D4A5A0` | Secondary - highlights |
| Deep Forest Green | `#3D4A3A` | Text, headings |
| Warm Brown | `#5C4A3A` | Secondary text |
| Cream | `#FAF5EE` | Backgrounds |

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ SEO optimized (sitemap, robots.txt, Open Graph)
- ✅ Accessible navigation
- ✅ Sanity CMS integration
- ✅ Configurable external links
- ✅ News/blog system
- ✅ Privacy policy
- ✅ Professional nonprofit design
- ✅ Warm, inviting aesthetic

## License

Private - All rights reserved.
