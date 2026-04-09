import PageShell from "../components/pageshell";

export default function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title="Work Experience"
      intro="A structured, resume-style layout focused on internship responsibilities and outcomes."
    >
      <div className="space-y-6">
        <div className="rounded-[2rem] border border-sky-200/70 bg-white/75 p-8 shadow-lg shadow-sky-100">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Software Developer Intern
              </h2>
              <p className="mt-1 text-slate-700">Fuzhou Amigo Software Co., Ltd.</p>
            </div>
            <div className="text-sm font-medium text-sky-700">
              Jun – Aug 2024 · Fuzhou, China
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Developed interactive VR applications using Unity and PICO Unity Integration SDK.",
              "Implemented real-time user interactions with custom C# scripts.",
              "Improved usability through iterative testing and design refinement.",
              "Packaged and deployed final VR applications onto PICO Neo3.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}