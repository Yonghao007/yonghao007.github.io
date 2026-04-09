'use client';

import PageShell from "../components/pageshell";

const interests = [
  "Artificial Intelligence",
  "Software Engineering",
  "Full-Stack Applications",
  "Natural Language Processing",
  "Interactive and Immersive Systems",
  "Human-Centered Computing",
];

const techStackRows = [
  [
    "Python",
    "C/C++",
    "Java",
    "C#",
    "JavaScript",
    "Go",
    "Bash",
    "OCaml",
    "React",
    "Express",
  ],
  [
    "HTML5",
    "CSS3",
    "REST APIs",
    "WordPress",
    "MongoDB",
    "PostgreSQL",
    "Pinecone",
    "Unity",
    "AWS",
    "Azure",
  ],
  [
    "Git",
    "GitHub",
    "Linux",
    "Jupyter Notebook",
    "Figma",
    "UML",
    "Verilog",
    "MIPS Assembly",
    "SQL",
    "JSON",
  ],
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About Me"
      intro="Computer Science graduate student at Brown University, currently focused on AI and software, with a broad undergraduate foundation across several areas of computing."
    >
      <div className="flex flex-col gap-12">
        <section className="border-t border-sky-100/80 pt-8">
          <h2 className="font-serif text-3xl font-semibold text-slate-900">Background</h2>
          <p className="mt-5 max-w-4xl text-[1.05rem] leading-8 text-slate-600">
            I am currently pursuing a Master of Science in Computer Science at Brown
            University, where my recent work has been primarily focused on artificial
            intelligence and software. Before that, my undergraduate study gave me
            exposure to a broader range of areas, including software, computer networks,
            privacy and security, and embedded systems.
          </p>
          <p className="mt-5 max-w-4xl text-[1.05rem] leading-8 text-slate-600">
            That mix of breadth and focus has shaped how I think about computing. I am
            especially interested in building systems that are technically strong,
            practical to use, and informed by both solid engineering and intelligent
            behavior.
          </p>
        </section>

        <div className="flex flex-col gap-12">
          <section className="border-t border-sky-100/80 pt-8">
            <h3 className="font-serif text-2xl font-semibold text-slate-900">Interests</h3>

            <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <ul className="max-w-3xl space-y-3 text-base leading-7 text-slate-600">
                {interests.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-sky-200/70 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_28%)]" />
                <div className="relative flex min-h-[240px] items-center justify-center">
                  <div className="absolute h-44 w-44 rounded-full border border-sky-200/80" />
                  <div className="absolute h-32 w-32 rounded-full border border-sky-200/70" />
                  <div className="absolute h-20 w-20 rounded-full bg-white/80 shadow-sm" />

                  <span className="absolute left-6 top-6 rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                    AI
                  </span>
                  <span className="absolute right-6 top-10 rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                    Software
                  </span>
                  <span className="absolute left-10 bottom-10 rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                    Systems
                  </span>
                  <span className="absolute right-8 bottom-8 rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                    Data
                  </span>
                  <span className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
                    Focus Areas
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-sky-100/80 pt-8">
            <h3 className="font-serif text-2xl font-semibold text-slate-900">Tech Stack</h3>
            <div className="mt-5 max-w-full space-y-3 overflow-hidden">
              {techStackRows.map((row, rowIndex) => (
                <div key={rowIndex} className="overflow-hidden">
                  <div
                    className={`tech-marquee flex min-w-max gap-2 ${
                      rowIndex === 1 ? "tech-marquee-reverse" : ""
                    }`}
                  >
                    {[...row, ...row].map((item, index) => (
                      <span
                        key={`${rowIndex}-${item}-${index}`}
                        className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 whitespace-nowrap"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <style jsx>{`
        .tech-marquee {
          animation: tech-scroll 30s linear infinite;
        }
        .tech-marquee-reverse {
          animation-direction: reverse;
        }

        @keyframes tech-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </PageShell>
  );
}