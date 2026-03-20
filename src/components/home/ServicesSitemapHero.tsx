import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { homeMedia } from "@/content/media";
import type { Dictionary, Lang } from "@/content/types";

interface ServicesSitemapHeroProps {
  lang: Lang;
  dictionary: Dictionary;
}

export function ServicesSitemapHero({ lang, dictionary }: ServicesSitemapHeroProps) {
  const exploreLabel = dictionary.services.exploreLabel;
  const allServicesLabel = dictionary.services.allServicesLabel;

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 text-white">
      {/* Background image */}
      <Image
        src={homeMedia.servicesSitemapBackground}
        alt={dictionary.home.servicesSitemapTitle}
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/55 via-neutral-950/80 to-neutral-950" />
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/45 to-transparent" />
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl [animation:tpFloat_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-60 w-60 rounded-full bg-blue-700/12 blur-3xl [animation:tpFloat_9s_ease-in-out_infinite_0.4s]" />
      {/* Subtle grid */}
      <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="tp-container relative z-10">
        {/* Section heading */}
        <Reveal y={24}>
          <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
          <p className="tp-eyebrow mb-3 text-blue-400">
            {dictionary.home.servicesSitemapTitle}
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">
            {dictionary.home.servicesSitemapSubtitle}
          </h2>
        </Reveal>

        {/* Category cards */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {dictionary.services.categories.map((category, index) => (
            <Reveal key={category.slug} y={22} delayMs={index * 70}>
              <Link
                href={`/${lang}/services/${category.slug}`}
                className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-blue-400/55 hover:bg-white/8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_0_1px_rgba(68,200,203,0.30)]"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover opacity-20 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-30 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/35 via-neutral-950/68 to-neutral-950/88" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(156,234,234,0.14),transparent_36%)] opacity-80" />

                {/* Large background number */}
                <span className="relative z-10 select-none text-5xl font-bold leading-none text-white/25 transition duration-500 group-hover:text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Category title */}
                <h3 className="relative z-10 mt-4 text-sm font-semibold leading-snug text-white/90 transition duration-300 group-hover:text-white sm:text-base">
                  {category.title}
                </h3>

                {/* Service count */}
                <p className="relative z-10 mt-1.5 text-xs text-white/60 transition duration-300 group-hover:text-white/80">
                  {category.services.length} services
                </p>

                {/* Explore link */}
                <div className="relative z-10 mt-auto flex items-center gap-1.5 pt-5 text-xs font-semibold uppercase tracking-wide text-blue-300 transition duration-300 group-hover:gap-2.5 group-hover:text-blue-200">
                  {exploreLabel}
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
              </Link>
            </Reveal>
          ))}
        </div>

        {/* All services CTA */}
        <Reveal y={16} delayMs={420}>
          <div className="mt-8 flex justify-center">
            <Link href={`/${lang}/services`} className="tp-outline-button">
              {allServicesLabel}
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
