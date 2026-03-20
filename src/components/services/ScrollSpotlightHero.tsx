"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export interface SpotlightItem {
  image: string;
  label: string;
}

interface ScrollSpotlightHeroProps {
  items: SpotlightItem[];
  className?: string;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function ScrollSpotlightHero({ items, className }: ScrollSpotlightHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const displayItems = useMemo(() => {
    const cleaned = items
      .filter((item) => item.image && item.label)
      .slice(0, 6);

    const deduped: SpotlightItem[] = [];
    const seen = new Set<string>();
    cleaned.forEach((item) => {
      const key = `${item.image}-${item.label}`;
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push(item);
      }
    });

    if (deduped.length === 0) {
      return [];
    }

    const seed = [...deduped];
    while (deduped.length < 3) {
      deduped.push(seed[deduped.length % seed.length]);
    }

    return deduped.slice(0, 3);
  }, [items]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting);
      },
      { rootMargin: "320px 0px 320px 0px" },
    );

    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || displayItems.length === 0) {
      return;
    }

    if (!isNearViewport) {
      return;
    }

    let rafId = 0;

    const updateProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.9;
      const end = -rect.height * 0.2;
      const raw = (start - rect.top) / (start - end);
      const next = clamp(raw, 0, 1);

      if (Math.abs(next - progressRef.current) > 0.006) {
        progressRef.current = next;
        setProgress(next);
      }
    };

    const requestUpdate = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = 0;
      });
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [displayItems.length, isNearViewport, reduceMotion]);

  if (displayItems.length === 0) {
    return null;
  }

  const spotlightX = 18 + progress * 62;
  const spotlightY = 50 + Math.sin(progress * Math.PI) * 7;
  const spotlightRadius = 24 + progress * 10;
  const visualX = reduceMotion ? 48 : spotlightX;
  const visualY = reduceMotion ? 50 : spotlightY;
  const visualRadius = reduceMotion ? 32 : spotlightRadius;

  return (
    <section className={cn("py-4 sm:py-8", className)}>
      <div ref={sectionRef} className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="overflow-hidden border-y border-cyan-300/25 bg-neutral-900 shadow-[0_18px_40px_rgba(15,23,42,0.28)]">
          <div className="relative h-[210px] sm:h-[320px] lg:h-[360px]">
            <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3">
              {displayItems.map((item, index) => (
                <div
                  key={`${item.label}-base-${index}`}
                  className={cn(
                    "relative",
                    index > 0 && "hidden sm:block",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover object-center"
                    sizes={index === 0 ? "(max-width: 640px) 100vw, 33vw" : "33vw"}
                  />
                </div>
              ))}
            </div>

            <div
              className="pointer-events-none absolute inset-0"
              style={
                {
                  background: `radial-gradient(circle ${visualRadius}% at ${visualX}% ${visualY}%, rgba(12,18,27,0.08) 0%, rgba(12,18,27,0.2) 34%, rgba(12,18,27,0.58) 56%, rgba(12,18,27,0.74) 100%)`,
                }
              }
            />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${visualX}% ${visualY}%, rgba(156,234,234,0.34), rgba(46,169,176,0.14) 22%, rgba(0,0,0,0) 44%)`,
              }}
            />
            <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
