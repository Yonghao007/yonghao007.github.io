"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-sky-100/60 bg-white/5 shadow-sm"
          : "border-white/10 bg-slate-950/80"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className={`text-sm font-semibold uppercase tracking-[0.24em] transition-colors duration-300 ${
              scrolled ? "text-sky-700" : "text-cyan-300"
            }`}
          >
            Yonghao Li
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                  scrolled
                    ? "text-slate-700 hover:bg-white/50 hover:text-sky-700"
                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`relative z-[110] inline-flex items-center justify-center rounded-full border px-3 py-2 transition md:hidden ${
              scrolled
                ? "border-sky-200 bg-white/50 text-sky-700"
                : "border-white/10 bg-white/5 text-slate-200"
            }`}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`relative z-[105] overflow-hidden border-t transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-96 border-sky-100/20 py-4 opacity-100"
              : "max-h-0 border-transparent py-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm transition duration-300 ${
                  scrolled
                    ? "text-slate-700 hover:bg-white/50 hover:text-sky-700"
                    : "text-slate-200 hover:bg-white/5 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}