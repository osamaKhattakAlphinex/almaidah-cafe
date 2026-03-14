"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils, Award, Heart, Clock, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CafeDivider } from "@/components/ui/cafe-divider";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-brand-black text-brand-gold pt-20">
            {/* Hero Section */}
            <section className="py-24 px-4 bg-noise">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Coffee className="w-20 h-20 mx-auto mb-6 text-brand-gold drop-shadow-[0_0_20px_rgba(239,183,19,0.4)]" />
                        <h1 className="font-display text-6xl md:text-7xl font-bold text-brand-gold mb-6">
                            Welcome to Almaidah
                        </h1>
                        <p className="font-body text-xl text-brand-gold/70 mb-8 max-w-2xl mx-auto">
                            Experience the perfect blend of tradition and excellence.
                            Scroll down to see the navbar in action.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button variant="primary" size="lg">
                                Explore Menu
                            </Button>
                            <Button variant="outline" size="lg">
                                Reserve Table
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4">
                <CafeDivider />
            </div>

            {/* Features Section */}
            <section id="menu" className="py-20 px-4 bg-diagonal-lines">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-5xl font-bold text-brand-gold mb-4">
                            Our Specialties
                        </h2>
                        <p className="font-body text-lg text-brand-gold/70">
                            Crafted with passion, served with excellence
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Coffee,
                                title: "Artisan Coffee",
                                desc: "Hand-selected beans roasted to perfection",
                            },
                            {
                                icon: Utensils,
                                title: "Gourmet Cuisine",
                                desc: "Fresh ingredients, traditional recipes",
                            },
                            {
                                icon: Award,
                                title: "Award Winning",
                                desc: "Recognized for excellence and quality",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <Card className="h-full hover:shadow-glow-gold transition-smooth">
                                    <CardHeader className="text-center">
                                        <item.icon className="w-14 h-14 mx-auto mb-4 text-brand-gold" />
                                        <CardTitle className="text-2xl">{item.title}</CardTitle>
                                        <CardDescription className="text-base">
                                            {item.desc}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4">
                <CafeDivider />
            </div>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-5xl font-bold text-brand-gold mb-6">
                            Our Story
                        </h2>
                        <p className="font-body text-lg text-brand-gold/80 leading-relaxed mb-6">
                            Since our founding, Almaidah Cafe has been dedicated to serving
                            the finest coffee and cuisine in an atmosphere of warmth and elegance.
                            Every cup tells a story, every dish is crafted with passion.
                        </p>
                        <p className="font-body text-lg text-brand-gold/80 leading-relaxed">
                            We believe in creating moments that matter, one sip at a time.
                            Our commitment to quality and excellence has made us a beloved
                            destination for coffee enthusiasts and food lovers alike.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {[
                            { icon: Heart, label: "Made with Love" },
                            { icon: Clock, label: "Always Fresh" },
                            { icon: MapPin, label: "Prime Location" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <item.icon className="w-12 h-12 mx-auto mb-3 text-brand-gold" />
                                <p className="font-body text-brand-gold">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4">
                <CafeDivider />
            </div>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 px-4 bg-diagonal-lines-subtle">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-5xl font-bold text-brand-gold mb-6">
                            Gallery
                        </h2>
                        <p className="font-body text-lg text-brand-gold/70 mb-12">
                            A glimpse into our world of flavors and ambiance
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: item * 0.1 }}
                                    className="aspect-square bg-brand-gold/10 rounded-lg border-2 border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 flex items-center justify-center"
                                >
                                    <Coffee className="w-12 h-12 text-brand-gold/30" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4">
                <CafeDivider />
            </div>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-5xl font-bold text-brand-gold mb-8">
                            Visit Us Today
                        </h2>
                        <Card className="bg-brand-cream/5 border-brand-gold/30">
                            <CardHeader>
                                <CardTitle className="text-3xl mb-4">Get in Touch</CardTitle>
                                <CardDescription className="text-lg">
                                    <p className="mb-2">123 Cafe Street, Downtown District</p>
                                    <p className="mb-2">Phone: +1 (555) 123-4567</p>
                                    <p>Open Daily: 7:00 AM - 10:00 PM</p>
                                </CardDescription>
                                <div className="pt-6">
                                    <Button variant="primary" size="lg">
                                        Get Directions
                                    </Button>
                                </div>
                            </CardHeader>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-diagonal-lines border-t border-brand-gold/20 mt-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="font-display text-3xl font-bold text-brand-gold mb-2">
                        Almaidah Cafe
                    </h3>
                    <p className="font-body text-brand-gold/60 mb-4">
                        Where tradition meets excellence
                    </p>
                    <CafeDivider className="my-8" />
                    <p className="font-body text-sm text-brand-gold/50">
                        © 2024 Almaidah Cafe. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
