"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        alt: "Delicious burger with fries",
        span: "row-span-2",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
        alt: "Fresh shawarma wrap",
        span: "row-span-1",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
        alt: "Crispy pizza slice",
        span: "row-span-1",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
        alt: "Golden french fries",
        span: "row-span-2",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        alt: "Refreshing drinks",
        span: "row-span-1",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
        alt: "Loaded burger combo",
        span: "row-span-1",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
        alt: "Spicy chicken wings",
        span: "row-span-1",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
        alt: "Dessert special",
        span: "row-span-1",
    },
];

export function Gallery() {
    return (
        <section id="gallery" className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-brand-black bg-diagonal-lines relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Title with Decorative Underline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold mb-4 inline-block">
                        From Our Kitchen
                    </h2>

                    {/* Decorative Wavy Underline */}
                    <div className="flex justify-center mt-4">
                        <svg
                            width="200"
                            height="12"
                            viewBox="0 0 200 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-brand-gold"
                        >
                            <path
                                d="M0 6C10 2, 20 10, 30 6S50 2, 60 6S80 10, 90 6S110 2, 120 6S140 10, 150 6S170 2, 180 6S190 10, 200 6"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <p className="font-body text-base md:text-lg text-white/70 mt-6 max-w-2xl mx-auto px-4">
                        A visual feast of our most popular dishes and customer favorites
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 auto-rows-[150px] md:auto-rows-[200px] gap-2 md:gap-3"
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + index * 0.1,
                                ease: "easeOut",
                            }}
                            className={`relative overflow-hidden rounded-lg ${image.span}`}
                        >
                            {/* Image */}
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-8 md:mt-12"
                >
                    <p className="font-body text-white/60 text-xs md:text-sm">
                        Follow us on social media for more delicious updates
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
