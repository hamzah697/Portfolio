import { site, nav, projects } from "./site.js";
import Reveal from "./Reveal";

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className="size-3 shrink-0 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M3 9l6-6M4 3h5v5" />
    </svg>
  );
}

const linkClass =
  "group inline-flex items-center gap-1.5 text-[0.9375rem] text-lavender transition-colors duration-300 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mauve";

const headingClass = "font-mono text-label uppercase text-mauve";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-charcoal text-ivory"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-[1280px] px-6 pt-24 pb-10 sm:px-10 md:pt-32">
        {/* Closing call to action */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal as="h2" className="font-sans text-headline font-semibold md:col-span-8">
            Have something in mind?
            <br />
            <span className="font-serif font-normal italic text-mauve">
              Let&rsquo;s build it.
            </span>
          </Reveal>
          <Reveal delay={150} className="md:col-span-4 md:justify-self-end">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-ivory px-7 py-4 text-sm font-medium text-charcoal transition-colors duration-300 hover:bg-lavender focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mauve"
            >
              Email me
              <Arrow />
            </a>
            <p className="mt-4 break-all font-mono text-label uppercase text-mauve/80">
              {site.email}
            </p>
          </Reveal>
        </div>

        {/* Link columns */}
        <div className="mt-20 grid gap-12 border-t border-ivory/15 pt-12 sm:grid-cols-2 md:mt-28 md:grid-cols-12">
          <Reveal className="sm:col-span-2 md:col-span-5">
            <p className="font-sans text-2xl font-semibold tracking-tight">
              {site.name}.
            </p>
            <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-lavender/80">
              {site.role}. Learning in public and building things that work.
            </p>
          </Reveal>

          <Reveal as="nav" delay={100} aria-label="Footer pages" className="md:col-span-2">
            <h3 className={headingClass}>Pages</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="md:col-span-3">
            <h3 className={headingClass}>Projects</h3>
            <ul className="mt-5 space-y-3">
              {projects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {p.name}
                    <Arrow />
                  </a>
                  <p className="mt-0.5 text-xs text-lavender/50">{p.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300} className="md:col-span-2">
            <h3 className={headingClass}>Elsewhere</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  GitHub
                  <Arrow />
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  LinkedIn
                  <Arrow />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal className="mt-20 flex flex-col gap-4 border-t border-ivory/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-label uppercase text-lavender/60">
            &copy; {year} {site.fullName}
          </p>
          <p className="font-mono text-label uppercase text-lavender/60">
            Built with Next.js, React &amp; Tailwind CSS
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-mono text-label uppercase text-mauve transition-colors duration-300 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mauve"
          >
            Back to top
            <span
              aria-hidden
              className="transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5"
            >
              &uarr;
            </span>
          </a>
        </Reveal>
      </div>
    </footer>
  );
}