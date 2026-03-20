import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface NewsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      {/* Dark branded hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white sm:py-20">
        <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-20 top-6 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl [animation:tpFloat_9s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-44 w-44 rounded-full bg-blue-300/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="tp-container relative z-10">
          <Reveal y={18}>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
            <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] sm:text-5xl">
              {dictionary.news.pageTitle}
            </h1>
            <p className="mt-4 max-w-3xl text-white/70">
              {dictionary.news.intro}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Articles grid */}
      <section className="bg-neutral-50 py-16">
        <div className="tp-container">
          <div className="grid gap-8 sm:grid-cols-2">
            {dictionary.news.articles.map((article, index) => (
              <Reveal key={article.slug} y={22} delayMs={index * 80}>
                <article className="tp-card-glow group flex flex-col overflow-hidden rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 shadow-sm">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-blue-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {article.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <time className="text-xs font-medium text-blue-600/70">
                      {new Date(article.date).toLocaleDateString(
                        lang === "fr" ? "fr-FR" : "en-US",
                        { year: "numeric", month: "long", day: "numeric" },
                      )}
                    </time>
                    <h2 className="mt-2 text-lg font-semibold leading-snug text-blue-900">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/${lang}/news/${article.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-blue-800 transition duration-300 hover:gap-3 hover:text-blue-600"
                    >
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
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
