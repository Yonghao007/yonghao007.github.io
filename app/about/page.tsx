import PageShell from "../components/pageshell";

const interests = [
  "Artificial Intelligence",
  "Software Engineering",
  "Full-Stack Applications",
  "Natural Language Processing",
  "Interactive and Immersive Systems",
  "Human-Centered Computing",
];

const techStack = [
  "Python",
  "C/C++",
  "Java",
  "C#",
  "JavaScript",
  "React",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Unity",
  "AWS",
  "Azure",
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About Me"
      intro="Computer Science graduate student at Brown University, currently focused on AI and software, with a broad undergraduate foundation across several areas of computing."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-sky-200/70 bg-white/75 p-8 shadow-lg shadow-sky-100">
          <h2 className="text-2xl font-semibold text-slate-900">Background</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            I am currently pursuing a Master of Science in Computer Science at Brown
            University, where my recent work has been primarily focused on artificial
            intelligence and software. Before that, my undergraduate study gave me
            exposure to a broader range of areas, including software, computer networks,
            privacy and security, and embedded systems.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            That mix of breadth and focus has shaped how I think about computing. I am
            especially interested in building systems that are technically strong,
            practical to use, and informed by both solid engineering and intelligent
            behavior.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100">
            <h3 className="text-lg font-semibold text-slate-900">Interests</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {interests.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-lg shadow-sky-100">
            <h3 className="text-lg font-semibold text-slate-900">Tech Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((item) => (
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