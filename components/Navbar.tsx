"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Products", href: "#" },
  { label: "Customer Stories", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Docs", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-slate-800 bg-gray-900 px-6 py-3 md:py-4">
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
          alt="Logo"
          className="invert"
        />
      </Link>

      <nav
        className={`z-50 flex flex-col items-center justify-center gap-8 bg-gray-900/90 text-sm font-normal text-gray-100 backdrop-blur transition-[width] max-md:absolute max-md:left-0 max-md:top-0 max-md:h-full max-md:overflow-hidden md:flex-row md:bg-transparent ${
          menuOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-400"
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 md:hidden"
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <div className="flex items-center space-x-4">
        <Link
          href="#"
          className="hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 md:flex"
        >
          Sign up
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-gray-300 md:hidden"
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