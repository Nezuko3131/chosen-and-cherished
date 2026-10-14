import { Metadata } from "next";
import { HeartIcon } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Learn how you can support Chosen and Cherished through donations, partnerships, and spreading the word.",
};

const GiftIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="10" y="22" width="44" height="32" rx="2" />
    <path d="M22 22v-4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4" />
    <path d="M10 32h44" />
    <path d="M32 18v36" />
  </svg>
);

const PeopleIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="22" cy="22" r="8" />
    <circle cx="44" cy="22" r="6" />
    <path d="M8 50c0-7 6-12 14-12s14 5 14 12" />
    <path d="M40 50c0-5 4-9 10-9s10 4 10 9" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 24v16l24 8V16z" />
    <path d="M34 20a8 8 0 0 1 0 24" />
    <path d="M40 16a14 14 0 0 1 0 32" />
    <path d="M16 40v8a4 4 0 0 0 4 4h4" />
  </svg>
);

export default function GetInvolvedPage() {
  return (
    <>
      {/* HERO - split: text left, heart-hands photo right */}
      <section className="bg-cream-100 pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-24 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 items-center">
            <div className="md:col-span-5 text-center md:text-left pr-0 md:pr-2">
              <p className="font-script text-3xl md:text-4xl text-rose-400 mb-1 leading-none">Get Involved</p>
              <h1 className="heading-lg text-forest-500 mb-2 leading-tight">Join Our Mission</h1>
              <p className="text-xs md:text-sm tracking-[0.2em] text-sage-500 uppercase mb-5 font-medium">
                There Are Many Ways to Make a Difference
              </p>
              <p className="text-lg text-warm-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Whether you&apos;re an individual, business, church or community organization, your support helps us reach more mothers and babies in need.
              </p>
            </div>
            <div className="md:col-span-7 flex justify-center md:justify-end relative">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border-[6px] border-rose-100 shadow-[0_8px_30px_rgb(31,58,46,0.10)] ring-2 ring-sage-400/60">
                <img
                  src="/get-involved/hero.jpg"
                  alt="Two pairs of hands forming a heart shape together"
                  className="w-full aspect-[8/5] object-cover object-center"
                />
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <HeartIcon className="w-8 h-8 md:w-10 md:h-10 text-rose-300/80 drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 WAYS TO HELP - cards with rose icons */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Host a Donation Drive */}
            <div className="flex flex-col items-center text-center bg-rose-50/40 rounded-2xl p-8 md:p-10 border border-rose-100/60">
              <span className="w-20 h-20 mb-6 flex items-center justify-center text-rose-400 p-4">
                <GiftIcon />
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-forest-500 font-semibold tracking-[0.05em] mb-4">
                HOST A DONATION DRIVE
              </h3>
              <p className="text-warm-700 text-base leading-relaxed mb-6 flex-1">
                Collect baby items at your workplace, church, school or organization.
              </p>
              <a href="/donate" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-xs font-semibold tracking-[0.2em] rounded-md transition-colors">
                LEARN MORE &rarr;
              </a>
            </div>

            {/* Card 2: Partner With Us */}
            <div className="flex flex-col items-center text-center bg-rose-50/40 rounded-2xl p-8 md:p-10 border border-rose-100/60">
              <span className="w-20 h-20 mb-6 flex items-center justify-center text-rose-400 p-4">
                <PeopleIcon />
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-forest-500 font-semibold tracking-[0.05em] mb-4">
                PARTNER WITH US
              </h3>
              <p className="text-warm-700 text-base leading-relaxed mb-6 flex-1">
                We welcome partnerships with local businesses, churches and community groups.
              </p>
              <a href="/contact?subject=partnership" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-xs font-semibold tracking-[0.2em] rounded-md transition-colors">
                LEARN MORE &rarr;
              </a>
            </div>

            {/* Card 3: Spread the Word */}
            <div className="flex flex-col items-center text-center bg-rose-50/40 rounded-2xl p-8 md:p-10 border border-rose-100/60">
              <span className="w-20 h-20 mb-6 flex items-center justify-center text-rose-400 p-4">
                <MegaphoneIcon />
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-forest-500 font-semibold tracking-[0.05em] mb-4">
                SPREAD THE WORD
              </h3>
              <p className="text-warm-700 text-base leading-relaxed mb-6 flex-1">
                Follow us on social media and share our mission with your network.
              </p>
              <div className="flex items-center gap-3 justify-center">
                <a
                  href="https://www.instagram.com/chosenandcherishedorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-400 hover:bg-rose-500 text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/chosenandcherishedorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-400 hover:bg-rose-500 text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Script divider */}
      <section className="bg-cream-50 py-10 md:py-12">
        <div className="container-narrow text-center px-4">
          <p className="font-script text-2xl md:text-3xl lg:text-4xl text-rose-400 leading-snug">
            A stronger community is built<br />when we support each other
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-narrow text-center px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Every Contribution Matters</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you can give financially, donate items, or simply share our story,
            you&apos;re making a real difference in the lives of families in your community.
          </p>
          <a href="/donate" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sage-400 font-medium rounded-lg transition-all duration-200 hover:bg-cream-50">
            Donate
          </a>
        </div>
      </section>
    </>
  );
}
