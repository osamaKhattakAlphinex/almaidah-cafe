"use client";

import { motion } from "framer-motion";
import { Coffee, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { CafeDivider } from "./ui/cafe-divider";

export function FullDemo() {
    return (
        <div className="min-h-screen bg-brand-black">
            {/* Hero with Noise Texture */}
            <section className="py-24 px-4 bg-noise">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Coffee className="w-20 h-20 mx-auto mb-6 text-brand-gold drop-shadow-[0_0_20px_rgba(239,183,19,0.4)]" />
                        <h1 className="font-display text-6xl md:text-7xl font-bold text-brand-gold mb-6">
                            Welcome to Al Maidah
                        </h1>
                        <p className="font-body text-xl text-brand-gold/70 mb-8 max-w-2xl mx-auto">
                            Experience the perfect blend of tradition and modernity.
                            <span className="text-brand-gold"> Try selecting this text</span> to see our custom selection style.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button variant="primary" size="lg">
                                View Menu
                            </Button>
                            <Button variant="outline" size="lg">
                                Book a Table
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cafe Divider */}
            <div className="max-w-6xl mx-auto px-4">
                <CafeDivider />
            </div>

            {/* About Section with Diagonal Lines */}
            <section className="py-20 px-4 bg-diagonal-lines">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-5xl font-bold text-brand-gold mb-4">
                            Our Philosophy
                        </h2>
                        <p className="font-body text-lg text-brand-gold/70 max-w-3xl mx-auto">
                            Every cup tells a story. Every dish is crafted with passion.
                            We believe in creating moments that matter, one sip at a time.
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
                                icon: MapPin,
                                title: "Prime Location",
                                desc: "Conveniently located in the heart of the city",
                            },
                            {
                                icon: Clock,
                                title: "Always Fresh",
                                desc: "Prepared fresh throughout the day",
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

            {/* Another Divider */}
            <div className="max-w-6xl mx-auto px-4">
                <CafeDivider />
            </div>

            {/* Contact Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-5xl font-bold text-brand-gold mb-8">
                        Visit Us Today
                    </h2>
                    <Card className="bg-brand-cream/5 border-brand-gold/30">
                        <CardHeader>
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Phone className="w-6 h-6 text-brand-gold" />
                                <p className="font-body text-xl text-brand-gold">
                                    +1 (555) 123-4567
                                </p>
                            </div>
                            <p className="font-body text-brand-gold/70">
                                Open Daily: 7:00 AM - 10:00 PM
                            </p>
                            <p className="font-body text-sm text-brand-gold/50 mt-4">
                                123 Cafe Street, Downtown District
                            </p>
                        </CardHeader>
                    </Card>
                </div>
            </section>

            {/* Footer with Subtle Diagonal Lines */}
            <footer className="py-12 px-4 bg-diagonal-lines-subtle border-t border-brand-gold/20 mt-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="font-display text-3xl font-bold text-brand-gold mb-2">
                            Al Maidah Cafe
                        </h3>
                        <p className="font-body text-brand-gold/60">
                            Where tradition meets excellence
                        </p>
                    </div>

                    <CafeDivider className="my-8" />

                    <div className="text-center">
                        <p className="font-body text-sm text-brand-gold/50">
                            © 2024 Al Maidah Cafe. All rights reserved.
                        </p>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="mt-4"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Back to Top ↑
                        </Button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
