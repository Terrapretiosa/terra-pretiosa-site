import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { FeatureBlock } from "@/content/types";
import { cn } from "@/lib/cn";

interface FeatureCircleRowProps {
  feature: FeatureBlock;
  reverse?: boolean;
  tinted?: boolean;
}

export function FeatureCircleRow({
  feature,
  reverse = false,
  tinted = false,
}: FeatureCircleRowProps) {
  const imageX = reverse ? 36 : -36;
  const textX = reverse ? -24 : 24;

  return (
    <section
      className={cn(
        "py-12 sm:py-16",
        tinted && "bg-gradient-to-br from-blue-50/55 to-teal-50/30",
      )}
    >
      <div
        className={cn(
          "tp-container grid items-center gap-8 lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <Reveal x={imageX} className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          {/* Ambient orbs */}
          <div className="absolute -left-7 top-6 h-24 w-24 rounded-full bg-blue-500/12 blur-xl [animation:tpFloat_7s_ease-in-out_infinite]" />
          <div className="absolute -right-5 bottom-4 h-20 w-20 rounded-full bg-blue-300/18 blur-lg [animation:tpFloat_6s_ease-in-out_infinite_0.2s]" />
          {/* Outer decorative ring */}
          <div className="absolute inset-0 rounded-full ring-2 ring-blue-400/20 ring-offset-4 ring-offset-transparent" />
          {/* Inner image */}
          <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_0_0_6px_rgba(26,77,95,0.08),0_20px_40px_rgba(26,77,95,0.18)]">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 640px) 288px, 320px"
            />
          </div>
        </Reveal>

        <Reveal x={textX} delayMs={120} className="max-w-xl">
          <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700" />
          <h2 className="text-3xl font-semibold uppercase tracking-[0.06em] text-blue-900 sm:text-4xl">
            {feature.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{feature.text}</p>
          <Link href={feature.ctaHref} className="tp-blue-button mt-7 inline-flex items-center gap-2">
            {feature.ctaLabel}
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
        </Reveal>
      </div>
    </section>
  );
}
