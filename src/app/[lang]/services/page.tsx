import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServicesSitemapHero } from "@/components/home/ServicesSitemapHero";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollSpotlightHero } from "@/components/services/ScrollSpotlightHero";
import { getDictionary, isSupportedLang } from "@/content";
import { homeMedia } from "@/content/media";

interface ServicesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const categories = dictionary.services.categories;
  const totalServices = categories.reduce(
    (sum, categoryItem) => sum + categoryItem.services.length,
    0,
  );
  const corridorCount = dictionary.company.corridorCountries.length;
  const featuredArticle = dictionary.news.articles[0];
  const spotlightItems = categories.slice(0, 3).map((categoryItem) => ({
    image: categoryItem.image,
    label: categoryItem.title,
  }));
  const heroImages = [
    categories[0]?.image ?? homeMedia.heroLaboratory,
    categories[1]?.image ?? homeMedia.heroDrilling,
    categories[2]?.image ?? homeMedia.featureSustainability,
  ];

  return (
    <>
      <section className="bg-neutral-100 py-10 sm:py-14 lg:py-16">
        <div className="tp-container grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal x={-24} y={20}>
            <div>
              <p className="tp-heading text-xs text-blue-900">{dictionary.nav.services}</p>
              <h1 className="mt-3 text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-5xl">
                {dictionary.services.landingTitle}
              </h1>
              <p className="mt-3 max-w-3xl text-base text-slate-700">
                {dictionary.services.landingIntro}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-blue-200/60 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-blue-900">{categories.length}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-500">
                    {dictionary.services.categoriesTitle}
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-200/60 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-blue-900">{totalServices}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-500">
                    {dictionary.nav.services}
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-200/60 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-blue-900">{corridorCount}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-500">
                    {dictionary.company.corridorTitle}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal x={24} y={20} delayMs={80}>
            <div className="tp-card-lift relative overflow-hidden rounded-sm border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70 p-2">
              <div className="grid min-h-[170px] grid-cols-2 gap-2 sm:min-h-[240px]">
                <div className="relative row-span-2 overflow-hidden rounded-sm">
                  <Image
                    src={heroImages[0]}
                    alt={dictionary.services.landingTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={heroImages[1]}
                    alt={dictionary.services.landingTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={heroImages[2]}
                    alt={dictionary.services.landingTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              </div>
              {featuredArticle ? (
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/35 bg-neutral-950/75 p-4 text-white backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    {dictionary.services.featuredTitle}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug">
                    {featuredArticle.title}
                  </p>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <ScrollSpotlightHero items={spotlightItems} />

      <section className="py-14">
        <div className="tp-container">
          <Reveal y={18}>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
                {dictionary.services.categoriesTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {dictionary.services.featuredText}
              </p>
            </div>
          </Reveal>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal key={category.slug} y={20} delayMs={index * 70}>
                <article className="tp-card-lift overflow-hidden rounded-2xl border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70">
                  <div className="relative h-52">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/78 via-neutral-950/20 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-blue-900/80 text-xs font-semibold text-white backdrop-blur-sm">
                      {category.icon}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">
                        {category.services.length} {dictionary.nav.services.toLowerCase()}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-slate-700">
                      {category.summary}
                    </p>
                    <div className="mt-4 space-y-2">
                      {category.services.slice(0, 3).map((service) => (
                        <div
                          key={`${category.slug}-${service.slug}`}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          <span>{service.title}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/${lang}/services/${category.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-blue-800 transition duration-300 hover:gap-3 hover:text-blue-700"
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

      <ServicesSitemapHero lang={lang} dictionary={dictionary} />

      {featuredArticle ? (
        <section className="py-14">
          <div className="tp-container grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal x={-20} y={18}>
              <Link
                href={`/${lang}/news/${featuredArticle.slug}`}
                className="tp-card-lift group relative block min-h-[320px] overflow-hidden rounded-2xl border border-blue-200/60"
              >
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">
                    {featuredArticle.tag}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-snug">
                    {featuredArticle.title}
                  </h3>
                </div>
              </Link>
            </Reveal>

            <Reveal x={20} y={18} delayMs={90}>
              <div className="tp-soft-panel rounded-2xl border border-neutral-200 bg-neutral-100 p-8">
                <p className="tp-heading text-xs text-blue-900">
                  {dictionary.services.featuredTitle}
                </p>
                <p className="mt-3 max-w-3xl text-slate-700">
                  {dictionary.services.featuredText}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {categories.slice(0, 4).map((category) => (
                    <div
                      key={`focus-${category.slug}`}
                      className="rounded-2xl border border-blue-200/60 bg-white/80 p-4"
                    >
                      <p className="text-sm font-semibold text-blue-900">{category.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {category.services[0]?.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/${lang}/news/${featuredArticle.slug}`} className="tp-blue-button">
                    {dictionary.news.readArticle}
                  </Link>
                  <Link href={`/${lang}/news`} className="tp-outline-button !border-blue-900/20 !text-blue-900 hover:!border-blue-900/40 hover:!bg-blue-50">
                    {dictionary.news.allNewsLabel}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}
