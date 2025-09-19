"use client";

import { forwardRef } from "react";
import clsx from "clsx";

const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow-primary";

const variantStyles: Record<string, string> = {
  primary: "bg-glow-primary text-neutral-950 hover:shadow-glow hover:-translate-y-0.5",
  secondary: "bg-white/10 text-white hover:bg-white/20",
  ghost: "bg-transparent border border-white/15 text-white hover:border-white/30",
  outline: "border border-glow-primary text-glow-primary hover:bg-glow-primary/10"
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2 text-sm",
  lg: "px-6 py-3 text-base"
};

type GlowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
};

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

GlowButton.displayName = "GlowButton";

