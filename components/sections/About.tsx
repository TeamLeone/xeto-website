import Image from "next/image";
import { FadeIn } from "../FadeIn";
import { SectionLabel } from "../SectionLabel";

export function About() {
  return (
    <section id="about" className="bg-white text-navy section-padding">
      <div className="container-content">
        <FadeIn>
          <SectionLabel>{"// About"}</SectionLabel>
          <h2 className="heading-lg max-w-2xl">The story behind Xeto.</h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12 items-start">
          <FadeIn>
            <div className="space-y-5 body-lg text-navy/80 max-w-3xl order-2 lg:order-1">
              <p>In case you missed it, my name is Matthew.</p>
              <p>
                I was born in Florida and have called the Atlanta area home for
                nearly 20 years. I'm a singer in a band, I love movies and
                music, tattoos, the outdoors and most importantly my big
                Italian family.
              </p>
              <p>
                Xeto is named after my grandfather, Peter Zito (zee·tow) — an
                accomplished pharmacist, hunter, and the owner of an outfitting
                warehouse. He was also the grandson of an Italian immigrant who
                came to America with nothing and built a life on hard work,
                integrity, and showing up for the people around him.
              </p>
              <p>
                Those values shaped the man my grandfather was, and shaped the
                way I work today. Naming the company Xeto was a way to remind
                myself that every business I help launch is built the same way
                he built his life:{" "}
                <span className="text-navy font-bold">
                  properly, deliberately, and to last.
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="order-1 lg:order-2 mx-auto lg:mx-0 flex-shrink-0">
              <Image
                src="/images/headshot.jpeg"
                alt="Matthew, founder of Xeto"
                width={200}
                height={200}
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover object-top rounded-full shadow-xl ring-2 ring-orange/30"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
