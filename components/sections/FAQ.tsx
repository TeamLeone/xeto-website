import { FadeIn } from "../FadeIn";
import { FAQItem } from "../FAQItem";
import { SectionLabel } from "../SectionLabel";

const faqs = [
  {
    question: "Do I need to have my business formed already?",
    answer:
      "No. Whether you're a brand-new idea or already operating, we meet you where you are. The Pre-Flight Check is built specifically for owners who haven't filed yet.",
  },
  {
    question: "How fast can I launch?",
    answer:
      "Fire the Boosters and Start the Countdown typically wrap in 1–3 weeks from kickoff. Blast Off — with filming and a 30-day ad campaign — runs closer to 8 weeks. Pre-Flight Check timing depends on your state's filing speed, though most states offer an expedited option for an additional fee.",
  },
  {
    question: "What's not included?",
    answer:
      "Your package covers the first month of most required costs (insurance excluded), plus everything I do — no surprise charges. Third-party costs like state filing fees, additional software subscriptions, and ongoing ad spend are paid by you directly.",
  },
  {
    question: "Do I have to pay monthly after we're done?",
    answer:
      "Nope. The Autopilot retainer (Lite, Standard, or Pro) is completely optional. Most clients choose it because they want ongoing maintenance and coaching, but the choice is yours.",
  },
  {
    question: "I'm not local. Can we still work together?",
    answer:
      "Absolutely. Everything except Blast Off (which involves on-site filming) is delivered remotely.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-navy text-white section-padding stars-bg">
      <div className="container-content">
        <FadeIn>
          <SectionLabel>{"// FAQ"}</SectionLabel>
          <h2 className="heading-lg max-w-2xl">Common questions.</h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 max-w-3xl rounded-2xl bg-white p-2 sm:p-4 shadow-2xl shadow-black/20">
            <div className="px-4 sm:px-6">
              {faqs.map((f) => (
                <FAQItem
                  key={f.question}
                  question={f.question}
                  answer={f.answer}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
