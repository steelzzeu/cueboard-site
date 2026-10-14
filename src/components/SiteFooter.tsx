import { BrandMark } from "@/components/BrandMark";
import { Separator } from "@/components/ui/separator";
import { DONATE, INSTALLER, PORTABLE, TERMS } from "@/lib/links";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/#product", label: "Overview" },
      { href: "/#youtube", label: "YouTube MP3" },
      { href: "/#features", label: "Features" },
    ],
  },
  {
    title: "Download",
    links: [
      { href: INSTALLER, label: "Windows installer" },
      { href: PORTABLE, label: "Portable exe" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/#faq", label: "FAQ" },
      { href: TERMS, label: "Terms" },
      { href: DONATE, label: "Donate", external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="px-5 pt-8 pb-10">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-10" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2 text-sm font-semibold">
              <BrandMark className="size-5" />
              Cueboard
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A Windows soundboard for streamers. Local files, global hotkeys, no account.
            </p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium">{column.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-foreground"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 select-none text-center text-[12vw] leading-none font-semibold tracking-tighter text-foreground/[0.04] sm:text-[8rem]">
          Cueboard
        </p>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Windows desktop · version 1.0.0
        </p>
      </div>
    </footer>
  );
}
