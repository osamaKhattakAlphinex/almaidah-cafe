"use client";

import { motion } from "framer-motion";
import { CafeDivider } from "./ui/cafe-divider";

const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "20+", label: "Menu Items" },
    { number: "1", label: "Unbeatable Location" },
];

export function About() {
    return (
        <section id="about" className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-brand-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
            <div
                className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"
                style={{ transform: "translate(-50%, -50%)" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Cafe Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <CafeDivider />
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-8 md:mt-12">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Image Frame Container */}
                        <div className="relative">
                            {/* Main Image Frame with Rotation */}
                            <div
                                className="relative overflow-hidden rounded-lg"
                                style={{
                                    transform: "rotate(2deg)",
                                    border: "8px solid var(--gold)",
                                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                {/* Image Placeholder */}
                                <div className="aspect-[4/5] bg-gradient-to-br from-brand-gold/20 to-brand-black flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl md:text-8xl mb-4">🍔</div>
                                        <p className="font-body text-brand-gold/50 text-xs md:text-sm">
                                            About Image
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Est. 2024 Badge Ribbon */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute -top-3 md:-top-4 -right-3 md:-right-4 z-10"
                            >
                                <div
                                    className="relative bg-brand-gold px-4 md:px-6 py-2 md:py-3 shadow-2xl"
                                    style={{
                                        transform: "rotate(-5deg)",
                                        clipPath:
                                            "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)",
                                    }}
                                >
                                    <div className="font-display text-xl md:text-2xl font-bold text-brand-black">
                                        Est. 2024
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Corner Accent */}
                            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-20 md:w-24 h-20 md:h-24 border-l-4 border-b-4 border-brand-gold/30 rounded-bl-3xl" />
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="space-y-4 md:space-y-6"
                    >
                        {/* Section Title */}
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold leading-tight">
                            More Than Just Fast Food
                        </h2>

                        {/* Story Text */}
                        <div className="space-y-3 md:space-y-4 font-body text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                            <p>
                                Welcome to <span className="text-brand-gold font-semibold">Almaidah Cafe</span>,
                                your local fast food destination in the heart of Hayatabad Phase 6, Peshawar.
                                We're not just another eatery — we're a celebration of bold flavors,
                                lightning-fast service, and the vibrant street food culture that makes
                                Peshawar truly special.
                            </p>

                            <p>
                                Born from a passion for authentic taste and community connection,
                                Almaidah Cafe brings you the perfect fusion of traditional Peshawari
                                flavors with modern fast food convenience. Every burger, shawarma,
                                and pizza is crafted fresh to order, using quality ingredients and
                                time-tested recipes that honor our culinary heritage.
                            </p>

                            <p>
                                We believe great food brings people together. Whether you're grabbing
                                a quick bite between classes, enjoying a family meal, or satisfying
                                those late-night cravings, we're here to serve you with a smile and
                                food that hits the spot every single time.
                            </p>

                            <p className="text-brand-gold/90 font-semibold italic text-sm md:text-base">
                                "Fast food with heart, flavor with soul — that's the Almaidah promise."
                            </p>
                        </div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-brand-gold/20"
                        >
                            <div className="grid grid-cols-3 gap-4 md:gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + index * 0.1,
                                            ease: "backOut",
                                        }}
                                        className="text-center"
                                    >
                                        {/* Number */}
                                        <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gold mb-1 md:mb-2">
                                            {stat.number}
                                        </div>
                                        {/* Label */}
                                        <div className="font-body text-xs sm:text-sm text-white/60 leading-tight">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
