import { Metadata } from "next";
import { HeartIcon } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Get Help",
  description:
    "Learn how Chosen and Cherished can help you. Diapers, wipes, clothing and essential baby items for local mothers and families.",
};

const BOLDSIGN_URL = "https://app.boldsign.com/document/sign-bulk-links/?documentId=bb63d999-a396-410b-9d98-3aba278cc34fs_Rd6NF";

export default function GetHelpPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="container-narrow text-center">
          <p className="font-script text-3xl md:text-4xl text-rose-400 mb-1 leading-none">We&apos;re Here for You</p>
          <h1 className="heading-lg text-forest-500 mb-2 leading-tight">Get Help</h1>
          <p className="text-lg text-warm-700 max-w-2xl mx-auto leading-relaxed">
            If you&apos;re a local mother or family experiencing financial hardship, unexpected circumstances, or just starting over, we&apos;d love to help.
          </p>
        </div>
      </section>

      {/* HELP INFORMATION (not contact info) */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-forest-500 font-semibold mb-3">
                What We Provide
              </h2>
              <p className="text-warm-700 text-base md:text-lg leading-relaxed">
                We provide essential baby items at no cost to local mothers and families in need, including:
              </p>
              <ul className="mt-4 space-y-2 text-warm-700 text-base leading-relaxed list-disc list-inside">
                <li>Diapers (all sizes) and baby wipes</li>
                <li>New or gently used baby clothing (0&ndash;24 months)</li>
                <li>Bottles, pacifiers and baby hygiene products</li>
                <li>Safe-sleep essentials such as Pack &rsquo;n Plays and bassinets</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-forest-500 font-semibold mb-3">
                How It Works
              </h2>
              <p className="text-warm-700 text-base md:text-lg leading-relaxed">
                Submit a request through the link below. A member of our team will follow up with you to coordinate delivery or pickup of the items you need. All requests are handled confidentially and with care.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-forest-500 font-semibold mb-3">
                Who We Serve
              </h2>
              <p className="text-warm-700 text-base md:text-lg leading-relaxed">
                Pregnant mothers and families with infants and toddlers (0&ndash;24 months) in our local community who are experiencing financial hardship, unexpected circumstances, or are simply starting over.
              </p>
            </div>

            {/* Request Assistance button -> Boldsign */}
            <div className="pt-4 text-center">
              <a
                href={BOLDSIGN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-rose-400 hover:bg-rose-500 text-white text-xs md:text-sm font-semibold tracking-[0.2em] rounded-md transition-colors"
              >
                REQUEST ASSISTANCE &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
