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
    title: "Concurrent Database Engine",
    tag: "Go · Databases · Systems",
    desc: "Implemented storage, indexing, concurrency control, and recovery features for a disk-oriented database system in Go.",
  },
  {
    title: "Contour Sketch",
    tag: "Computer Vision · cGAN",
    desc: "Researched contour line generation with conditional GANs and designed post-processing to improve visual consistency.",
  },
  {
    title: "Dynamic Programming Timber Problem",
    tag: "Python · Algorithms",
    desc: "Designed a dynamic programming solution with traceback to optimize timber selection under alternating choices.",
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
      title="Project Highlights"
      intro="What I've built across web development, AI, and software systems."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100 transition duration-300 hover:-translate-y-1 hover:border-sky-400/60"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              {project.tag}
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-slate-900">
              {project.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{project.desc}</p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/60 to-transparent" />
          </article>
        ))}
      </div>
    </PageShell>
  );
}