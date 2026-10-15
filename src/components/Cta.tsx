import { WindowsLogo } from "@phosphor-icons/react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { DONATE, INSTALLER, PORTABLE, SAFE_DOWNLOAD } from "@/lib/links";

export function Cta() {
  return (
    <section id="download" className="scroll-mt-16 px-5 py-20">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-card px-6 py-14 text-center">
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(380px_circle_at_center,white,transparent)]"
          color="rgb(255, 255, 255)"
          maxOpacity={0.14}
          flickerChance={0.14}
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get Cueboard on this machine.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Free Windows download. If it is useful, a donation keeps the lights on.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <a href={INSTALLER}>
                <WindowsLogo weight="fill" className="size-4" />
                Download installer
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={PORTABLE}>Portable exe</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={DONATE} target="_blank" rel="noreferrer">
                Donate
              </a>
            </Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            If Chrome blocks the file, that is the missing signature.{" "}
            <a href={SAFE_DOWNLOAD} className="underline underline-offset-4 hover:text-foreground">
              Read why it is still the Cueboard installer
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
