"use client";

import { CheckCircle2, Loader2, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Button } from "./Button";

type Fields = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

type Status = "idle" | "sending" | "success";

const initialFields: Fields = { name: "", phone: "", email: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Please enter your name.";
  const digits = fields.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";
  if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (fields.message.trim().length < 10)
    errors.message = "Tell us a little more (at least 10 characters).";
  return errors;
}

const inputClasses = (invalid: boolean) =>
  `w-full rounded-xl border bg-carbon-950/60 px-4 py-3.5 text-sm text-cream placeholder:text-mist/50 transition-colors focus:outline-none focus:ring-2 ${
    invalid
      ? "border-rose-400/60 focus:border-rose-400/80 focus:ring-rose-400/20"
      : "border-white/10 focus:border-volt-400/60 focus:ring-volt-400/20"
  }`;

/**
 * Client-side contact form with full validation and clear states.
 * To wire it to a backend later, point the submit handler at a route
 * handler (e.g. /api/contact) — no markup changes needed.
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("sending");
    // Simulated submission — replace with a real API call when a backend is added.
    window.setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-volt-400/30 bg-carbon-900/70 p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto size-14 text-volt-400" aria-hidden />
        <h3 className="mt-6 font-display text-3xl uppercase tracking-wide text-cream">
          Message sent
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mist">
          Thanks{fields.name.trim() ? `, ${fields.name.trim().split(" ")[0]}` : ""} — the team
          will get back to you shortly. For a faster response, call us directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={site.phoneHref} size="md">
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setFields(initialFields);
              setErrors({});
              setStatus("idle");
            }}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl hairline bg-carbon-900/70 p-7 md:p-9">
      <h3 className="font-display text-2xl uppercase tracking-wide text-cream">
        Send us a message
      </h3>
      <p className="mt-2 text-sm text-mist">
        Questions about plans, timings or your first visit? We usually reply the same day.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
            Name <span className="text-volt-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={fields.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClasses(!!errors.name)}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-2 text-xs text-rose-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
            Phone <span className="text-volt-400">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="03XX-XXXXXXX"
            value={fields.phone}
            onChange={update("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={inputClasses(!!errors.phone)}
          />
          {errors.phone && (
            <p id="contact-phone-error" className="mt-2 text-xs text-rose-400">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
            Email <span className="text-mist/60">(optional)</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClasses(!!errors.email)}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-2 text-xs text-rose-400">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
            Message <span className="text-volt-400">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Tell us what you're looking to achieve…"
            value={fields.message}
            onChange={update("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`${inputClasses(!!errors.message)} resize-none`}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-2 text-xs text-rose-400">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden />
            Send Message
          </>
        )}
      </Button>
      <p className="mt-4 text-center text-[11px] leading-relaxed text-mist/70">
        Your details are only used to respond to you. Prefer to talk now? Call{" "}
        <a href={site.phoneHref} className="font-semibold text-volt-400 hover:text-volt-300">
          {site.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}
