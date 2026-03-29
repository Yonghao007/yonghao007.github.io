import PageShell from "../components/pageshell";

const links = [
  { label: "Email", href: "mailto:your_email@example.com" },
  { label: "GitHub", href: "https://github.com/Yonghao007" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Resume", href: "#" },
];

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's Connect"
      intro="I'm interested in research, technical collaboration, internships, and thoughtful conversations about AI and software."
    >
      <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8">
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-2xl border border-cyan-300/20 bg-slate-900/70 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </PageShell>
  );
}