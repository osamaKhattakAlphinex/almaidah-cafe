"use client";

import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

export function ColorShowcase() {
    return (
        <section className="py-20 px-4 bg-brand-black bg-noise">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="font-display text-5xl font-bold text-brand-gold mb-4">
                        Brand Color Palette
                    </h2>
                    <p className="font-body text-brand-gold/70">
                        Showcasing the Al Maidah Cafe design system
                    </p>
                </div>

                {/* Color Swatches */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="h-24 bg-brand-black border-2 border-brand-gold rounded-lg"></div>
                        <p className="font-body text-sm text-brand-gold">Black #000000</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 bg-brand-gold rounded-lg shadow-glow-gold"></div>
                        <p className="font-body text-sm text-brand-gold">Gold #EFB713</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 bg-brand-darkgold rounded-lg"></div>
                        <p className="font-body text-sm text-brand-gold">Dark Gold #C99A0E</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 bg-brand-cream rounded-lg"></div>
                        <p className="font-body text-sm text-brand-gold">Cream #FDF6DC</p>
                    </div>
                </div>

                {/* Button Variants */}
                <div>
                    <h3 className="font-display text-3xl font-bold text-brand-gold mb-6">
                        Button Styles
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary">Primary Button</Button>
                        <Button variant="outline">Outline Button</Button>
                        <Button variant="ghost">Ghost Button</Button>
                    </div>
                </div>

                {/* Card with Glow Effect */}
                <div>
                    <h3 className="font-display text-3xl font-bold text-brand-gold mb-6">
                        Card with Glow Effect
                    </h3>
                    <Card className="max-w-md hover:shadow-glow-gold">
                        <CardHeader>
                            <CardTitle>Interactive Card</CardTitle>
                            <CardDescription>
                                Hover over this card to see the golden glow effect in action
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="font-body text-brand-gold/80">
                                The glow-gold shadow creates a warm, inviting atmosphere that
                                perfectly complements our cafe aesthetic.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Typography Samples */}
                <div className="bg-brand-cream/5 p-8 rounded-lg">
                    <h3 className="font-display text-3xl font-bold text-brand-gold mb-6">
                        Typography
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <p className="font-body text-sm text-brand-gold/60 mb-1">Display Font (Playfair Display)</p>
                            <h4 className="font-display text-4xl font-bold text-brand-gold">
                                Elegant Headings
                            </h4>
                        </div>
                        <div>
                            <p className="font-body text-sm text-brand-gold/60 mb-1">Body Font (Nunito Sans)</p>
                            <p className="font-body text-lg text-brand-gold">
                                Clean, readable body text for comfortable reading experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
