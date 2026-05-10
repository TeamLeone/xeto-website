"use client";

import { useState } from "react";

export function LeadForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for GoHighLevel integration.
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 600);
  };

  const inputClasses =
    "w-full min-h-[48px] px-4 py-3 rounded-lg border border-navy/15 bg-white text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-shadow";

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">First Name</span>
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="First Name"
            required
            className={inputClasses}
          />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            required
            className={inputClasses}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Phone</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Phone"
            required
            className={inputClasses}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full mt-4 disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Send it to me"}
      </button>
      <p className="mt-3 text-sm text-navy/60 text-center">
        We respect your inbox. Unsubscribe anytime.
      </p>
    </form>
  );
}
