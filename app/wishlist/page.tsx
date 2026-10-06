import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import type { SiteSettings } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Baby Wishlist",
  description:
    "Help us provide essential baby items to families in need through our Amazon Wishlist.",
};

const DEFAULT_AMAZON_URL = "https://www.amazon.com/hz/wishlist/ls/3FMUETJNOUL7W";

async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await sanityFetch<SiteSettings>({
      query: `*[_type == "siteSettings"][0]`,
    });
  } catch {
    return null;
  }
}

export default async function WishlistPage() {
  const settings = await getSiteSettings();
  const wishlistUrl = settings?.amazonWishlistUrl || DEFAULT_AMAZON_URL;

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <span className="text-5xl mb-6 block">📦</span>
          <h1 className="heading-lg text-forest-500 mb-4">Baby Wishlist</h1>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto">
            Your gifts of essential baby items help families get off to the best
            possible start. Every diaper, onesie, and bottle makes a real difference.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-md text-forest-500 mb-8 text-center">
            How Your Gift Helps
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-sage-100 text-sage-400 flex items-center justify-center flex-shrink-0 font-serif text-xl">
                1
              </div>
              <div>
                <h3 className="heading-sm text-forest-500 mb-2">
                  Choose Items from Our Wishlist
                </h3>
                <p className="text-body-sm">
                  Browse our curated list of essential baby items. We&apos;ve selected
                  high-quality, practical items that families need most.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-sage-100 text-sage-400 flex items-center justify-center flex-shrink-0 font-serif text-xl">
                2
              </div>
              <div>
                <h3 className="heading-sm text-forest-500 mb-2">
                  Ship Directly to Families
                </h3>
                <p className="text-body-sm">
                  Items purchased from the wishlist ship directly to families in our
                  program, eliminating logistical challenges and ensuring timely
                  delivery.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-sage-100 text-sage-400 flex items-center justify-center flex-shrink-0 font-serif text-xl">
                3
              </div>
              <div>
                <h3 className="heading-sm text-forest-500 mb-2">
                  Make a Tangible Difference
                </h3>
                <p className="text-body-sm">
                  Your gift arrives in the hands of a family who truly needs it, with
                  no overhead costs—just pure, direct support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="section-padding bg-cream-100">
        <div className="container-narrow">
          <h2 className="heading-md text-forest-500 mb-8 text-center">
            What Families Need Most
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Diapers (all sizes)",
              "Baby Formula",
              "Baby Food",
              "Onesies & Clothing",
              "Blankets",
              "Wipes",
              "Bottles & Nipples",
              "Diaper Cream",
              "Baby Shampoo",
              "Crib Sheets",
              "Car Seat Covers",
              "Nursing Supplies",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-4 py-3 text-center text-warm-700 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-narrow text-center">
          <span className="text-5xl mb-6 block">❤️</span>
          <h2 className="heading-md mb-4">Ready to Give?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Visit our Amazon Wishlist to browse items and make a purchase that will
            directly help a family in need.
          </p>
          <a
            href={wishlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-400 font-medium rounded-lg transition-all duration-200 hover:bg-cream-50 text-lg"
          >
            View Amazon Wishlist
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <p className="mt-4 text-sm opacity-80">
            The wishlist link opens Amazon in a new tab.
          </p>
        </div>
      </section>
    </>
  );
}
