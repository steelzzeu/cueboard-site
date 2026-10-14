import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";

export function ProductFrame({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("relative mx-auto w-full max-w-5xl", className)}>
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-card shadow-[0_24px_80px_-32px_rgb(0_0_0_/_0.85)]">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-muted-foreground">{caption ?? "Cueboard"}</span>
        </div>
        <img src={src} alt={alt} className="block w-full" />
        <BorderBeam
          size={140}
          duration={9}
          colorFrom="#ffffff"
          colorTo="#7c7c7c"
          borderWidth={1.5}
        />
      </div>
    </figure>
  );
}
