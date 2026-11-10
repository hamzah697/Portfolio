// Draft copy: edit the words so they sound like you.
const points = [
  {
    number: "01",
    title: "How I build",
    text: "I start with the layout and the details: spacing, type, and how things move. Then I write the logic and test it by hand until it behaves.",
  },
  {
    number: "02",
    title: "What I’m learning",
    text: "Backend and databases: Express, MySQL, and authentication. My Notes API was the first project where I wrote the server, the database, and the login myself.",
  },
  {
    number: "03",
    title: "Where I’m headed",
    text: "An internship where I can work on real products, learn from other developers, and keep shipping.",
  },
];

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="mx-auto w-full max-w-[1440px] border-t border-charcoal/10 px-[6%] py-20 lg:py-28"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-10">
        {/* Label */}
        <p className="reveal label-mono flex items-center gap-3 text-charcoal lg:col-span-3 lg:pt-3">
          <span aria-hidden="true" className="h-px w-8 bg-plum" />
          Introduction
        </p>

        {/* Statement + points */}
        <div className="lg:col-span-9">
          <h2 className="reveal text-[clamp(1.75rem,3.6vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.025em] text-charcoal [--d:100ms]">
            I started with HTML and CSS, then kept asking{" "}
            <em className="font-serif text-[1.1em] font-normal italic tracking-[-0.01em] text-plum">
              how does it actually work?
            </em>{" "}
            all the way down to the database.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
            {points.map((point, index) => (
              <div
                key={point.number}
                className="reveal border-t border-charcoal/20 pt-6"
                style={{ "--d": `${index * 120}ms` }}
              >
                <p className="label-mono text-charcoal/60">{point.number}</p>
                <h3 className="mt-4 text-[20px] font-bold tracking-[-0.01em] text-charcoal">
                  {point.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-charcoal/75">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}