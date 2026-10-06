"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 280;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "instant",
          });
        }
      }
    };

    // Run immediately on mount (after hydration)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash();
      });
    });

    // Also handle hash changes
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
