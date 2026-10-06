import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import type { SiteSettings } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Chosen and Cherished. We're here to help and answer any questions you may have.",
};

const DEFAULT_FORM_URL = "https://app.boldsign.com/document/sign-bulk-links/?documentId=bb63d999-a396-410b-9d98-3aba278cc34fs_Rd6NF";

async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await sanityFetch<SiteSettings>({
      query: `*[_type == "siteSettings"][0]`,
    });
  } catch {
    return null;
  }
}

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const formUrl = settings?.contactFormUrl || DEFAULT_FORM_URL;
  const email = settings?.email || "contact@chosenandcherished.org";

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <span className="text-5xl mb-6 block">💬</span>
          <h1 className="heading-lg text-forest-500 mb-4">Contact Us</h1>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have questions, need support,
            or want to get involved, reach out and we&apos;ll get back to you soon.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-md text-forest-500 mb-6">Send Us a Message</h2>
              <div className="card">
                <p className="text-body-sm mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon as
                  possible.
                </p>
                <div className="bg-cream-100 rounded-lg p-8 text-center">
                  <p className="text-warm-700 mb-4">
                    Click the button below to access our contact form.
                  </p>
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open Contact Form
                    <svg
                      className="ml-2 w-4 h-4"
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
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div>
              <h2 className="heading-md text-forest-500 mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✉️</span>
                    <div>
                      <h3 className="heading-sm text-forest-500 mb-2">Email</h3>
                      <a
                        href={`mailto:${email}`}
                        className="text-sage-400 hover:text-sage-500 transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                </div>
                {settings?.phone && (
                  <div className="card">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📞</span>
                      <div>
                        <h3 className="heading-sm text-forest-500 mb-2">Phone</h3>
                        <a
                          href={`tel:${settings.phone}`}
                          className="text-sage-400 hover:text-sage-500 transition-colors"
                        >
                          {settings.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {settings?.address && (
                  <div className="card">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📍</span>
                      <div>
                        <h3 className="heading-sm text-forest-500 mb-2">Address</h3>
                        <p className="text-body-sm whitespace-pre-line">
                          {settings.address}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="section-padding bg-cream-100">
        <div className="container-narrow text-center">
          <div className="card bg-white max-w-xl mx-auto">
            <h2 className="heading-sm text-forest-500 mb-4">Response Time</h2>
            <p className="text-body-sm">
              We typically respond to messages within 24-48 business hours. If you
              need immediate assistance, please call us or reach out through social
              media.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
