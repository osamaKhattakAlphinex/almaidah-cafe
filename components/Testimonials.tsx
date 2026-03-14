"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Ahmed Khan",
        location: "Hayatabad, Peshawar",
        rating: 5,
        review:
            "Best fast food in Phase 6! The burgers are always fresh and the shawarmas are absolutely delicious. Quick delivery and great service every time.",
    },
    {
        id: 2,
        name: "Fatima Ali",
        location: "Hayatabad, Peshawar",
        rating: 5,
        review:
            "Almaidah Cafe has become our family's go-to spot for weekend treats. The quality is consistent and the flavors are authentic. Highly recommended!",
    },
    {
        id: 3,
        name: "Bilal Hassan",
        location: "Hayatabad, Peshawar",
        rating: 5,
        review:
            "Amazing food at great prices! The pizza is my favorite, and their deals are unbeatable. The staff is friendly and the place is always clean.",
    },
    {
        id: 4,
        name: "Sara Malik",
        location: "Hayatabad, Peshawar",
        rating: 5,
        review:
            "Love the variety on their menu! Everything from burgers to wraps is delicious. The ambiance is great and perfect for hanging out with friends.",
    },
    {
        id: 5,
        name: "Usman Afridi",
        location: "Hayatabad, Peshawar",
        rating: 5,
        review:
            "Hands down the best cafe in Hayatabad! Their chicken tikka burger is to die for. Fast service and reasonable prices make it even better.",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-slide effect
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    // Get visible testimonials (show 3 at a time on desktop, 1 on mobile)
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold mb-3 md:mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
                        Real reviews from real people who love our food
                    </p>
                </motion.div>

                {/* Testimonial Slider */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Desktop View - 3 Cards */}
                    <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode="wait">
                            {visibleTestimonials.map((testimonial, index) => (
                                <motion.div
                                    key={`${testimonial.id}-${currentIndex}-${index}`}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Mobile View - 1 Card */}
                    <div className="md:hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`mobile-${testimonials[currentIndex].id}`}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <TestimonialCard testimonial={testimonials[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black ${index === currentIndex
                                    ? "w-8 h-3 bg-brand-gold"
                                    : "w-3 h-3 bg-brand-gold/30 hover:bg-brand-gold/50"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-8 md:mt-12"
                >
                    <p className="font-body text-white/60 text-xs md:text-sm">
                        Join hundreds of satisfied customers in Hayatabad
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div
            className="relative h-full p-5 md:p-6 rounded-lg"
            style={{
                backgroundColor: "#111111",
                borderLeft: "4px solid #EFB713",
            }}
        >
            {/* Large Faded Quote Icon */}
            <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-10">
                <Quote size={48} className="text-brand-gold md:w-16 md:h-16" strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className="text-brand-gold fill-brand-gold md:w-[18px] md:h-[18px]"
                        />
                    ))}
                </div>

                {/* Review Text */}
                <p className="font-body text-white text-sm md:text-base leading-relaxed mb-5 md:mb-6 min-h-[100px] md:min-h-[120px]">
                    "{testimonial.review}"
                </p>

                {/* Reviewer Info */}
                <div className="border-t border-brand-gold/20 pt-3 md:pt-4">
                    <h4 className="font-body font-bold text-brand-gold text-base md:text-lg mb-1">
                        {testimonial.name}
                    </h4>
                    <p className="font-body text-white/50 text-xs md:text-sm">
                        {testimonial.location}
                    </p>
                </div>
            </div>
        </div>
    );
}
