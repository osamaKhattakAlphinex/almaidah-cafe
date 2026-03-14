"use client";

import { motion } from "framer-motion";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Clock, MapPin, Phone, Award, Users, Heart } from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            icon: Award,
            title: "Quality First",
            description: "We never compromise on the quality of our ingredients or preparation methods.",
        },
        {
            icon: Users,
            title: "Community Focused",
            description: "We're proud to be a part of the Hayatabad community and serve our neighbors.",
        },
        {
            icon: Heart,
            title: "Made with Love",
            description: "Every dish is prepared with care, passion, and attention to detail.",
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
                            About Almaidah Cafe
                        </h1>
                        <p className="font-body text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                            Your neighborhood destination for authentic flavors, quality fast food,
                            and unforgettable dining experiences in the heart of Hayatabad.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
            </section>

            {/* Main About Section */}
            <About />

            {/* Our Story Section */}
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
                            Our Story
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left - Story Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 md:space-y-6"
                        >
                            <div className="space-y-4 font-body text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                                <p>
                                    Almaidah Cafe was born from a simple dream: to bring the authentic taste
                                    of Peshawari street food to a modern, comfortable setting. Founded in 2024,
                                    we set out to create a space where quality meets convenience, and tradition
                                    meets innovation.
                                </p>
                                <p>
                                    Located in the bustling Phase 6 of Hayatabad, we've quickly become a favorite
                                    among students, families, and food lovers alike. Our secret? We treat every
                                    customer like family and every order like it's our own meal.
                                </p>
                                <p>
                                    From our signature burgers to our mouthwatering shawarmas, every item on our
                                    menu is crafted with premium ingredients and time-tested recipes. We believe
                                    that fast food doesn't have to mean compromising on taste or quality.
                                </p>
                                <p className="text-brand-gold font-semibold">
                                    Today, we're proud to serve hundreds of happy customers every week, and we're
                                    just getting started!
                                </p>
                            </div>
                        </motion.div>

                        {/* Right - Quick Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 md:space-y-6"
                        >
                            {/* Location Card */}
                            <div className="bg-[#111111] p-5 md:p-6 rounded-lg border-l-4 border-brand-gold">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold mb-2">
                                            Our Location
                                        </h3>
                                        <p className="font-body text-white/70 text-sm md:text-base">
                                            Phase 6 F-8 Street 01 (Akhunzada)<br />
                                            Zangal Market, Hayatabad<br />
                                            Peshawar, Pakistan, 25000
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hours Card */}
                            <div className="bg-[#111111] p-5 md:p-6 rounded-lg border-l-4 border-brand-gold">
                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold mb-2">
                                            Opening Hours
                                        </h3>
                                        <div className="font-body text-white/70 text-sm md:text-base space-y-1">
                                            <p>Monday - Tuesday: 10:00 AM - 02:00 AM</p>
                                            <p>Wednesday: 09:00 AM - 02:00 AM</p>
                                            <p>Thursday - Saturday: 10:00 AM - 02:00 AM</p>
                                            <p>Sunday: 09:00 AM - 02:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-[#111111] p-5 md:p-6 rounded-lg border-l-4 border-brand-gold">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold mb-2">
                                            Get in Touch
                                        </h3>
                                        <p className="font-body text-white/70 text-sm md:text-base">
                                            Phone: +92 345 4295298<br />
                                            WhatsApp: Available for orders
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-brand-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold mb-4">
                            Our Values
                        </h2>
                        <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <div className="bg-[#111111] p-6 md:p-8 rounded-lg border-2 border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 h-full">
                                    <div className="flex justify-center mb-4 md:mb-6">
                                        <div className="p-4 rounded-full bg-brand-gold/10">
                                            <value.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-gold" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold text-center mb-3 md:mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="font-body text-sm md:text-base text-white/70 text-center leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <Features />

            {/* Testimonials Section */}
            <Testimonials />
        </>
    );
}
