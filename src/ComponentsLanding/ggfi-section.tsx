import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Course Data ─── */
const COURSES = [
  {
    title: "GGFI Online",
    tag: "Online Personal Training Course",
    description:
      "Master personal training from anywhere. Industry-recognized certification with live mentorship and flexible scheduling.",
    image: "/images/ggfi-online.png",
  },
  {
    title: "GGFI Offline",
    tag: "Offline Personal Training Course",
    description:
      "Hands-on, in-gym certification with direct coach access. Learn anatomy, programming, and client management in real time.",
    image: "/images/ggfi-offline.png",
  },
  {
    title: "ACE Certification",
    tag: "ACE Certified Program",
    description:
      "Globally recognized ACE certification. Elevate your credentials and unlock career opportunities in fitness worldwide.",
    image: "/images/ace-certification.png",
  },
  {
    title: "Short Courses",
    tag: "Specialization Programs",
    description:
      "Targeted workshops in functional training, nutrition, and sports conditioning. Upskill fast with intensive formats.",
    image: "/images/short-courses.png",
  },
];

/* ═══════════════════════════════════
   Course Card
   ═══════════════════════════════════ */
function CourseCard({
  course,
  index,
}: {
  course: (typeof COURSES)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-[5px] hover:border-[#C9A84C]/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
    >
      {/* ── Top 50%: Image ── */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark gradient overlay fading into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

        {/* Tag badge */}
        <div className="absolute bottom-3 left-4 z-10">
          <span className="inline-block rounded-full bg-[#C9A84C] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
            {course.tag}
          </span>
        </div>
      </div>

      {/* ── Bottom 50%: Content ── */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3
            className="mb-2 text-xl font-bold text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {course.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-neutral-400">
            {course.description}
          </p>
        </div>

        {/* Gold CTA Button */}
        <motion.a
          href="#"
          whileTap={{ scale: 0.97 }}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 py-2.5 text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(201,168,76,0.35)] group-hover:border-[#C9A84C]"
        >
          Know More
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════
   Main GGFI Section
   ═══════════════════════════════════ */
export default function GGFISection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="ggfi" className="relative bg-black py-24 lg:py-32">
      {/* Subtle radial accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.03)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mx-auto mb-3 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 bg-[#C9A84C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
              Education
            </p>
            <div className="h-[2px] w-8 bg-[#C9A84C]" />
          </div>
          <h2
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Gold's Gym{" "}
            <span className="text-[#C9A84C]">Fitness Institute</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-neutral-400">
            Become a certified fitness professional. Industry-leading programs
            designed to launch your career.
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course, idx) => (
            <CourseCard key={course.title} course={course} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block rounded-full border-2 border-[#C9A84C] px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C]/10 hover:shadow-[0_0_25px_rgba(201,168,76,0.2)]"
          >
            Explore All Courses
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
