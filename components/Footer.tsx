import Link from "next/link";

const footerLinks = {
  explore: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "News & Stories", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Donate", href: "/donate" },
    { name: "Baby Wishlist", href: "/wishlist" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-500 text-cream-100">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage-400 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">C</span>
              </div>
              <span className="text-cream-50 font-serif text-xl font-semibold">
                Chosen and Cherished
              </span>
            </div>
            <p className="text-cream-200 text-body-sm max-w-md leading-relaxed">
              Providing essential baby supplies, resources, and compassionate support
              to pregnant mothers and families experiencing financial hardship.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-cream-50 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-sage-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-cream-50 font-semibold mb-4">Support Our Work</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-sage-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/donate" className="btn-secondary text-sm py-2 px-4">
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-forest-400">
          <p className="text-cream-300 text-sm text-center">
            © {new Date().getFullYear()} Chosen and Cherished. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
