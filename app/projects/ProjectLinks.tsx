import type { Project } from "./projectData";

export default function ProjectLinks({
  project,
  variant = "text",
}: {
  project: Project;
  variant?: "text" | "buttons";
}) {
  const links = [
    { href: project.githubUrl?.trim(), label: "View on GitHub" },
    { href: project.reportUrl?.trim(), label: "Read Report (PDF)" },
  ].filter((link) => link.href);

  if (links.length === 0) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title}: ${link.label} (opens in a new tab)`}
          className={
            variant === "buttons"
              ? "inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
              : "inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-500"
          }
        >
          {link.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
