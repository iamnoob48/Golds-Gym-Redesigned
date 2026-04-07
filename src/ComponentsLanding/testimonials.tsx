import React from 'react';

// Mock data to create the staggered masonry effect
const testimonials = [
    {
        id: 1,
        name: "Mayur Abnave",
        text: "It's a very nice gym with world top class equipment of Life fitness and Hammer Strength, and people surrounding is also good. Staff of this branch is very kind, they help members very well and all the trainers are certified. Good place to achieve your goals.",
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        text: "The absolute best facility in the city. The energy is unmatched and the equipment is always perfectly maintained.",
    },
    {
        id: 3,
        name: "Rahul Verma",
        text: "I've been to many gyms, but the community here is different. You actually feel pushed to break your limits. The dark aesthetic of the new setup also makes you feel like you're in an elite training camp.",
    },
    {
        id: 4,
        name: "Anita Desai",
        text: "Incredible personal training program. My coach completely transformed my understanding of nutrition and lifting mechanics. Worth every penny.",
    },
    {
        id: 5,
        name: "Vikram Singh",
        text: "Lightning fast check-ins, immaculate locker rooms, and the heaviest dumbbells in the district. What more do you need?",
    },
    {
        id: 6,
        name: "Priya Sharma",
        text: "The group HIIT classes are intense but so rewarding. The instructors really know how to scale the workouts for different fitness levels while keeping the energy high.",
    },
    {
        id: 7,
        name: "James Carter",
        text: "Finally, a gym that takes its digital presence as seriously as its physical one. Booking classes through the member portal is incredibly smooth.",
    }
];

export default function TestimonialWall() {
    return (
        <section className="relative w-full bg-black py-24 px-6 md:px-12 overflow-hidden">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
                    Forged by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">Real Results</span>
                </h2>
                <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full opacity-80"></div>
            </div>

            {/* Masonry Grid */}
            <div className="max-w-7xl mx-auto relative">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-32">
                    {testimonials.map((review) => (
                        <div
                            key={review.id}
                            className="break-inside-avoid relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-yellow-500/20 hover:border-yellow-500/40 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Stars & Avatar Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 group-hover:border-yellow-500/50 transition-colors">
                                    <span className="text-white/50 text-sm font-bold">
                                        {review.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-yellow-400 text-sm tracking-widest mb-1">
                                        ⭐⭐⭐⭐⭐
                                    </div>
                                    <h4 className="text-yellow-500 font-bold tracking-wide">
                                        {review.name}
                                    </h4>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 leading-relaxed font-light">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Fade Out & Load More Button */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-8 pointer-events-none">
                    <button className="pointer-events-auto px-8 py-4 rounded-full bg-neutral-900 border border-yellow-500/30 text-white font-semibold tracking-wide hover:bg-neutral-800 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300 flex items-center gap-3">
                        Load More Real Stories
                        <svg className="w-4 h-4 text-yellow-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}