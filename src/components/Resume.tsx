import Reveal from "./Reveal";
import { profile } from "../data/content";
import { HiOutlineDownload, HiOutlineDocumentText } from "react-icons/hi";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="glass flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:p-14">
            <HiOutlineDocumentText size={40} className="text-accent" />
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Resume
              </h2>
              <p className="mt-3 max-w-md text-text-secondary">
                A concise summary of my experience, education, and skills —
                updated for every application cycle.
              </p>
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-mono text-sm font-medium text-[#09090B] transition-transform duration-200 hover:scale-105"
            >
              <HiOutlineDownload size={18} />
              Download PDF
            </a>
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
