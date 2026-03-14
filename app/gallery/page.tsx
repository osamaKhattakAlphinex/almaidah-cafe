"use client";

import { motion } from "framer-motion";
import { Gallery } from "@/components/Gallery";
import { Camera, Instagram, Facebook } from "lucide-react";

export default function GalleryPage() {
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
                        <div className="flex justify-center mb-6">
                            <div className="p-4 rounded-full bg-brand-gold/10">
                                <Camera className="w-12 h-12 md:w-16 md:h-16 text-brand-gold" strokeWidth={1.5} />
                            </div>
                        </div>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-gold mb-4 md:mb-6">
                            Our Gallery
                        </h1>
                        <p className="font-body text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                            A visual journey through our delicious creations, happy customers,
                            and the vibrant atmosphere at Almaidah Cafe.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
            </section>

            {/* Main Gallery Section */}
            <Gallery />

            {/* Social Media Section */}
            <section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold mb-4">
                            Follow Us on Social Media
                        </h2>
                        <p className="font-body text-base md:text-lg text-white/70 mb-8 md:mb-12">
                            Stay updated with our latest dishes, special offers, and behind-the-scenes moments
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://www.instagram.com/almaidahcafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-body font-bold text-sm md:text-base rounded-lg hover:scale-105 transition-all duration-300 shadow-lg min-w-[200px] justify-center"
                            >
                                <Instagram className="w-5 h-5" />
                                Instagram
                            </a>
                            <a
                                href="https://www.facebook.com/almaidahcafepeshawar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-body font-bold text-sm md:text-base rounded-lg hover:scale-105 transition-all duration-300 shadow-lg min-w-[200px] justify-center"
                            >
                                <Facebook className="w-5 h-5" />
                                Facebook
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tag Us Section */}
            <section className="py-10 px-4 md:px-6 lg:px-10 bg-brand-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 p-8 md:p-12 rounded-lg border-2 border-brand-gold/30 text-center"
                    >
                        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-gold mb-4">
                            Share Your Experience
                        </h3>
                        <p className="font-body text-base md:text-lg text-white/70 mb-6">
                            Enjoyed your meal? Tag us in your photos and stories!
                        </p>
                        <div className="inline-block px-6 py-3 bg-brand-gold/20 rounded-lg border border-brand-gold/40">
                            <p className="font-body text-lg md:text-xl text-brand-gold font-bold">
                                @almaidahcafe
                            </p>
                        </div>
                        <p className="font-body text-sm md:text-base text-white/60 mt-4">
                            We love seeing your photos and might feature them on our page!
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
