import { LeafBranch } from "./Decor";

/* Top tagline bar: leaf branch - script text - leaf branch. */
/* Sits above the header, full width, cream background. */
export default function Tagline() {
  return (
    <div className="w-full bg-cream-100 border-b border-forest-500/10">
      <div className="container-wide flex items-center justify-center gap-4 md:gap-8 py-3 md:py-4">
        <LeafBranch className="hidden md:block h-6 lg:h-8 w-32 lg:w-40 text-forest-500 opacity-80" />
        <p className="font-script text-2xl md:text-3xl lg:text-4xl text-forest-500 whitespace-nowrap text-center">
          Mothers <span className="text-rose-400" aria-label="heart">&#9829;</span>{" "}
          Babies <span className="text-rose-400" aria-label="heart">&#9829;</span>{" "}
          Brighter Tomorrows
        </p>
        <LeafBranch className="hidden md:block h-6 lg:h-8 w-32 lg:w-40 text-forest-500 opacity-80 scale-x-[-1]" />
      </div>
    </div>
  );
}
