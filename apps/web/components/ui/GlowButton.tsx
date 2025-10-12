import { forwardRef, type ButtonHTMLAttributes, type ForwardedRef, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/cn";

const baseStyles =
  "button-fx inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 motion-safe:transition-transform motion-safe:duration-200";

const variantStyles: Record<GlowButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-glow-primary via-[#ff7c2a] to-[#ff5900] text-white shadow-glow-emphasis motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_24px_40px_-18px_rgba(255,105,40,0.45)]",
  secondary:
    "bg-[linear-gradient(135deg,#001f54_0%,#0c3a7b_100%)] text-white motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_32px_-16px_rgba(0,45,104,0.5)]",
  accent:
    "bg-[linear-gradient(135deg,#d72638_0%,#ff3f5f_100%)] text-white motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_24px_36px_-18px_rgba(215,38,56,0.45)]",
  ghost:
    "border border-glow-primary/35 bg-transparent text-[color:var(--foreground)] dark:text-glow-primary motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_16px_32px_-20px_rgba(255,107,0,0.35)] hover:bg-glow-primary/10 dark:hover:bg-glow-primary/15"
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
