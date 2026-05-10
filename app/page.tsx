import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { Hero } from "@/components/sections/Hero";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyXeto } from "@/components/sections/WhyXeto";
import { Packages } from "@/components/sections/Packages";
import { Booking } from "@/components/sections/Booking";
import { FAQ } from "@/components/sections/FAQ";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LeadMagnet />
        <Divider />
        <Problem />
        <Divider />
        <Solution />
        <Divider />
        <HowItWorks />
        <Divider />
        <WhyXeto />
        <Divider />
        <Packages />
        <Divider />
        <Booking />
        <Divider />
        <FAQ />
        <Divider />
        <About />
        <Divider />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
