const SECTIONS = [
  {
    n: "01",
    title: "Licence",
    body: "Cueboard is a free Windows desktop application. You may install it on computers you own or control, for personal use or for livestreaming, content creation, and similar work.",
  },
  {
    n: "02",
    title: "What Cueboard is",
    body: "Cueboard is local software. Sounds, settings, hotkeys, and converted files are stored on this PC under AppData for the identifier com.cueboard.desktop. Cueboard does not require an account and does not upload your library.",
  },
  {
    n: "03",
    title: "YouTube and other third-party content",
    body: "Cueboard can fetch audio from a link you paste (including YouTube, Shorts, and youtu.be) and convert it to MP3 on this machine. Video is not imported onto the board. You are solely responsible for having the legal right to download, convert, store, and play that content. Cueboard does not grant you any licence to copyrighted material. Do not use the converter to infringe copyright or to violate the terms of YouTube or any other service. Clips longer than ten minutes are rejected. Live streams are not supported.",
  },
  {
    n: "04",
    title: "Audio on stream",
    body: "Playing a sound to headphones, speakers, or a virtual cable is a choice you make in Settings. Headphone output is not automatically sent to OBS or any livestream. You are responsible for how audio is routed and for anything that goes out on a stream.",
  },
  {
    n: "05",
    title: "Global hotkeys",
    body: "You may bind shortcuts that fire while another window is focused. You are responsible for the keys you assign and for any action they trigger in-game, on stream, or in other software.",
  },
  {
    n: "06",
    title: "No warranty",
    body: "Cueboard is provided as is, without warranty of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. Use is at your own risk.",
  },
  {
    n: "07",
    title: "Limitation of liability",
    body: "To the maximum extent permitted by law, Cueboard and its authors are not liable for any indirect, incidental, special, consequential, or punitive damages, or for lost data, lost profits, missed cues, or stream incidents arising from the software or from converted files.",
  },
  {
    n: "08",
    title: "Updates and uninstall",
    body: "These terms apply to Cueboard 1.0. Uninstalling ends the licence for that copy. The uninstaller can optionally remove application data. If you leave AppData in place, your library remains on disk.",
  },
  {
    n: "09",
    title: "Acceptance",
    body: "Installing Cueboard, ticking the acceptance box, or using the application means you accept these terms.",
  },
  {
    n: "10",
    title: "Operator",
    body: "Cueboard is a trading name of Steelzz Ltd, operated by Steelzz.co.uk. Company number 17404065.",
  },
];

export function Terms() {
  return (
    <article className="px-5 pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Version 1.0 · 14 October 2026
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Terms of use.</h1>
        <p className="mt-4 text-muted-foreground">
          By installing, copying, or using Cueboard you agree to these terms. If you do not agree, do not install or use the software. The Windows installer shows this same copy.
        </p>
        <ol className="mt-12 grid gap-4">
          {SECTIONS.map((section) => (
            <li key={section.n} className="rounded-xl border border-white/8 bg-card/80 p-5">
              <p className="font-mono text-xs text-muted-foreground">{section.n}</p>
              <h2 className="mt-2 text-[15px] font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm text-muted-foreground">
          Plain text:{" "}
          <a className="underline underline-offset-4 hover:text-foreground" href="/terms.txt">
            terms.txt
          </a>
        </p>
      </div>
    </article>
  );
}
