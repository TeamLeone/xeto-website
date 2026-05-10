import { FadeIn } from "../FadeIn";
import { SectionLabel } from "../SectionLabel";

const pains = [
  {
    title: "One mistake can cost you everything you've built",
    body:
      "Missed filings, uninsured liabilities, the wrong structure — most owners don't see the problem until it's too late.",
  },
  {
    title: "Agencies want $10K to 'build your brand' — then leave you in the dark",
    body:
      "You get a fancy website and a few logins. The moment something breaks, you're back on their clock.",
  },
  {
    title: "DIY costs more than you think",
    body:
      "Every wrong setup means redoing it later. Hours of YouTube tutorials, dozens of platforms, and no idea if you're compliant.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="bg-navy text-white section-padding stars-bg"
    >
      <div className="container-content">
        <FadeIn>
          <SectionLabel>{"// The Problem"}</SectionLabel>
          <h2 className="heading-lg max-w-3xl">
            Starting a business shouldn't feel like guessing.
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-7 border-l-4 border-l-orange">
                <h3 className="text-lg sm:text-xl font-bold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-white/75 leading-relaxed">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
