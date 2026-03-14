"use client";

import { motion } from "framer-motion";
import { Zap, UtensilsCrossed, MapPin } from "lucide-react";
import { CafeDivider } from "./ui/cafe-divider";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast Delivery",
        description:
            "Get your favorite meals delivered hot and fresh in record time. We value your time as much as you do.",
    },
    {
        icon: UtensilsCrossed,
        title: "Freshly Made Daily",
        description:
            "Every dish is prepared fresh to order using the finest ingredients. No compromises on quality.",
    },
    {
        icon: MapPin,
        title: "Located in Phase 6",
        description:
            "Conveniently located in the heart of Phase 6, Hayatabad. Easy to find, easier to love.",
    },
];

export function Features() {
    return (
        <section className="relative py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-[#0a0a0a]">
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

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

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold">
                        Why Almaidah?
                    </h2>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3 + index * 0.15,
                                ease: "easeOut",
                            }}
                        >
                            <div
                                className="group relative h-full p-6 md:p-8 bg-brand-black rounded-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-gold"
                                style={{
                                    borderColor: "rgba(239, 183, 19, 0.2)",
                                }}
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-4 md:mb-6">
                                    <div className="p-3 md:p-4 rounded-full bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-300">
                                        <feature.icon
                                            size={40}
                                            className="text-brand-gold md:w-12 md:h-12"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold text-center mb-3 md:mb-4">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="font-body text-sm md:text-base text-white/70 text-center leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative Bottom Line */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-brand-gold/0 group-hover:bg-brand-gold/50 transition-all duration-300 rounded-t-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
