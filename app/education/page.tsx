import PageShell from "../components/pageshell";

export default function EducationPage() {
  return (
    <PageShell
      eyebrow="Education"
      title="Academic Background"
      intro="A timeline view of my graduate and undergraduate education."
    >
      <div className="relative ml-4 border-l border-sky-300/70 pl-8">
        <div className="relative mb-10">
          <div className="absolute -left-[2.15rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow" />
          <div className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100">
            <p className="text-sm font-medium text-sky-600">Expected May 2026 · Providence, RI</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Brown University</h3>
            <p className="mt-3 text-slate-700">Master of Science in Computer Science</p>
            <p className="mt-2 text-slate-600">GPA: 4.00</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[2.15rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-cyan-500 shadow" />
          <div className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100">
            <p className="text-sm font-medium text-sky-600">May 2024 · Golden, CO</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Colorado School of Mines</h3>
            <p className="mt-3 text-slate-700">Bachelor of Science in Computer Science</p>
            <p className="mt-2 text-slate-600">GPA: 3.88</p>
            <p className="mt-2 text-slate-600">Dean’s List, Mines PTK Scholarship</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}