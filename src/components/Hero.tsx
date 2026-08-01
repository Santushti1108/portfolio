import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";
import { HiOutlineArrowDown, HiOutlineDownload } from "react-icons/hi";

const PARTICLE_COUNT = 22;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    function onMove(e: MouseEvent) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setTilt({
        x: (e.clientX / w - 0.5) * 14,
        y: (e.clientY / h - 0.5) * 14,
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const particles = Array.from({ length: PARTICLE_COUNT });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:px-12"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, rgba(250,204,21,0.08), transparent 60%), radial-gradient(50% 40% at 85% 15%, rgba(17,24,39,0.9), transparent 60%)",
        }}
      />

      {/* Floating particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((_, i) => {
          const size = 2 + (i % 5);
          const left = (i * 37) % 100;
          const delay = (i % 10) * 0.6;
          const duration = 10 + (i % 6) * 2;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-accent/40"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${(i * 53) % 100}%`,
                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-26px); opacity: 0.8; }
        }
      `}</style>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        {/* Left */}
        <div>
          {/* <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-mono text-xs tracking-[0.25em] text-accent uppercase"
          >
            {profile.status}
          </motion.p> */}
          {/* <p className="mb-5 font-mono text-xs tracking-[0.25em] text-accent uppercase">{profile.status}</p> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[13vw] leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-10 overflow-hidden"
          >
            <motion.div
              animate={{ y: -roleIndex * 30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {profile.roles.map((role) => (
                <div
                  key={role}
                  className="h-10 font-display text-2xl font-medium text-gradient sm:text-3xl"
                >
                  {role}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-[#09090B] transition-transform duration-200 hover:scale-105"
            >
              View My Work
              <HiOutlineArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm text-white transition-colors duration-200 hover:border-accent/40"
            >
              Download Resume
              <HiOutlineDownload />
            </a>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/15 blur-2xl" />
          <div className="glass relative h-full w-full overflow-hidden rounded-[2rem]">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-bg-secondary to-card p-8 text-center">
                <div className="font-display text-6xl font-semibold text-accent/70">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="font-mono text-xs text-text-muted">
                  Add your photo at /public/photo.jpg
                  <br />
                  and set profile.photoUrl in content.ts
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
