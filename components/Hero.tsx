import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-20 pt-20 text-center md:pt-28">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-2xl rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-500/20" />

      {/* badge */}
      <Link
        href="#"
        className="flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-medium text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-500/20"
      >
        <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] text-white">New</span>
        Explore our latest features
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>

      {/* heading */}
      <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl md:leading-[1.1]">
        Build faster with{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
          beautiful UI
        </span>{" "}
        components
      </h1>

      {/* subtext */}
      <p className="mt-5 max-w-xl text-sm text-gray-600 dark:text-gray-400 md:text-base">
        Ready-to-use, fully responsive sections that save you hours of work.
        Copy, paste, and ship your next project in record time.
      </p>

      {/* buttons */}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="#"
          className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Get started
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch demo
        </Link>
      </div>

      {/* social proof */}
      <div className="mt-10 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex -space-x-2">
          {["bg-indigo-400", "bg-violet-400", "bg-sky-400", "bg-pink-400"].map((c) => (
            <span
              key={c}
              className={`size-8 rounded-full border-2 border-gray-50 dark:border-gray-950 ${c}`}
            />
          ))}
        </div>
        <p>Trusted by 10,000+ developers</p>
      </div>
    </section>
  );
}