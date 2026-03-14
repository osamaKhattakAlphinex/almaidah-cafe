"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function DividerShowcase() {
    return (
        <section className="py-20 px-4 bg-brand-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="font-display text-4xl font-bold text-brand-gold mb-4">
                        Our Story
                    </h2>
                    <p className="font-body text-brand-gold/70">
                        A journey of passion and excellence
                    </p>
                </motion.div>

                {/* Cafe Divider with Diamond Icon */}
                <div className="cafe-divider">
                    <div className="cafe-divider-icon"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="font-body text-lg text-brand-gold/80 leading-relaxed">
                        Since our founding, Al Maidah Cafe has been dedicated to serving
                        the finest coffee and cuisine in an atmosphere of warmth and elegance.
                    </p>
                </motion.div>

                {/* Another Divider */}
                <div className="cafe-divider">
                    <div className="cafe-divider-icon"></div>
                </div>

                {/* Section with Diagonal Lines Background */}
                <div className="bg-diagonal-lines p-8 rounded-lg mt-12">
                    <h3 className="font-display text-3xl font-bold text-brand-gold mb-6 text-center">
                        Featured Items
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Signature Blend</CardTitle>
                                <CardDescription>
                                    Our house-roasted coffee with notes of chocolate and caramel
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Artisan Pastries</CardTitle>
                                <CardDescription>
                                    Freshly baked daily using traditional recipes
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>

                {/* Footer Section with Subtle Diagonal Lines */}
                <div className="bg-diagonal-lines-subtle p-8 rounded-lg mt-12 border border-brand-gold/20">
                    <div className="text-center">
                        <p className="font-body text-brand-gold/60 text-sm">
                            Visit us daily from 7 AM to 10 PM
                        </p>
                        <p className="font-display text-2xl font-bold text-brand-gold mt-2">
                            Experience the Difference
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
