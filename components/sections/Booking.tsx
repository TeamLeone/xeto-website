import { FadeIn } from "../FadeIn";

export function Booking() {
  return (
    <section id="booking" className="bg-white text-navy section-padding">
      <div className="container-content">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg">Ready to launch?</h2>
            <p className="mt-4 body-lg text-navy/70">
              Book a free 15-minute strategy call. No pressure, no pitch — just
              a real conversation about where you are and what you need.
            </p>
            <a href="#booking-calendar" className="btn-primary mt-8 w-full sm:w-auto">
              Pick a time →
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            id="booking-calendar"
            className="mt-12 mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-navy/[0.02] p-6 sm:p-10 min-h-[320px] flex items-center justify-center text-navy/50 text-sm"
          >
            {/* GHL calendar embed goes here */}
            Calendar loading…
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
