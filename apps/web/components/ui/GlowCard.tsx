import clsx from "clsx";
import { ReactNode } from "react";

const base = "relative overflow-hidden rounded-card border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300 hover:border-glow-primary/70 hover:shadow-glow";

export function GlowCard({
  children,
  className,
  glow = false
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <article
      className={clsx(base, className, {
        "before:absolute before:inset-px before:-z-10 before:rounded-[inherit] before:bg-gradient-to-br before:from-white/10 before:to-white/5": glow
      })}
    >
      {children}
    </article>
  );
}

