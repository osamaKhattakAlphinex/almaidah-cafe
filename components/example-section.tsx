"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function ExampleSection() {
    const features = [
        {
            icon: Coffee,
            title: "Premium Coffee",
            description: "Expertly crafted beverages using the finest beans",
        },
        {
            icon: Utensils,
            title: "Gourmet Cuisine",
            description: "Delicious meals prepared with fresh ingredients",
        },
        {
            icon: Clock,
            title: "Quick Service",
            description: "Fast and friendly service for your convenience",
        },
    ];

    return (
        <section className="py-20 px-4 bg-brand-black bg-noise">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl md:text-5xl font-bold text-center text-brand-gold mb-12"
                >
                    Why Choose Us
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:scale-105 hover:shadow-glow-gold transition-all duration-300">
                                <CardHeader>
                                    <feature.icon className="w-12 h-12 text-brand-gold mb-4" />
                                    <CardTitle>{feature.title}</CardTitle>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
