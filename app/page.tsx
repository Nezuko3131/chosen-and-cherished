import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import type { HomepageContent, NewsArticle } from "@/lib/sanity";
import { HeartIcon, HeartOutline, LeafBranch } from "@/components/Decor";

// Service icons - outline style, currentColor (rose by default)
const DiaperIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 18c0-3 3-6 6-6h24c3 0 6 3 6 6v26c0 6-5 9-9 9H23c-4 0-9-3-9-9V18z" />
    <path d="M20 28h24M20 36h24" />
    <circle cx="24" cy="22" r="1.4" fill="currentColor" />
    <circle cx="32" cy="22" r="1.4" fill="currentColor" />
    <circle cx="40" cy="22" r="1.4" fill="currentColor" />
  </svg>
);
const ClothingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10l-10 10 6 6 6-4v32a3 3 0 003 3h14a3 3 0 003-3V22l6 4 6-6-10-10-6 4h-12l-6-4z" />
  </svg>
);
const BottleIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="24" y="6" width="16" height="8" rx="1.5" />
    <path d="M26 14v6h12v-6" />
    <path d="M22 20c-2 3-2 6-2 9v22c0 4 3 6 6 6h12c3 0 6-2 6-6V29c0-3 0-6-2-9" />
    <path d="M28 36h8M28 44h8" />
  </svg>
);
const CribIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 26h44" />
    <path d="M14 26v26M50 26v26" />
    <path d="M10 52h44" />
    <path d="M14 26v-6a18 18 0 0136 0v6" />
    <path d="M22 34v8M32 34v8M42 34v8" />
  </svg>
);
const iconMap: Record<string, () => JSX.Element> = {
  diaper: DiaperIcon,
  clothing: ClothingIcon,
  bottle: BottleIcon,
  crib: CribIcon,
};

const defaultContent = {
  heroTitle: "Chosen & Cherished",
  heroSubtitle: "A Faith-Based Nonprofit",
  heroScript: "Supporting mothers who choose life.",
  heroVerse: "You are chosen. You are cherished. You are not alone.",
  heroVerseRef: "Isaiah 46:16",
  heroImage: "/hero/hero.jpg",
  badgeItems: [
    { icon: "diaper", label: "PROVIDING", sub: "BABY ESSENTIALS" },
    { icon: "heart",  label: "OFFERING",  sub: "ENCOURAGEMENT" },
    { icon: "group",  label: "BUILDING",   sub: "A COMMUNITY" },
  ],
  impactSection: {
    title: "HOW WE HELP",
    subtitle: "Essential support for local mothers and families in need.",
    items: [
      { icon: "diaper",   title: "DIAPERS & WIPES",       description: "Helping families keep their little ones clean and healthy." },
      { icon: "clothing", title: "CLOTHING",              description: "Newborn to 12 months, gently used and new items." },
      { icon: "bottle",   title: "FORMULA & FEEDING SUPPLIES", description: "Supporting growing babies with essential nutrition." },
      { icon: "crib",     title: "SAFE SLEEP ESSENTIALS",  description: "Bassinet or pack 'n play to help provide a safe place to sleep." },
    ],
  },
  waysToHelpSection: {
    title: "HOW YOU CAN HELP",
    subtitle: "Together we can make a difference in the lives of families.",
    items: [
      { title: "Give Financially", description: "A $5, $10 or $25 monthly gift helps us keep diapers, wipes and essentials available.", link: "/donate", linkText: "DONATE NOW" },
      { title: "Shop Our Wishlist", description: "Send the items families need most directly to us through our Amazon Wishlist.",     link: "/wishlist", linkText: "VIEW WISHLIST" },
      { title: "Donate Items",     description: "New or gently used baby items can be dropped off at Belleview Sports Complex.",    link: "/donate#drop-off", linkText: "DROP-OFF INFO" },
    ],
  },
};

async function getHomepageContent(): Promise<HomepageContent | null> {
  try { return await sanityFetch<HomepageContent>({ query: `*[_type == "homepage"][0]` }); } catch { return null; }
}
async function getLatestNews(): Promise<NewsArticle[]> {
  try {
    return await sanityFetch<NewsArticle[]>({
      query: `*[_type == "newsArticle"] | order(publishedAt desc) [0...3] {
        _id, title, slug, excerpt, mainImage, publishedAt
      }`,
    });
  } catch { return []; }
}

