/* Small single leaf - used as edge accent on botanical frames. Very delicate. */
export function SmallLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
      <path d="M 10 2 Q 16 4, 15 13 Q 13 17, 10 17 Q 7 17, 5 13 Q 4 4, 10 2 Z" opacity="0.9" />
      <path d="M 10 4 L 10 16" stroke="#FAF5EE" strokeWidth="0.5" fill="none" opacity="0.5" />
    </svg>
  );
}

/* Small leaf cluster (3 leaves + a tiny stem) - used as corner accent on botanical frames. */
export function LeafCluster({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      {/* tiny stem */}
      <path d="M 4 4 Q 14 12, 24 22" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* 3 small leaves along the stem */}
      <path d="M 8 6 Q 11 3, 14 6 Q 11 9, 8 6 Z" opacity="0.85" />
      <path d="M 16 14 Q 19 11, 22 14 Q 19 17, 16 14 Z" opacity="0.8" />
      <path d="M 22 22 Q 25 19, 28 22 Q 25 25, 22 22 Z" opacity="0.7" />
    </svg>
  );
}

/* Botanical frame - decorative plant accents glued to the EXTERIOR contour of a photo.
   Place 4 leaf clusters at the corners + 4 small leaves at the edge midpoints.
   Children (the photo) should be the only thing rendered inside the relative container. */
export function BotanicalFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      {children}
      {/* Decorative layer - pointer-events-none so it never blocks interaction */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* 4 corner leaf clusters - slightly offset to sit ON the border */}
        <div className="absolute -top-2 -left-2 w-7 h-7 text-sage-500">
          <LeafCluster className="w-full h-full" />
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 text-sage-500">
          <LeafCluster className="w-full h-full rotate-90" />
        </div>
        <div className="absolute -bottom-2 -left-2 w-7 h-7 text-sage-500">
          <LeafCluster className="w-full h-full -rotate-90" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-7 h-7 text-sage-500">
          <LeafCluster className="w-full h-full rotate-180" />
        </div>
        {/* 4 edge midpoint small leaves */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 text-sage-400">
          <SmallLeaf className="w-full h-full" />
        </div>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 text-sage-400">
          <SmallLeaf className="w-full h-full rotate-180" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-4 h-4 text-sage-400">
          <SmallLeaf className="w-full h-full -rotate-90" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-4 h-4 text-sage-400">
          <SmallLeaf className="w-full h-full rotate-90" />
        </div>
      </div>
    </div>
  );
}

/* Tiny botanical sprig - very small, delicate branch with 4 oval leaves.
   Used as the ONLY decoration on the about page photo frames (2 per photo, asymmetric). */
export function TinySprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} fill="currentColor" aria-hidden="true">
      {/* Thin curved stem */}
      <path
        d="M 5 75 Q 20 55, 35 35 T 55 8"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* 4 small oval leaves along the stem */}
      <path d="M 10 68 Q 14 63, 18 68 Q 14 73, 10 68 Z" opacity="0.88" />
      <path d="M 20 54 Q 24 49, 28 54 Q 24 59, 20 54 Z" opacity="0.85" />
      <path d="M 30 40 Q 34 35, 38 40 Q 34 45, 30 40 Z" opacity="0.8" />
      <path d="M 42 24 Q 46 19, 50 24 Q 46 29, 42 24 Z" opacity="0.75" />
      {/* 1 tiny berry at the tip */}
      <circle cx="54" cy="8" r="1.4" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/* Botanical wreath - circular arrangement of hand-drawn style leaves around a photo.
   Creates a floral/leaf frame like the Vecteezy reference. Uses sage green leaves +
   dusty rose berries for organic, watercolor-style decoration. */
