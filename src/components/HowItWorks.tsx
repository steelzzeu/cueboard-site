import { SiObsstudio } from "@icons-pack/react-simple-icons";
import { FileAudio, Keyboard, WindowsLogo } from "@phosphor-icons/react";

const STEPS = [
  {
    n: "01",
    title: "Install on Windows",
    body: "Run the setup, or use the portable exe. One process, one tray icon.",
    icon: <WindowsLogo weight="fill" className="size-5" />,
  },
  {
    n: "02",
    title: "Drop files or paste YouTube",
    body: "Import audio, or paste a YouTube link. Cueboard converts it to MP3 on this PC.",
    icon: <FileAudio weight="fill" className="size-5" />,
  },
  {
    n: "03",
    title: "Record a keybind",
    body: "Click the bind field and press the combo. It works while you are in another window.",
    icon: <Keyboard weight="fill" className="size-5" />,
  },
  {
    n: "04",
    title: "Route audio on purpose",
    body: "Pick the device you actually want. Headphones do not automatically reach OBS.",
    icon: <SiObsstudio className="size-5" color="#8B8B8B" />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Four steps. Then you are live.
          </h2>
          <p className="mt-3 text-muted-foreground">
            No signup, no catalog, no browser tab that has to stay open.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {STEPS.map((step) => (
            <article key={step.n} className="rounded-xl border border-white/8 bg-card/80 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-white/6">
                  {step.icon}
                </span>
                <p className="font-mono text-xs text-muted-foreground">{step.n}</p>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
