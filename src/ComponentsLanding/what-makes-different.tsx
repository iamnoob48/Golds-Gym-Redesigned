/* ═══════════════════════════════════════════════════════
   What Makes Us Different — Infinite Scrolling Marquee
   Premium dark glassmorphism + electric blue aesthetic
   ═══════════════════════════════════════════════════════ */

/* ─── SVG Line Icons (Electric Blue) ─── */
const GymIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="6" height="12" rx="1" />
    <rect x="22" y="10" width="6" height="12" rx="1" />
    <line x1="10" y1="16" x2="22" y2="16" />
    <line x1="2" y1="14" x2="4" y2="14" />
    <line x1="2" y1="18" x2="4" y2="18" />
    <line x1="28" y1="14" x2="30" y2="14" />
    <line x1="28" y1="18" x2="30" y2="18" />
  </svg>
);

const CityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="12" width="8" height="16" rx="1" />
    <rect x="18" y="6" width="8" height="22" rx="1" />
    <line x1="9" y1="16" x2="11" y2="16" />
    <line x1="9" y1="20" x2="11" y2="20" />
    <line x1="9" y1="24" x2="11" y2="24" />
    <line x1="21" y1="10" x2="23" y2="10" />
    <line x1="21" y1="14" x2="23" y2="14" />
    <line x1="21" y1="18" x2="23" y2="18" />
    <line x1="21" y1="22" x2="23" y2="22" />
    <line x1="2" y1="28" x2="30" y2="28" />
  </svg>
);

const MapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="4,6 12,4 20,8 28,4 28,26 20,28 12,24 4,28" />
    <line x1="12" y1="4" x2="12" y2="24" />
    <line x1="20" y1="8" x2="20" y2="28" />
  </svg>
);

const PTIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="8" r="4" />
    <path d="M8 28v-6a8 8 0 0 1 16 0v6" />
    <path d="M22 16l4-4" />
    <path d="M10 16l-4-4" />
    <circle cx="26" cy="12" r="2" />
    <circle cx="6" cy="12" r="2" />
  </svg>
);

const CorporateIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="8" width="24" height="20" rx="2" />
    <path d="M12 8V6a4 4 0 0 1 8 0v2" />
    <line x1="4" y1="18" x2="28" y2="18" />
    <rect x="13" y="15" width="6" height="6" rx="1" />
  </svg>
);

const GroupIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="8" r="3" />
    <circle cx="22" cy="8" r="3" />
    <circle cx="16" cy="10" r="3" />
    <path d="M4 26v-4a6 6 0 0 1 6-6" />
    <path d="M28 26v-4a6 6 0 0 0-6-6" />
    <path d="M10 26v-5a6 6 0 0 1 12 0v5" />
  </svg>
);

const TravelIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="12" />
    <ellipse cx="16" cy="16" rx="6" ry="12" />
    <line x1="4" y1="12" x2="28" y2="12" />
    <line x1="4" y1="20" x2="28" y2="20" />
    <line x1="16" y1="4" x2="16" y2="28" />
  </svg>
);

/* ─── Marquee Data ─── */
const ITEMS = [
  { label: "156 Gyms", icon: GymIcon },
  { label: "95 Cities", icon: CityIcon },
  { label: "26 States", icon: MapIcon },
  { label: "Personal Training Program", icon: PTIcon },
  { label: "Corporate Wellness Program", icon: CorporateIcon },
  { label: "Group Exercise Program", icon: GroupIcon },
  { label: "Domestic & International Travel Pass", icon: TravelIcon },
];


/* ─── Marquee Card ─── */
function MarqueeCard({ item }: { item: (typeof ITEMS)[0] }) {
  const Icon = item.icon;
  return (
    <div className="group relative mx-3 flex-shrink-0 cursor-default select-none">
      {/* Blue radial glow behind card */}
      <div className="absolute -inset-3 rounded-2xl bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center gap-4 rounded-xl border border-[#3B82F6]/[0.12] bg-[#0a0a0a]/80 px-6 py-5 backdrop-blur-md transition-all duration-300 group-hover:border-[#3B82F6]/30 group-hover:bg-[#0d0d0d]/90 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]">
        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#3B82F6]/[0.08] text-[#3B82F6] transition-all duration-300 group-hover:bg-[#3B82F6]/[0.12] group-hover:text-[#60A5FA]">
          <Icon />
        </div>
        {/* Label */}
        <span className="whitespace-nowrap text-[15px] font-semibold tracking-wide text-neutral-300 transition-colors duration-300 group-hover:text-white">
          {item.label}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   Main Marquee Section
   ═══════════════════════════════════ */
export default function WhatMakesDifferent() {
  // Duplicate items for seamless loop
  const repeatedItems = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section
      id="what-makes-different"
      className="relative overflow-hidden bg-black py-20 lg:py-28"
    >
      {/* Subtle top/bottom gradient edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent" />

      {/* Section Header */}
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center lg:px-8">
        <p className="mb-3 text-md font-semibold uppercase tracking-[0.3em] text-yellow-500 font-bold ">
          The Gold's Standard
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          What Makes Us{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
            Different
          </span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative mx-auto max-w-[1400px]">
        {/* Decorative floating equipment */}


        {/* Fade masks on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

        {/* Scrolling track */}
        <div className="marquee-container overflow-hidden">
          <div className="marquee-track flex w-max">
            {repeatedItems.map((item, idx) => (
              <MarqueeCard key={`${item.label}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
