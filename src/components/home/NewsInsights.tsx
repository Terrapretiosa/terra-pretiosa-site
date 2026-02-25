import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary } from "@/content/types";

interface NewsInsightsProps {
  dictionary: Dictionary;
}

export function NewsInsights({ dictionary }: NewsInsightsProps) {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="tp-container">
        <Reveal y={18}>
          <p className="tp-eyebrow mb-2">
            <span className="inline-block h-px w-5 bg-blue-500 align-middle" />
            {dictionary.home.insights.title}
          </p>
          <h2 className="text-2xl font-semibold uppercase tracking-[0.06em] text-blue-900">
            {dictionary.home.insights.title}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal y={26}>
            <article className="tp-card-glow group rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-8 shadow-sm">
              {/* Left accent bar */}
              <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
              <h3 className="text-2xl font-semibold leading-snug text-blue-900">
                {dictionary.home.insights.featuredTitle}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                {dictionary.home.insights.featuredExcerpt}
              </p>
              <Link
                href={dictionary.home.insights.featuredHref}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-blue-800 transition duration-300 hover:gap-3 hover:text-blue-600"
              >
                {dictionary.common.readMore}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </article>
          </Reveal>

          <div className="space-y-4">
            {dictionary.home.insights.items.map((item, index) => (
              <Reveal key={item.title} x={18} y={16} delayMs={index * 90}>
                <article className="tp-card-glow group rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-sm">
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
                  <h4 className="text-lg font-semibold leading-snug text-blue-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 transition duration-300 hover:gap-2.5 hover:text-blue-600"
                  >
                    {dictionary.common.readMore}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-3 w-3 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

