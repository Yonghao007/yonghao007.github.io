'use client';

import PageShell from "../components/pageshell";

const interests = [
  "AI applications and document retrieval",
  "Software testing and debugging",
  "Full-stack web development",
  "Natural language processing",
  "VR and interactive applications",
  "Database storage and concurrency",
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
      intro="I like being able to follow a problem wherever it leads: from something a user sees on screen to the code and data behind it. That curiosity has taken me into web development, AI, and VR."
    >
      <div className="flex flex-col gap-12">
        <section className="border-t border-sky-100/80 pt-8">
          <h2 className="font-serif text-3xl font-semibold text-slate-900">A Little About Me</h2>
          <p className="mt-5 max-w-4xl text-[1.05rem] leading-8 text-slate-600">
            I studied computer science at Colorado School of Mines and went on to
            earn my master’s at Brown. I’ve enjoyed moving between different kinds
            of software: a web application has to make sense to the person using
            it, a VR interaction has to feel right on a headset, and a database has
            to keep data consistent when several things happen at once. Working
            across those areas has made me more attentive to how the pieces fit
            together.
          </p>
          <p className="mt-5 max-w-4xl text-[1.05rem] leading-8 text-slate-600">
            AI is a particular interest of mine. I’ve worked on document retrieval
            and task automation, and I now evaluate model responses at Handshake
            AI. Seeing where those responses fall short gives me a useful
            perspective when building with them. I’m looking for a team where I can
            contribute across the application, learn from other engineers, and
            keep getting better at the work.
          </p>
        </section>

        <div className="flex flex-col gap-12">
          <section className="border-t border-sky-100/80 pt-8">
            <h3 className="font-serif text-2xl font-semibold text-slate-900">What I Work On</h3>

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
            <h3 className="font-serif text-2xl font-semibold text-slate-900">Tools I Have Used</h3>
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