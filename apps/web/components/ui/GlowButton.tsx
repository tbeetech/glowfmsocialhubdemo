import { forwardRef, type ButtonHTMLAttributes, type ForwardedRef, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/cn";

const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<GlowButtonVariant, string> = {
  primary: "bg-glow-primary text-white shadow-glow-emphasis hover:-translate-y-0.5 hover:shadow-xl",
  secondary: "bg-glow-secondary text-white hover:bg-glow-secondary/90",
  accent: "bg-glow-accent text-white hover:bg-glow-accent/90",
  ghost: "bg-transparent text-glow-primary border border-glow-primary/40 hover:bg-glow-primary/10"
};

const sizeStyles: Record<GlowButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-3.5 text-lg"
};

type GlowButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type GlowButtonSize = "sm" | "md" | "lg" | "xl";

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface GlowButtonProps extends Omit<NativeButtonProps, "children"> {
  variant?: GlowButtonVariant;
  size?: GlowButtonSize;
  asChild?: boolean;
  children?: ReactNode;
}

type InternalButtonProps = Omit<GlowButtonProps, "variant" | "size" | "asChild">;

function coerceRef(ref: ForwardedRef<HTMLButtonElement>): ForwardedRef<HTMLElement> {
  return ref as unknown as ForwardedRef<HTMLElement>;
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...rest }, ref) => {
    const commonClassName = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
    const { type: providedType, ...otherProps } = rest;

    if (asChild) {
      return (
        <Slot ref={coerceRef(ref)} className={commonClassName} {...(otherProps as InternalButtonProps)}>
          {children}
        </Slot>
      );
    }

    return (
      <button ref={ref} type={providedType ?? "button"} className={commonClassName} {...otherProps}>
        {children}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
