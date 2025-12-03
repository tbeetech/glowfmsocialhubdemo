"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface AnimatedSectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay, ...rest }: AnimatedSectionProps) {
  // Optimized: Always visible, no intersection observer overhead
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = delay; // Keep prop to avoid React warning about unknown prop on DOM element

  return (
    <section
      className={cn(
        "opacity-100", // Always visible
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
