import PageShell from "../components/pageshell";

export default function EducationPage() {
  return (
    <PageShell
      eyebrow="Education"
      title="Academic Background"
      intro="My coursework and technical interests reflect a blend of quantitative reasoning and software engineering."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-blue-950/30">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Brown University</h3>
          <p className="mt-3 text-slate-300">
            Applied Mathematics and Computer Science
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-blue-950/30">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Areas of Study
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>• Artificial Intelligence and Machine Learning</li>
            <li>• Data Visualization and Applied Analytics</li>
            <li>• Web Development and Software Engineering</li>
            <li>• Mathematical and Computational Modeling</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}