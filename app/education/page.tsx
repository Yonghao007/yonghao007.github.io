import PageShell from "../components/pageshell";

export default function EducationPage() {
  return (
    <PageShell
      eyebrow="Education"
      title="Academic Background"
      intro="An academic journey from undergraduate study to graduate work in computer science."
    >
      <div className="relative ml-4 border-l border-sky-200 pl-8">
        <div className="relative mb-14">
          <div className="absolute -left-[2.15rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-sky-500" />
          <div className="grid gap-6 border-b border-sky-100 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-sky-600">
                Brown University
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
                Master of Science in Computer Science
              </h3>
              <p className="mt-3 text-base text-slate-700">
                Graduate study focused on computer science, with emphasis on artificial intelligence and software.
              </p>
            </div>

            <div className="space-y-3 lg:pt-1">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-sky-600">
                Expected May 2026
              </p>
              <p className="text-sm text-slate-500">Providence, Rhode Island, USA</p>
              <p className="text-sm text-slate-500">GPA: 4.00</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[2.15rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-cyan-500" />
          <div className="grid gap-6 pb-2 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-sky-600">
                Colorado School of Mines
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
                Bachelor of Science in Computer Science
              </h3>
              <p className="mt-3 text-base text-slate-700">
                Undergraduate study across software development, algorithms and data structures, networks, privacy and security, and embedded systems.
              </p>
            </div>

            <div className="space-y-3 lg:pt-1">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-sky-600">
                May 2024
              </p>
              <p className="text-sm text-slate-500">Golden, Colorado, USA</p>
              <p className="text-sm text-slate-500">GPA: 3.88</p>
              <p className="text-sm italic text-slate-500">Dean’s List, Mines PTK Scholarship</p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}