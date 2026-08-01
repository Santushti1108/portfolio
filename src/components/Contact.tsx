import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/content";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const contactRows = [
  { icon: HiOutlineMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiGithub, label: "GitHub", value: `@${profile.githubUsername}`, href: profile.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin },
  // { icon: HiOutlinePhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: HiOutlineLocationMarker, label: "Location", value: profile.location, href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's build something.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass h-full space-y-1 rounded-3xl p-8">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-4 border-b border-border py-4 last:border-none"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <row.icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm text-white transition-colors hover:text-accent"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{row.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass flex h-full flex-col gap-4 rounded-3xl p-8"
            >
              <div>
                <label htmlFor="name" className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-border bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-border bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <label htmlFor="message" className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="mt-2 w-full flex-1 resize-none rounded-xl border border-border bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent"
                  placeholder="What are you reaching out about?"
                />
              </div>
              <button
                type="submit"
                className="mt-2 self-start rounded-full bg-accent px-7 py-3 font-mono text-sm font-medium text-[#09090B] transition-transform duration-200 hover:scale-105"
              >
                Send Message
              </button>
              
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
