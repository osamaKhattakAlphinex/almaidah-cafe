"use client";

import { motion } from "framer-motion";
import { Contact } from "@/components/Contact";
import { MapPin, Phone, Clock, Mail, MessageCircle, Navigation } from "lucide-react";

export default function ContactPage() {
    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            details: "+92 345 4295298",
            description: "Available during business hours",
            action: "tel:+923454295298",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            details: "Quick Response",
            description: "Message us anytime for orders",
            action: "https://wa.me/923454295298",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "Phase 6, Hayatabad",
            description: "Zangal Market, Peshawar",
            action: "https://maps.google.com/?q=Almaidah+Cafe+Peshawar",
        },
    ];

    const faqs = [
        {
            question: "Do you offer delivery?",
            answer: "Yes! We offer fast delivery within Hayatabad and surrounding areas. Contact us via WhatsApp to place your order.",
        },
        {
            question: "Can I make reservations?",
            answer: "We operate on a first-come, first-served basis. However, for large groups, feel free to call ahead and we'll do our best to accommodate you.",
        },
        {
            question: "Do you have vegetarian options?",
            answer: "Absolutely! We have a variety of vegetarian options including veggie burgers, fries, and more. Check our menu for details.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept cash, credit/debit cards, and mobile payment methods including JazzCash and Easypaisa.",
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
                            Get in Touch
                        </h1>
                        <p className="font-body text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                            Have a question, feedback, or craving? We'd love to hear from you.
                            Reach out and let's make your next meal memorable!
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
            </section>

            {/* Quick Contact Methods */}
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
                            Contact Methods
                        </h2>
                        <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                            Choose your preferred way to reach us
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.title}
                                href={method.action}
                                target={method.action.startsWith('http') ? '_blank' : undefined}
                                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group"
                            >
                                <div className="bg-[#111111] p-6 md:p-8 rounded-lg border-2 border-brand-gold/20 hover:border-brand-gold hover:shadow-glow-gold transition-all duration-300 h-full cursor-pointer">
                                    <div className="flex justify-center mb-4 md:mb-6">
                                        <div className="p-4 rounded-full bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-300">
                                            <method.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-gold" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold text-center mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="font-body text-base md:text-lg text-white font-semibold text-center mb-2">
                                        {method.details}
                                    </p>
                                    <p className="font-body text-sm md:text-base text-white/60 text-center">
                                        {method.description}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section with Map and Form */}
            <Contact />

            {/* Opening Hours Detailed */}
            <section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold mb-4">
                            Opening Hours
                        </h2>
                        <p className="font-body text-base md:text-lg text-white/70">
                            We're here to serve you throughout the week
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#111111] rounded-lg overflow-hidden border-2 border-brand-gold/20"
                    >
                        <div className="p-6 md:p-8">
                            <div className="space-y-4">
                                {[
                                    { day: "Monday - Tuesday", hours: "10:00 AM - 02:00 AM" },
                                    { day: "Wednesday", hours: "09:00 AM - 02:00 AM", highlight: true },
                                    { day: "Thursday - Saturday", hours: "10:00 AM - 02:00 AM" },
                                    { day: "Sunday", hours: "09:00 AM - 02:00 AM", highlight: true },
                                ].map((schedule, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center py-4 border-b border-brand-gold/10 last:border-0 ${schedule.highlight ? 'bg-brand-gold/5 -mx-4 px-4 rounded' : ''
                                            }`}
                                    >
                                        <span className="font-body text-base md:text-lg text-white font-semibold">
                                            {schedule.day}
                                        </span>
                                        <span className="font-body text-base md:text-lg text-brand-gold">
                                            {schedule.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-brand-gold/20 text-center">
                                <p className="font-body text-sm md:text-base text-white/60">
                                    Open late to satisfy your cravings! 🌙
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-brand-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="font-body text-base md:text-lg text-white/70">
                            Quick answers to common questions
                        </p>
                    </motion.div>

                    <div className="space-y-4 md:space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[#111111] p-5 md:p-6 rounded-lg border-l-4 border-brand-gold"
                            >
                                <h3 className="font-display text-lg md:text-xl font-bold text-brand-gold mb-3">
                                    {faq.question}
                                </h3>
                                <p className="font-body text-sm md:text-base text-white/70 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 md:mt-12 text-center"
                    >
                        <p className="font-body text-base md:text-lg text-white/70 mb-4">
                            Still have questions?
                        </p>
                        <a
                            href="https://wa.me/923454295298"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-brand-gold text-brand-black font-body font-bold text-sm md:text-base rounded-lg hover:bg-brand-darkgold hover:scale-105 transition-all duration-300 shadow-glow-gold"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Message Us on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Directions Section */}
            <section className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold mb-4">
                            Find Us Easily
                        </h2>
                        <p className="font-body text-base md:text-lg text-white/70 mb-8">
                            Located in the heart of Phase 6, Hayatabad - easy to find, easier to love!
                        </p>
                        <a
                            href="https://maps.google.com/?q=Almaidah+Cafe+Peshawar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-brand-gold text-brand-black font-body font-bold text-sm md:text-base rounded-lg hover:bg-brand-darkgold hover:scale-105 transition-all duration-300 shadow-glow-gold"
                        >
                            <Navigation className="w-5 h-5" />
                            Get Directions
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
