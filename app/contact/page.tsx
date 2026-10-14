import { Metadata } from "next";
import { HeartIcon } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Chosen and Cherished. Phone, text, WhatsApp, email, or visit our drop-off location in Belleview.",
};

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream-100 pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-24 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 items-center">
            <div className="md:col-span-5 text-center md:text-left pr-0 md:pr-2">
              <p className="font-script text-3xl md:text-4xl text-rose-400 mb-1 leading-none">Get in Touch</p>
              <h1 className="heading-lg text-forest-500 mb-2 leading-tight">We are here for you</h1>
              <p className="text-xs md:text-sm tracking-[0.2em] text-sage-500 uppercase mb-5 font-medium">
                We&apos;d love to hear from you
              </p>
              <p className="text-lg text-warm-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
                We&apos;re here to listen, support, and make a difference. Whether you have questions, are interested in partnering with us, or would like to make a donation, we&apos;d love to hear from you. Together, we can create meaningful change and build a stronger, more supportive community for mothers and families.
              </p>
            </div>
            <div className="md:col-span-7 flex justify-center md:justify-end relative">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border-[6px] border-rose-100 shadow-[0_8px_30px_rgb(31,58,46,0.10)] ring-2 ring-sage-400/60">
                <img src="/contact/hero.jpg" alt="Lavender bouquet with a handwritten note on a wooden table" className="w-full h-64 md:h-80 lg:h-96 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-5 space-y-8">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center p-3"><PhoneIcon /></span>
                <div>
                  <h3 className="font-serif text-base md:text-lg text-forest-500 font-semibold tracking-[0.05em] mb-1">PHONE / TEXT / WHATSAPP</h3>
                  <a href="tel:352-433-8164" className="text-warm-700 hover:text-rose-400 transition-colors text-base">352-433-8164</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center p-3"><EmailIcon /></span>
                <div>
                  <h3 className="font-serif text-base md:text-lg text-forest-500 font-semibold tracking-[0.05em] mb-1">EMAIL</h3>
                  <a href="mailto:hello@chosen-and-cherished.org" className="text-warm-700 hover:text-rose-400 transition-colors text-base break-all">hello@chosen-and-cherished.org</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center p-3"><PinIcon /></span>
                <div>
                  <h3 className="font-serif text-base md:text-lg text-forest-500 font-semibold tracking-[0.05em] mb-1">DROP-OFF LOCATION</h3>
                  <p className="text-warm-700 text-base leading-relaxed">
                    Belleview Sports Complex<br />
                    <a href="/donate#drop-off" className="text-rose-400 hover:text-rose-500 underline text-sm">(Details on donation page)</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
