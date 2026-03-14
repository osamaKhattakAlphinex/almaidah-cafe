"use client";

import { motion } from "framer-motion";
import { Coffee, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ShowcasePage() {
    return (
        <div className="min-h-screen bg-brand-black">
            {/* Hero Section */}
            <section className="py-20 px-4 bg-noise">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-6xl md:text-7xl font-bold text-brand-gold mb-6 text-gold-glow"
                    >
                        Design System Showcase
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-body text-xl text-brand-gold/70 mb-8"
                    >
                        Explore the complete Al Maidah Cafe design language
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="font-body text-sm text-brand-gold/50 mb-4">
                            Try selecting this text to see the custom selection style
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cafe Divider Demo */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="cafe-divider">
                    <div className="cafe-divider-icon"></div>
                </div>
            </div>

            {/* CSS Variables Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-display text-4xl font-bold text-brand-gold mb-8 text-center">
                        CSS Variables
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">--gold: #EFB713</CardTitle>
                                <CardDescription>
                                    Primary accent color used throughout the design
                                </CardDescription>
                                <div className="mt-4 h-20 rounded" style={{ backgroundColor: 'var(--gold)' }}></div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">--black: #0a0a0a</CardTitle>
                                <CardDescription>
                                    Near-black background for reduced eye strain
                                </CardDescription>
                                <div className="mt-4 h-20 rounded border-2 border-brand-gold/30" style={{ backgroundColor: 'var(--black)' }}></div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Another Divider */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="cafe-divider">
                    <div className="cafe-divider-icon"></div>
                </div>
            </div>

            {/* Diagonal Lines Background Demo */}
            <section className="py-16 px-4 bg-diagonal-lines">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-display text-4xl font-bold text-brand-gold mb-8 text-center">
                        Diagonal Lines Pattern
                    </h2>
                    <p className="font-body text-center text-brand-gold/70 mb-12">
                        This section uses the .bg-diagonal-lines class for subtle texture
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Coffee, title: "Quality", desc: "Premium ingredients" },
                            { icon: Award, title: "Excellence", desc: "Award-winning service" },
                            { icon: Heart, title: "Passion", desc: "Made with love" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="text-center hover:shadow-glow-gold transition-smooth">
                                    <CardHeader>
                                        <item.icon className="w-12 h-12 mx-auto mb-4 text-brand-gold" />
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription>{item.desc}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smooth Scroll Demo */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="font-display text-4xl font-bold text-brand-gold mb-6">
                        Smooth Scroll Behavior
                    </h2>
                    <p className="font-body text-brand-gold/70 mb-8">
                        All anchor links use smooth scrolling for better UX
                    </p>
                    <Button variant="primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Scroll to Top
                    </Button>
                </div>
            </section>

            {/* Footer with Subtle Diagonal Lines */}
            <footer className="py-12 px-4 bg-diagonal-lines-subtle border-t border-brand-gold/20">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="font-display text-2xl font-bold text-brand-gold mb-2">
                        Al Maidah Cafe
                    </p>
                    <p className="font-body text-brand-gold/60 text-sm">
                        Where every detail matters
                    </p>
                </div>
            </footer>
        </div>
    );
}
