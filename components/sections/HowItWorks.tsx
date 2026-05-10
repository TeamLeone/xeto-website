import { FadeIn } from "../FadeIn";
import { SectionLabel } from "../SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    meta: "15 minutes, free",
    body:
      "We hop on a quick call to understand where you are, where you want to go, and what's standing in the way. No pitch — just gathering information.",
  },
  {
    number: "02",
    title: "Custom Roadmap",
    meta: "within 48 hours",
    body:
      "You get a clear, written plan covering exactly which package fits and every system we'll set up — legal, digital, operational — in the order they need to happen. Approve it and we're off.",
  },
  {
    number: "03",
    title: "Build",
    meta: "1–8 weeks",
    body:
      "I handle the heavy lifting: filings, formations, websites, CRM, payments, automations. Most packages wrap in 1–3 weeks. Blast Off — with filming and a 30-day ad campaign — runs closer to 8. You get progress updates throughout, and we meet as often as needed.",
  },
  {
    number: "04",
    title: "Launch & Handoff",
    meta: "",
    body:
      "You get the keys. Full walkthrough of every system, all logins, and a recorded session you can refer back to. Want ongoing support? Add Autopilot. Don't? You're set up to fly on your own.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-navy text-white section-padding stars-bg"
    >
      <div className="container-content">
        <FadeIn>
          <SectionLabel>{"// Mission Briefing"}</SectionLabel>
          <h2 className="heading-lg flex flex-wrap items-baseline gap-x-3 sm:gap-x-5">
            <span>From idea to launch in</span>
            <span className="text-orange font-black leading-none text-[clamp(3rem,10vw,5.5rem)]">
              4
            </span>
            <span>steps.</span>
          </h2>
          <p className="mt-4 body-lg text-white/75 max-w-2xl">
            No guesswork, no surprises. Here's exactly what working with Xeto
            looks like.
          </p>
        </FadeIn>

        <ol className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <FadeIn key={s.number} delay={i * 90} direction="left">
              <li className="h-full rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 hover:border-orange/40 transition-colors duration-300">
                <div className="text-orange font-black tracking-tight leading-none text-[3.25rem] sm:text-[4rem]">
                  {s.number}
                </div>
                <h3 className="mt-3 text-xl sm:text-2xl font-black leading-tight">
                  {s.title}
                </h3>
                {s.meta ? (
                  <p className="mt-1 text-sm text-orange/80 font-mono uppercase tracking-wider">
                    {s.meta}
                  </p>
                ) : null}
                <p className="mt-4 text-white/75 leading-relaxed">{s.body}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
