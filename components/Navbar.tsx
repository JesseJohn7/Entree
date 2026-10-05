"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const links = [
  { label: "Products", href: "#" },
  { label: "Customer Stories", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Docs", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // avoids hydration mismatch: the icon is only rendered after mount
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full bg-white px-6 py-3 shadow dark:bg-gray-900 md:py-4">
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
          alt="Logo"
          className="dark:invert"
        />
      </Link>

      <nav
        className={`z-50 flex flex-col items-center justify-center gap-8 bg-white/50 text-sm font-normal text-gray-900 backdrop-blur transition-[width] dark:bg-gray-900/70 dark:text-gray-100 max-md:absolute max-md:left-0 max-md:top-0 max-md:h-full max-md:overflow-hidden md:flex-row ${
          menuOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={() => setMenuOpen(false)}
          className="text-gray-600 dark:text-gray-300 md:hidden"
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle dark mode"
          className="flex size-8 items-center justify-center rounded-md border border-slate-300 text-gray-800 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"
        >
          {mounted &&
            (isDark ? (
              // Sun (shown in dark mode → click to go light)
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Moon (shown in light mode → click to go dark)
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ))}
        </button>

        <Link
          href="#"
          className="hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 md:flex"
        >
          Sign up
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-gray-600 dark:text-gray-300 md:hidden"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}