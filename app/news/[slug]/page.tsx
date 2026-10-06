import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity";
import type { NewsArticle } from "@/lib/sanity";

interface Props {
  params: { slug: string };
}

async function getArticle(slug: string): Promise<NewsArticle | null> {
  try {
    return await sanityFetch<NewsArticle>({
      query: `*[_type == "newsArticle" && slug.current == $slug][0]`,
      params: { slug },
    });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

function renderBlocks(blocks: any[] | undefined): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block._type === "block") {
        const text = block.children?.map((child: any) => child.text || "").join("") || "";
        let tag = "p";
        if (block.style === "h2") tag = "h2";
        if (block.style === "h3") tag = "h3";
        if (block.style === "blockquote") tag = "blockquote";
        return `<${tag}>${text}</${tag}>`;
      }
      if (block._type === "image") {
        return `<figure><div class="bg-cream-200 rounded-lg h-64 flex items-center justify-center text-cream-400">Image</div>${block.caption ? `<figcaption class="text-center text-sm text-warm-600 mt-2">${block.caption}</figcaption>` : ""}</figure>`;
      }
      return "";
    })
    .join("");
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Article Header */}
      <section className="bg-cream-100 section-padding">
        <div className="container-narrow">
          {article.categories && article.categories.length > 0 && (
            <div className="flex gap-2 mb-4">
              {article.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-3 py-1 bg-sage-100 text-sage-600 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          <h1 className="heading-lg text-forest-500 mb-4">{article.title}</h1>
          <p className="text-warm-600">
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      {article.mainImage && (
        <div className="container-wide py-8">
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-cream-200">
            <span className="absolute inset-0 flex items-center justify-center text-cream-400 text-4xl">
              Article Image
            </span>
          </div>
        </div>
      )}

      {/* Article Content */}
      <section className="section-padding bg-white">
        <article className="container-narrow">
          {article.excerpt && (
            <p className="text-xl text-warm-700 font-serif italic mb-8 leading-relaxed">
              {article.excerpt}
            </p>
          )}
          <div
            className="prose prose-lg max-w-none text-warm-700"
            dangerouslySetInnerHTML={{
              __html: renderBlocks(article.content),
            }}
          />
        </article>
      </section>

      {/* Back to News */}
      <section className="section-padding bg-cream-100">
        <div className="container-narrow text-center">
          <Link href="/news" className="text-sage-400 hover:text-sage-500 font-medium">
            ← Back to News & Stories
          </Link>
        </div>
      </section>
    </>
  );
}
