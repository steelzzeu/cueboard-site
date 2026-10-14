import { Audience } from "@/components/Audience";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductFrame } from "@/components/ProductFrame";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Terms } from "@/components/Terms";
import { YoutubeHighlight } from "@/components/YoutubeHighlight";

export function App() {
  return (
    <div id="top" className="min-h-svh bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <div id="product" className="scroll-mt-16 px-5 pb-8">
          <ProductFrame
            src="/images/board.png"
            alt="Cueboard board with Import, YouTube, and hotkey-ready clips"
            caption="Cueboard · board"
          />
        </div>
        <YoutubeHighlight />
        <Audience />
        <Features />
        <HowItWorks />
        <section className="px-5 pb-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Settings that say what the device does.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Output, monitor, and minimize rules. Headphones are not your livestream.
            </p>
          </div>
          <ProductFrame
            src="/images/settings.png"
            alt="Cueboard settings for audio output and hotkey behavior"
            caption="Cueboard · settings"
          />
        </section>
        <Faq />
        <Terms />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
