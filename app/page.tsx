export default function Home() {
  const projects = [
    {
      title: "AI Task Management System",
      desc: "An AI-driven task management platform with agent-based workflow support and document-aware assistance.",
    },
    {
      title: "Medical Report Website",
      desc: "A privacy-focused health record website/app concept for local storage, report upload, and AI-assisted analysis.",
    },
    {
      title: "Second-hand Car Price Prediction",
      desc: "A data project for predicting used car prices with visualization and machine learning methods.",
    },
  ];

  const experiences = [
    {
      role: "Software Engineering / Research Experience",
      org: "Your internship or lab",
      time: "2024 - 2025",
      desc: "Worked on engineering, research, and project implementation across AI, web, or systems-related tasks.",
    },
    {
      role: "Team Project Contributor",
      org: "Course / Research Project",
      time: "2023 - 2025",
      desc: "Contributed to research, documentation, implementation, testing, and analysis in team-based technical projects.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold">Yong Li</div>
          <div className="flex gap-6 text-sm text-neutral-600">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#education" className="hover:text-black">Education</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#experience" className="hover:text-black">Experience</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Applied Math + Computer Science
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
            Yong Li
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-neutral-700">
            I am a student interested in AI, software engineering, web development,
            and intelligent systems. I build projects across machine learning,
            full-stack applications, and technical research.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm">
              AI
            </span>
            <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm">
              Web Development
            </span>
            <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm">
              Data / ML
            </span>
            <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm">
              Systems
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="mb-4 text-lg font-semibold">Quick Info</h2>
          <div className="space-y-3 text-sm text-neutral-700">
            <p><span className="font-medium text-black">School:</span> Brown University</p>
            <p><span className="font-medium text-black">Major:</span> Applied Math + CS</p>
            <p><span className="font-medium text-black">Location:</span> United States</p>
            <p><span className="font-medium text-black">Focus:</span> AI, Web, Systems</p>
            <p><span className="font-medium text-black">Email:</span> your_email@example.com</p>
            <p><span className="font-medium text-black">GitHub:</span> github.com/yourname</p>
            <p><span className="font-medium text-black">LinkedIn:</span> linkedin.com/in/yourname</p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-4 text-2xl font-semibold">About</h2>
        <p className="max-w-3xl leading-8 text-neutral-700">
          I enjoy building practical software and exploring how AI can improve real-world systems.
          My interests include machine learning, intelligent agents, full-stack web development,
          data-driven applications, and human-centered technical tools.
        </p>
      </section>

      <section id="education" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Education</h2>
        <div className="grid gap-4">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <p className="text-sm text-neutral-500">Current</p>
            <h3 className="mt-1 text-xl font-semibold">Brown University</h3>
            <p className="mt-2 text-neutral-700">Applied Mathematics and Computer Science</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <p className="text-sm text-neutral-500">Previous / Additional</p>
            <h3 className="mt-1 text-xl font-semibold">Your previous academic background</h3>
            <p className="mt-2 text-neutral-700">Add degree, years, GPA, focus, or relevant coursework here.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-neutral-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
        <div className="space-y-4">
          {experiences.map((item) => (
            <div key={item.role} className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-neutral-700">{item.org}</p>
                </div>
                <p className="text-sm text-neutral-500">{item.time}</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
        <p className="text-neutral-700">
          Feel free to reach out for collaboration, projects, or opportunities.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a href="mailto:your_email@example.com" className="underline underline-offset-4">
            Email
          </a>
          <a href="https://github.com/yourname" className="underline underline-offset-4">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourname" className="underline underline-offset-4">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-500">
        © 2026 Yong Li. All rights reserved.
      </footer>
    </main>
  );
}