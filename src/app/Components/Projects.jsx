import Image from "next/image";

// Real repo links, checked against your GitHub account.
const PANTRYCHEF_URL = "https://github.com/hamzah697/PantryChef";
const NOTES_API_URL = "https://github.com/hamzah697/Notes_API";

// Drop a 16:9 screenshot (about 1600x900) at this path.
const PANTRYCHEF_IMAGE = "/images/pantrychef-preview.png";

// Auth: true means the route needs a JWT.
const ROUTES = [
  { method: "POST", path: "/signup", note: "Create user, hash password", auth: false },
  { method: "POST", path: "/login", note: "Check password, return JWT", auth: false },
  { method: "GET", path: "/notes", note: "List your notes", auth: true },
  { method: "GET", path: "/notes/:id", note: "One note, if it is yours", auth: true },
  { method: "POST", path: "/notes", note: "Create a note", auth: true },
  { method: "PUT", path: "/notes/:id", note: "Update a note, if it is yours", auth: true },
  { method: "DELETE", path: "/notes/:id", note: "Delete a note, if it is yours", auth: true },
];

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {items.map((tag) => (
        <li
          key={tag}
          className="label-mono flex items-center gap-2 text-charcoal/80"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-plum" />
          {tag}
        </li>
      ))}
    </ul>
  );
}

function RepoLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full border border-plum/50 px-6 py-3 text-[14px] font-semibold tracking-wide text-charcoal transition-colors duration-300 hover:border-plum hover:bg-plum hover:text-ivory"
    >
      {label}
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
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[1400px] px-[6%] py-24 lg:py-32"
    >
      {/* ---------- Heading ---------- */}
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="label-mono reveal flex items-center gap-4 text-charcoal">
            <span aria-hidden="true" className="h-px w-8 bg-plum" />
            Featured projects
          </p>
          <h2 className="reveal-lines mt-6 text-headline font-extrabold text-charcoal">
            <span className="mask-line">
              <span className="mask-line-inner">Selected work,</span>
            </span>
            <span className="mask-line">
              <span className="mask-line-inner [--d:110ms]">
                <em className="font-serif text-[1.1em] font-normal italic tracking-[-0.02em] text-plum">
                  so far.
                </em>
              </span>
            </span>
          </h2>
        </div>
        <p className="reveal max-w-[40ch] text-[17px] leading-[1.7] text-charcoal/75 lg:col-span-4 lg:col-start-9 [--d:150ms]">
          Two projects, one for each side of the stack. A React front end that
          talks to an API, and a back end with a real database and login.
        </p>
      </div>

      {/* ---------- Project: PantryChef (wide landscape, image left) ---------- */}
      <article className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:items-end lg:gap-x-12">
        <div className="reveal group relative lg:col-span-8">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-full w-full rounded-[6px] rounded-tr-[96px] bg-mauve/50 transition-transform duration-500 ease-editorial group-hover:-translate-x-1 group-hover:translate-y-1"
          />
          <div className="relative aspect-[16/9] overflow-hidden rounded-[6px] rounded-tr-[96px] bg-lavender">
            <Image
              src={PANTRYCHEF_IMAGE}
              alt="PantryChef: ingredient search and matching recipe cards"
              fill
              sizes="(min-width: 1024px) 62vw, 92vw"
              className="object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="reveal lg:col-span-4 lg:pb-6 [--d:150ms]">
          <h3 className="text-headline font-extrabold text-charcoal">
            PantryChef
          </h3>
          <p className="mt-5 max-w-[42ch] text-[17px] leading-[1.7] text-charcoal/75">
            Type in the ingredients you have and get recipes that match them.
            Each card links to the original recipe.
          </p>
          <p className="mt-4 max-w-[42ch] font-serif text-[20px] italic leading-[1.5] text-plum">
            Built to practice React state, props, and async API data.
          </p>
          <div className="mt-6">
            <Tags items={["React", "JavaScript", "Spoonacular API"]} />
          </div>
          <div className="mt-8">
            <RepoLink href={PANTRYCHEF_URL} label="View on GitHub" />
          </div>
        </div>
      </article>

      {/* ---------- Project: Notes API (route sheet, info left) ---------- */}
      <article className="mt-28 grid gap-10 lg:mt-40 lg:grid-cols-12 lg:items-center lg:gap-x-12">
        <div className="reveal lg:col-span-4 lg:col-start-1 lg:row-start-1">
          <h3 className="text-headline font-extrabold text-charcoal">
            Notes API
          </h3>
          <p className="mt-5 max-w-[42ch] text-[17px] leading-[1.7] text-charcoal/75">
            A REST API with full create, read, update, and delete on a MySQL
            database. Passwords are hashed, logins return a token, and every
            user only sees their own notes.
          </p>
          <p className="mt-4 max-w-[42ch] font-serif text-[20px] italic leading-[1.5] text-plum">
            Built to learn the back end: Express, SQL, and auth.
          </p>
          <div className="mt-6">
            <Tags
              items={["Node.js", "Express.js", "MySQL", "JWT", "bcrypt"]}
            />
          </div>
          <div className="mt-8">
            <RepoLink href={NOTES_API_URL} label="View on GitHub" />
          </div>
        </div>

        <div className="reveal group relative lg:col-span-7 lg:col-start-6 lg:row-start-1 [--d:150ms]">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full rounded-[6px] rounded-bl-[96px] bg-plum/40 transition-transform duration-500 ease-editorial group-hover:translate-x-1 group-hover:translate-y-1"
          />
          <div className="relative rounded-[6px] rounded-bl-[96px] bg-charcoal p-6 text-ivory sm:p-10 lg:min-h-[460px]">
            <div className="flex items-baseline justify-between gap-4">
              <p className="label-mono text-mauve">Notes API: routes</p>
              <p className="label-mono flex items-center gap-2 text-ivory/70">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mauve" />
                Needs JWT
              </p>
            </div>

            <ul className="mt-6 font-mono text-[12.5px] sm:text-[13px]">
              {ROUTES.map((route) => (
                <li
                  key={route.method + route.path}
                  className="grid grid-cols-[0.75rem_4.25rem_1fr] items-baseline gap-x-3 border-b border-ivory/10 py-3.5 sm:grid-cols-[0.75rem_4.5rem_9rem_1fr]"
                >
                  <span
                    aria-hidden="true"
                    className={
                      route.auth
                        ? "h-1.5 w-1.5 self-center rounded-full bg-mauve"
                        : "h-1.5 w-1.5 self-center rounded-full border border-ivory/30"
                    }
                  />
                  <span className="text-mauve">{route.method}</span>
                  <span className="text-ivory">{route.path}</span>
                  <span className="hidden text-ivory/65 sm:block">
                    {route.note}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-[12px] leading-[1.6] text-ivory/65 lg:pl-0 lg:pr-16">
              MySQL: users.ID links to notes_table.USER_ID with a foreign key.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}