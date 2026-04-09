import type { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen text-slate-900">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-16 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
        <div className="absolute right-[-6rem] top-28 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      </div>

      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {intro}
          </p>
        ) : null}

        <div className="mt-10">{children}</div>
      </section>

      <Footer />
    </main>
  );
}