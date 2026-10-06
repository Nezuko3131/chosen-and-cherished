"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToTarget = () => {
      const hash = window.location.hash;
      
      if (hash) {
        // Has hash - scroll to section
        const element = document.querySelector(hash);
        if (element) {
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
        }
      } else {
        // No hash - scroll to top
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      }
    };

    // Run on mount after content is rendered
    scrollToTarget();

    // Handle hash changes
    window.addEventListener("hashchange", scrollToTarget);

    return () => {
      window.removeEventListener("hashchange", scrollToTarget);
    };
  }, [pathname]);

  return null;
}
