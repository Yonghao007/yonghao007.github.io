export default function Footer() {
  const links = [
    {
      label: "Email",
      href: "mailto:yonghaoli007@outlook.com",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/Yonghao007",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.66-.22.66-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0112 6.84c.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.55 1.41.2 2.46.1 2.72.64.73 1.03 1.65 1.03 2.78 0 3.96-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.67.49A10.24 10.24 0 0022 12.22C22 6.58 17.52 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yonghaoli007",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
        >
          <path d="M6.94 8.5H3.56V19h3.38V8.5zM5.25 3A1.97 1.97 0 003.28 5c0 1.09.88 1.97 1.97 1.97S7.22 6.1 7.22 5A1.97 1.97 0 005.25 3zm13.19 9.47c0-3.13-1.67-4.58-3.9-4.58-1.8 0-2.61.99-3.06 1.68V8.5H8.1c.04.71 0 10.5 0 10.5h3.38v-5.86c0-.31.02-.62.11-.84.24-.62.8-1.27 1.73-1.27 1.22 0 1.71.96 1.71 2.37V19H18.4l.04-6.53z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="mx-auto mt-20 max-w-6xl px-6 py-14 text-sm text-slate-500">
      <div className="border-t border-sky-100/80 pt-12">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <p className="font-serif text-3xl font-semibold tracking-tight text-sky-600">
              Connect
            </p>
            <h2 className="mt-2 font-serif text-2xl italic font-medium tracking-[0.08em] text-slate-700">
              Yonghao Li
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-sky-200/80 bg-transparent px-5 py-3 text-sm font-medium tracking-wide text-sky-700 transition hover:border-sky-400 hover:bg-white/60"
              >
                <span className="flex items-center gap-2">
                  {link.icon}
                  <span>{link.label}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center border-t border-sky-100/80 pt-6 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-4">
            <p className="font-medium text-slate-600">© 2026 Yonghao Li</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}