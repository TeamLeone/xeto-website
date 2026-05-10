import { FadeIn } from "../FadeIn";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative bg-navy text-white section-padding overflow-hidden stars-bg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-50"
      >
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-blue/20 blur-3xl" />
      </div>

      <div className="container-content relative">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg">
              Your launch starts with one conversation.
            </h2>
            <p className="mt-5 body-lg text-white/85">
              Whether you're prepping for liftoff or already in flight — let's
              talk about what your business needs to break through the next
              barrier.
            </p>
            <a href="#booking" className="btn-primary mt-8 w-full sm:w-auto">
              Book a free 15-min call →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
