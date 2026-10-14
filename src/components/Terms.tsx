const SECTIONS = [
  {
    n: "01",
    title: "Licence",
    body: "Cueboard is a free Windows desktop app. Install it on machines you own or control, for personal use or for streaming.",
  },
  {
    n: "02",
    title: "Local files",
    body: "Sounds, settings, and converted MP3s stay in AppData for com.cueboard.desktop. There is no account and no upload.",
  },
  {
    n: "03",
    title: "YouTube links",
    body: "You paste a link. Cueboard fetches audio and encodes MP3 on this PC. You must have the right to convert and play that clip. Cueboard does not licence you copyrighted material. Clips over ten minutes and live streams are rejected.",
  },
  {
    n: "04",
    title: "On stream",
    body: "Headphones are not your livestream. You pick the output device. You are responsible for what goes out on a broadcast.",
  },
  {
    n: "05",
    title: "Hotkeys",
    body: "Global shortcuts can fire in other windows if you enable that. You own the binds you record.",
  },
  {
    n: "06",
    title: "No warranty",
    body: "Cueboard is provided as is, without warranty. Authors are not liable for lost cues, lost data, or stream incidents, to the extent the law allows.",
  },
];

export function Terms() {
  return (
    <section id="terms" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Version 1.0 · 14 October 2026
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Terms of use.</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Installing Cueboard, ticking the box in the installer, or using the app means you accept these terms. The same text ships in the Windows installer.
        </p>
        <ol className="mt-10 grid gap-4">
          {SECTIONS.map((section) => (
            <li key={section.n} className="rounded-xl border border-white/8 bg-card/80 p-5">
              <p className="font-mono text-xs text-muted-foreground">{section.n}</p>
              <h3 className="mt-2 text-[15px] font-semibold tracking-tight">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted-foreground">
          Full installer copy:{" "}
          <a className="underline underline-offset-4 hover:text-foreground" href="/terms.txt">
            terms.txt
          </a>
        </p>
      </div>
    </section>
  );
}
