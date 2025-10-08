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
    <div className={cn("glass-card overflow-hidden", className)}>
      {(title || description || actions) && (
        <div className={cn("bg-glow-card px-5 py-4 text-white sm:px-6 sm:py-5", headerClassName)}>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              {title && <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>}
              {description && <p className="text-sm text-white/80">{description}</p>}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        </div>
      )}
      <div className="p-5 sm:p-6">
        {children}
      </div>
    </div>
  );
}
