import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
    "/images/hero-1.webp",
    "/images/hero-2.webp",
    "/images/hero-3.webp",
];

/* Aceternity-style typewriter cycling words */
const CYCLING_WORDS = ["Legends", "Champions", "Warriors", "Icons"];

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [displayedChars, setDisplayedChars] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const currentWord = CYCLING_WORDS[wordIndex];

    // Cycle images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Typewriter effect
    useEffect(() => {
        const word = CYCLING_WORDS[wordIndex];

        if (!isDeleting && displayedChars < word.length) {
            // Typing forward
            const timeout = setTimeout(() => {
                setDisplayedChars((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else if (!isDeleting && displayedChars === word.length) {
            // Pause at full word, then start deleting
            const timeout = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(timeout);
        } else if (isDeleting && displayedChars > 0) {
            // Deleting
            const timeout = setTimeout(() => {
                setDisplayedChars((prev) => prev - 1);
            }, 60);
            return () => clearTimeout(timeout);
        } else if (isDeleting && displayedChars === 0) {
            // Move to next word
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
        }
    }, [displayedChars, isDeleting, wordIndex]);

    return (
        <section
            id="hero-section"
            className="relative flex min-h-[100vh] w-full items-center overflow-hidden bg-black"
        >
            {/* ── Cycling Hero Images — NO heavy gradient, full display ── */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={HERO_IMAGES[currentImage]}
                        alt="Gold's Gym Training"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </AnimatePresence>
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 mx-auto flex w-full flex-col justify-end px-6 pb-16 pt-32 lg:px-12 xl:px-20 min-h-[100vh]">
                {/* Tagline with gold accent line */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4 flex items-center gap-3"
                >
                    <div className="h-[2px] w-10 bg-[#C9A84C]" />
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A84C]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Since 1965 — The Original
                    </p>
                </motion.div>

                {/* Serif Bomb Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {/* Line 1: TRAIN LIKE THE */}
                    <h1
                        className="text-white uppercase leading-[0.9] tracking-tight"
                        style={{
                            fontFamily: "'Anton', sans-serif",
                            fontSize: "clamp(2.5rem, 9vw, 9rem)",
                        }}
                    >
                        TRAIN LIKE
                    </h1>

                    {/* Line 2: Typewriter word (serif italic, gold) */}
                    <div className="pl-[2vw] my-1">
                        <span
                            className="inline-block leading-[1]"
                            style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontStyle: "italic",
                                fontSize: "clamp(3.2rem, 12vw, 12rem)",
                                color: "#C9A84C",
                            }}
                        >
                            {currentWord.slice(0, displayedChars)}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                                className="inline-block w-[3px] h-[0.75em] bg-[#C9A84C] ml-1 align-baseline"
                            />
                        </span>
                    </div>
                </motion.div>

                {/* Gold horizontal divider */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="mt-6 mb-6 h-[1px] bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/60 to-transparent max-w-xl"
                />

                {/* Description with gold left border */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mb-8 max-w-lg border-l-2 border-[#C9A84C] pl-5"
                >
                    <p className="text-[15px] leading-relaxed text-neutral-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        This is not a gym. This is an arena of raw intensity.
                        Experience cutting-edge training and high-performance
                        programs engineered for peak physical prowess.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex flex-wrap gap-3"
                >
                    <motion.a
                        href="#join"
                        id="hero-cta-join"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-full bg-[#C9A84C] px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-black transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
                    >
                        Join Now
                    </motion.a>
                    <motion.a
                        href="#gyms"
                        id="hero-cta-find"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                    >
                        Find Gyms
                    </motion.a>
                </motion.div>
            </div>

            {/* ── Image Indicators ── */}
            <div className="absolute bottom-8 right-8 z-10 flex gap-2">
                {HERO_IMAGES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`h-1.5 rounded-full transition-all duration-1000 ${idx === currentImage
                            ? "w-8 bg-[#C9A84C]"
                            : "w-3 bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Show image ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
