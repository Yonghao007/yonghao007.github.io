import ProjectLinks from "../ProjectLinks";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../components/pageshell";
import { getProjectBySlug, projects } from "../projectData";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell eyebrow="Projects" title={project.title} intro={project.overview}>
      <div className="max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-500"
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="border-t border-sky-100/80 pt-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Project Details
            </p>
            <ul className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="h-fit rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Technologies
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-700"
                >
                  {highlight}
                </span>
              ))}
            </div>
            <ProjectLinks project={project} variant="buttons" />
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
