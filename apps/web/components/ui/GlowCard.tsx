import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlowCardProps {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
  headerClassName?: string;
  children: ReactNode;
}

export function GlowCard({
  title,
  description,
  actions,
  className,
  headerClassName,
  children
}: GlowCardProps) {
  return (
    <div className={cn("glass-card group overflow-hidden backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_60px_rgba(99,102,241,0.15)] hover:border-white/20 hover:-translate-y-1 transition-all duration-500 relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500", className)}>
      {(title || description || actions) && (
        <div className={cn("bg-glow-card px-5 py-4 text-white sm:px-6 sm:py-5 backdrop-blur-md border-b border-white/10", headerClassName)}>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              {title && <h3 className="text-lg font-semibold sm:text-xl drop-shadow-lg">{title}</h3>}
              {description && <p className="text-sm text-white/80 drop-shadow">{description}</p>}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        </div>
      )}
      <div className="p-5 sm:p-6 relative z-10">
        {children}
      </div>
    </div>
  );
}
