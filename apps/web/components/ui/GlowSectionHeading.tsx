import clsx from "clsx";

export function GlowSectionHeading({
  superTitle,
  title,
  description,
  align = "left"
}: {
  superTitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={clsx("space-y-2 mb-6", align === "center" && "text-center mx-auto max-w-2xl")}> 
      {superTitle && (
        <p className="text-xs uppercase tracking-[0.3em] text-glow-sky/70">{superTitle}</p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
      {description && <p className="text-sm md:text-base text-white/70">{description}</p>}
    </header>
  );
}

