import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Xeto",
  description:
    "How Xeto Unlimited LLC collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="June 2026">
      <h2>1. Introduction</h2>
      <p>
        Xeto Unlimited LLC (&ldquo;Xeto,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
        Privacy Policy explains how we collect, use, and protect information
        you provide when visiting goxeto.com or working with us as a client.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect:</p>
      <ul>
        <li>
          <strong>Information you provide directly:</strong> name, email
          address, phone number, business name, and any details you share
          through forms, calls, or contracts.
        </li>
        <li>
          <strong>Automatic information:</strong> IP address, browser type,
          device type, and pages visited (collected via standard analytics
          tools like Google Analytics).
        </li>
        <li>
          <strong>Communications:</strong> records of emails, calls, and
          messages exchanged with us.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Deliver the services you&rsquo;ve purchased</li>
        <li>Respond to inquiries and provide support</li>
        <li>
          Send marketing emails or SMS messages about Xeto services (you can
          unsubscribe anytime)
        </li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>4. Sharing Your Information</h2>
      <p>We do not sell your information. We may share it only with:</p>
      <ul>
        <li>
          Service providers who help us operate (e.g., GoHighLevel, Google
          Workspace, Stripe, Meta) under confidentiality agreements
        </li>
        <li>Authorities when required by law</li>
      </ul>

      <h2>5. Marketing Communications</h2>
      <p>
        By providing your email or phone number, you consent to receive
        marketing communications from Xeto. You may unsubscribe at any time
        using the link in any marketing email or by replying STOP to SMS
        messages.
      </p>

      <h2>6. Cookies &amp; Tracking</h2>
      <p>
        We use cookies and similar technologies to improve site functionality
        and measure ad performance (Meta Pixel, Google Analytics). You can
        disable cookies through your browser settings.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We use industry-standard security measures to protect your information.
        However, no system is 100% secure. You provide information at your own
        risk.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Depending on where you live, you may have the right to:
      </p>
      <ul>
        <li>Request access to or deletion of your personal data</li>
        <li>Opt out of marketing communications</li>
        <li>Request correction of inaccurate information</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:admin@goxeto.com">admin@goxeto.com</a>.
      </p>

      <h2>9. Children&rsquo;s Privacy</h2>
      <p>
        Xeto&rsquo;s services are not directed at children under 13. We do not
        knowingly collect data from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy. The latest version will always be
        posted on this page with the updated effective date.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions? Email us at{" "}
        <a href="mailto:admin@goxeto.com">admin@goxeto.com</a>.
      </p>
    </LegalLayout>
  );
}
