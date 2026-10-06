import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/lib/sanity";
import type { HomepageContent, NewsArticle } from "@/lib/sanity";

// Default content for when Sanity is not configured
const defaultContent = {
  heroTitle: "You Are Chosen. You Are Cherished.",
  heroSubtitle:
    "Providing essential baby supplies, resources, and compassionate support to mothers and families experiencing financial hardship.",
  missionStatement:
    "To provide essential baby supplies, resources, and compassionate support to pregnant mothers and families experiencing financial hardship, ensuring babies have access to basic necessities during pregnancy, infancy, and early childhood.",
  impactSection: {
    title: "Making a Difference",
    items: [
      {
        icon: "👶",
        title: "Providing Baby Essentials",
        description: "Diapers, formula, clothing, and more for families in need",
      },
      {
        icon: "❤️",
        title: "Offering Encouragement",
        description: "Emotional support and resources for mothers",
      },
      {
        icon: "👥",
        title: "Building Community",
        description: "Connection with other families and support networks",
      },
    ],
  },
  waysToHelpSection: {
    title: "How You Can Help",
    items: [
      {
        title: "Donate Items",
        description: "Send essential baby items through our Amazon Wishlist",
        link: "/wishlist",
        linkText: "View Wishlist",
      },
      {
        title: "Give Financially",
        description: "Your monetary donations help us purchase critical supplies",
        link: "/donate",
        linkText: "Donate Now",
      },
      {
        title: "Get Involved",
        description: "Volunteer your time and talents to support families",
        link: "/get-involved",
        linkText: "Learn More",
      },
    ],
  },
};

async function getHomepageContent(): Promise<HomepageContent | null> {
  try {
    return await sanityFetch<HomepageContent>({
      query: `*[_type == "homepage"][0]`,
    });
  } catch {
    return null;
  }
}

async function getLatestNews(): Promise<NewsArticle[]> {
  try {
    return await sanityFetch<NewsArticle[]>({
      query: `*[_type == "newsArticle"] | order(publishedAt desc) [0...3] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt
      }`,
    });
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const homepage = await getHomepageContent();
  const latestNews = await getLatestNews();

  const content = homepage && homepage.heroTitle ? homepage : defaultContent;

  return (
    <>
      {/* Banner */}
      <section className="w-full">
        <Image
          src="/banner.png"
          alt="Chosen and Cherished"
          width={820}
          height={305}
          className="w-full h-auto"
          priority
          unoptimized={true}
        />
      </section>

      {/* Hero Section */}
      <section className="relative bg-cream-100 overflow-hidden">
        <div className="container-wide py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="heading-lg text-forest-500 mb-6 text-balance">
              {content.heroTitle}
            </h1>
            <p className="text-body text-warm-700 mb-8 max-w-2xl">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-primary">
                Support Our Mission
              </Link>
              <Link href="/mission" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-sage-200 rounded-full opacity-20 blur-3xl" />
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <p className="text-xl md:text-2xl text-forest-500 font-serif leading-relaxed italic">
            "{content.missionStatement}"
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-cream-100">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-md text-forest-500 mb-4">
              {content.impactSection.title}
            </h2>
            <p className="text-body text-warm-700 max-w-2xl mx-auto">
              We believe every family deserves support, dignity, and hope during
              life&apos;s most important moments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.impactSection.items.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-sm text-forest-500 mb-2">{item.title}</h3>
                <p className="text-body-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-md text-forest-500 mb-4">
              {content.waysToHelpSection.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.waysToHelpSection.items.map((item, index) => (
              <div key={index} className="card">
                <h3 className="heading-sm text-forest-500 mb-3">{item.title}</h3>
                <p className="text-body-sm mb-6">{item.description}</p>
                <Link href={item.link} className="text-sage-400 hover:text-sage-500 font-medium inline-flex items-center gap-2">
                  {item.linkText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      {latestNews.length > 0 && (
        <section className="section-padding bg-cream-100">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-8">
              <h2 className="heading-md text-forest-500">Latest News & Stories</h2>
              <Link href="/news" className="text-sage-400 hover:text-sage-500 font-medium">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((article) => (
                <Link key={article._id} href={`/news/${article.slug?.current}`} className="card group">
                  {article.mainImage && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-cream-200">
                      <span className="absolute inset-0 flex items-center justify-center text-cream-400">
                        Article Image
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-warm-500 mb-2">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="heading-sm text-forest-500 mb-2 group-hover:text-sage-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-body-sm line-clamp-2">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-narrow text-center">
          <h2 className="heading-md mb-4">Need Assistance?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            If you or someone you know is experiencing hardship during pregnancy or
            early parenthood, we&apos;re here to help.
          </p>
          <a href="https://app.boldsign.com/document/sign-bulk-links/?documentId=bb63d999-a396-410b-9d98-3aba278cc34fs_Rd6NF" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sage-400 font-medium rounded-lg transition-all duration-200 hover:bg-cream-50">
            Request Assistance
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
