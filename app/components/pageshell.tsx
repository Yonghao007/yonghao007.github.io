import type { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[10%] top-[16rem] h-[22rem] w-[22rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute left-[8%] top-[30rem] h-[18rem] w-[18rem] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {intro}
          </p>
        ) : null}

        <div className="mt-10">{children}</div>
      </section>

      <Footer />
    </main>
  );
}