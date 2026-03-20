import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary, Lang } from "@/content/types";

interface NewsHighlightsProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function NewsHighlights({ lang, dictionary }: NewsHighlightsProps) {
  const articles = dictionary.news.articles.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 py-20 text-white">
      <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-15" />
      <div className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-60 w-60 rounded-full bg-blue-700/8 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="tp-container relative z-10">
        <Reveal y={20}>
          <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
          <p className="tp-eyebrow mb-3 text-blue-400">
            {dictionary.news.latestLabel}
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">
            {dictionary.news.pageTitle}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.slug} y={22} delayMs={index * 90}>
              <Link
                href={`/${lang}/news/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/8 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-blue-900/80 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                    {article.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <time className="text-xs text-white/50">
                    {new Date(article.date).toLocaleDateString(
                      lang === "fr" ? "fr-FR" : "en-US",
                      { year: "numeric", month: "short", day: "numeric" },
                    )}
                  </time>
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-white/90 transition duration-300 group-hover:text-white">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-white/55">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300 transition duration-300 group-hover:gap-2.5 group-hover:text-blue-200">
                    {dictionary.news.readArticle}
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
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal y={14} delayMs={350}>
          <div className="mt-8 flex justify-center">
            <Link href={`/${lang}/news`} className="tp-outline-button">
              {dictionary.news.allNewsLabel}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
