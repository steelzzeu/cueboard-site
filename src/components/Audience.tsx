import {
  SiDiscord,
  SiObsstudio,
  SiSteam,
  SiTwitch,
} from "@icons-pack/react-simple-icons";
import { WindowsLogo } from "@phosphor-icons/react";
import { Marquee } from "@/components/magicui/marquee";

const LOGOS = [
  { name: "Windows", node: <WindowsLogo weight="fill" className="size-5" /> },
  { name: "Discord", node: <SiDiscord className="size-5" color="#5865F2" /> },
  { name: "OBS Studio", node: <SiObsstudio className="size-5 text-foreground" color="currentColor" /> },
  { name: "Twitch", node: <SiTwitch className="size-5" color="#9146FF" /> },
  { name: "Steam", node: <SiSteam className="size-5 text-foreground" color="currentColor" /> },
];

export function Audience() {
  return (
    <section className="relative py-14">
      <p className="mb-6 text-center text-sm text-muted-foreground">
        Plays with the tools you already stream on
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:32s]">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"
            >
              {logo.node}
              {logo.name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
