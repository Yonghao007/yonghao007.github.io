import PageShell from "../components/pageshell";

const projects = [
  {
    title: "Marketing Website Development",
    tag: "WordPress · Frontend",
    desc: "Built a responsive promotional website for Midea with custom CSS and JavaScript effects.",
  },
  {
    title: "Depression Symptom Detection on Reddit",
    tag: "NLP · ML",
    desc: "Replicated a symptom detection pipeline using embeddings and Random Forest evaluation.",
  },
  {
    title: "Menu Collection Web App",
    tag: "React · Express · MongoDB",
    desc: "Built a responsive menu collection platform with backend API support and dynamic navigation.",
  },
  {
    title: "AI-Driven Task Management System",
    tag: "AI Agents · LangChain",
    desc: "Developed an agent-based system for task workflows, summarization, and document-aware responses.",
  },
  {
    title: "Clue Game",
    tag: "Java · OOP",
    desc: "Built a Java Clue game with Swing UI, AI opponents, and JUnit tests.",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Selected Projects"
      intro="A grid-based presentation of technical and academic work."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100 transition duration-300 hover:-translate-y-1 hover:border-sky-400/60"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              {project.tag}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{project.desc}</p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/60 to-transparent" />
          </article>
        ))}
      </div>
    </PageShell>
  );
}