import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black",
                    "disabled:pointer-events-none disabled:opacity-50",
                    {
                        // Primary variant - gold background, black text with glow
                        "bg-brand-gold text-brand-black hover:bg-brand-darkgold hover:scale-105 shadow-glow-gold":
                            variant === "primary",
                        // Outline variant - gold border, gold text, hover fills with gold
                        "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black hover:shadow-glow-gold":
                            variant === "outline",
                        // Ghost variant - transparent, gold text, subtle hover
                        "text-brand-gold hover:bg-brand-gold/10": variant === "ghost",
                    },
                    {
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-6 text-base": size === "md",
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
