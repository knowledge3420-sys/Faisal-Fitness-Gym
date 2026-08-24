"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/data/gallery";

/** Filterable masonry-style gallery with keyboard-accessible lightbox. */
export function GalleryGrid() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  const filtered = useMemo(
    () => (active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active]
  );

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((prev) => (prev === null ? prev : (prev + dir + filtered.length) % filtered.length)),
    [filtered.length]
  );

  const isClosed = open === null;
  useEffect(() => {
    if (isClosed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isClosed, close, step]);

  return (
    <div>
      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-2.5" role="group" aria-label="Filter gallery by category">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
              active === cat
                ? "border-volt-400 bg-volt-400 text-carbon-950"
                : "border-white/15 text-mist hover:border-volt-400/50 hover:text-cream"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid / empty state */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/15 bg-carbon-900/50 px-8 py-24 text-center">
          <ImageOff className="mx-auto size-10 text-mist" aria-hidden />
          <h3 className="mt-5 font-display text-3xl uppercase tracking-wide text-cream">
            No photos here yet
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist">
            More from this category is on the way. Meanwhile, explore the rest of the gallery.
          </p>
          <button
            type="button"
            onClick={() => setActive("All")}
            className="mt-7 rounded-full border border-volt-400/60 px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-volt-300 transition-colors hover:bg-volt-400 hover:text-carbon-950"
          >
            Show all photos
          </button>
        </div>
      ) : (
        <motion.div
          layout={!reduce}
          className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[185px] md:grid-cols-3 lg:auto-rows-[210px] lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.figure
                key={item.src + item.alt}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-2xl ${
                  item.span === "wide" ? "col-span-2" : ""
                } ${item.span === "tall" ? "row-span-2" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Open photo: ${item.alt}`}
                  className="absolute inset-0 z-10 cursor-pointer"
                />
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-carbon-950/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                />
                <span
                  aria-hidden
                  className="absolute left-3 top-3 rounded-full border border-white/15 bg-carbon-950/60 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/80 backdrop-blur-sm"
                >
                  {item.category}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block text-sm font-medium text-cream">{item.alt}</span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && filtered[open] && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={filtered[open].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-carbon-950/95 p-4 backdrop-blur-md sm:p-8"
            onClick={close}
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <figure>
                <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-carbon-900">
                  <Image
                    key={filtered[open].src}
                    src={filtered[open].src}
                    alt={filtered[open].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <span>
                    <span className="block text-sm font-medium text-cream sm:text-base">
                      {filtered[open].alt}
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.25em] text-mist">
                      {filtered[open].category}
                    </span>
                  </span>
                  <span className="font-display text-lg tracking-widest text-mist">
                    {open + 1} / {filtered.length}
                  </span>
                </figcaption>
              </figure>

              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close lightbox"
                className="absolute -top-2 right-0 grid size-11 -translate-y-full place-items-center rounded-full border border-white/15 bg-carbon-900 text-cream transition-colors hover:border-volt-400/60 hover:text-volt-300 sm:-right-2 sm:top-1/2 sm:translate-x-full sm:translate-y-0"
              >
                <X className="size-5" aria-hidden />
              </button>

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-1 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-carbon-950/80 text-cream backdrop-blur transition-colors hover:border-volt-400/60 hover:text-volt-300 sm:-left-6"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-1 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-carbon-950/80 text-cream backdrop-blur transition-colors hover:border-volt-400/60 hover:text-volt-300 sm:-right-6"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
