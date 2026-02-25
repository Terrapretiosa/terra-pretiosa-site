"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/types";
import { cn } from "@/lib/cn";

interface HeroCarouselProps {
  dictionary: Dictionary;
}

export function HeroCarousel({ dictionary }: HeroCarouselProps) {
  const slides = dictionary.home.hero;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, slides.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative h-[78vh] min-h-[560px] overflow-hidden bg-neutral-900 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.title}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            slideIndex === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={slideIndex === 0}
            className={cn(
              "object-cover transition-transform duration-[6500ms] ease-out",
              slideIndex === index ? "scale-110" : "scale-100",
            )}
            sizes="100vw"
          />
          <div className="tp-ambient-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(102,213,213,0.32),transparent_38%)]" />
          <div className="absolute -left-16 top-24 h-44 w-44 rounded-full bg-blue-300/20 blur-3xl [animation:tpFloat_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-16 right-8 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl [animation:tpFloat_9s_ease-in-out_infinite_0.4s]" />
          <div className="tp-container relative flex h-full items-center">
            <div
              className={cn(
                "max-w-3xl transition-all duration-700",
                slideIndex === index
                  ? "translate-y-0 opacity-100 delay-100"
                  : "translate-y-8 opacity-0",
              )}
            >
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-blue-300/60 [animation:tpPulse_1.8s_linear_infinite]" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-blue-200" />
                </span>
                <p className="tp-heading text-xs text-blue-100">{dictionary.siteName}</p>
              </div>
              <h1 className="text-4xl font-semibold uppercase leading-tight tracking-[0.08em] sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
                {slide.subtitle}
              </p>
              <Link href={slide.ctaHref} className="tp-blue-button mt-8">
                {slide.ctaLabel}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
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
          </div>
        </div>
      ))}

      <div className="tp-container absolute bottom-7 left-1/2 flex w-full -translate-x-1/2 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-24 overflow-hidden rounded-full bg-white/20 sm:w-40">
            <span
              key={`progress-${index}`}
              className="block h-full origin-left rounded-full bg-gradient-to-r from-blue-300 to-white [animation:tpProgress_6.5s_linear_forwards]"
            />
          </div>
          <div className="flex items-center gap-2">
            {slides.map((slide, dotIndex) => (
              <button
                key={`${slide.title}-${dotIndex}`}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  dotIndex === index
                    ? "h-2 w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    : "h-2 w-2 bg-white/40 hover:bg-white/70",
                )}
                aria-label={`Slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition hover:border-white/80 hover:bg-white/20"
            aria-label="Previous slide"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition hover:border-white/80 hover:bg-white/20"
            aria-label="Next slide"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
