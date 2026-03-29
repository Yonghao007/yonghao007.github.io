import PageShell from "../components/pageshell";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Research-minded builder"
      intro="I enjoy building practical technical systems with a strong interest in AI, intelligent software, and modern web applications."
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="max-w-4xl text-base leading-8 text-slate-300">
          My interests span applied machine learning, intelligent agents,
          full-stack web development, data-oriented applications, and academic
          software systems. I especially enjoy projects that combine theoretical
          thinking with implementation and product-minded design.
        </p>
      </div>
    </PageShell>
  );
}