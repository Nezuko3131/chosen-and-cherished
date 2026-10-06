import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import type { GetInvolvedPage } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Learn how you can support Chosen and Cherished through donations, volunteering, and spreading the word.",
};

const defaultContent = {
  title: "Get Involved",
  intro: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "There are many ways to join our mission and make a real difference in the lives of mothers and families. Whether you choose to give financially, donate items, or volunteer your time, every contribution matters.",
        },
      ],
    },
  ],
  ways: [
    {
      title: "Financial Donations",
      description:
        "Your monetary gifts help us purchase critical supplies that aren't always available through donations. Every dollar goes directly toward helping families in need.",
      icon: "💝",
      link: "/donate",
      linkText: "Donate Now",
    },
    {
      title: "Amazon Wishlist",
      description:
        "Purchase items directly from our Amazon Wishlist and they'll be shipped to families who need them most. It's a simple way to give with lasting impact.",
      icon: "📦",
      link: "/wishlist",
      linkText: "View Wishlist",
    },
    {
      title: "Spread the Word",
      description:
        "Follow us on social media, share our story with friends and family, and help us build awareness for our mission. Word of mouth makes a difference.",
      icon: "📣",
      link: "/contact",
      linkText: "Connect With Us",
    },
  ],
};

async function getContent(): Promise<GetInvolvedPage | null> {
  try {
    return await sanityFetch<GetInvolvedPage>({
      query: `*[_type == "getInvolvedPage"][0]`,
    });
  } catch {
    return null;
  }
}

function renderBlocks(blocks: any[] | undefined): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block._type === "block") {
        const text = block.children?.map((child: any) => child.text || "").join("") || "";
        return `<p>${text}</p>`;
      }
      return "";
    })
    .join("");
}

export default async function GetInvolvedPage() {
  const contentData = await getContent();
  const content = contentData && contentData.title ? contentData : defaultContent;

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <h1 className="heading-lg text-forest-500 mb-4">{content.title}</h1>
          <div
            className="text-xl text-warm-700 max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: renderBlocks(content.intro),
            }}
          />
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.ways.map((way, index) => (
              <div key={index} className="card text-center">
                <span className="text-5xl mb-6 block">{way.icon}</span>
                <h3 className="heading-sm text-forest-500 mb-4">{way.title}</h3>
                <p className="text-body-sm mb-6">{way.description}</p>
                <a
                  href={way.link}
                  className="btn-primary"
                >
                  {way.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-narrow text-center">
          <h2 className="heading-md mb-4">Every Contribution Matters</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you can give financially, donate items, or simply share our story,
            you&apos;re making a real difference in the lives of families in your community.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-sage-400 font-medium rounded-lg transition-all duration-200 hover:bg-cream-50"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
