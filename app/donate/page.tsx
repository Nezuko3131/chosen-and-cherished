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
      <section className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <span className="text-5xl mb-6 block">💝</span>
          <h1 className="heading-lg text-forest-500 mb-4">Make a Donation</h1>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto">
            Your financial support helps us purchase critical baby supplies and
            provides essential resources to families who need them most.
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
            <div className="card">
              <span className="text-3xl mb-4 block">🍼</span>
              <h3 className="heading-sm text-forest-500 mb-2">$25 Provides</h3>
              <p className="text-body-sm">
                A week&apos;s worth of diapers and wipes for one baby, giving parents
                one less thing to worry about.
              </p>
            </div>
            <div className="card">
              <span className="text-3xl mb-4 block">👶</span>
              <h3 className="heading-sm text-forest-500 mb-2">$50 Provides</h3>
              <p className="text-body-sm">
                A complete outfit set including onesies, socks, and a warm blanket
                for a newborn.
              </p>
            </div>
            <div className="card">
              <span className="text-3xl mb-4 block">🛒</span>
              <h3 className="heading-sm text-forest-500 mb-2">$100 Provides</h3>
              <p className="text-body-sm">
                A car seat or crib, essential items that keep babies safe during
                travel and sleep.
              </p>
            </div>
            <div className="card">
              <span className="text-3xl mb-4 block">🏠</span>
              <h3 className="heading-sm text-forest-500 mb-2">$250 Provides</h3>
              <p className="text-body-sm">
                A full month of infant formula, ensuring babies have proper nutrition
                when breastfeeding isn&apos;t possible.
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
              Every dollar of your donation goes directly to helping families.
              We operate efficiently to maximize the impact of every contribution.
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
            className="btn-outline"
          >
            View Amazon Wishlist
          </a>
        </div>
      </section>
    </>
  );
}
