import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary, Lang, ServiceCategory, ServiceItem } from "@/content/types";

interface RelatedServicesProps {
  lang: Lang;
  dictionary: Dictionary;
  category: ServiceCategory;
  currentServiceSlug: string;
}

export function RelatedServices({
  lang,
  dictionary,
  category,
  currentServiceSlug,
}: RelatedServicesProps) {
  const related: ServiceItem[] = category.services
    .filter((service) => service.slug !== currentServiceSlug)
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="tp-container">
        <Reveal y={20}>
          <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900">
            {dictionary.services.relatedTitle}
          </h2>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {related.map((service, index) => (
            <Reveal key={service.slug} y={22} delayMs={index * 80}>
              <article className="tp-card-glow group overflow-hidden rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <div className="mb-3 h-0.5 w-7 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
                  <h3 className="text-lg font-semibold leading-snug text-blue-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.excerpt}</p>
                  <Link
                    href={`/${lang}/services/${category.slug}/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-blue-800 transition duration-300 hover:gap-2.5 hover:text-blue-600"
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
