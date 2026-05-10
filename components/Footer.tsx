"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/go.xeto/",
    path: "M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/goxeto",
    path: "M13.5 21v-7h2.5l.5-3h-3V9c0-.9.3-1.5 1.6-1.5H17V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.1V11H8v3h2.5v7h3z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/goxeto/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6 0h3.84v1.57h.05c.54-1 1.85-2.07 3.81-2.07C20.85 9 22 11 22 14.27V21h-4v-5.93c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V21H9V9.5z",
  },
];

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-navy text-white">
      <div className="container-content py-12 sm:py-16">
        <div className="flex flex-col items-start gap-8 sm:gap-10">
          <Link
            href="/"
            aria-label="Xeto home"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="inline-flex"
          >
            <Image
              src="/images/nav-button.png"
              alt="Xeto"
              width={1254}
              height={1254}
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
            />
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Contact
              </span>
              <a
                href="mailto:admin@goxeto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange transition-colors"
              >
                admin@goxeto.com
              </a>
              <a
                href="https://goxeto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                goxeto.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Follow
              </span>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/60">
          <p>&copy; 2026 Xeto Unlimited LLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
