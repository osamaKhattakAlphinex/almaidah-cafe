"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Loader2 } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitMessage({ type: "success", text: data.message });
                setFormData({ name: "", phone: "", message: "" });
            } else {
                setSubmitMessage({ type: "error", text: data.message });
            }
        } catch (error) {
            setSubmitMessage({
                type: "error",
                text: "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-brand-black">
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
                        Visit Us Today
                    </h2>
                    <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
                        Find us in the heart of Phase 6, Hayatabad, Peshawar
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative h-[300px] md:h-[400px] lg:h-full lg:min-h-[400px] rounded-lg overflow-hidden border-2 md:border-4 border-brand-gold">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d105853.41129795875!2d71.4399719!3d33.9946116!3m2!1i1024!2i768!4f13.1!2m1!1salmaida%20peshawar!5e0!3m2!1sen!2s!4v1773446780552!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(100%)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Almaidah Cafe Location"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Info & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                    >
                        {/* Contact Info Card */}
                        <div className="bg-[#111111] rounded-lg p-5 md:p-6 border-l-4 border-brand-gold">
                            <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold mb-4 md:mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-3 md:space-y-4">
                                {/* Address */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-body font-semibold text-white mb-1 text-sm md:text-base">
                                            Address
                                        </h4>
                                        <p className="font-body text-white/70 text-xs md:text-sm">

                                            Phase 6 F-8 Street 01 (Akhunzada) <br /> Zangal Market,  Hayatabad Peshawar,  <br />  Pakistan, 25000


                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-body font-semibold text-white mb-1 text-sm md:text-base">
                                            Phone
                                        </h4>
                                        <p className="font-body text-white/70 text-xs md:text-sm">
                                            +923454295298
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-3 md:gap-4">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-body font-semibold text-white mb-1 text-sm md:text-base">
                                            Opening Hours
                                        </h4>
                                        <p className="font-body text-white/70 text-xs md:text-sm">
                                            Monday - Sunday
                                            <br />
                                            11:00 AM - 11:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[#111111] rounded-lg p-5 md:p-6 border-l-4 border-brand-gold">
                            <h3 className="font-display text-xl md:text-2xl font-bold text-brand-gold mb-4 md:mb-6">
                                Send Us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                                {/* Name Input */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border border-brand-gold rounded-lg text-white text-sm md:text-base placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300"
                                    />
                                </div>

                                {/* Phone Input */}
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your Phone Number"
                                        required
                                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border border-brand-gold rounded-lg text-white text-sm md:text-base placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        required
                                        rows={4}
                                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border border-brand-gold rounded-lg text-white text-sm md:text-base placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-5 md:px-6 py-3 md:py-4 bg-brand-gold text-brand-black font-body font-bold text-xs md:text-sm uppercase rounded-lg hover:bg-brand-darkgold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>

                                {/* Submit Message */}
                                {submitMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-3 md:p-4 rounded-lg text-center font-body text-xs md:text-sm ${submitMessage.type === "success"
                                            ? "bg-brand-gold/20 text-brand-gold"
                                            : "bg-red-500/20 text-red-400"
                                            }`}
                                    >
                                        {submitMessage.text}
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
