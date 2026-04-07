import React, { useState } from 'react';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => setIsSubmitting(false), 2000);
    };

    return (
        <section className="relative w-full min-h-screen bg-black py-24 px-6 md:px-12 overflow-hidden font-sans">

            {/* Background Subtle Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-800/40 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center md:text-left mb-16">
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4">
                        Forged in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">Iron.</span><br />
                        Ready to Connect.
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl font-light">
                        Whether you are looking for corporate wellness programs, franchise opportunities, or personal training inquiries, our elite support team is on standby.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Contact Information */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Info Card 1: Headquarters */}
                        <div className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-yellow-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-yellow-500/50 transition-colors">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2">Global Headquarters</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Gold's Gym India Basecamp<br />
                                Level 4, Elite Tech Park<br />
                                Mumbai, Maharashtra 400001
                            </p>
                        </div>

                        {/* Info Card 2: Direct Lines */}
                        <div className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-yellow-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-yellow-500/50 transition-colors">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2">Direct Communications</h3>
                            <div className="space-y-3 mt-4">
                                <p className="flex items-center text-gray-400 font-light">
                                    <span className="w-20 font-medium text-gray-300">Email:</span>
                                    <a href="mailto:support@goldsgym.in" className="hover:text-yellow-500 transition-colors">support@goldsgym.in</a>
                                </p>
                                <p className="flex items-center text-gray-400 font-light">
                                    <span className="w-20 font-medium text-gray-300">Phone:</span>
                                    <a href="tel:+918001234567" className="hover:text-yellow-500 transition-colors">+91 800 123 4567</a>
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 md:p-12 rounded-3xl bg-neutral-900/50 backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden"
                        >
                            {/* Form Top Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* Inquiry Type */}
                            <div className="space-y-2 mb-6">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Inquiry Type</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all appearance-none cursor-pointer">
                                    <option value="membership">Membership Details</option>
                                    <option value="personal-training">Personal Training</option>
                                    <option value="corporate">Corporate Wellness</option>
                                    <option value="franchise">Franchise Opportunities</option>
                                </select>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2 mb-8">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600 resize-none"
                                    placeholder="How can we help you achieve your goals?"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full relative group overflow-hidden rounded-xl bg-yellow-500 text-black font-bold text-lg py-4 transition-all hover:bg-yellow-400 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSubmitting ? 'Transmitting...' : 'Send Message'}
                                    {!isSubmitting && (
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    )}
                                </span>
                                {/* Button Glare Effect */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}