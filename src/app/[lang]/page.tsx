import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureCircleRow } from "@/components/home/FeatureCircleRow";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { NewsInsights } from "@/components/home/NewsInsights";
import { ServiceCardsGrid } from "@/components/home/ServiceCardsGrid";
import { ServicesSitemapHero } from "@/components/home/ServicesSitemapHero";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      <HeroCarousel dictionary={dictionary} />

      {dictionary.home.features.map((feature, index) => (
        <FeatureCircleRow
          key={feature.title}
          feature={feature}
          reverse={index % 2 === 1}
        />
      ))}

      <ServicesSitemapHero lang={lang} dictionary={dictionary} />
      <ServiceCardsGrid lang={lang} dictionary={dictionary} />
      <NewsInsights dictionary={dictionary} />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        {/* Ambient grid */}
        <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-25" />
        {/* Radial accent glow */}
        <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-blue-400/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 left-8 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />
        {/* Top gradient border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <Reveal y={20}>
          <div className="tp-container relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="mb-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
              <h2 className="text-2xl font-semibold uppercase tracking-[0.06em] sm:text-3xl">
                {dictionary.home.ctaBand.title}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${lang}/mission`} className="tp-outline-button">
                {dictionary.home.ctaBand.missionCta}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-blue-900 shadow-[0_4px_14px_rgba(255,255,255,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-[0_12px_24px_rgba(255,255,255,0.25)]"
              >
                {dictionary.home.ctaBand.contactCta}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
