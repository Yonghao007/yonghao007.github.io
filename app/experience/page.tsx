import PageShell from "../components/pageshell";

const experience = [
  {
    role: "Research & Engineering Projects",
    org: "Academic / Personal Work",
    time: "2024 — Present",
    desc: "Building practical systems at the intersection of AI, web development, and data-driven applications.",
  },
  {
    role: "Full-Stack & Applied AI Exploration",
    org: "Independent Projects",
    time: "2023 — Present",
    desc: "Exploring modern web stacks, intelligent tools, and human-centered software systems through hands-on implementation.",
  },
];

export default function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title="Technical Experience"
      intro="My experience centers on implementation, experimentation, and building useful systems in academic and independent contexts."
    >
      <div className="space-y-5">
        {experience.map((item) => (
          <div
            key={item.role}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-slate-300">{item.org}</p>
              </div>
              <span className="text-sm text-cyan-200">{item.time}</span>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}