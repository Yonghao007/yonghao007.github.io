import PageShell from "../components/pageshell";

export default function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title="Work Experience"
      intro="At Handshake AI, I review model responses and work through errors. At Fuzhou Amigo Software, I built VR interactions, tested them on headsets, and prepared applications for delivery."
    >
      <div className="space-y-6">
        {/* Handshake AI */}
        <div className="rounded-[2rem] border border-sky-200/70 bg-white/75 p-8 shadow-lg shadow-sky-100">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-slate-900">
                AI Fellow
              </h2>
              <p className="mt-1 text-base font-medium text-slate-700">
                Handshake AI
              </p>
            </div>

            <div className="font-mono text-sm font-medium text-sky-700">
              Apr 2026 – Present · Remote
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Review responses from different AI models using the criteria defined for each task.",
              "Check text and image outputs for accuracy, relevance, and whether they follow the requested instructions.",
              "Identify errors and revise responses to address them while meeting the task requirements.",
              "Work with different rubrics and response formats, applying the appropriate quality standards to each evaluation.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4 text-base leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Fuzhou Amigo Software */}
        <div className="rounded-[2rem] border border-sky-200/70 bg-white/75 p-8 shadow-lg shadow-sky-100">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-slate-900">
                Software Developer Intern
              </h2>
              <p className="mt-1 text-base font-medium text-slate-700">
                Fuzhou Amigo Software Co., Ltd.
              </p>
            </div>

            <div className="font-mono text-sm font-medium text-sky-700">
              Jun - Aug 2024 · Fuzhou, China
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Built VR applications in Unity with C# and the PICO Unity Integration SDK for PICO Neo3 headsets.",
              "Wrote C# scripts for real-time interactions using head tracking and controller input.",
              "Tested applications on the headsets, debugged interaction issues, and refined behavior based on usability testing.",
              "Packaged, deployed, and validated the applications on PICO Neo3 devices for demonstration and delivery.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4 text-base leading-7 text-slate-700"
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