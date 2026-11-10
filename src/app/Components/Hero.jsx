import Image from "next/image";
import Sculpture from "./Sculpture";

// Edit these two strings. LOCATION is a placeholder.
const LABEL = "Full-stack web developer";
const LOCATION = "Your city, Country";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-[6%] py-12 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-8"
    >
      {/* ---------- Left: introduction ---------- */}
      <div className="relative z-10">
        <p className="anim-fade-up label-mono flex flex-wrap items-center gap-x-4 gap-y-1 text-charcoal [--d:0ms]">
          <span>{LABEL}</span>
          <span aria-hidden="true" className="h-px w-8 bg-plum" />
          <span className="text-charcoal/60">{LOCATION}</span>
        </p>

        <h1 className="mt-7 text-display font-extrabold text-charcoal">
          <span className="mask-line">
            <span className="anim-line [--d:150ms]">Building</span>
          </span>
          <span className="mask-line">
            <span className="anim-line [--d:260ms]">
              for the{" "}
              <em className="font-serif text-[1.1em] font-normal italic tracking-[-0.02em] text-plum">
                web.
              </em>
            </span>
          </span>
          <span className="mask-line">
            <span className="anim-line text-outline [--d:370ms]">Exploring</span>
          </span>
          <span className="mask-line">
            <span className="anim-line [--d:480ms]">
              <em className="font-serif text-[1.1em] font-normal italic tracking-[-0.02em]">
                what’s
              </em>{" "}
              next.
            </span>
          </span>
        </h1>

        <p className="anim-fade-up mt-8 max-w-[44ch] text-[17px] leading-[1.7] text-charcoal/75 [--d:1300ms]">
          I’m a web developer learning in public. I build with React, Next.js,
          and Node.js, and I care about how a page looks as much as how it
          works.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="anim-fade-up group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-[18px] text-[15px] font-semibold tracking-wide text-ivory transition-colors duration-300 hover:bg-plum [--d:1450ms]"
          >
            Explore my work
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              <path
                d="M8 3V13M3.5 8.5L8 13L12.5 8.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#contact"
            className="anim-fade-up group inline-flex items-center gap-3 rounded-full border border-plum/50 px-8 py-[18px] text-[15px] font-semibold tracking-wide text-charcoal transition-colors duration-300 hover:border-plum hover:bg-plum hover:text-ivory [--d:1600ms]"
          >
            Let’s talk
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M3.5 12.5L12.5 3.5M4.5 3.5H12.5V11.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* ---------- Right: sculpture + portrait ---------- */}
      <div className="relative mx-auto h-[570px] w-full max-w-[680px] lg:h-[700px] lg:justify-self-end">
        {/* Sculpture enters first, fills the whole composition */}
        <div className="absolute inset-0">
          <div className="anim-sculpture h-full w-full [--d:650ms]">
            <Sculpture className="h-full w-full" />
          </div>
        </div>

        {/* Portrait emerges after it: 94% height, full width, bottom aligned */}
        <div className="absolute inset-x-0 bottom-0 h-[94%]">
          <div className="anim-portrait relative h-full w-full [--d:1000ms]">
            <Image
              src="/images/potrait.png"
              alt="Portrait of Muhammad Hamzah"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Editorial labels */}
        <p className="anim-fade-up label-mono absolute left-0 top-[3%] z-10 flex items-center gap-3 text-charcoal/70 [--d:1700ms]">
          <span aria-hidden="true" className="h-px w-6 bg-plum" />
          Portfolio 2026
        </p>
        <p className="anim-fade-up label-mono absolute bottom-[2%] right-0 z-10 flex items-center gap-3 text-charcoal/70 [--d:1850ms]">
          Learning in public
          <span aria-hidden="true" className="h-px w-6 bg-plum" />
        </p>
      </div>
    </section>
  );
}