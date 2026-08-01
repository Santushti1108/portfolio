import Reveal from "./Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
            Experience
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Where the work happened.
          </h2>
        </Reveal>

        <div className="relative mt-16 space-y-14 border-l border-border pl-8 sm:pl-12">
          {experience.map((exp, i) => (
            <Reveal key={exp.org} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute top-1.5 -left-[41px] h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(250,204,21,0.15)] sm:-left-[57px]" />

                <div className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-accent/30 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {exp.role}{" "}
                      <span className="text-text-secondary">· {exp.org}</span>
                    </h3>
                    <span className="font-mono text-xs text-text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {exp.summary}
                  </p>

                  {exp.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.stack.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-secondary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
