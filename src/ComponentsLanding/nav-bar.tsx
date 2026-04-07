import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, CaretDown } from "@phosphor-icons/react";

/* ─── Type Definitions ─── */
interface NavChild {
  name: string;
  link: string;
}

interface NavItem {
  name: string;
  link: string;
  children?: NavChild[];
}

interface DropdownProps {
  items: NavChild[];
  isOpen: boolean;
}

interface NavLinkProps {
  item: NavItem;
  idx: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

/* ─── Nav Data ─── */
const NAV_ITEMS: NavItem[] = [
  {
    name: "Get Started",
    link: "#",
    children: [
      { name: "Our Gyms India", link: "#gyms-india" },
      { name: "Our Gyms Nepal", link: "#gyms-nepal" },
      { name: "Buy Membership Now", link: "#membership" },
      { name: "Blogs", link: "#blogs" },
      { name: "Our Events", link: "#events" },
      { name: "Newsletter", link: "#newsletter" },
    ],
  },
  {
    name: "Fitness Institute – GGFI",
    link: "#ggfi",
    children: [
      { name: "About GGFI", link: "#ggfi-about" },
      { name: "Our Locations", link: "#ggfi-locations" },
      { name: "Courses Offered", link: "#ggfi-courses" },
      { name: "Buy a Course", link: "#ggfi-buy" },
      { name: "Book a Demo Class", link: "#ggfi-demo" },
    ],
  },
  { name: "Gallery", link: "#gallery" },
  {
    name: "Programs",
    link: "#programs",
    children: [
      { name: "Personal Training", link: "#personal-training" },
      { name: "Group Programs", link: "#group" },
      { name: "Corporate Wellness", link: "#corporate-wellness" },
      { name: "Corporate Memberships", link: "#corporate-members" },
    ],
  },
  {
    name: "Franchise",
    link: "#franchise",
    children: [
      { name: "Own a Gold's Gym", link: "#own-franchise" },
    ],
  },
];

const MORE_ITEMS: NavItem[] = [
  { name: "Associations & Advertising", link: "#advertising" },
  {
    name: "Convention",
    link: "#convention",
    children: [
      { name: "Bangkok 2023", link: "#bangkok" },
      { name: "Dubai 2022", link: "#dubai" },
    ],
  },
  { name: "Contact Us", link: "#contact" },
];

/* ─── Dropdown Component ─── */
function Dropdown({ items, isOpen }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 top-full z-50 mt-2 min-w-[220px] overflow-hidden rounded-xl border border-[#D4AF37]/10 bg-[#111111] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        >
          <div className="py-1.5">
            {items.map((child) => (
              <a
                key={child.name}
                href={child.link}
                className="block px-4 py-2.5 text-[13px] font-medium text-neutral-300 transition-colors duration-150 hover:bg-[#D4AF37]/[0.08] hover:text-[#D4AF37]"
              >
                {child.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── NavLink (with optional dropdown) ─── */
function NavLink({ item, idx, hovered, setHovered }: NavLinkProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Type the ref so it accepts the ID returned by setTimeout, or null
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasChildren = item.children && item.children.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(idx);
    if (hasChildren) setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={item.link}
        className="relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide text-neutral-300 transition-colors duration-200 hover:text-white"
        id={`nav-link-${item.name.toLowerCase().replace(/[\s–&]+/g, "-")}`}
      >
        {hovered === idx && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 rounded-full bg-[#D4AF37]/[0.10] ring-1 ring-[#D4AF37]/15"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">{item.name}</span>
        {hasChildren && (
          <CaretDown
            size={12}
            weight="bold"
            className={`relative z-10 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
              }`}
          />
        )}
      </a>
      {hasChildren && <Dropdown items={item.children} isOpen={dropdownOpen} />}
    </div>
  );
}

/* ─── Main Navbar ─── */
export default function NavBar() {
  // Add <number | null> so TS knows these state variables can hold numbers
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ─── Mobile Accordion State ─── */
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const allMobileItems = [...NAV_ITEMS, ...MORE_ITEMS];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#D4AF37]/10 shadow-[0_4px_30px_rgba(212,175,55,0.06)]"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        {/* ─── Logo ─── */}
        <a href="#" className="group relative flex shrink-0 items-center gap-2.5" id="nav-logo">
          <div className="relative">
            <img
              src="/images/golds-gym-logo.png"
              alt="Gold's Gym"
              className="h-11 w-11 rounded-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[0_0_18px_3px_rgba(212,175,55,0.3)]" />
          </div>
          <span className="hidden text-base font-bold tracking-wider text-white sm:block">
            GOLD'S <span className="text-yellow-400">GYM</span>
          </span>
        </a>

        {/* ─── Desktop Navigation ─── */}
        <motion.div
          onMouseLeave={() => setHovered(null)}
          className="hidden items-center gap-0.5 lg:flex"
          id="desktop-nav"
        >
          {NAV_ITEMS.map((item, idx) => (
            <NavLink
              key={item.name}
              item={item}
              idx={idx}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}

          {/* ─── More Dropdown ─── */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
              setHovered(NAV_ITEMS.length);
              setMoreOpen(true);
            }}
            onMouseLeave={() => {
              moreTimeoutRef.current = setTimeout(() => setMoreOpen(false), 150);
            }}
          >
            <button
              className="relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide text-neutral-300 transition-colors duration-200 hover:text-white"
              id="nav-more-toggle"
            >
              {hovered === NAV_ITEMS.length && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-[#D4AF37]/[0.10] ring-1 ring-[#D4AF37]/15"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">More</span>
              <CaretDown
                size={12}
                weight="bold"
                className={`relative z-10 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 top-full z-50 mt-2 min-w-[260px] overflow-hidden rounded-xl border border-[#D4AF37]/10 bg-[#111111] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                >
                  <div className="py-1.5">
                    {MORE_ITEMS.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.link}
                          className="block px-4 py-2.5 text-[13px] font-medium text-neutral-300 transition-colors duration-150 hover:bg-[#D4AF37]/[0.08] hover:text-[#D4AF37]"
                        >
                          {item.name}
                          {item.children && (
                            <span className="ml-1 text-[10px] text-neutral-500">▸</span>
                          )}
                        </a>
                        {item.children && (
                          <div className="border-l border-[#D4AF37]/10 ml-4">
                            {item.children.map((child) => (
                              <a
                                key={child.name}
                                href={child.link}
                                className="block px-4 py-2 text-[12px] text-neutral-400 transition-colors duration-150 hover:bg-[#D4AF37]/[0.06] hover:text-[#D4AF37]"
                              >
                                {child.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ─── Right Side: CTA + Mobile Toggle ─── */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#free-trial"
            id="nav-cta-trial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-full bg-[#D4AF37] px-5 py-2 text-[13px] font-semibold tracking-wider text-black transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] sm:block"
          >
            Free Trial
          </motion.a>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} weight="bold" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <List size={24} weight="bold" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-h-[80vh] overflow-y-auto border-t border-[#D4AF37]/10 bg-[#0a0a0a]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-0.5 px-5 py-4">
              {allMobileItems.map((item, idx) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = mobileExpanded === idx;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.25 }}
                  >
                    <div className="flex items-center">
                      <a
                        href={hasChildren ? undefined : item.link}
                        onClick={() => {
                          if (hasChildren) {
                            setMobileExpanded(isExpanded ? null : idx);
                          } else {
                            setMobileOpen(false);
                          }
                        }}
                        className="flex flex-1 items-center justify-between rounded-lg px-4 py-3 text-[14px] font-medium text-neutral-300 transition-colors hover:bg-[#D4AF37]/[0.08] hover:text-[#D4AF37]"
                      >
                        {item.name}
                        {hasChildren && (
                          <CaretDown
                            size={14}
                            weight="bold"
                            className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                              }`}
                          />
                        )}
                      </a>
                    </div>

                    <AnimatePresence>
                      {hasChildren && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-4"
                        >
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.link}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-md px-4 py-2.5 text-[13px] text-neutral-400 transition-colors hover:text-[#D4AF37]"
                            >
                              {child.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              <motion.a
                href="#free-trial"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: allMobileItems.length * 0.04 + 0.1, duration: 0.25 }}
                className="mt-3 block rounded-full bg-[#D4AF37] py-3 text-center text-[13px] font-semibold tracking-wider text-black transition-shadow hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                id="mobile-nav-cta"
              >
                Free Trial
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}