export function BotanicalWreath({ className = "" }: { className?: string }) {
  // Helper: leaf shape (lance/almond)
  const Leaf = ({ rotation = 0, size = 1, opacity = 0.9, color = "#8FA876" }: { rotation?: number; size?: number; opacity?: number; color?: string }) => (
    <g transform={`rotate(${rotation}) scale(${size})`} opacity={opacity}>
      <path d="M -10 0 Q 0 -4.5, 10 0 Q 0 4.5, -10 0 Z" fill={color} />
      <path d="M -8 0 L 8 0" stroke="#FAF5EE" strokeWidth="0.4" fill="none" opacity="0.4" />
    </g>
  );
  // Helper: cluster of 2-3 leaves
  const Cluster = ({ rotation = 0, size = 1 }: { rotation?: number; size?: number }) => (
    <g transform={`rotate(${rotation}) scale(${size})`}>
      <Leaf rotation={-20} size={0.9} color="#8FA876" />
      <Leaf rotation={10} size={1} color="#6B7F5C" />
      <Leaf rotation={35} size={0.8} color="#A8C088" opacity={0.85} />
    </g>
  );
  // Helper: berry
  const Berry = () => (
    <g>
      <circle cx="0" cy="0" r="3" fill="#D4A5A0" opacity="0.9" />
      <circle cx="-0.8" cy="-0.8" r="0.8" fill="#F2DDD8" opacity="0.7" />
    </g>
  );

  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" aria-hidden="true">
      {/* Thin circular vine as the wreath base */}
      <circle cx="200" cy="200" r="185" stroke="#6B7F5C" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* 8 leaf clusters at 45-degree intervals around the circle */}
      {/* 12 o'clock */}
      <g transform="translate(200 15)"><Cluster rotation={0} /></g>
      {/* 1:30 */}
      <g transform="translate(331 69)"><Cluster rotation={45} /></g>
      {/* 3 o'clock */}
      <g transform="translate(385 200)"><Cluster rotation={90} /></g>
      {/* 4:30 */}
      <g transform="translate(331 331)"><Cluster rotation={135} /></g>
      {/* 6 o'clock */}
      <g transform="translate(200 385)"><Cluster rotation={180} /></g>
      {/* 7:30 */}
      <g transform="translate(69 331)"><Cluster rotation={225} /></g>
      {/* 9 o'clock */}
      <g transform="translate(15 200)"><Cluster rotation={270} /></g>
      {/* 10:30 */}
      <g transform="translate(69 69)"><Cluster rotation={315} /></g>

      {/* Additional single leaves between clusters (at 22.5° intervals) */}
      <g transform="translate(266 42)"><Leaf rotation={22} size={0.85} color="#A8C088" opacity={0.8} /></g>
      <g transform="translate(358 134)"><Leaf rotation={67} size={0.85} color="#8FA876" opacity={0.85} /></g>
      <g transform="translate(358 266)"><Leaf rotation={112} size={0.85} color="#A8C088" opacity={0.8} /></g>
      <g transform="translate(266 358)"><Leaf rotation={157} size={0.85} color="#8FA876" opacity={0.85} /></g>
      <g transform="translate(134 358)"><Leaf rotation={202} size={0.85} color="#A8C088" opacity={0.8} /></g>
      <g transform="translate(42 266)"><Leaf rotation={247} size={0.85} color="#8FA876" opacity={0.85} /></g>
      <g transform="translate(42 134)"><Leaf rotation={292} size={0.85} color="#A8C088" opacity={0.8} /></g>
      <g transform="translate(134 42)"><Leaf rotation={337} size={0.85} color="#8FA876" opacity={0.85} /></g>

      {/* 4 dusty rose berries as accent at alternating positions */}
      <g transform="translate(200 15)"><Berry /></g>
      <g transform="translate(385 200)"><Berry /></g>
      <g transform="translate(200 385)"><Berry /></g>
      <g transform="translate(15 200)"><Berry /></g>
    </svg>
  );
}

/* Eucalyptus-style leaf branch used in the header, tagline, and section dividers. */
/* Single SVG, recolored via currentColor so callers control tone (forest, sage, cream). */
/* Watercolor eucalyptus branch - naturalistic plant style with oval leaves + small white berries.
   Used as the simple, asymmetric frame around the about page photos. */
/* Compact eucalyptus sprig - small, contained, designed to sit at a photo corner.
   Stem and leaves concentrated in the top-right quadrant of the viewBox so the
   wrapper can be positioned at the photo edge without covering photo content. */
