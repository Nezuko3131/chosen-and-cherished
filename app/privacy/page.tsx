import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Chosen and Cherished nonprofit organization.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section id="privacy" className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <h1 className="heading-lg text-forest-500 mb-4">Privacy Policy</h1>
          <p className="text-warm-600">Last updated: October 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none text-warm-700 space-y-8">
            <h2>Introduction</h2>
            <p>
              Chosen and Cherished (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our
              website.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways, including:
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number,
                and other contact information you voluntarily provide.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and
                use our website.
              </li>
              <li>
                <strong>Donation Information:</strong> If you make a donation, we
                may collect payment information through our secure third-party
                payment processor.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you information about our programs and events</li>
              <li>Process donations and send donation confirmations</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul>
              <li>
                Service providers who assist in operating our website and programs
              </li>
              <li>Legal authorities when required by law</li>
              <li>
                Third-party platforms (such as Zeffy for donations) subject to
                their privacy policies
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of transmission
              over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your
              personal information, including the right to access, correct, or
              delete your data. To exercise these rights, please contact us using
              the information below.
            </p>

            <h2>External Links</h2>
            <p>
              Our website may contain links to external sites, including Amazon
              Wishlist and Zeffy. We are not responsible for the privacy practices
              of these third-party sites.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under
              13 without parental consent.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new policy on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Email: hello@chosen-and-cherished.org</li>
              <li>
                Form:{" "}
                <a href="/contact#contact" className="text-sage-400 hover:text-sage-500">
                  Contact Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
