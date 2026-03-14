"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Loader2 } from "lucide-react";
import Image from "next/image";

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

export function Menu() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [loading, setLoading] = useState(true);
    const [addingItem, setAddingItem] = useState<string | null>(null);

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/menu");
            const data = await response.json();

            if (data.success) {
                setMenuItems(data.data);
                setCategories(data.categories);
            }
        } catch (error) {
            console.error("Error fetching menu:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredItems =
        activeCategory === "All"
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    const handleAddToOrder = (itemId: string) => {
        setAddingItem(itemId);
        // Simulate adding to cart
        setTimeout(() => {
            setAddingItem(null);
            // Here you would typically dispatch to a cart context/state
            console.log("Added item to order:", itemId);
        }, 600);
    };

    return (
        <section id="menu" className="py-10 px-4 md:px-6 lg:px-10 md:py-16 lg:py-20 bg-brand-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold mb-3 md:mb-4">
                        Our Menu
                    </h2>
                    <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
                        Explore our delicious selection of fast food favorites
                    </p>
                </motion.div>

                {/* Category Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 md:mb-12"
                >
                    <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                  px-4 md:px-6 py-2 md:py-3 rounded-full font-body font-semibold text-xs md:text-sm whitespace-nowrap
                  transition-all duration-300 border-2
                  ${activeCategory === category
                                        ? "bg-brand-gold text-brand-black border-brand-gold shadow-glow-gold"
                                        : "bg-brand-black text-brand-gold border-brand-gold/30 hover:border-brand-gold/60 hover:bg-brand-gold/10"
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="w-12 h-12 text-brand-gold animate-spin" />
                    </div>
                )}

                {/* Menu Items Grid */}
                {!loading && (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                        >
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative bg-brand-black rounded-lg overflow-hidden border-2 border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 hover:shadow-glow-gold"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-square bg-brand-gold/5 overflow-hidden">
                                        {/* Placeholder for image */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-gold/10 to-brand-black">
                                            <div className="text-4xl md:text-6xl opacity-20">🍔</div>
                                        </div>

                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-3 md:p-4">
                                        {/* Item Name */}
                                        <h3 className="font-display text-base md:text-lg font-bold text-brand-gold mb-1 md:mb-2 line-clamp-1">
                                            {item.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-body text-xs text-white/60 mb-2 md:mb-3 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Price and Add Button */}
                                        <div className="flex items-center justify-between">
                                            <span className="font-body text-lg md:text-xl font-bold text-brand-gold">
                                                Rs. {item.price}
                                            </span>

                                            {/* Add to Order Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handleAddToOrder(item.id)}
                                                disabled={addingItem === item.id}
                                                className={`
                          w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center
                          transition-all duration-300
                          ${addingItem === item.id
                                                        ? "bg-brand-darkgold"
                                                        : "bg-brand-gold hover:bg-brand-darkgold"
                                                    }
                          shadow-lg hover:shadow-glow-gold
                        `}
                                                aria-label={`Add ${item.name} to order`}
                                            >
                                                <motion.div
                                                    animate={
                                                        addingItem === item.id
                                                            ? { rotate: 360, scale: [1, 1.2, 1] }
                                                            : {}
                                                    }
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <Plus
                                                        size={18}
                                                        className="text-brand-black md:w-5 md:h-5"
                                                        strokeWidth={3}
                                                    />
                                                </motion.div>
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-2 md:top-3 left-2 md:left-3 px-2 md:px-3 py-1 bg-brand-black/80 backdrop-blur-sm rounded-full border border-brand-gold/30">
                                        <span className="font-body text-xs text-brand-gold">
                                            {item.category}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                )}

                {/* Empty State */}
                {!loading && filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="font-body text-xl text-white/50">
                            No items found in this category
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
