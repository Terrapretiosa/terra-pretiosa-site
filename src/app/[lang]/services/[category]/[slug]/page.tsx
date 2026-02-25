import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedHighlights } from "@/components/services/AnimatedHighlights";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ScrollSpotlightHero } from "@/components/services/ScrollSpotlightHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceMasthead } from "@/components/services/ServiceMasthead";
import {
  getCategoryBySlug,
  getDictionary,
  getServiceBySlug,
  isSupportedLang,
} from "@/content";
import { serviceFaqsBySlugEn, serviceFaqsBySlugFr } from "@/content/serviceFaqs";

interface ServiceDetailPageProps {
  params: Promise<{ lang: string; category: string; slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { lang, category, slug } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const categoryData = getCategoryBySlug(dictionary, category);

  if (!categoryData) {
    notFound();
  }

  const service = getServiceBySlug(categoryData, slug);

  if (!service) {
    notFound();
  }

  const serviceFaqMap = lang === "fr" ? serviceFaqsBySlugFr : serviceFaqsBySlugEn;
  const serviceFaq = serviceFaqMap[service.slug] ?? [];

  const spotlightItems = [
    { image: service.image, label: service.title },
    ...service.highlights.slice(0, 2).map((highlight) => ({
      image: highlight.image,
      label: highlight.title,
    })),
  ];

  return (
    <>
      <ServiceMasthead
        lang={lang}
        dictionary={dictionary}
        categoryTitle={categoryData.title}
        serviceTitle={service.title}
      />
      <ScrollSpotlightHero items={spotlightItems} />
      <ServiceIntro service={service} />
      <AnimatedHighlights lang={lang} items={service.highlights} />
      <ServiceFaq title={dictionary.services.faqTitle} items={serviceFaq} />
      <RelatedServices
        lang={lang}
        dictionary={dictionary}
        category={categoryData}
        currentServiceSlug={service.slug}
      />
      <section className="bg-blue-900 py-12 text-white">
        <Reveal y={18}>
          <div className="tp-container flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.06em]">
              {dictionary.services.ctaBand.title}
            </h2>
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
