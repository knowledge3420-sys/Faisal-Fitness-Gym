"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation + lock body scroll while open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "glass border-b border-white/[0.06] py-3"
            : "border-b border-transparent bg-gradient-to-b from-carbon-950/80 to-transparent py-5"
        }`}
      >
        <div className="wrap flex items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    active
                      ? "bg-volt-400/10 text-volt-300"
                      : "text-cream/70 hover:bg-white/[0.05] hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:block">
            <Button href="/membership" size="sm">
              Join Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-cream transition-colors hover:border-volt-400/50 hover:text-volt-300 xl:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass fixed inset-x-0 top-[60px] z-40 border-b border-white/[0.08] pb-8 xl:hidden"
            style={{ maxHeight: "calc(100dvh - 60px)", overflowY: "auto" }}
          >
            <nav aria-label="Mobile" className="wrap flex flex-col py-6">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-2xl uppercase tracking-wide transition-colors ${
                        active ? "text-volt-300" : "text-cream hover:text-volt-300"
                      }`}
                    >
                      {link.label}
                      <span aria-hidden className="text-mist/50">
                        {active ? "•" : "→"}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Button href="/membership" size="md" className="w-full">
                  Join Now
                </Button>
                <Button href={site.phoneHref} variant="outline" size="md" className="w-full">
                  <Phone className="size-4" aria-hidden />
                  Call {site.phoneDisplay}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