export default async function HomePage() {
  const homepage = await getHomepageContent();
  const latestNews = await getLatestNews();
  const content = homepage && homepage.heroTitle ? homepage : defaultContent;

  return (
    <>
      {/* Two big CTA buttons (rose + forest) */}
        <div className="container-wide py-10 md:py-14 bg-cream-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Link
              href="https://app.boldsign.com/document/sign-bulk-links/?documentId=bb63d999-a396-410b-9d98-3aba278cc34fs_Rd6NF"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-5 md:px-8 md:py-6 bg-rose-400 hover:bg-rose-500 text-white rounded-lg transition-colors"
            >
              <span className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="flex-1 text-left">
                <span className="block text-xs md:text-sm tracking-[0.25em] font-semibold">I NEED HELP</span>
                <span className="block text-sm md:text-base font-normal opacity-95">Request Assistance &rarr;</span>
              </span>
            </Link>
            <Link
              href="/donate#make-a-donation"
              className="group flex items-center gap-4 px-6 py-5 md:px-8 md:py-6 bg-forest-500 hover:bg-forest-600 text-white rounded-lg transition-colors"
            >
              <span className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center">
                <HeartIcon className="w-6 h-6 md:w-7 md:h-7" />
              </span>
              <span className="flex-1 text-left">
                <span className="block text-xs md:text-sm tracking-[0.25em] font-semibold">I WANT TO HELP</span>
                <span className="block text-sm md:text-base font-normal opacity-95">Donate, Give Items or Partner &rarr;</span>
              </span>
            </Link>
          </div>
        </div>

      {/* HOW WE HELP - 4 cards with rose icon square + serif title + sans description */}
      <section className="bg-cream-100 py-12 md:py-16">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest-500 mb-2">{content.impactSection.title}</h2>
          <p className="text-xs md:text-sm tracking-[0.2em] text-warm-500 uppercase mb-10">
            {content.impactSection.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {content.impactSection.items.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <span className="w-20 h-20 mb-4 flex items-center justify-center bg-rose-50 text-rose-400 rounded-md p-4">
                    {Icon ? <Icon /> : <span className="w-12 h-12 bg-rose-100 rounded" />}
                  </span>
                  <h3 className="font-serif text-base md:text-lg text-forest-500 font-semibold tracking-[0.1em] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-600 max-w-[220px]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tagline divider with leaves */}
      <div className="bg-cream-100 pb-10 md:pb-14">
        <div className="container-wide flex items-center justify-center gap-4 md:gap-8">
          <LeafBranch className="hidden md:block h-6 lg:h-8 w-32 lg:w-40 text-forest-500 opacity-70" />
          <p className="font-script text-2xl md:text-3xl lg:text-4xl text-rose-400 text-center">
            {content.heroScript || "Sometimes helping a mother choose hope starts with something as simple as a pack of diapers."}
          </p>
          <LeafBranch className="hidden md:block h-6 lg:h-8 w-32 lg:w-40 text-forest-500 opacity-70 scale-x-[-1]" />
        </div>
      </div>

      {/* HOW YOU CAN HELP - 3 cards with rose icon + title + description + button */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest-500 mb-2">{content.waysToHelpSection.title}</h2>
          <p className="text-xs md:text-sm tracking-[0.2em] text-warm-500 uppercase mb-10">
            {content.waysToHelpSection.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {content.waysToHelpSection.items.map((item, index) => {
              const accent = index % 2 === 0 ? "bg-rose-400 hover:bg-rose-500" : "bg-forest-500 hover:bg-forest-600";
              return (
                <div key={index} className="flex flex-col items-center text-center bg-cream-50 rounded-lg p-6 md:p-8">
                  <span className="w-12 h-12 mb-4 flex items-center justify-center text-rose-400">
                    {index === 0 && <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-9.5-9C.6 8.5 2 4 6 4c2 0 3.4 1.1 4.2 2.4C11 5.1 12.4 4 14.4 4c4 0 5.4 4.5 3.5 8-2.5 4.5-9.5 9-9.5 9z" fill="currentColor"/></svg>}
                    {index === 1 && <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>}
                    {index === 2 && <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </span>
                  <h3 className="font-serif text-lg text-forest-500 font-semibold tracking-[0.1em] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-600 mb-6 flex-1">{item.description}</p>
                  <Link href={item.link} className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white text-xs tracking-[0.2em] font-semibold rounded transition-colors ${accent}`}>
                    {item.linkText} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest news (only when sanity has data) */}
      {latestNews.length > 0 && (
        <section className="section-padding bg-cream-100">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-forest-500">Latest News &amp; Stories</h2>
              <Link href="/news" className="text-sage-400 hover:text-sage-500 font-medium">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((article) => (
                <Link key={article._id} href={`/news/${article.slug?.current}`} className="card group">
                  {article.mainImage && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-cream-200">
                      <span className="absolute inset-0 flex items-center justify-center text-cream-400">Article Image</span>
                    </div>
                  )}
                  <p className="text-sm text-warm-500 mb-2">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                  <h3 className="font-serif text-lg text-forest-500 mb-2 group-hover:text-sage-400">{article.title}</h3>
                  <p className="text-body-sm line-clamp-2">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Need Assistance */}
      <section className="bg-rose-400 text-white py-12 md:py-16">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">Need Assistance?</h2>
          <p className="text-base md:text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            If you or someone you know is experiencing hardship during pregnancy or early parenthood, we&apos;re here to help.
          </p>
          <a
            href="https://app.boldsign.com/document/sign-bulk-links/?documentId=bb63d999-a396-410b-9d98-3aba278cc34fs_Rd6NF"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-rose-400 text-xs md:text-sm font-semibold tracking-[0.2em] rounded-md hover:bg-cream-50 transition-colors"
          >
            REQUEST ASSISTANCE &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
