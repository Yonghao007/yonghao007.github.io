import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const cards = [
  {
    href: "/about",
    title: "About",
    desc: "Learn more about my background, interests, and technical perspective.",
  },
  {
    href: "/education",
    title: "Education",
    desc: "View my academic background, field of study, and focus areas.",
  },
  {
    href: "/projects",
    title: "Projects",
    desc: "Explore selected projects in AI, software, and data applications.",
  },
  {
    href: "/experience",
    title: "Experience",
    desc: "Read about research, engineering, and hands-on implementation work.",
  },
  {
    href: "/contact",
    title: "Contact",
    desc: "Find my email, GitHub, LinkedIn, and ways to connect.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[10%] top-[16rem] h-[22rem] w-[22rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute left-[8%] top-[30rem] h-[18rem] w-[18rem] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <Navbar />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-20 lg:grid-cols-[1.4fr_0.8fr] lg:pt-28">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-wide text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Blue-Tech Academic Personal Website
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Yong Li
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Applied Math + CS
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            I am interested in AI, software engineering, data-driven systems, and
            modern web technologies. This website presents my academic profile,
            projects, experience, and contact information.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["AI Systems", "Machine Learning", "Web Development", "Data Visualization"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-300/20 bg-slate-900/70 px-4 py-2 text-sm text-sky-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-300/15 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Profile Overview</h2>
            <span className="rounded-full border border-cyan-300/20 px-3 py-1 text-xs text-cyan-200">
              2026
            </span>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            {[
              ["Institution", "Brown University"],
              ["Major", "Applied Mathematics & Computer Science"],
              ["Focus", "AI, Full-Stack Systems, Data Applications"],
              ["Location", "United States"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {label}
                </p>
                <p className="mt-2 text-base font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-[1.75rem] border border-cyan-300/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                Subpage
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{card.desc}</p>
              <p className="mt-6 text-sm text-cyan-200">Open page →</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}