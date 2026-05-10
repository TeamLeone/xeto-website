import { Nav } from "./Nav";
import { Footer } from "./Footer";

type LegalLayoutProps = {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
};

export function LegalLayout({
  title,
  effectiveDate,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-24 bg-white text-navy">
        <article className="mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-8">
          <header className="border-b border-navy/10 pb-6 sm:pb-8">
            <h1 className="heading-lg">{title}</h1>
            <p className="mt-3 text-navy/60 text-base sm:text-lg">
              Effective Date: {effectiveDate}
            </p>
          </header>
          <div className="legal-content mt-8 sm:mt-10">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
