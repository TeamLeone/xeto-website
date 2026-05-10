import Image from "next/image";
import { CountUp } from "../CountUp";
import { Marquee } from "../Marquee";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] flex flex-col bg-navy text-white overflow-hidden isolate"
    >
      <Image
        src="/images/hero-banner.png?v=2"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 hidden object-cover object-center md:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-navy/[0.55] md:block"
      />

      <div className="h-16 sm:h-20 flex-shrink-0" aria-hidden="true" />

      <Marquee text="Only 3 spots left this month — book your free strategy call today." />

      <div className="relative w-full md:hidden">
        <Image
          src="/images/hero-banner.png?v=2"
          alt="Xeto — Small Business Consulting"
          width={1942}
          height={809}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="container-content relative flex-1 flex items-center py-10 sm:py-16">
        <div className="max-w-3xl w-full">
          <h1 className="heading-xl hero-stagger">
            <span>Every day in the U.S.,</span>{" "}
            <span>
              over{" "}
              <span className="text-orange">
                <CountUp end={600} /> small businesses
              </span>
            </span>{" "}
            <span>crash before their first year.</span>
          </h1>
          <p
            className="mt-6 body-lg text-white/90 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "400ms", animationFillMode: "both" }}
          >
            Xeto builds the critical systems small businesses need to launch
            right and grow without breaking — turnkey services and 1-on-1
            coaching, every step of the way.
          </p>
          <div
            className="mt-8 flex flex-col items-stretch sm:items-start gap-3 animate-fade-in-up"
            style={{ animationDelay: "550ms", animationFillMode: "both" }}
          >
            <a
              href="#lead-magnet"
              className="btn-primary w-[90%] max-w-md sm:w-auto sm:max-w-none"
            >
              Get the free guide →
            </a>
            <p className="text-sm text-white/75">
              Free PDF: The Top 5 Mistakes New Business Owners Make
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
