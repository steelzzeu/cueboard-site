import { ArrowRight, WindowsLogo } from "@phosphor-icons/react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { INSTALLER, PORTABLE } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-28 pb-10 text-center sm:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.42_0.12_280/_0.45),transparent)]" />
        <DotPattern
          width={20}
          height={20}
          cr={1}
          className="text-white/20 [mask-image:radial-gradient(520px_circle_at_center,white,transparent)]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
          <AnimatedShinyText className="mx-0 text-xs font-medium">
            New · paste a YouTube link, get an MP3
          </AnimatedShinyText>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
          Paste a YouTube link. Play it on stream.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Cueboard pulls the audio, converts it to MP3 on this PC, and drops it on the board. Global hotkeys, local files, no account.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href={INSTALLER}>
              <WindowsLogo weight="fill" className="size-4" />
              Download for Windows
              <ArrowRight weight="bold" className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={PORTABLE}>Portable .exe</a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          NSIS installer · no credit card · files stay local
        </p>
      </div>
    </section>
  );
}
