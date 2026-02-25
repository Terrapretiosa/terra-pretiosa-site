"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { HighlightItem, Lang } from "@/content/types";
import { cn } from "@/lib/cn";

interface AnimatedHighlightsProps {
  lang: Lang;
  items: HighlightItem[];
}

function HighlightCard({
  item,
  index,
}: {
  item: HighlightItem;
  index: number;
}) {
  const isRight = index % 2 !== 0;

  return (
    <Reveal x={isRight ? 34 : -34} y={30} delayMs={index * 90}>
      <article
        className={cn(
          "tp-card-glow grid gap-7 rounded-2xl border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/60 p-6 shadow-sm sm:p-8 lg:grid-cols-[250px_1fr] lg:items-center",
          isRight ? "lg:ml-12" : "lg:mr-12",
        )}
      >
        {/* Circular image */}
        <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48 lg:h-52 lg:w-52">
          <span className="absolute -inset-3 rounded-full border border-blue-900/8" />
          <span className="absolute -left-3 top-3 h-12 w-12 rounded-full bg-blue-500/12 blur-md [animation:tpFloat_6s_ease-in-out_infinite]" />
          <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_0_0_5px_rgba(26,77,95,0.07),0_16px_36px_rgba(26,77,95,0.16)] transition duration-700 hover:scale-105">
            <Image
              src={item.image}
              alt={item.title}
              width={208}
              height={208}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="mb-3 h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
          <h3 className="text-2xl font-semibold text-blue-900">{item.title}</h3>
          <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
          <Link
            href={item.ctaHref}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-blue-800 transition duration-300 hover:gap-2.5 hover:text-blue-600"
          >
            {item.ctaLabel}
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
  );
}

export function AnimatedHighlights({ lang, items }: AnimatedHighlightsProps) {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="tp-container">
        <div className="space-y-6">
          {items.slice(0, 6).map((item, index) => (
            <HighlightCard key={`${lang}-${item.title}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
