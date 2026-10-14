import { YoutubeLogo } from "@phosphor-icons/react";
import { ProductFrame } from "@/components/ProductFrame";

export function YoutubeHighlight() {
  return (
    <section id="youtube" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
            <YoutubeLogo weight="fill" className="size-3.5" />
            Auto converter
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            YouTube in. MP3 on the board.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Paste a link anywhere in Cueboard. The clip is converted on this machine and dropped into your library, ready for a hotkey.
          </p>
        </div>
        <ProductFrame
          src="/images/youtube.png"
          alt="Cueboard converting a YouTube link to MP3"
          caption="Cueboard · YouTube to MP3"
        />
        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            {
              n: "01",
              title: "Paste",
              body: "A YouTube, Shorts, or youtu.be URL. Cueboard looks the video up instantly.",
            },
            {
              n: "02",
              title: "Convert",
              body: "Audio only, then MP3. The video file never lands on the board.",
            },
            {
              n: "03",
              title: "Play",
              body: "It shows up as a normal sound. Bind a key and fire it on stream.",
            },
          ].map((step) => (
            <li key={step.n} className="rounded-xl border border-white/8 bg-card/80 p-5">
              <p className="font-mono text-xs text-muted-foreground">{step.n}</p>
              <h3 className="mt-2 text-[15px] font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
