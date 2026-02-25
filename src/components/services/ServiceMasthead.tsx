import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary, Lang } from "@/content/types";

interface ServiceMastheadProps {
  lang: Lang;
  dictionary: Dictionary;
  categoryTitle: string;
  serviceTitle: string;
}

export function ServiceMasthead({
  lang,
  dictionary,
  categoryTitle,
  serviceTitle,
}: ServiceMastheadProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white sm:py-20">
      <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -right-16 top-4 h-64 w-64 rounded-full bg-blue-400/12 blur-3xl [animation:tpFloat_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-blue-300/8 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="tp-container relative z-10">
        <Reveal x={-20} y={22}>
          {/* Breadcrumb */}
          <p className="text-xs uppercase tracking-[0.18em] text-blue-300/65">
            <Link href={`/${lang}`} className="transition hover:text-white">
              {dictionary.common.breadcrumbs.home}
            </Link>
            {" / "}
            <Link href={`/${lang}/services`} className="transition hover:text-white">
              {dictionary.common.breadcrumbs.services}
            </Link>
            {" / "}
            <span className="text-blue-200/90">{categoryTitle}</span>
          </p>

          <div className="mb-3 mt-5 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
          <h1 className="max-w-3xl text-4xl font-semibold uppercase leading-tight tracking-[0.06em] sm:text-5xl">
            {serviceTitle}
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${lang}/contact`} className="tp-blue-button">
              {dictionary.common.partnerCta}
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
            <Link href={`/${lang}/contact`} className="tp-outline-button">
              {dictionary.common.contactUs}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
