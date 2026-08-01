import Reveal from "./Reveal";
import { achievements } from "../data/content";
import { HiOutlineBadgeCheck } from "react-icons/hi";

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
            Achievements
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Milestones along the way.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <div className="glass flex h-full gap-4 rounded-2xl p-6 transition-colors duration-300 hover:border-accent/30">
                <HiOutlineBadgeCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {a.title}
                    </h3>
                    <span className="font-mono text-[11px] text-text-muted">
                      {a.date}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-accent/80">
                    {a.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {a.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
