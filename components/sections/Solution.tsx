import { FadeIn } from "../FadeIn";
import { SectionLabel } from "../SectionLabel";

const values = [
  {
    title: "Done-for-you, done right",
    body: "Turnkey systems built specifically for your business. No agency runaround.",
  },
  {
    title: "Built to last",
    body: "Legal, compliant, and scalable from day one.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-white text-navy section-padding">
      <div className="container-content">
        <FadeIn>
          <SectionLabel>{"// The Solution"}</SectionLabel>
          <h2 className="heading-lg max-w-3xl">
            Xeto is the partner most small business owners wish they'd had on
            day one.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="stat-massive">12</span>
                <div>
                  <div className="text-base sm:text-lg font-black uppercase tracking-wider text-navy leading-none">
                    Years
                  </div>
                  <div className="text-sm text-navy/60 mt-1">
                    in small business
                  </div>
                </div>
              </div>
              <div className="space-y-5 body-lg text-navy/80">
                <p>
                  I'm Matthew — and after 12 years of working with small
                  business and earning an associate's degree in the field, I
                  built Xeto to keep new owners from making the mistakes that
                  cause over 600 businesses to crash every day.
                </p>
                <p>
                  Every client works directly with me. No account managers. No
                  outsourced teams. No templates. We map out exactly what your
                  business needs — legally, operationally, digitally — and we
                  build it together, in the right order, with systems that grow
                  with you.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid gap-4 sm:gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-navy/10 bg-navy/[0.02] p-6 sm:p-7 border-l-4 border-l-orange"
                >
                  <h3 className="text-lg sm:text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-navy/70 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
