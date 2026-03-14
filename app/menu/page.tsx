"use client";

import { motion } from "framer-motion";
import { Menu } from "@/components/Menu";
import { Utensils, Coffee, Pizza, Sandwich } from "lucide-react";

export default function MenuPage() {
    const highlights = [
        {
            icon: Sandwich,
            title: "Signature Burgers",
            description: "Juicy, flavorful, and made fresh to order",
        },
        {
            icon: Pizza,
            title: "Wood-Fired Pizza",
            description: "Crispy crust with premium toppings",
        },
        {
            icon: Utensils,
            title: "Shawarmas & Wraps",
            description: "Authentic flavors wrapped to perfection",
        },
        {
            icon: Coffee,
            title: "Beverages",
            description: "Refreshing drinks to complement your meal",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-brand-black overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(circle at 50% 50%, rgba(239, 183, 19, 0.15) 0%, transparent 70%)",
                            filter: "blur(80px)",
                        }}
                    />
                    <div className="absolute inset-0 bg-noise opacity-30" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-10 text-center py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-gold mb-4 md:mb-6">
                            Our Menu
                        </h1>
                        <p className="font-body text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                            Explore our delicious selection of fast food favorites, crafted with
                            quality ingredients and authentic Peshawari flavors.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
            </section>

            {/* Menu Highlights */}
            <section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold mb-4">
                            Menu Highlights
                        </h2>
                        <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                            Discover what makes our menu special
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="bg-[#111111] p-6 md:p-8 rounded-lg border-2 border-brand-gold/20 hover:border-brand-gold/40 hover:shadow-glow-gold transition-all duration-300 h-full text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="p-4 rounded-full bg-brand-gold/10">
                                            <highlight.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-gold" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className="font-display text-lg md:text-xl font-bold text-brand-gold mb-2">
                                        {highlight.title}
                                    </h3>
                                    <p className="font-body text-sm md:text-base text-white/70">
                                        {highlight.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Menu Section */}
            <Menu />

            {/* Order CTA Section */}
            <section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 p-8 md:p-12 rounded-lg border-2 border-brand-gold/30"
                    >
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold mb-4">
                            Ready to Order?
                        </h2>
                        <p className="font-body text-base md:text-lg text-white/70 mb-6 md:mb-8">
                            Get your favorite meals delivered hot and fresh, or visit us for dine-in!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/923454295298"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 md:px-8 py-3 md:py-4 bg-brand-gold text-brand-black font-body font-bold text-sm md:text-base rounded-lg hover:bg-brand-darkgold hover:scale-105 transition-all duration-300 shadow-glow-gold min-w-[200px]"
                            >
                                Order on WhatsApp
                            </a>
                            <a
                                href="tel:+923454295298"
                                className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-brand-gold text-brand-gold font-body font-bold text-sm md:text-base rounded-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 min-w-[200px]"
                            >
                                Call to Order
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Special Notes */}
            <section className="py-10 px-4 md:px-6 lg:px-10 bg-brand-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#111111] p-6 md:p-8 rounded-lg border-l-4 border-brand-gold"
                    >
                        <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold mb-4">
                            Good to Know
                        </h3>
                        <ul className="space-y-3 font-body text-sm md:text-base text-white/70">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold mt-1">•</span>
                                <span>All items are prepared fresh to order using quality ingredients</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold mt-1">•</span>
                                <span>Vegetarian options available - just ask!</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold mt-1">•</span>
                                <span>Customization available on most menu items</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold mt-1">•</span>
                                <span>Combo deals and special offers available - check with us!</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-gold mt-1">•</span>
                                <span>Prices may vary - contact us for the latest menu and pricing</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
