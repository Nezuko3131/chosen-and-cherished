"use client";

import { usePathname } from "next/navigation";

/* Site-wide banner image. Only shown on the home page (`/`).
   Other routes skip it so the user lands directly on the page content. */
export default function Banner() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return (
    <img
      src="/banner.png"
      alt="Chosen and Cherished"
      className="w-full block"
    />
  );
}
