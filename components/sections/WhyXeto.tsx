import { FadeIn } from "../FadeIn";
import { SectionLabel } from "../SectionLabel";

const rows = [
  {
    label: "Cost",
    diy: "\"Cheap\" — until you redo it",
    agencies: "$10K+ for templates",
    xeto: "Honest, package-based",
  },
  {
    label: "Time to launch",
    diy: "Months of trial & error",
    agencies: "4–8 weeks",
    xeto: "1–8 weeks (based on package)",
  },
  {
    label: "Who you talk to",
    diy: "Yourself",
    agencies: "Account manager #4",
    xeto: "Matthew, every time",
  },
  {
    label: "What you get",
    diy: "A pile of disconnected tools",
    agencies: "A pretty site, no strategy",
    xeto: "Turnkey systems built around your business",
  },
  {
    label: "After launch",
    diy: "Hope nothing breaks",
    agencies: "Hourly support fees",
    xeto: "Optional Autopilot retainer",
  },
  {
    label: "Compliance & legal",
    diy: "You guess",
    agencies: "Often skipped",
    xeto: "Built in from day one",
  },
];

const mobileColumns = [
  { name: "Xeto", key: "xeto" as const, accent: true },
  { name: "DIY", key: "diy" as const, accent: false },
  { name: "Agencies", key: "agencies" as const, accent: false },
];

export function WhyXeto() {
  return (
    <section id="why-xeto" className="bg-white text-navy section-padding">
      <div className="container-content">
        <FadeIn>
          <SectionLabel>{"// The Comparison"}</SectionLabel>
          <h2 className="heading-lg max-w-2xl">Xeto vs. the alternatives.</h2>
          <p className="mt-4 body-lg text-navy/70">
            Here's how we stack up against the options most owners consider.
          </p>
        </FadeIn>

        {/* Mobile: card-per-option, Xeto first */}
        <div className="mt-10 grid gap-5 lg:hidden">
          {mobileColumns.map((col) => (
            <FadeIn key={col.name}>
              <div
                className={`rounded-2xl border p-5 sm:p-6 relative ${
                  col.accent
                    ? "border-orange bg-gradient-to-br from-orange/[0.08] via-orange/[0.04] to-navy/[0.04] shadow-xl shadow-orange/10"
                    : "border-navy/10 bg-navy/[0.02]"
                }`}
              >
                {col.accent ? (
                  <span className="absolute -top-3 left-5 inline-flex items-center bg-orange text-white text-[0.65rem] font-bold tracking-[0.2em] uppercase rounded-full px-3 py-1 shadow-md">
                    Recommended
                  </span>
                ) : null}
                <h3
                  className={`text-2xl font-black ${
                    col.accent ? "text-orange" : "text-navy"
                  }`}
                >
                  {col.name}
                </h3>
                <dl className="mt-4 divide-y divide-navy/10">
                  {rows.map((r) => (
                    <div key={r.label} className="py-3 first:pt-0 last:pb-0">
                      <dt className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-navy/50">
                        {r.label}
                      </dt>
                      <dd
                        className={`mt-1 text-base ${
                          col.accent
                            ? "text-navy font-semibold"
                            : "text-navy/75"
                        }`}
                      >
                        {r[col.key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desktop: table with highlighted Xeto column */}
        <FadeIn>
          <div className="mt-10 hidden lg:block overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy/[0.03]">
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-semibold text-navy/60 w-48"
                  >
                    {/* row label column */}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-base font-bold text-navy"
                  >
                    DIY
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-base font-bold text-navy"
                  >
                    Agencies
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-lg font-black text-orange tracking-tight bg-gradient-to-b from-orange/15 to-orange/5 border-l border-orange/30"
                  >
                    Xeto
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {rows.map((r) => (
                  <tr key={r.label}>
                    <th
                      scope="row"
                      className="px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-navy/50 align-top"
                    >
                      {r.label}
                    </th>
                    <td className="px-6 py-4 text-navy/75 align-top">
                      {r.diy}
                    </td>
                    <td className="px-6 py-4 text-navy/75 align-top">
                      {r.agencies}
                    </td>
                    <td className="px-6 py-4 text-navy font-semibold align-top bg-gradient-to-b from-orange/[0.08] to-navy/[0.03] border-l border-orange/30">
                      {r.xeto}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
