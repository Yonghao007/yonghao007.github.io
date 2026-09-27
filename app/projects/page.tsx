import ProjectLinks from "./ProjectLinks";
import Link from "next/link";
import PageShell from "../components/pageshell";
import { projects } from "./projectData";

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
              <Link
                href={`/projects/${project.slug}`}
                className="transition-colors hover:text-sky-600"
              >
                {project.title}
              </Link>
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{project.desc}</p>
            <ProjectLinks project={project} />
            <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/60 to-transparent" />
          </article>
        ))}
      </div>
    </PageShell>
  );
}
