import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, isSupportedLang } from "@/content";

interface CompanyPageProps {
  params: Promise<{ lang: string }>;
}

function AccentBullet() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default async function CompanyPage({ params }: CompanyPageProps) {
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
        <div className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl [animation:tpFloat_9s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute bottom-0 left-12 h-44 w-44 rounded-full bg-blue-300/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="tp-container relative z-10">
          <Reveal y={18}>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
            <h1 className="text-4xl font-semibold uppercase tracking-[0.07em] sm:text-5xl">
              {dictionary.company.pageTitle}
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="bg-white">
        {/* About */}
        <section id="about" className="py-16 sm:py-20">
          <div className="tp-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal x={-24} y={20}>
              <div>
                <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
                <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
                  {dictionary.company.introTitle}
                </h2>
                <div className="mt-8 space-y-6">
                  {dictionary.company.introBlocks.map((block) => (
                    <article key={block.title}>
                      <h3 className="text-base font-semibold text-blue-900">{block.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{block.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal x={24} y={20} delayMs={90}>
              <div className="tp-card-glow relative min-h-[340px] overflow-hidden rounded-2xl border border-blue-200/50 bg-blue-50/35 shadow-sm">
                <Image
                  src="/placeholders/company-about.svg"
                  alt={dictionary.company.introTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Corridor & HQ */}
        <section id="corridor" className="bg-neutral-50 py-14">
          <div className="tp-container grid gap-5 md:grid-cols-2">
            <Reveal x={-20} y={20}>
              <article className="tp-card-glow h-full rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-7 shadow-sm">
                <div className="mb-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
                <h2 className="text-xl font-semibold uppercase tracking-[0.06em] text-blue-900">
                  {dictionary.company.corridorTitle}
                </h2>
                <ul className="mt-5 space-y-2">
                  {dictionary.company.corridorCountries.map((country) => (
                    <li key={country} className="flex items-center gap-2 text-slate-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {country}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal x={20} y={20} delayMs={90}>
              <article className="tp-card-glow h-full rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50/60 to-white p-7 shadow-sm">
                <div className="mb-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
                <h2 className="text-xl font-semibold uppercase tracking-[0.06em] text-blue-900">
                  {dictionary.company.hqTitle}
                </h2>
                <p className="mt-5 leading-relaxed text-slate-600">{dictionary.company.hqAddress}</p>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Megatrends */}
        <section id="megatrends" className="py-16 sm:py-20">
          <div className="tp-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal x={-20} y={18}>
              <div className="tp-card-glow relative min-h-[280px] overflow-hidden rounded-2xl border border-blue-200/50 bg-blue-50/35 shadow-sm">
                <Image
                  src="/placeholders/company-megatrends.svg"
                  alt={dictionary.company.megatrendsTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>

            <Reveal x={20} y={18} delayMs={90}>
              <article>
                <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
                <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
                  {dictionary.company.megatrendsTitle}
                </h2>
                <p className="mt-5 leading-relaxed text-slate-600">{dictionary.company.megatrendsText}</p>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Mining Development */}
        <section className="bg-neutral-50 py-14">
          <Reveal y={16}>
            <div className="tp-container">
              <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
              <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
                {dictionary.company.miningDevTitle}
              </h2>
              <p className="mt-5 max-w-5xl leading-relaxed text-slate-600">
                {dictionary.company.miningDevText}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Sustainable */}
        <section id="sustainable" className="py-16 sm:py-20">
          <div className="tp-container grid gap-10 lg:grid-cols-2">
            <Reveal x={-20} y={20}>
              <article>
                <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
                <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
                  {dictionary.company.sustainableTitle}
                </h2>
                <ul className="mt-6 space-y-3">
                  {dictionary.company.sustainableBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-slate-600">
                      <AccentBullet />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal x={20} y={20} delayMs={90}>
              <div className="tp-card-glow relative min-h-[280px] overflow-hidden rounded-2xl border border-blue-200/50 bg-blue-50/35 shadow-sm">
                <Image
                  src="/placeholders/company-sustainable.svg"
                  alt={dictionary.company.sustainableTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Ambitions */}
        <section id="ambitions" className="bg-neutral-50 py-14">
          <Reveal y={16}>
            <div className="tp-container">
              <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
              <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
                {dictionary.company.ambitionsTitle}
              </h2>
              <ul className="mt-7 grid gap-4 md:grid-cols-2">
                {dictionary.company.ambitionsBullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="tp-card-glow flex items-start gap-3 rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-sm"
                  >
                    <AccentBullet />
                    <span className="text-slate-600">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
