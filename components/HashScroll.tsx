"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const element = document.querySelector(hash);
      if (!element) return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const header = document.querySelector("header");
          const headerHeight = header?.getBoundingClientRect().height ?? 0;
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: elementTop - headerHeight - 16,
            behavior: "instant",
          });
        });
      });
    };

    // Run on mount after content is rendered
    scrollToHash();

    // Handle hash changes
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
