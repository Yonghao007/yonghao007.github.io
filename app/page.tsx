import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const cards = [
  {
    href: "/about",
    title: "About",
    desc: "A little about me and how I approach my work.",
    items: [
      "Full-stack development, AI applications, and database systems",
      "Open to software engineering roles, including work on AI applications",
    ],
  },
  {
    href: "/education",
    title: "Education",
    desc: "Computer science at Brown and Colorado School of Mines.",
    items: [
      "Brown University — M.S. in Computer Science, GPA 4.00",
      "Colorado School of Mines — B.S. in Computer Science, GPA 3.88",
    ],
  },
  {
    href: "/projects",
    title: "Projects",
    desc: "From web interfaces to database internals.",
    items: [
      "Disk-oriented database with B+Tree indexes, transactions, and crash recovery",
      "Web applications built with React, Python APIs, and MongoDB",
    ],
  },
  {
    href: "/experience",
    title: "Experience",
    desc: "AI evaluation and VR software development.",
    items: [
      "Handshake AI: reviewing text and image outputs against task-specific criteria",
      "Fuzhou Amigo Software: building and testing Unity/C# applications on PICO Neo3",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-slate-900">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-20 lg:pt-28">
        <div>
          <h1 className="max-w-4xl font-serif text-6xl font-semibold tracking-tight md:text-7xl">
            Yonghao Li
          </h1>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <p className="max-w-3xl text-[1.05rem] leading-8 text-slate-600 md:text-xl">
              I’m Yonghao, a software developer with a master’s in computer science
              from Brown. I enjoy taking an idea far enough that someone can
              actually use it, then working through the details that make it work
              well. These days, I’m building with AI and looking for my next
              software engineering role.
            </p>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {[
                {
                  label: "Web Development",
                  icon: (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 9l-4 3 4 3" />
                      <path d="M16 9l4 3-4 3" />
                      <path d="M14 5l-4 14" />
                    </svg>
                  ),
                },
                {
                  label: "AI Systems",
                  icon: (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="7" y="7" width="10" height="10" rx="2" />
                      <path d="M9 1v3" />
                      <path d="M15 1v3" />
                      <path d="M9 20v3" />
                      <path d="M15 20v3" />
                      <path d="M20 9h3" />
                      <path d="M20 14h3" />
                      <path d="M1 9h3" />
                      <path d="M1 14h3" />
                      <path d="M10 10h4v4h-4z" />
                    </svg>
                  ),
                },
                {
                  label: "Databases",
                  icon: (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx="12" cy="5" rx="7" ry="3" />
                      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
                      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <span className="text-sky-600">{item.icon}</span>
                  <span className="font-medium tracking-wide text-slate-700">{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-8">
        <div className="border-t border-sky-100/80">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block border-b border-sky-100/80 py-8 transition-all duration-300 hover:bg-white/50 hover:px-4 hover:shadow-[0_10px_30px_rgba(125,211,252,0.18)]"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                    {card.title}
                  </p>
                  <p className="mt-4 text-base font-medium leading-7 text-slate-700">
                    {card.desc}
                  </p>
                </div>

                <ul className="space-y-2 text-sm leading-7 text-slate-500">
                  {card.items.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}