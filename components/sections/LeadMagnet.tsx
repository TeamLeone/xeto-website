import { LeadForm } from "../LeadForm";

export function LeadMagnet() {
  return (
    <section id="lead-magnet" className="bg-white section-padding">
      <div className="container-content">
        <div className="max-w-xl mx-auto rounded-2xl bg-white border border-navy/10 shadow-xl shadow-navy/5 p-6 sm:p-8">
          <h2 className="heading-md text-navy text-center">
            Send me the free guide
          </h2>
          <p className="mt-2 text-sm sm:text-base text-navy/60 text-center">
            The Top 5 Mistakes New Business Owners Make
          </p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
