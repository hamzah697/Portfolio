// Server component. Scroll animation comes from the <Reveal> client wrapper.
// Place it between your Introduction and Featured projects sections.

import Reveal from "./Reveal";

const parts = [
  {
    title: "The part you see",
    analogy: "Like the shop floor",
    body: "Every button, picture, menu and page you look at and tap. I make it clear, quick to load, and comfortable on a phone or a laptop.",
    tools: "React · Next.js · Tailwind CSS",
  },
  {
    title: "The part that thinks",
    analogy: "Like the kitchen",
    body: "When you press a button, something has to do the work: check a password, find a recipe, send an answer back. I write that behind-the-scenes code.",
    tools: "Node.js · Express",
  },
  {
    title: "The part that remembers",
    analogy: "Like a filing cabinet",
    body: "Your notes, your account and your settings have to be saved somewhere safe, so they are still there tomorrow. I set that up and keep it private.",
    tools: "MySQL",
  },
];

const examples = [
  "A page where you type what is in your fridge and get recipes back.",
  "A notes app where you log in and only you can see what you wrote.",
  "A website for a small business that works well on any phone.",
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      aria-labelledby="what-i-do-heading"
      className="bg-ivory text-charcoal"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 md:py-32">
        {/* Heading row */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <p className="mb-8 flex items-center gap-3 font-mono text-label uppercase text-charcoal/70">
              <span aria-hidden className="h-px w-8 bg-charcoal/40" />
              What I do
            </p>
            <h2
              id="what-i-do-heading"
              className="font-sans text-headline font-semibold"
            >
              I build the websites
              <br />
              <span className="font-serif font-normal italic text-plum">
                people use every day.
              </span>
            </h2>
          </Reveal>
          <Reveal
            as="p"
            delay={150}
            className="max-w-sm text-[0.9375rem] leading-relaxed text-charcoal/70 md:col-span-4 md:justify-self-end"
          >
            Think of an online shop, a booking page, or an app that saves your
            notes. I design them, build them, and make them work.
          </Reveal>
        </div>

        {/* Three parts of every website */}
        <div className="mt-16 md:mt-24">
          <Reveal
            as="h3"
            className="font-sans text-xl font-semibold tracking-tight md:text-2xl"
          >
            Every website has three parts. I work on all of them.
          </Reveal>

          <ul className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {parts.map((part, i) => (
              <Reveal
                as="li"
                key={part.title}
                delay={i * 140}
                className="border-t border-charcoal/20 pt-6"
              >
                <p className="font-serif text-lg italic text-plum">
                  {part.analogy}
                </p>
                <h4 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
                  {part.title}
                </h4>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-charcoal/75">
                  {part.body}
                </p>
                <p className="mt-6 font-mono text-label uppercase text-charcoal/55">
                  {part.tools}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Concrete examples: the strongest proof for someone non-technical */}
        <Reveal className="mt-20 grid gap-10 rounded-[2rem] bg-charcoal p-8 text-ivory sm:p-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h3 className="font-sans text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              In everyday terms,{" "}
              <span className="font-serif font-normal italic text-mauve">
                I make things like:
              </span>
            </h3>
          </div>
          <ul className="md:col-span-7">
            {examples.map((line, i) => (
              <li
                key={line}
                className={`flex gap-4 py-5 text-lg leading-snug text-lavender ${
                  i > 0 ? "border-t border-ivory/15" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-mauve"
                />
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}