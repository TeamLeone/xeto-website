import { FadeIn } from "../FadeIn";
import { SectionLabel } from "../SectionLabel";

const packages = [
  {
    name: "Pre-Flight Check",
    price: "Starting at $800",
    body:
      "Get your business legally launched. LLC filing, EIN, business banking, accounting setup, and everything you need to operate compliantly.",
    popular: false,
  },
  {
    name: "Fire the Boosters",
    price: "Starting at $1,500",
    body:
      "Get online. Domain, hosting, business email, and a 5-page custom website built around your offer.",
    popular: false,
  },
  {
    name: "Start the Countdown",
    price: "Starting at $3,000",
    body:
      "Everything in Fire the Boosters, plus a CRM, payment processing, lead capture forms, and 3 automations to handle leads while you sleep.",
    popular: true,
  },
  {
    name: "Blast Off",
    price: "Starting at $12,000 (local)",
    body:
      "The full launch experience. Everything above, plus 15 minutes of professionally filmed advertising content and a 30-day Facebook ad campaign.",
    popular: false,
  },
];

export function Packages() {
  return (
    <section
      id="packages"
      className="bg-navy text-white section-padding stars-bg"
    >
      <div className="container-content">
        <FadeIn>
          <SectionLabel>{"// Packages"}</SectionLabel>
          <h2 className="heading-lg max-w-2xl">Choose your launch path.</h2>
          <p className="mt-4 body-lg text-white/75 max-w-2xl">
            From legal setup to full digital infrastructure — pick the stage
            that fits where you are.
          </p>
        </FadeIn>

        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((p, i) => (
            <FadeIn key={p.name} delay={i * 60}>
              <article
                className={`relative h-full flex flex-col rounded-2xl p-6 sm:p-7 shadow-lg shadow-black/30 border border-t-4 border-t-orange transition-transform duration-300 ${
                  p.popular
                    ? "bg-gradient-to-b from-orange/[0.08] to-white/[0.04] border-orange/40 sm:scale-[1.02]"
                    : "bg-white/[0.04] border-white/10"
                }`}
              >
                {p.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-orange text-white text-[0.65rem] font-bold tracking-[0.2em] uppercase rounded-full px-3 py-1 shadow-md whitespace-nowrap">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-2xl sm:text-[1.6rem] font-black leading-tight tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-2 text-orange font-bold">{p.price}</p>
                <p className="mt-4 text-white/80 leading-relaxed flex-1">
                  {p.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-12 sm:mt-14 text-center">
            <p className="text-white/85 body-lg">
              Not sure which fits? Book a free 15-minute strategy call and we'll
              figure it out together.
            </p>
            <a href="#booking" className="btn-primary mt-6 w-full sm:w-auto">
              Book a free 15-min call →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
