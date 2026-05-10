import { CountUp } from "../CountUp";
import { Marquee } from "../Marquee";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col bg-navy text-white overflow-hidden isolate md:min-h-screen md:min-h-[100dvh] md:bg-[url('/images/hero-banner.png?v=2')] md:bg-cover md:bg-no-repeat md:bg-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-navy/[0.55] md:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-[14vh] h-[40vh] md:hidden"
        style={{
          backgroundImage: "url('/images/hero-banner.png?v=2')",
          backgroundSize: "auto 121%",
          backgroundPosition: "78% center",
          backgroundRepeat: "no-repeat",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      />

      <div className="h-16 sm:h-20 flex-shrink-0" aria-hidden="true" />

      <Marquee text="only 3 spots available per month - book your free strategy call today." />

      <div className="container-content relative flex-1 flex items-start md:items-center pt-[42vh] pb-10 md:pt-16 md:pb-16">
        <div className="max-w-3xl w-full">
          <h1 className="heading-xl hero-stagger">
            <span>Every day in the U.S.,</span>{" "}
            <span>
              over{" "}
              <span className="text-orange">
                <CountUp end={600} duration={2800} /> small businesses
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
