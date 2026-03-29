import PageShell from "../components/pageshell";

const projects = [
  {
    title: "AI Task Management System",
    tag: "AI Agents · Full Stack",
    desc: "An AI-driven task platform combining workflow automation, document-aware assistance, and structured task coordination.",
  },
  {
    title: "Medical Report Intelligence",
    tag: "Health Tech · Privacy",
    desc: "A local-first health record concept for uploading reports, tracking health information, and generating structured insights.",
  },
  {
    title: "Used Car Price Prediction",
    tag: "Data Science · Visualization",
    desc: "A machine learning and visualization project focused on second-hand vehicle pricing and market analysis.",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Selected Technical Work"
      intro="These projects reflect my interests in AI systems, practical software, and data-focused applications."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.75rem] border border-cyan-300/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              {project.tag}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.desc}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}