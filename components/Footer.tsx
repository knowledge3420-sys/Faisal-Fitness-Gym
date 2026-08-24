import { MapPin, Navigation, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Stars } from "./Stars";

const exploreLinks = navLinks.filter((l) =>
  ["/", "/about", "/classes", "/trainers", "/gallery"].includes(l.href)
);

const visitLinks = navLinks.filter((l) =>
  ["/membership", "/reviews", "/media", "/contact"].includes(l.href)
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-carbon-900">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt-400/40 to-transparent" />
      <div className="wrap pb-28 pt-16 md:pt-20 lg:pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.3fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              A male &amp; female fitness gym on Main Nishan-e-Haider Road, Aziz Nagar, Karachi.
              Built for people who want to get stronger — and stay consistent.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-carbon-800/70 py-2.5 pl-4 pr-5">
              <Stars value={site.googleReviews.value} className="size-3.5" />
              <span className="text-sm font-semibold text-cream">{site.googleReviews.label}</span>
              <span className="text-xs text-mist">· {site.googleReviews.suffix}</span>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer — explore">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-volt-400">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-volt-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <nav aria-label="Footer — visit">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-volt-400">
              Visit
            </h3>
            <ul className="mt-5 space-y-3">
              {visitLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-volt-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-volt-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="group inline-flex items-center gap-3 text-cream transition-colors hover:text-volt-300"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-carbon-800 text-volt-400 transition-colors group-hover:border-volt-400/50">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  <span className="font-semibold tracking-wide">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-mist transition-colors hover:text-cream"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-carbon-800 text-volt-400 transition-colors group-hover:border-volt-400/50">
                    <MapPin className="size-4" aria-hidden />
                  </span>
                  <span className="leading-relaxed">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.cityLine}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-mist transition-colors hover:text-volt-300"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-carbon-800 text-volt-400 transition-colors group-hover:border-volt-400/50">
                    <Youtube className="size-4" aria-hidden />
                  </span>
                  youtube.com/c/{site.youtubeHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-volt-400 transition-colors hover:text-volt-300"
                >
                  <Navigation className="size-3.5" aria-hidden />
                  Get directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-mist/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">
            Islam Nagar · Aziz Nagar · Karachi — Male &amp; Female Gym
          </p>
        </div>
      </div>
    </footer>
  );
}
