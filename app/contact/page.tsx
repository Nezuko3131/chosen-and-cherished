import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Chosen and Cherished. We're here to help and answer any questions you may have.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section id="contact" className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <span className="text-5xl mb-6 block">💬</span>
          <h1 className="heading-lg text-forest-500 mb-4">Contact Us</h1>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have questions, need support,
            or want to get involved, reach out and we&apos;ll get back to you soon.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="card max-w-xl mx-auto">
            <h2 className="heading-md text-forest-500 mb-8 text-center">Get in Touch</h2>
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="text-3xl">✉️</span>
                <div>
                  <h3 className="heading-sm text-forest-500 mb-2">Email</h3>
                  <a
                    href="mailto:hello@chosen-and-cherished.org"
                    className="text-sage-400 hover:text-sage-500 transition-colors text-lg"
                  >
                    hello@chosen-and-cherished.org
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <h3 className="heading-sm text-forest-500 mb-2">Phone</h3>
                  <a
                    href="tel:352-433-8164"
                    className="text-sage-400 hover:text-sage-500 transition-colors text-lg"
                  >
                    352-433-8164
                  </a>
                </div>
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
