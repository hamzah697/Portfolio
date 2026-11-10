
export default function Navbar() {
  return (
    <header className="w-full border-b border-[#252225]/10 bg-[#F3F0EA]">
      <nav className="mx-auto flex min-h-[88px] max-w-[1440px] items-center justify-between gap-8 px-[6%]">

        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 text-[23px] font-extrabold tracking-[-1.2px] text-[#252225] transition-colors duration-300 hover:text-[#806477]"
        >
          HAMZAH<span className="text-[#806477]">.</span>
        </a>

        {/* Navigation links */}
        <div className="ml-auto flex items-center gap-8 md:gap-11">
          {["Home", "Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative py-2 text-[15px] font-semibold tracking-[0.02em] text-[#252225]/70 transition-colors duration-300 hover:text-[#806477]"
            >
              {item}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#806477] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-3 rounded-full border border-[#806477]/40 px-5 py-3 text-[14px] font-semibold tracking-wide text-[#252225] transition-all duration-300 hover:border-[#806477] hover:bg-[#806477] hover:text-[#F3F0EA] sm:inline-flex"
        >
          Let's talk
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

      </nav>
    </header>
  );
}
