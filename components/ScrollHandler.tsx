"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const offset = 280;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
  }, [searchParams]);

  return null;
}
