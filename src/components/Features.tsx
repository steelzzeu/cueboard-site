import {
  CornersIn,
  FolderSimple,
  Headphones,
  Keyboard,
  Tray,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FEATURES = [
  {
    icon: YoutubeLogo,
    title: "YouTube to MP3",
    body: "Paste a link. Cueboard downloads the audio, converts it to MP3, and adds it to the board automatically.",
  },
  {
    icon: Keyboard,
    title: "Global hotkeys",
    body: "Bind keys while another app is focused. Assign a board-wide enable and disable shortcut.",
  },
  {
    icon: FolderSimple,
    title: "Local library",
    body: "Drop files, pick them from Explorer, or convert a YouTube link. Everything stays in AppData.",
  },
  {
    icon: Headphones,
    title: "Output device",
    body: "Choose headphones, speakers, or a virtual cable. Headphone output is not your livestream.",
  },
  {
    icon: CornersIn,
    title: "Minimize modes",
    body: "Default: the board stays live when hidden. You can disable shortcuts or use strict mode in Settings.",
  },
  {
    icon: Tray,
    title: "System tray",
    body: "Hide the window, keep the process. Restore from the tray when you need the board.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            The pieces that matter on stream.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cueboard is a desktop tool, not a web player. It does not invent a cloud or a social feed.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="gap-3 border-white/8 bg-card/80 py-5 backdrop-blur-sm">
              <CardHeader>
                <feature.icon weight="duotone" className="size-7 text-foreground" />
                <CardTitle className="text-[15px]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.body}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
