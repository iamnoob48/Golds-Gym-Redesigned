import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Barbell, Users, Briefcase, Sparkle } from "@phosphor-icons/react";

/* ═══════════════════════════════════
   Bento Grid Item
   ═══════════════════════════════════ */
function BentoGridItem({
  className = "",
  title,
  description,
  image,
  icon,
  index,
}: {
  className?: string;
  title: string;
  description: string;
  image?: string;
  icon: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className={`group/bento relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-500 hover:border-[#C9A84C]/20 ${className}`}
    >
      {/* Background image */}
      {image && (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/bento:scale-105"
          />
          {/* Heavy dark gradient so text pops */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        </>
      )}

      {/* Glassmorphism background for info tile (no image) */}
      {!image && (
        <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-md" />
      )}

      {/* Subtle gold glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#C9A84C]/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover/bento:opacity-100" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2 p-6 lg:p-8 transition-transform duration-300 group-hover/bento:translate-x-1">
        {/* Icon */}
        <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-lg bg-[#C9A84C]/15 text-[#C9A84C]">
          {icon}
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold tracking-tight text-white lg:text-2xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-neutral-400 lg:text-[15px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════
   Main Programs Section
   ═══════════════════════════════════ */
export default function ProgramsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="relative bg-black py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,168,76,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[#C9A84C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
              Programs
            </p>
          </div>
          <h2
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            OUR PROGRAMS
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3">
          {/* Tile 1: Personal Training (2×2 span) */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-2"
            title="Personal Training"
            description="One-on-one coaching tailored to your body, your goals, your transformation. Our certified trainers design every rep for maximum results."
            image="/images/personal-training.png"
            icon={<Barbell size={20} weight="bold" />}
            index={0}
          />

          {/* Tile 2: Info / Mission (1×1 span) */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1"
            title="The Gold's Standard"
            description="Customized fitness. Maximum results. Since 1965, we've been engineering champions through science-backed training and relentless dedication."
            icon={<Sparkle size={20} weight="bold" />}
            index={1}
          />

          {/* Tile 3: Corporate Wellness (1×1 span) */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1"
            title="Corporate Wellness"
            description="Elevate your team's performance with tailored wellness programs, BMI screening, and nutrition counseling for healthier workforces."
            image="/images/corporate-wellness.png"
            icon={<Briefcase size={20} weight="bold" />}
            index={2}
          />

          {/* Tile 4: Group Programs (2×1 span) */}
          <BentoGridItem
            className="md:col-span-3 md:row-span-1"
            title="Group Exercise Programs"
            description="High-energy classes from yoga to HIIT. Train alongside driven individuals in an atmosphere that pushes every limit."
            image="/images/group-program.png"
            icon={<Users size={20} weight="bold" />}
            index={3}
          />
        </div>
      </div>
    </section>
  );
}
