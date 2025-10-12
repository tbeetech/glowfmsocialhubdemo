"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface AnimatedSectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0, ...rest }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      prefersReducedMotion
        ? { threshold: 0 }
        : {
            threshold: 0.12,
            rootMargin: "0px 0px -15% 0px"
          }
    );

    observer.observe(node);
    const fallbackId = window.setTimeout(() => setIsVisible(true), prefersReducedMotion ? 0 : 1600);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackId);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "transform-gpu transition-all duration-700 ease-out will-change-transform will-change-opacity",
        prefersReducedMotion ? "opacity-100" : isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </section>
  );
}
