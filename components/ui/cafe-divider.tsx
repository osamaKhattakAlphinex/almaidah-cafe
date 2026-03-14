import * as React from "react";
import { cn } from "@/lib/utils";

interface CafeDividerProps {
    className?: string;
}

export function CafeDivider({ className }: CafeDividerProps) {
    return (
        <div className={cn("cafe-divider", className)}>
            <div className="cafe-divider-icon"></div>
        </div>
    );
}
