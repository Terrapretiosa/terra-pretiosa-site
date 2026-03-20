import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface ArticlePageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { lang, slug } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const article = dictionary.news.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Hero with image */}
      <div className="relative overflow-hidden bg-neutral-950 py-20 text-white sm:py-28">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="tp-container relative z-10 max-w-3xl">
          <Reveal y={18}>
            <Link
              href={`/${lang}/news`}
              className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300 transition hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 shrink-0 rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              {dictionary.news.allNewsLabel}
            </Link>
            <span className="mb-3 inline-block rounded-full bg-blue-900/70 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {article.tag}
            </span>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {article.title}
            </h1>
            <time className="mt-4 block text-sm text-white/60">
              {new Date(article.date).toLocaleDateString(
                lang === "fr" ? "fr-FR" : "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </time>
          </Reveal>
        </div>
      </div>

      {/* Article body */}
      <section className="bg-white py-16">
        <div className="tp-container max-w-3xl">
          <Reveal y={16}>
            <div className="space-y-6">
              {article.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal y={12} delayMs={200}>
            <div className="mt-12 border-t border-blue-100 pt-8">
              <Link
                href={`/${lang}/news`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-blue-800 transition duration-300 hover:gap-3 hover:text-blue-600"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                {dictionary.news.allNewsLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
