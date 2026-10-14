import { Metadata } from "next";
import { HeartIcon } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Chosen and Cherished with a financial donation. Every contribution helps provide essential baby supplies to families in need.",
};

const ZEFFY_URL = "https://www.zeffy.com/en-US/donation-form/help-a-welcome-a-baby";

const HeartIcon2 = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M32 56s-20-12.8-20-28a12 12 0 0 1 20-8 12 12 0 0 1 20 8c0 15.2-20 28-20 28z" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 14h6l4 28h28" />
    <path d="M20 14l-2-6H8" />
    <circle cx="26" cy="50" r="3" />
    <circle cx="44" cy="50" r="3" />
    <path d="M20 22h32l-4 16H22" />
  </svg>
);

const BoxIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 20l24-10 24 10v24l-24 10-24-10z" />
    <path d="M8 20l24 10 24-10" />
    <path d="M32 30v24" />
    <path d="M16 14l16 6 16-6" />
  </svg>
);

export default function DonatePage() {
  return (
    <>
      {/* HERO - split: text left, baby-hands photo right */}
      <section className="bg-cream-100 pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-24 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 items-center">
            <div className="md:col-span-5 text-center md:text-left pr-0 md:pr-2">
              <p className="font-script text-3xl md:text-4xl text-rose-400 mb-1 leading-none">Give Hope</p>
              <h1 className="heading-lg text-forest-500 mb-2 leading-tight">Make a Difference Today</h1>
              <p className="text-xs md:text-sm tracking-[0.2em] text-sage-500 uppercase mb-5 font-medium">
                Support Local Mothers and Babies
              </p>
              <p className="text-lg text-warm-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Your generosity helps us provide essential baby items to families in need right here in our community. Every donation &mdash; big or small &mdash; helps a mother choose hope and give her baby a brighter tomorrow.
              </p>
            </div>
            <div className="md:col-span-7 flex justify-center md:justify-end relative">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border-[6px] border-rose-100 shadow-[0_8px_30px_rgb(31,58,46,0.10)] ring-2 ring-sage-400/60">
                <img
                  src="/donate/hero.jpg"
                  alt="Tiny baby hand held by a parent's loving hand"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
                />
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <HeartIcon className="w-8 h-8 md:w-10 md:h-10 text-rose-300/80 drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 WAYS TO GIVE - cards with rose icons */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Give Financially */}
            <div className="flex flex-col items-center text-center bg-rose-50/40 rounded-2xl p-8 md:p-10 border border-rose-100/60">
              <span className="w-20 h-20 mb-6 flex items-center justify-center text-rose-400 p-4">
                <HeartIcon2 />
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-forest-500 font-semibold mb-4">
                Give Financially
              </h3>
              <p className="text-warm-700 text-base leading-relaxed mb-6 flex-1">
                A gift of $5, $10, or $25 can help us provide diapers, wipes, and essential supplies to mothers and families when they need them most. Every contribution, no matter the amount, makes a meaningful difference.
              </p>
              <a
                href={ZEFFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-xs font-semibold tracking-[0.2em] rounded-md transition-colors"
              >
                DONATE NOW &rarr;
              </a>
            </div>

            {/* Card 2: Shop Our Wishlist */}
            <div className="flex flex-col items-center text-center bg-rose-50/40 rounded-2xl p-8 md:p-10 border border-rose-100/60">
              <span className="w-20 h-20 mb-6 flex items-center justify-center text-rose-400 p-4">
                <CartIcon />
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-forest-500 font-semibold mb-4">
                Shop Our Wishlist
              </h3>
              <p className="text-warm-700 text-base leading-relaxed mb-6 flex-1">
                Help us support mothers and families by sending essential items directly through our Amazon Wish List. Every donation helps provide the supplies families need most.
              </p>
              <a
                href="/wishlist"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-xs font-semibold tracking-[0.2em] rounded-md transition-colors"
              >
                VIEW WISHLIST &rarr;
              </a>
            </div>

            {/* Card 3: Donate Items */}
            <div className="flex flex-col items-center text-center bg-rose-50/40 rounded-2xl p-8 md:p-10 border border-rose-100/60">
              <span className="w-20 h-20 mb-6 flex items-center justify-center text-rose-400 p-4">
                <BoxIcon />
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-forest-500 font-semibold mb-4">
                Donate Items
              </h3>
              <p className="text-warm-700 text-base leading-relaxed mb-6 flex-1">
                New or gently used baby items can be dropped off at Belleview Sports Complex.
              </p>
              <a
                href="/donate#drop-off"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-xs font-semibold tracking-[0.2em] rounded-md transition-colors"
              >
                DROP-OFF INFO &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Drop-off Info */}
      <section id="drop-off" className="bg-cream-100 py-12 md:py-16 scroll-mt-20">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl text-forest-500 mb-2 text-center">Drop-Off Location</h2>
          <p className="text-xs md:text-sm tracking-[0.2em] text-sage-500 uppercase mb-10 text-center font-medium">
            Bringing Items In Person
          </p>
          <div className="card bg-white max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-forest-500 font-semibold mb-2">Belleview Sports Complex</h3>
                <p className="text-warm-700 text-base leading-relaxed">
                  We accept new and gently used baby items at our community drop-off location.
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.15em] text-warm-500 uppercase font-semibold mb-2">Items We Need Most</h4>
                <p className="text-warm-700 text-base leading-relaxed">
                  We&apos;re grateful for donations of new diapers (all sizes), baby wipes, gently used or new baby clothing (0–24 months), bottles, pacifiers, baby hygiene products, and safe-sleep essentials such as Pack &rsquo;n Plays and bassinets.
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.15em] text-warm-500 uppercase font-semibold mb-2">Questions</h4>
                <p className="text-warm-700 text-base leading-relaxed">
                  Call or text us at <a href="tel:352-433-8164" className="text-rose-400 hover:text-rose-500 font-medium">352-433-8164</a> or email <a href="mailto:hello@chosen-and-cherished.org" className="text-rose-400 hover:text-rose-500 font-medium break-all">hello@chosen-and-cherished.org</a> to coordinate a drop-off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Script divider */}
      <section className="bg-cream-50 py-10 md:py-12">
        <div className="container-narrow text-center px-4">
          <p className="font-script text-2xl md:text-3xl lg:text-4xl text-rose-400 leading-snug">
            Sometimes helping a mother choose hope<br />starts with something as simple as a pack of diapers
          </p>
        </div>
      </section>
    </>
  );
}
