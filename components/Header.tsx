import Link from "next/link";
import { HeartIcon, LogoMark } from "./Decor";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/get-help", label: "GET HELP" },
  { href: "/get-involved", label: "GET INVOLVED" },
  { href: "/contact", label: "CONTACT" },
];

/* Header: logo + name on the left, centered nav, rose-pink DONATE button on the right. */
/* Social icons are inline SVGs to avoid extra dependencies. */
export default function Header() {
  return (
    <header className="w-full bg-white border-b border-forest-500/10">
      <div className="container-wide flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Chosen and Cherished"
            className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0"
          />
          <div className="leading-tight">
            <p className="font-serif text-lg md:text-xl text-forest-500 font-semibold">Chosen &amp; Cherished</p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] text-warm-500 uppercase">A Faith-Based Nonprofit</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs xl:text-sm font-medium tracking-[0.15em] text-forest-500 hover:text-rose-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 flex-shrink-0">
          <a href="https://www.facebook.com" aria-label="Facebook" className="text-forest-500 hover:text-rose-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.15 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.78 8.43-4.93 8.43-9.93z"/></svg>
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="text-forest-500 hover:text-rose-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33 0 7.05.07 5.77.13 4.9.33 4.14.63a5.85 5.85 0 00-2.12 1.38A5.85 5.85 0 00.63 4.14C.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s0 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.73 1.46 1.38 2.12a5.85 5.85 0 002.12 1.38c.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67 0 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.85 5.85 0 002.12-1.38 5.85 5.85 0 001.38-2.12c.3-.76.5-1.63.56-2.91C23.99 15.67 24 15.26 24 12s0-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.85 5.85 0 00-1.38-2.12A5.85 5.85 0 0019.86.63c-.76-.3-1.63-.5-2.91-.56C15.67 0 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-10.4a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"/></svg>
          </a>
          <Link
            href="/donate#make-a-donation"
            className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-xs md:text-sm font-medium tracking-[0.15em] rounded-md transition-colors"
          >
            <HeartIcon className="w-4 h-4" />
            DONATE
          </Link>
        </div>
      </div>
      <nav className="lg:hidden border-t border-forest-500/10 bg-white">
        <div className="container-wide flex items-center gap-4 py-2 overflow-x-auto text-[11px] tracking-[0.15em] font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-forest-500 hover:text-rose-400 whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
