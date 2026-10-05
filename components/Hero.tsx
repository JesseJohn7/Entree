import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-24 pt-20 text-center md:pt-28">
      {/* background: dot grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-[radial-gradient(#c7d2fe_1.2px,transparent_1.2px)] dark:opacity-40 dark:bg-[radial-gradient(#4338ca_1.2px,transparent_1.2px)]"
      />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-full max-w-2xl -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200 via-violet-200 to-sky-200 opacity-70 blur-3xl dark:from-indigo-600/30 dark:via-violet-600/20 dark:to-sky-600/20 dark:opacity-100" />

      {/* badge */}
      <Link
        href="#"
        className="flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm transition hover:border-indigo-200 hover:shadow dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 dark:shadow-none dark:hover:bg-indigo-500/20"
      >
        <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] text-white">New</span>
        Explore our latest features
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>

      {/* heading */}
      <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl md:leading-[1.1]">
        Build faster with{" "}
        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400">
          beautiful UI
        </span>{" "}
        components
      </h1>

      {/* subtext */}
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
        Ready-to-use, fully responsive sections that save you hours of work.
        Copy, paste, and ship your next project in record time.
      </p>

      {/* buttons */}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="#"
          className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-700 hover:shadow-indigo-500/40 dark:shadow-indigo-900/40"
        >
          Get started
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-100 dark:shadow-none dark:hover:bg-slate-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-600 dark:text-indigo-400">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch demo
        </Link>
      </div>

      {/* social proof */}
      <div className="mt-10 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex -space-x-2">
          {["bg-indigo-400", "bg-violet-400", "bg-sky-400", "bg-pink-400"].map((c) => (
            <span
              key={c}
              className={`size-8 rounded-full border-2 border-white dark:border-slate-950 ${c}`}
            />
          ))}
        </div>
        <p>
          Trusted by <span className="font-semibold text-slate-900 dark:text-white">10,000+</span> developers
        </p>
      </div>
    </section>
  );
}