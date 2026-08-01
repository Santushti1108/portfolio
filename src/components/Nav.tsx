import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "../data/content";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          className={`glass flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-2.5 transition-shadow duration-300 gap-2 ${
            scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.5)]" : ""
          }`}
        >
          <a
            href="#home"
            className="font-display text-sm font-semibold tracking-tight text-white"
          >
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-[12px] tracking-wide transition-colors duration-200 ${
                    active === link.href
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            className="hidden rounded-full bg-accent px-4 py-1.5 font-mono text-[12px] font-medium text-[#09090B] transition-transform duration-200 hover:scale-105 md:inline-block"
          >
            Resume
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-white md:hidden"
          >
            {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass fixed inset-x-4 top-20 z-50 rounded-3xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-mono text-sm text-text-secondary hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  className="mt-2 block rounded-xl bg-accent px-4 py-3 text-center font-mono text-sm font-medium text-[#09090B]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