export function EucalyptusBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Main stem - from top-right area, curving gently down-left */}
      <path
        d="M 82 15 Q 65 35, 50 55 T 28 82"
        stroke="#6B7F5C"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Small offshoot */}
      <path
        d="M 50 55 Q 45 62, 42 72"
        stroke="#6B7F5C"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Main leaves - lance shape */}
      <g fill="#8FA876" opacity="0.92">
        <path d="M 76 20 Q 82 16, 86 22 Q 82 28, 76 25 Q 74 23, 76 20 Z" />
        <path d="M 64 36 Q 70 32, 74 38 Q 70 44, 64 41 Q 62 39, 64 36 Z" />
        <path d="M 52 52 Q 58 48, 62 54 Q 58 60, 52 57 Q 50 55, 52 52 Z" />
        <path d="M 40 68 Q 46 64, 50 70 Q 46 76, 40 73 Q 38 71, 40 68 Z" />
      </g>
      {/* Lighter accent leaves */}
      <g fill="#A8C088" opacity="0.7">
        <path d="M 70 28 Q 74 25, 77 29 Q 74 33, 70 31 Q 69 30, 70 28 Z" />
        <path d="M 58 44 Q 62 41, 65 45 Q 62 49, 58 47 Q 57 46, 58 44 Z" />
        <path d="M 46 60 Q 50 57, 53 61 Q 50 65, 46 63 Q 45 62, 46 60 Z" />
      </g>
      {/* 2 small white berries */}
      <g fill="#FFFFFF" opacity="0.9" stroke="#6B7F5C" strokeWidth="0.4">
        <circle cx="55" cy="60" r="1.4" />
        <circle cx="58" cy="63" r="1.1" />
      </g>
    </svg>
  );
}

export function LeafBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* main stem */}
      <path d="M5 30 Q 60 28, 110 30 T 195 30" />
      {/* left side leaves */}
      <g>
        <ellipse cx="25" cy="22" rx="11" ry="5" transform="rotate(-25 25 22)" />
        <ellipse cx="45" cy="38" rx="11" ry="5" transform="rotate(20 45 38)" />
        <ellipse cx="65" cy="22" rx="11" ry="5" transform="rotate(-22 65 22)" />
        <ellipse cx="85" cy="38" rx="11" ry="5" transform="rotate(22 85 38)" />
      </g>
      {/* right side leaves */}
      <g>
        <ellipse cx="115" cy="22" rx="11" ry="5" transform="rotate(22 115 22)" />
        <ellipse cx="135" cy="38" rx="11" ry="5" transform="rotate(-20 135 38)" />
        <ellipse cx="155" cy="22" rx="11" ry="5" transform="rotate(25 155 22)" />
        <ellipse cx="175" cy="38" rx="11" ry="5" transform="rotate(-22 175 38)" />
      </g>
    </svg>
  );
}

/* Single heart icon, used in tagline, donate button, and empty CTAs. */
export function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7-4.5-9.5-9C.6 8.5 2 4 6 4c2 0 3.4 1.1 4.2 2.4C11 5.1 12.4 4 14.4 4c4 0 5.4 4.5 3.5 8-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

/* Outline heart for the right-side of the hero (decorative, large, transparent stroke). */
export function HeartOutline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M12 21s-7-4.5-9.5-9C.6 8.5 2 4 6 4c2 0 3.4 1.1 4.2 2.4C11 5.1 12.4 4 14.4 4c4 0 5.4 4.5 3.5 8-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

/* Logo: a mother-and-child silhouette in a soft circle with two leaf branches. */
/* Pure SVG, recolorable via currentColor. No external image dependency. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {/* soft circle background */}
      <circle cx="40" cy="40" r="38" fill="#F5EDE3" stroke="#1F3A2E" strokeWidth="1.2" />
      {/* leaves top-left and top-right */}
      <g fill="none" stroke="#1F3A2E" strokeWidth="1.2" strokeLinecap="round">
        <path d="M18 18 Q 22 12, 28 14" />
        <ellipse cx="22" cy="16" rx="3" ry="1.4" transform="rotate(-30 22 16)" />
        <ellipse cx="27" cy="13" rx="3" ry="1.4" transform="rotate(-15 27 13)" />
        <path d="M62 18 Q 58 12, 52 14" />
        <ellipse cx="58" cy="16" rx="3" ry="1.4" transform="rotate(30 58 16)" />
        <ellipse cx="53" cy="13" rx="3" ry="1.4" transform="rotate(15 53 13)" />
      </g>
      {/* mother silhouette (head + body) */}
      <g fill="#1F3A2E">
        <circle cx="34" cy="34" r="6" />
        <path d="M22 58 Q 22 44, 34 42 Q 46 44, 46 58 Z" />
        {/* baby in arms */}
        <circle cx="48" cy="46" r="4" />
        <path d="M40 58 Q 40 50, 48 50 Q 56 50, 56 58 Z" />
      </g>
      {/* small heart */}
      <path d="M40 26 c -1.2 -2 -4 -2 -4 .8 c 0 2 4 4 4 4 c 0 0 4 -2 4 -4 c 0 -2.8 -2.8 -2.8 -4 -0.8 z" fill="#C97A78" />
    </svg>
  );
}
