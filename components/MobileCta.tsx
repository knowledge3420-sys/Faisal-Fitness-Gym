import { Phone, Zap } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "./Button";

/**
 * Fixed bottom action bar on small screens — one tap to call, one tap to
 * start the membership flow. Hidden on lg+ where the navbar CTA lives.
 */
export function MobileCta() {
  return (
    <div
      className="glass fixed inset-x-0 bottom-0 z-40 border-t border-white/10 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-3 px-4 py-3">
        <Button href={site.phoneHref} size="sm" className="w-full">
          <Phone className="size-3.5" aria-hidden />
          Call Now
        </Button>
        <Button href="/membership" variant="outline" size="sm" className="w-full">
          <Zap className="size-3.5" aria-hidden />
          Get Started
        </Button>
      </div>
    </div>
  );
}
