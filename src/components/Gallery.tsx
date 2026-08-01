import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { galleryPlaceholders } from "../data/content";
import { HiOutlineX } from "react-icons/hi";

export default function Gallery() {
  const categories = [
    "All",
    ...Array.from(new Set(galleryPlaceholders.map((g) => g.category))),
  ];
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const items =
    filter === "All"
      ? galleryPlaceholders
      : galleryPlaceholders.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Moments &amp; milestones.
          </h2>
          {/* <p className="mt-4 max-w-xl text-text-secondary">
            Drop images into <code className="font-mono text-accent">/public/gallery</code> and
            wire them up in <code className="font-mono text-accent">content.ts</code> to replace these placeholders.
          </p> */}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs transition-colors duration-200 ${
                  filter === cat
                    ? "bg-accent text-[#09090B]"
                    : "glass text-text-secondary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={i+1} delay={(i % 8) * 0.05}>
              <button
              // onClick={() => setActive(i)}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-4 left-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {item.category}
                </p>
                {/* <p className="text-sm font-medium text-white">
                  {item.label}
                </p> */}
              </div>
            </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative flex aspect-square w-full max-w-lg flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 text-text-secondary hover:text-white"
              >
                <HiOutlineX size={22} />
              </button>
              <span className="font-mono text-xs tracking-widest text-accent uppercase">
                {items[active].category}
              </span>
              <span className="text-text-secondary">{items[active].label}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
}
