"use client";

import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Footer() {
    const [showTooltip, setShowTooltip] = useState(false);

    const navigationLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        {
            name: "Instagram",
            href: "https://www.instagram.com/almaidahcafe?fbclid=IwY2xjawQhhs5leHRuA2FlbQIxMABicmlkETFBR1p1bjYyTG5mbmJkMnNnc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpm_yaYkTnbDLxB0Ld4JSIlmlaUCa7JkSBFCQAuIO2zrnGqEgmIIStWA47ey_aem_iBFmG0UEs0EnRFu63R2R1w",
            icon: Instagram,
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/almaidahcafepeshawar/",
            icon: Facebook,
        },
        {
            name: "WhatsApp",
            href: "https://wa.me/+923454295298",
            icon: MessageCircle,
        },
    ];

    return (
        <>
            <footer className="bg-black bg-diagonal-lines border-t border-brand-gold/20">
                <div className="container mx-auto px-4 md:px-6 lg:px-10 py-10 md:py-12">
                    {/* Four Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                        {/* Left Column - Logo & Tagline */}
                        <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-4">
                            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-brand-gold">
                                Almaidah Cafe
                            </h3>
                            <p className="text-brand-gold/70 text-xs md:text-sm text-center md:text-left max-w-xs">
                                Where tradition meets taste. Experience authentic flavors in the
                                heart of Hayatabad.
                            </p>
                        </div>

                        {/* Second Column - Quick Links */}
                        <div className="flex flex-col items-center space-y-3 md:space-y-4">
                            <h4 className="font-playfair text-base md:text-lg font-semibold text-brand-gold">
                                Quick Links
                            </h4>
                            <nav className="flex flex-col space-y-1.5 md:space-y-2">
                                {navigationLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-brand-gold/70 hover:text-brand-gold transition-smooth text-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-2 py-1"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Third Column - Opening Hours */}
                        <div className="flex flex-col items-center space-y-3 md:space-y-4">
                            <h4 className="font-playfair text-base md:text-lg font-semibold text-brand-gold">
                                Opening Hours
                            </h4>
                            <div className="flex flex-col space-y-1.5 md:space-y-2 text-xs md:text-sm">
                                <div className="flex justify-between gap-4">
                                    <span className="text-brand-gold/70">Mon - Tue:</span>
                                    <span className="text-brand-gold/90">10:00 - 02:00</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-brand-gold/70">Wednesday:</span>
                                    <span className="text-brand-gold/90">09:00 - 02:00</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-brand-gold/70">Thu - Sat:</span>
                                    <span className="text-brand-gold/90">10:00 - 02:00</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-brand-gold/70">Sunday:</span>
                                    <span className="text-brand-gold/90">09:00 - 02:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Fourth Column - Social Media */}
                        <div className="flex flex-col items-center md:items-end space-y-3 md:space-y-4">
                            <h4 className="font-playfair text-base md:text-lg font-semibold text-brand-gold">
                                Connect With Us
                            </h4>
                            <div className="flex space-x-3 md:space-x-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-brand-gold hover:text-brand-gold transition-smooth group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg p-1"
                                            aria-label={social.name}
                                        >
                                            <Icon
                                                className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(239,183,19,0.6)] transition-all duration-300"
                                                strokeWidth={1.5}
                                            />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Gold Divider */}
                    <div className="w-full h-px bg-brand-gold/30 mb-6"></div>

                    {/* Copyright Notice */}
                    <div className="text-center">
                        <p className="text-brand-gold/50 text-xs">
                            © 2024 Almaidah Cafe. Phase 6, Hayatabad, Peshawar. All Rights
                            Reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="relative">
                    {/* Tooltip */}
                    {showTooltip && (
                        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-brand-gold text-black text-sm font-semibold rounded-lg whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
                            Order on WhatsApp
                            <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-brand-gold"></div>
                        </div>
                    )}

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/+923454295298"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className="flex items-center justify-center w-14 h-14 bg-brand-gold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-slow group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        aria-label="Order on WhatsApp"
                    >
                        <MessageCircle
                            className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300"
                            strokeWidth={2}
                        />
                    </a>
                </div>
            </div>

            <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(239, 183, 19, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(239, 183, 19, 0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </>
    );
}
