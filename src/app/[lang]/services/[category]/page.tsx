import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollSpotlightHero } from "@/components/services/ScrollSpotlightHero";
import { serviceFaqsBySlugEn, serviceFaqsBySlugFr } from "@/content/serviceFaqs";
import { getCategoryBySlug, getDictionary, isSupportedLang } from "@/content";

interface ServiceCategoryPageProps {
  params: Promise<{ lang: string; category: string }>;
}

export default async function ServiceCategoryPage({
  params,
}: ServiceCategoryPageProps) {
  const { lang, category } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const categoryData = getCategoryBySlug(dictionary, category);

  if (!categoryData) {
    notFound();
  }

  const spotlightItems = categoryData.services.slice(0, 3).map((service) => ({
    image: service.image,
    label: service.title,
  }));
  const heroImages = [
    categoryData.services[0]?.image ?? categoryData.image,
    categoryData.services[1]?.image ?? categoryData.image,
    categoryData.services[2]?.image ?? categoryData.image,
  ];
  const serviceFaqMap = lang === "fr" ? serviceFaqsBySlugFr : serviceFaqsBySlugEn;
  const sectionFaqItems = categoryData.services.flatMap((service) =>
    (serviceFaqMap[service.slug] ?? []).map((faq) => ({
      ...faq,
      key: `${service.slug}-${faq.question}`,
      serviceTitle: service.title,
    })),
  );
  const faqItems =
    sectionFaqItems.length > 0
      ? sectionFaqItems
      : (categoryData.faq ?? []).map((faq) => ({
          ...faq,
          key: faq.question,
          serviceTitle: null,
        }));

  return (
    <>
      <section className="bg-neutral-100 py-10 sm:py-14 lg:py-16">
        <div className="tp-container grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal x={-24} y={20}>
            <div>
              <p className="tp-heading text-xs text-blue-900">{dictionary.nav.services}</p>
              <h1 className="mt-3 text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-5xl">
                {categoryData.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base text-slate-700">{categoryData.summary}</p>
            </div>
          </Reveal>
          <Reveal x={24} y={20} delayMs={90}>
            <div className="tp-card-lift relative overflow-hidden rounded-sm border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70 p-2">
              <div className="grid min-h-[170px] grid-cols-2 gap-2 sm:min-h-[240px]">
                <div className="relative row-span-2 overflow-hidden rounded-sm">
                  <Image
                    src={heroImages[0]}
                    alt={categoryData.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={heroImages[1]}
                    alt={categoryData.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={heroImages[2]}
                    alt={categoryData.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ScrollSpotlightHero items={spotlightItems} />

      <section className="py-14">
        <div className="tp-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryData.services.map((service, index) => (
              <Reveal key={service.slug} y={20} delayMs={index * 70}>
                <article className="tp-card-lift rounded-sm border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70 p-5">
                  <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ring-blue-900/10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="96px"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-blue-900">{service.title}</h2>
                  <p className="mt-2 text-sm text-slate-700">{service.excerpt}</p>
                  <Link
                    href={`/${lang}/services/${categoryData.slug}/${service.slug}`}
                    className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-blue-800 hover:text-blue-700"
                  >
                    {dictionary.common.learnMore}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {faqItems.length ? (
        <section className="bg-neutral-100 py-14">
          <Reveal y={16}>
            <div className="tp-container max-w-4xl">
              <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
                {dictionary.services.faqTitle}
              </h2>
              <div className="mt-6 space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.key}
                    className="tp-card-lift rounded-sm border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/70 p-4"
                  >
                    <summary className="cursor-pointer text-sm font-semibold text-blue-900">
                      {item.question}
                    </summary>
                    {item.serviceTitle ? (
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-blue-700">
                        {item.serviceTitle}
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="bg-blue-900 py-12 text-white">
        <Reveal y={18}>
          <div className="tp-container flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold uppercase tracking-[0.06em]">
                {dictionary.services.ctaBand.title}
              </h2>
              <p className="mt-2 text-white/80">{dictionary.services.ctaBand.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${lang}/contact`}
                className="tp-blue-button tp-card-lift bg-white text-blue-900 hover:bg-blue-100"
              >
                {dictionary.services.ctaBand.secondaryCta}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

