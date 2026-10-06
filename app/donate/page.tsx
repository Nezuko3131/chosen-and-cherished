import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import type { SiteSettings } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Chosen and Cherished with a financial donation. Every contribution helps provide essential baby supplies to families in need.",
};

const DEFAULT_ZEFFY_URL = "https://www.zeffy.com/en-US/donation-form/help-a-welcome-a-baby";

async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await sanityFetch<SiteSettings>({
      query: `*[_type == "siteSettings"][0]`,
    });
  } catch {
    return null;
  }
}

export default async function DonatePage() {
  const settings = await getSiteSettings();
  const donationUrl = settings?.zeffyDonationUrl || DEFAULT_ZEFFY_URL;

  return (
    <>
      {/* Hero */}
      <section id="make-a-donation" className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <span className="text-5xl mb-6 block">💝</span>
          <h1 className="heading-lg text-forest-500 mb-4">Make a Donation</h1>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto">
            Your gift helps a local mom say "yes, I have what my baby needs."
            Every donation helps Chosen & Cherished provide baby essentials to local
            mothers and families facing financial hardship, unexpected circumstances,
            or starting over.
          </p>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-md text-forest-500 mb-8 text-center">
            How Your Gift Makes a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card text-center">
              <span className="text-3xl mb-4 block text-center">🧴</span>
              <h3 className="heading-sm text-forest-500 mb-2 text-center">$10</h3>
              <p className="text-body-sm">
                Helps provide wipes, hygiene items or feeding supplies.
              </p>
            </div>
            <div className="card text-center">
              <span className="text-3xl mb-4 block text-center">🍼</span>
              <h3 className="heading-sm text-forest-500 mb-2 text-center">$25</h3>
              <p className="text-body-sm">
                Helps provide diapers and everyday baby essentials.
              </p>
            </div>
            <div className="card text-center">
              <span className="text-3xl mb-4 block text-center">👶</span>
              <h3 className="heading-sm text-forest-500 mb-2 text-center">$50</h3>
              <p className="text-body-sm">
                Helps provide a larger bundle of necessities for a baby.
              </p>
            </div>
            <div className="card text-center">
              <span className="text-3xl mb-4 block text-center">🛒</span>
              <h3 className="heading-sm text-forest-500 mb-2 text-center">$100</h3>
              <p className="text-body-sm">
                Helps us respond to bigger needs such as safe-sleep equipment,
                strollers, feeding supplies or other baby gear.
              </p>
            </div>
            <div className="md:col-span-2 text-center py-4">
              <span className="text-3xl mb-2 block">💝</span>
              <h3 className="heading-sm text-forest-500 mb-2">Any Amount Makes a Difference</h3>
              <p className="text-body-sm">
                Even $5 or $10 helps us fill the gaps when donated inventory
                doesn&apos;t cover what a family needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-cream-100">
        <div className="container-narrow">
          <div className="card bg-white max-w-2xl mx-auto text-center">
            <h2 className="heading-sm text-forest-500 mb-4">
              Our Commitment to Transparency
            </h2>
            <p className="text-body-sm mb-4">
              We take stewardship seriously. Donations support our mission of providing
              baby essentials to families in need, including purchasing needed supplies
              and supporting the resources required to collect, organize, store and
              distribute those items responsibly.
            </p>
            <p className="text-sm text-warm-600 italic">
              Donations are processed securely through Zeffy, our trusted donation
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-narrow text-center">
          <h2 className="heading-md mb-4">Ready to Give?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Click below to make a secure donation through our trusted platform.
            Your generosity changes lives.
          </p>
          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-400 font-medium rounded-lg transition-all duration-200 hover:bg-cream-50 text-lg"
          >
            Donate Now
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
            The donation page opens in a new tab via our secure platform, Zeffy.
          </p>
        </div>
      </section>

      {/* Other Ways */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="heading-sm text-forest-500 mb-4">Other Ways to Give</h2>
          <p className="text-body-sm mb-6">
            Can&apos;t give financially? You can still help by purchasing items from our
            Amazon Wishlist.
          </p>
          <a
            href="/wishlist"
            className="btn-outline inline-flex items-center gap-2"
          >
            View Amazon Wishlist
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
