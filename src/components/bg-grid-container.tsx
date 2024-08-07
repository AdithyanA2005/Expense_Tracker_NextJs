import React from "react";
import { cn } from "@/lib/utils";

interface BgGridContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export function BgGridContainer({ children, className }: BgGridContainerProps) {
  return (
    <div className={cn("dark:bg-grid-white/[0.05] bg-grid-black/[0.1] relative w-full", className)}>
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  );
}
