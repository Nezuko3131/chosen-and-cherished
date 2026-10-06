import { Metadata } from "next";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import type { NewsArticle } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "News & Stories",
  description:
    "Read the latest news, stories, and updates from Chosen and Cherished.",
};

async function getNews(): Promise<NewsArticle[]> {
  try {
    return await sanityFetch<NewsArticle[]>({
      query: `*[_type == "newsArticle"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        categories,
        publishedAt
      }`,
    });
  } catch {
    return [];
  }
}

export default async function NewsPage() {
  const articles = await getNews();

  return (
    <>
      {/* Hero */}
      <section id="news" className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <h1 className="heading-lg text-forest-500 mb-4">News & Stories</h1>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto">
            Stay updated with the latest news, heartwarming stories, and important
            resources from Chosen and Cherished.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <span className="text-5xl mb-6 block">📰</span>
              <h2 className="heading-md text-forest-500 mb-4">
                No Articles Yet
              </h2>
              <p className="text-body text-warm-700 max-w-md mx-auto">
                We&apos;re working on bringing you inspiring stories and important
                updates. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article._id}
                  href={`/news/${article.slug?.current}`}
                  className="card group"
                >
                  {article.mainImage && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-cream-200">
                      <span className="absolute inset-0 flex items-center justify-center text-cream-400">
                        Article Image
                      </span>
                    </div>
                  )}
                  {article.categories && article.categories.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {article.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="text-xs px-2 py-1 bg-sage-100 text-sage-600 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-warm-500 mb-2">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="heading-sm text-forest-500 mb-2 group-hover:text-sage-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-body-sm line-clamp-3">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
