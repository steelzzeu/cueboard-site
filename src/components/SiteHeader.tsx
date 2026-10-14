import { useState } from "react";
import { List, X, WindowsLogo } from "@phosphor-icons/react";
import { BrandMark } from "@/components/BrandMark";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import { DONATE, INSTALLER } from "@/lib/links";

const NAV = [
  { href: "#product", label: "Product" },
  { href: "#youtube", label: "YouTube MP3" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="pointer-events-auto w-full max-w-4xl">
        <div className="relative rounded-full border border-white/10 bg-background/75 shadow-[0_8px_32px_-12px_rgb(0_0_0_/_0.7)] backdrop-blur-xl">
          <ShineBorder
            borderWidth={1}
            duration={12}
            shineColor={["#ffffff", "#8a8a8a", "#ffffff"]}
          />
          <div className="relative flex h-12 items-center justify-between gap-3 px-2 pr-2 pl-4">
            <a href="#top" className="flex shrink-0 items-center gap-2 text-sm font-semibold tracking-tight">
              <BrandMark className="size-5" />
              Cueboard
            </a>

            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-foreground">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-1 md:flex">
              <Button variant="ghost" size="sm" asChild>
                <a href={DONATE} target="_blank" rel="noreferrer">
                  Donate
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={INSTALLER}>
                  <WindowsLogo weight="fill" className="size-3.5" />
                  Download
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon-sm"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X weight="bold" /> : <List weight="bold" />}
            </Button>
          </div>
        </div>

        {open ? (
          <div className="relative mt-2 rounded-2xl border border-white/10 bg-background/90 p-4 shadow-lg backdrop-blur-xl md:hidden">
            <ShineBorder
              borderWidth={1}
              duration={12}
              shineColor={["#ffffff", "#8a8a8a", "#ffffff"]}
            />
            <nav className="relative flex flex-col gap-3 text-sm text-muted-foreground">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="relative mt-4 flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={DONATE} target="_blank" rel="noreferrer">
                  Donate
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={INSTALLER}>
                  <WindowsLogo weight="fill" className="size-3.5" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
