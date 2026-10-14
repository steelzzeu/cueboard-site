import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TERMS } from "@/lib/links";

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "How does the YouTube to MP3 converter work?",
    a: "Paste a YouTube, Shorts, or youtu.be link. Cueboard fetches audio only, converts it to MP3 on this PC, and adds the clip to your board. Nothing is uploaded. Clips longer than ten minutes are rejected.",
  },
  {
    q: "Does Cueboard send audio to my livestream?",
    a: "Only if you route it there. Playing to headphones is not the same as playing into OBS. Use a virtual cable or capture the device Cueboard is outputting to.",
  },
  {
    q: "Where does the library live?",
    a: "On this PC, under AppData for com.cueboard.desktop. Files are not uploaded.",
  },
  {
    q: "Do hotkeys work when the window is minimized?",
    a: "By default, no. Turn on keep-active if you want shortcuts while hidden. Strict mode disables the board whenever it is not visible.",
  },
  {
    q: "Is there a Mac or Linux build?",
    a: "Not in 1.0. This release is Windows 10 and 11, x64.",
  },
  {
    q: "Do I need an account?",
    a: "No. There is no login, no cloud sync, and no paid plan on this page.",
  },
  {
    q: "What am I agreeing to when I install?",
    a: (
      <>
        The Windows installer shows the Cueboard terms of use. You must accept them to continue. They cover local files, YouTube conversion responsibility, audio routing, and a no-warranty clause. Read the{" "}
        <a className="underline underline-offset-4 hover:text-foreground" href={TERMS}>
          terms page
        </a>
        .
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 px-5 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Questions before you install.
        </h2>
        <Accordion type="single" collapsible>
          {FAQ.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
