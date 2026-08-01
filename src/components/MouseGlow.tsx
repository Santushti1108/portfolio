import { useEffect, useRef } from "react";

/**
 * A soft radial glow that follows the cursor, sitting behind content.
 * Disabled entirely on touch devices and for reduced-motion users.
 */
export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (prefersReduced || isTouch) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function tick() {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      if (el) el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={ref}
        className="absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle, #FACC15 0%, rgba(250,204,21,0.15) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
