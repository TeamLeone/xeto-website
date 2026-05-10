import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Xeto",
  description:
    "The terms governing your use of goxeto.com and engagement with Xeto Unlimited LLC.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" effectiveDate="June 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing goxeto.com or engaging Xeto Unlimited LLC
        (&ldquo;Xeto&rdquo;) for services, you agree to these Terms of Service.
        If you do not agree, please do not use our website or services.
      </p>

      <h2>2. Services</h2>
      <p>
        Xeto provides small business consulting, including but not limited to:
      </p>
      <ul>
        <li>Business formation guidance</li>
        <li>Website design and development</li>
        <li>CRM, payment, and automation setup</li>
        <li>Marketing strategy and ad management</li>
        <li>Ongoing maintenance and coaching (Autopilot retainers)</li>
      </ul>
      <p>
        Specific deliverables, timelines, and pricing are outlined in the
        package description and any separate agreement signed before services
        begin.
      </p>

      <h2>3. Client Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate and timely information</li>
        <li>Pay all fees as outlined in your engagement agreement</li>
        <li>
          Cover third-party costs (state filing fees, software subscriptions,
          ad spend, etc.) directly when applicable
        </li>
        <li>
          Respond to communication in a reasonable timeframe to avoid project
          delays
        </li>
      </ul>

      <h2>4. Payment Terms</h2>
      <ul>
        <li>All fees are due as outlined in your engagement agreement</li>
        <li>
          Package fees are non-refundable once work has begun unless otherwise
          stated in writing
        </li>
        <li>
          Recurring services (Autopilot retainers) require 30 days&rsquo;
          written notice to cancel
        </li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <ul>
        <li>
          All content, branding, and materials on goxeto.com are the property
          of Xeto Unlimited LLC
        </li>
        <li>
          Work products delivered to clients (websites, automations, copy)
          become the client&rsquo;s property upon final payment
        </li>
        <li>
          Xeto retains the right to use anonymized examples of completed work
          for portfolio and marketing purposes unless otherwise agreed
        </li>
      </ul>

      <h2>6. Limitation of Liability</h2>
      <p>
        Xeto provides consulting and infrastructure services. Xeto is not a law
        firm, accounting firm, or financial advisor. We do not provide legal,
        tax, or financial advice. Clients are responsible for verifying
        compliance with applicable laws and consulting licensed professionals
        when needed.
      </p>
      <p>
        To the fullest extent permitted by law, Xeto&rsquo;s total liability
        for any claim arising from services shall not exceed the fees paid by
        the client for the specific service in question.
      </p>

      <h2>7. No Guarantees</h2>
      <p>
        We work hard to deliver excellent results, but Xeto makes no guarantees
        regarding:
      </p>
      <ul>
        <li>Specific business outcomes (revenue, leads, growth)</li>
        <li>
          Approval of LLC filings, EIN applications, or other government
          processes
        </li>
        <li>Ad campaign performance metrics</li>
      </ul>

      <h2>8. Third-Party Services</h2>
      <p>
        Xeto integrates with third-party platforms (GoHighLevel, Google, Meta,
        Stripe, etc.). We are not responsible for outages, policy changes, or
        actions taken by those platforms.
      </p>

      <h2>9. Termination</h2>
      <p>
        Either party may terminate the engagement with written notice. Fees
        for completed work remain non-refundable.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Wyoming, without
        regard to conflict of law principles. Any disputes shall be resolved
        in the courts of Wyoming.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We may update these Terms. The latest version will always be posted on
        this page.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:admin@goxeto.com">admin@goxeto.com</a>.
      </p>
    </LegalLayout>
  );
}
