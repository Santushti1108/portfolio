import Reveal from "./Reveal";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
            About
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Problem-first,{" "}
            <span className="text-gradient">production-minded</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-text-secondary">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
            {about.focusAreas.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08}>
                <div className="glass group rounded-2xl p-5 transition-colors duration-300 hover:border-accent/30">
                  <p className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
                    {f.label}
                  </p>
                  <p className="mt-2 font-display text-lg text-white">
                    {f.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
