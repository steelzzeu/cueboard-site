import { Buildings, GithubLogo, HardDrives, ShieldCheck } from "@phosphor-icons/react";
import { COMPANIES_HOUSE, GITHUB, STEELZZ, TERMS } from "@/lib/links";

const FACTS = [
  {
    icon: Buildings,
    title: "Shipped by a real company",
    body: (
      <>
        Cueboard is a trading name of{" "}
        <a className="underline underline-offset-4 hover:text-foreground" href={STEELZZ} target="_blank" rel="noreferrer">
          Steelzz Ltd
        </a>
        . UK company number{" "}
        <a
          className="underline underline-offset-4 hover:text-foreground"
          href={COMPANIES_HOUSE}
          target="_blank"
          rel="noreferrer"
        >
          17404065
        </a>
        .
      </>
    ),
  },
  {
    icon: HardDrives,
    title: "The file stays on this PC",
    body: "The setup is a standard NSIS installer. Cueboard does not create an account, does not upload your library, and does not need a credit card.",
  },
  {
    icon: GithubLogo,
    title: "The source is public",
    body: (
      <>
        You can read the desktop app on{" "}
        <a className="underline underline-offset-4 hover:text-foreground" href={GITHUB} target="_blank" rel="noreferrer">
          GitHub
        </a>
        . The same repository builds the installer this page serves.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "No code-signing certificate yet",
    body: "We have not bought an Authenticode certificate. Chrome and Windows therefore treat the .exe as an unknown publisher. That is a missing signature, not a malware report.",
  },
];

export function DownloadTrust() {
  return (
    <section id="safe-download" className="scroll-mt-16 px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Before you click Keep
        </p>
        <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Chrome may block the download. The installer is still ours.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Browsers warn on Windows programs that are not yet signed by a certificate authority. Cueboard 1.0 ships unsigned. The file on this page is the one we built.
        </p>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2">
          {FACTS.map((fact) => (
            <li key={fact.title} className="rounded-xl border border-white/8 bg-card/80 p-5">
              <fact.icon weight="duotone" className="size-6 text-foreground" />
              <h3 className="mt-3 text-[15px] font-semibold tracking-tight">{fact.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fact.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-xl border border-white/8 bg-card/60 p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">What you will see</p>
          <p className="mt-2">
            Chrome: “This file isn’t commonly downloaded.” Use the menu on the download and choose Keep. Windows may then show SmartScreen. Open More info, confirm the publisher is missing, and run the Cueboard setup you downloaded from this site.
          </p>
          <p className="mt-3">
            That warning means “this publisher is not in our reputation list yet.” It does not mean Google scanned the file and found a threat. The{" "}
            <a className="underline underline-offset-4 hover:text-foreground" href={TERMS}>
              terms
            </a>{" "}
            match the copy inside the installer.
          </p>
        </div>
      </div>
    </section>
  );
}
