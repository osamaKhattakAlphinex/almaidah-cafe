"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Menu Section */}
      <Menu />

      {/* About Section */}
      <About />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />


    </>
  );
}
