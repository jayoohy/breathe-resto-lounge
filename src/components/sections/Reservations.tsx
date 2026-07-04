"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reservationSchema, type ReservationInput } from "@/lib/validations";
import { site } from "@/lib/data/site";

const partySizes = ["1", "2", "3", "4", "5", "6", "7+"];
const timeSlots = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

type SubmitState = "idle" | "loading" | "success" | "error";

export function Reservations() {
  const [state, setState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { partySize: "2" },
  });

  const onSubmit = async (data: ReservationInput) => {
    setState("loading");
    setServerError(null);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await res.json();
      if (!res.ok) {
        setServerError(payload.error || "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      setState("success");
      reset();
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setState("error");
    }
  };

  return (
    <section id="reservations" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Save Your Seat"
          title="Reserve a Table"
          description="Tell us when you're coming and how many — we'll confirm by email or phone."
        />

        {state === "success" ? (
          <Reveal className="mt-12">
            <div className="rounded-2xl border border-gold/40 bg-ink p-8 text-center">
              <svg viewBox="0 0 24 24" className="mx-auto h-10 w-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-4 font-display text-2xl text-cream">Request sent</h3>
              <p className="mt-2 text-sm text-cream-muted">
                Thank you — we&apos;ve received your reservation request and will confirm shortly. For urgent
                bookings, call or WhatsApp us at{" "}
                <a href={site.phoneHref} className="text-gold hover:underline">
                  {site.phone}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setState("idle")}
                className="mt-6 text-sm font-medium text-gold underline underline-offset-4"
              >
                Make another reservation
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal className="mt-12">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name" error={errors.name?.message}>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={inputClass(!!errors.name)}
                  {...register("name")}
                />
              </Field>

              <Field label="Phone number" htmlFor="phone" error={errors.phone?.message}>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  className={inputClass(!!errors.phone)}
                  {...register("phone")}
                />
              </Field>

              <Field label="Email address" htmlFor="email" error={errors.email?.message} className="sm:col-span-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={inputClass(!!errors.email)}
                  {...register("email")}
                />
              </Field>

              <Field label="Date" htmlFor="date" error={errors.date?.message}>
                <input
                  id="date"
                  type="date"
                  min={today}
                  aria-invalid={!!errors.date}
                  className={inputClass(!!errors.date)}
                  {...register("date")}
                />
              </Field>

              <Field label="Time" htmlFor="time" error={errors.time?.message}>
                <select
                  id="time"
                  defaultValue=""
                  aria-invalid={!!errors.time}
                  className={inputClass(!!errors.time)}
                  {...register("time")}
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Party size" htmlFor="partySize" error={errors.partySize?.message}>
                <select
                  id="partySize"
                  aria-invalid={!!errors.partySize}
                  className={inputClass(!!errors.partySize)}
                  {...register("partySize")}
                >
                  {partySizes.map((size) => (
                    <option key={size} value={size}>
                      {size} {size === "1" ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Special requests (optional)" htmlFor="notes" className="sm:col-span-2">
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Birthday celebration, allergies, seating preference…"
                  className={inputClass(false)}
                  {...register("notes")}
                />
              </Field>

              {state === "error" && serverError && (
                <p role="alert" className="sm:col-span-2 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-deep px-8 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
              >
                {state === "loading" ? "Sending…" : "Request Reservation"}
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `min-h-11 w-full rounded-xl border bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-muted/50 focus:outline-none focus:ring-2 focus:ring-gold ${
    hasError ? "border-red-500/60" : "border-border focus:border-gold"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-cream-muted">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
