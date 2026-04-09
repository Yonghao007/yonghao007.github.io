import PageShell from "../components/pageshell";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About Me"
      intro="A student and builder interested in AI, software systems, and practical engineering."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-sky-200/70 bg-white/75 p-8 shadow-lg shadow-sky-100">
          <h2 className="text-2xl font-semibold text-slate-900">Background</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            I enjoy building practical software and exploring how intelligent systems
            can support real-world applications. My background includes web development,
            NLP, AI-driven systems, VR application development, and full-stack projects.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            I am especially interested in projects that combine implementation,
            usability, and technical depth.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100">
            <h3 className="text-lg font-semibold text-slate-900">Interests</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>• Artificial Intelligence</li>
              <li>• Software Engineering</li>
              <li>• Web Development</li>
              <li>• Data-driven Systems</li>
              <li>• Human-centered Tools</li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100">
            <h3 className="text-lg font-semibold text-slate-900">Tech Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Python", "React", "Express", "MongoDB", "Unity", "C#", "Java", "AWS"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}