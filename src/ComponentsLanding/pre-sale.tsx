import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Star, Lightning, Crown, Check } from "@phosphor-icons/react";

/* ─── Pricing Data ─── */
const PLANS = [
  {
    name: "Starter",
    price: "14,999",
    period: "/year",
    icon: Star,
    features: [
      "Full gym access",
      "Locker room access",
      "2 group classes/month",
      "Basic fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "24,999",
    period: "/year",
    icon: Lightning,
    features: [
      "Full gym access",
      "Unlimited group classes",
      "Personal training (2x/month)",
      "Nutrition consultation",
      "Access to all locations",
      "InBody composition analysis",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "39,999",
    period: "/year",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Priority class booking",
      "Exclusive member events",
      "Guest passes (4/month)",
      "Recovery zone access",
      "Dedicated coach",
    ],
    popular: false,
  },
];

/* ─── Coming Soon Gyms ─── */
const COMING_SOON_GYMS = [
  { name: "Gold's Gym Mohali", state: "Punjab" },
  { name: "Gold's Gym Firozabad", state: "Uttar Pradesh" },
  { name: "Gold's Gym MIT Kothrud", state: "Pune" },
  { name: "Gold's Gym Noida Sector 116", state: "Uttar Pradesh" },
  { name: "Gold's Gym Banjara Hills", state: "Hyderabad" },
];

/* ─── Pre-Sale Gyms ─── */
const PRESALE_GYMS = [
  { name: "Gold's Gym Malviya Nagar", city: "Delhi" },
  { name: "Gold's Gym Bibwewadi", city: "Pune" },
  { name: "Gold's Gym Moti Jheel", city: "Patna" },
  { name: "Gold's Gym Vaishali", city: "Ghaziabad" },
];

/* ═══════════════════════════════════════════════
   Revolving Silver Border Component (Magic UI style)
   ═══════════════════════════════════════════════ */
function ShinyBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl p-[2px] ${className}`}>
      {/* Revolving conic gradient border */}
      <div
        className="absolute inset-0 rounded-2xl animate-spin-border"
        style={{
          background:
            "conic-gradient(from var(--border-angle, 0deg), transparent 40%, #C0C0C0 50%, #E8E8E8 55%, #FFFFFF 60%, #E8E8E8 65%, #C0C0C0 70%, transparent 80%)",
        }}
      />
      {/* Inner content */}
      <div className="relative rounded-[14px] bg-[#111] h-full">
        {children}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   Pricing Card Component
   ═══════════════════════════════════ */
function PricingCard({
  plan,
  index,
}: {
  plan: (typeof PLANS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = plan.icon;

  const cardContent = (
    <div className="flex h-full flex-col p-6 lg:p-8">
      {/* Popular badge */}
      {plan.popular && (
        <div className="mb-4 flex items-center gap-1.5 self-start rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Most Popular
        </div>
      )}

      {/* Icon + Plan Name */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            plan.popular
              ? "bg-white/15 text-white"
              : "bg-[#D4AF37]/10 text-[#D4AF37]"
          }`}
        >
          <Icon size={22} weight="fill" />
        </div>
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-medium text-neutral-400">₹</span>
          <span
            className={`text-4xl font-extrabold tracking-tight ${
              plan.popular ? "text-white" : "text-white"
            }`}
          >
            {plan.price}
          </span>
          <span className="text-sm font-medium text-neutral-500">
            {plan.period}
          </span>
        </div>
        <p className="mt-1 text-[13px] text-neutral-500">
          Billed annually • GST inclusive
        </p>
      </div>

      {/* Divider */}
      <div
        className={`mb-6 h-px ${
          plan.popular
            ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
            : "bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"
        }`}
      />

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[14px]">
            <Check
              size={16}
              weight="bold"
              className={`mt-0.5 shrink-0 ${
                plan.popular ? "text-white" : "text-[#D4AF37]"
              }`}
            />
            <span className="text-neutral-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full rounded-full py-3 text-sm font-bold uppercase tracking-widest transition-shadow duration-300 ${
          plan.popular
            ? "bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            : "bg-[#D4AF37] text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
        }`}
      >
        Get Started
      </motion.button>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="w-full"
    >
      {plan.popular ? (
        <ShinyBorder className="h-full">
          {cardContent}
        </ShinyBorder>
      ) : (
        <div className="h-full rounded-2xl border border-white/[0.06] bg-[#111]">
          {cardContent}
        </div>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════
   Coming Soon Gym Card
   ═══════════════════════════════════ */
function ComingSoonCard({ gym, index }: { gym: (typeof COMING_SOON_GYMS)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-4 transition-all duration-300 hover:border-[#D4AF37]/20 hover:bg-[#111]"
    >
      {/* Pulsing pin */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10">
        <MapPin size={20} weight="fill" className="text-[#D4AF37]" />
        <div className="absolute inset-0 rounded-lg bg-[#D4AF37]/10 animate-ping-slow" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-200">
          {gym.name}
        </p>
        <p className="text-[12px] text-neutral-500">{gym.state}</p>
      </div>
      <div className="shrink-0 rounded-full bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
        Soon
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════
   Pre-Sale Gym Card
   ═══════════════════════════════════ */
function PreSaleGymCard({ gym, index }: { gym: (typeof PRESALE_GYMS)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-5 transition-all duration-300 hover:border-[#D4AF37]/20"
    >
      {/* Subtle shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <MapPin size={16} weight="fill" className="text-[#D4AF37]" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]">
            Pre Sale
          </span>
        </div>
        <h4 className="mb-1 text-base font-bold text-white">{gym.name}</h4>
        <p className="mb-4 text-[13px] text-neutral-500">{gym.city}</p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block rounded-full bg-[#D4AF37] px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-black transition-shadow hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
        >
          View
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════
   Main Pre-Sale Section
   ═══════════════════════════════════ */
export default function PreSaleSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="pre-sale" className="relative bg-black py-24 lg:py-32">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.04)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Membership Plans
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Pre <span className="text-[#D4AF37]">Sale</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-neutral-400">
            Lock in exclusive launch pricing at our newest locations.
            Limited memberships available.
          </p>
        </motion.div>

        {/* ── Pre-Sale Gym Cards ── */}
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRESALE_GYMS.map((gym, idx) => (
            <PreSaleGymCard key={gym.name} gym={gym} index={idx} />
          ))}
        </div>

        {/* ── Pricing Cards ── */}
        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {PLANS.map((plan, idx) => (
            <PricingCard key={plan.name} plan={plan} index={idx} />
          ))}
        </div>

        {/* ── Coming Soon ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Gyms <span className="text-[#D4AF37]">Coming Soon</span>
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
              New Gold's Gym locations opening across India
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3">
            {COMING_SOON_GYMS.map((gym, idx) => (
              <ComingSoonCard key={gym.name} gym={gym} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
