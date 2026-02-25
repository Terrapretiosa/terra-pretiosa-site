import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary, Lang } from "@/content/types";

interface ServiceCardsGridProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function ServiceCardsGrid({ lang, dictionary }: ServiceCardsGridProps) {
  const cards = dictionary.services.categories
    .flatMap((category) =>
      category.services.slice(0, 2).map((service) => ({
        ...service,
        categorySlug: category.slug,
      })),
    )
    .slice(0, 6);

  return (
    <section className="py-20">
      <div className="tp-container">
        <Reveal y={24}>
          <p className="tp-eyebrow mb-3">
            <span className="inline-block h-px w-5 bg-blue-500 align-middle" />
            {dictionary.home.serviceGridTitle}
          </p>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
            {dictionary.home.serviceGridTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            {dictionary.home.serviceGridIntro}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.slug} y={28} delayMs={index * 90}>
              <article className="tp-card-glow group relative h-80 overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-107"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                {/* Cyan accent line at top */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold leading-snug">{card.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/75">{card.excerpt}</p>
                  <Link
                    href={`/${lang}/services/${card.categorySlug}/${card.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300 transition duration-300 hover:gap-2.5 hover:text-white"
                  >
                    {dictionary.common.learnMore}
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
  );
}
