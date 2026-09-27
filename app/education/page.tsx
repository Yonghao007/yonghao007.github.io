import PageShell from "../components/pageshell";

export default function EducationPage() {
  return (
    <PageShell
      eyebrow="Education"
      title="Academic Background"
      intro="At Mines, I built a foundation in how computers and software work. At Brown, I went deeper into data, machine learning, and the decisions behind reliable systems."
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
                Deepened my understanding of how databases organize data, process
                queries, and maintain consistency under concurrent access and
                failures. Machine learning and data science coursework taught me to
                reason about model selection, evaluate results, and examine the
                assumptions behind an analysis. Across these subjects, I learned
                to weigh efficiency, correctness, and the limits of a given approach.
              </p>
            </div>

            <div className="space-y-3 lg:pt-1">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-sky-600">
                May 2026
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
                Built a foundation in algorithms, data structures, operating
                systems, and software design. Learned to break problems into smaller
                parts, analyze computational costs, and organize code so it can be
                tested and changed. Linux and embedded systems coursework helped me
                understand how software interacts with hardware and works within
                resource constraints.
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