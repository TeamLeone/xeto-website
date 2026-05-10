"use client";

import { useState, useId } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-navy/10 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-start justify-between gap-4 text-left py-5 sm:py-6 min-h-[56px] group"
      >
        <span className="text-lg sm:text-xl font-semibold text-navy">
          {question}
        </span>
        <span
          className={`flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-orange/10 text-orange flex items-center justify-center transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="h-3.5 w-3.5"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        id={id}
        role="region"
        hidden={!open}
        className="pb-5 sm:pb-6 pr-10 text-base sm:text-lg leading-relaxed text-navy/75"
      >
        {answer}
      </div>
    </div>
  );
}
