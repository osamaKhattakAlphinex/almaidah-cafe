"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

/**
 * Hero component fallback version without background image
 * Uses only gradient and texture effects
 */
export function HeroFallback() {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Layered Background Effects - No Image */}
            <div className="absolute inset-0 bg-brand-black">
                {/* Golden Radial Gradient - Primary Light Source */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 60% 50%, rgba(239, 183, 19, 0.2) 0%, transparent 60%)",
                        filter: "blur(100px)",
                    }}
                />

                {/* Secondary Gradient - Depth */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 70%, rgba(239, 183, 19, 0.1) 0%, transparent 50%)",
                        filter: "blur(80px)",
                    }}
                />

                {/* Diagonal Lines Pattern */}
                <div className="absolute inset-0 bg-diagonal-lines opacity-30" />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 bg-noise opacity-40" />

                {/* Vignette Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Main Headline with Staggered Animation */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
                    >
                        <span className="text-white">Taste The Streets of </span>
                        <span className="text-brand-gold italic">Peshawar</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Fast food, bold flavor — right in the heart of Phase 6, Hayatabad.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/menu">
                            <Button variant="primary" size="lg" className="min-w-[180px]">
                                Explore Menu
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="min-w-[180px]">
                                Our Story
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Decorative Line */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="mt-12 w-24 h-0.5 bg-brand-gold/50 mx-auto"
                    />
                </div>
            </div>

            {/* Bouncing Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <button
                    onClick={scrollToContent}
                    className="flex flex-col items-center gap-2 text-brand-gold hover:text-brand-darkgold transition-colors duration-300 group"
                    aria-label="Scroll to content"
                >
                    <span className="font-body text-sm uppercase tracking-wider opacity-80">
                        Scroll
                    </span>
                    <motion.div
                        animate={{
                            y: [0, 8, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <ChevronDown
                            size={32}
                            className="drop-shadow-[0_0_8px_rgba(239,183,19,0.5)]"
                        />
                    </motion.div>
                </button>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent z-10" />
        </section>
    );
}
