"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import type { TransformationBeat } from "@/content/types";
import { cn } from "@/lib/cn";

interface TransformationScrollProps {
  title: string;
  intro: string;
  beats: TransformationBeat[];
}

/**
 * Hauteur réellement occultée par le bandeau fixe.
 *
 * Contre-intuitif, donc relevé plutôt que supposé : le `border-b` est sur le
 * <header> (Navbar.tsx ligne 123) tandis que le `h-14` est sur le <div> ENFANT
 * (ligne 127). Deux éléments distincts, donc malgré `box-sizing: border-box`
 * la bordure s'ajoute aux 56 px. Aucune variante de point de rupture : 57 px
 * partout. Si l'une de ces deux lignes change, celle-ci doit suivre.
 */
const NAV_H = 57;

/**
 * En deçà de ce seuil, un `resize` est considéré comme le rétractement de la
 * barre d'URL mobile (60 à 100 px) et la hauteur d'écran en cache n'est PAS
 * mise à jour — sinon la progression sauterait en plein défilement. Au-delà,
 * c'est une rotation ou un vrai redimensionnement, et on suit.
 */
const VIEWPORT_JUMP_THRESHOLD = 120;

/** Ignore les variations de progression sous ce seuil (cf. ScrollSpotlightHero). */
const DEAD_BAND = 0.004;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const beatProgress = (rect: DOMRect, viewportH: number) => {
  const usable = viewportH - NAV_H;
  const centre = rect.top + rect.height / 2;
  const start = NAV_H + usable * 0.8; // progression 0
  const end = NAV_H + usable * 0.35; // progression 1
  return clamp((start - centre) / (start - end), 0, 1);
};

export function TransformationScroll({
  title,
  intro,
  beats,
}: TransformationScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastRef = useRef<number[]>([]);
  const viewportRef = useRef(0);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  // N'attacher les écouteurs que lorsque la section approche de l'écran.
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin: "600px 0px 600px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // En mouvement réduit, on fige tout à l'état achevé et on n'écoute rien.
    if (reduceMotion) {
      beatRefs.current.forEach((el) => el?.style.setProperty("--tp-wipe", "1"));
      return;
    }
    if (!isNearViewport) {
      return;
    }

    viewportRef.current = window.innerHeight;
    let rafId = 0;

    const tick = () => {
      rafId = 0;
      const viewportH = viewportRef.current;
      const elements = beatRefs.current;

      // Lire les quatre rectangles D'ABORD, écrire ensuite. Entrelacer les deux
      // forcerait un recalcul de mise en page à chaque écriture, soit quatre
      // par image au lieu d'un.
      const rects = elements.map((el) => el?.getBoundingClientRect() ?? null);

      rects.forEach((rect, index) => {
        const el = elements[index];
        if (!el || !rect) {
          return;
        }
        const next = beatProgress(rect, viewportH);
        if (Math.abs(next - (lastRef.current[index] ?? -1)) < DEAD_BAND) {
          return;
        }
        lastRef.current[index] = next;
        el.style.setProperty("--tp-wipe", next.toFixed(4));
      });
    };

    const schedule = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    const onResize = () => {
      const next = window.innerHeight;
      const changedALot =
        Math.abs(next - viewportRef.current) > VIEWPORT_JUMP_THRESHOLD;
      if (changedALot) {
        viewportRef.current = next;
        schedule();
      }
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isNearViewport, reduceMotion]);

  if (beats.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-blue-950 py-16 text-white sm:py-24"
    >
      <div className="tp-ambient-grid pointer-events-none absolute inset-0 opacity-15" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="tp-container relative z-10">
        <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
        <h2 className="max-w-3xl text-3xl font-semibold uppercase tracking-[0.07em] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
          {intro}
        </p>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {beats.map((beat, index) => (
            <div
              key={beat.title}
              ref={(el) => {
                beatRefs.current[index] = el;
              }}
              // La valeur par défaut est rendue par le serveur : pas de fenêtre
              // avant hydratation, et l'état au repos est l'état achevé.
              style={
                { "--tp-wipe": 1, "--tp-dir": index % 2 === 0 ? 1 : -1 } as CSSProperties
              }
              className={cn(
                "tp-beat grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <BeatVisual beat={beat} />

              <div className="tp-beat-text">
                <p className="tp-heading text-xs text-blue-300">{beat.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                  {beat.title}
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-white/70">
                  {beat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeatVisual({ beat }: { beat: TransformationBeat }) {
  // Aucune de ces images ne porte `loading="eager"` : mesuré sur un build de
  // production, Next émet alors un <link rel="preload">, qui entrerait en
  // concurrence avec l'image LCP du carrousel pour une section située bien
  // sous la ligne de flottaison. Le fond sombre du cadre couvre le temps de
  // décodage.
  //
  // Un vrai diptyque : deux couches de la MÊME photographie, cadrées sur une
  // moitié chacune, la seconde découverte par le découpage.
  //
  // aspect-[73/100] et non aspect-[3/4] : mesurée, la césure de la source tombe
  // à x=781/1536, soit 50,85 %. Avec object-fit: cover la largeur source visible
  // vaut 1024 × A ; il faut 1024A <= 781 ET 1536 - 1024A >= 781, donc A <= 0,737.
  // À 0,75 la moitié « après » emporterait 13 px de la scène « avant », visibles
  // en permanence sur son bord gauche.
  if (beat.mode === "wipe") {
    return (
      <div className="relative mx-auto aspect-[73/100] w-full max-w-[520px] overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10">
        <Image
          src={beat.image}
          alt={beat.imageAlt}
          fill
          sizes="(max-width: 640px) 184vw, (max-width: 1024px) 168vw, 1040px"
          className="object-cover object-left"
        />
        <div className="tp-wipe-after absolute inset-0">
          {/* Même fichier : une seule des deux copies est annoncée aux lecteurs
              d'écran, sinon la photographie serait décrite deux fois. */}
          <Image
            src={beat.image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 184vw, (max-width: 1024px) 168vw, 1040px"
            className="object-cover object-right"
          />
        </div>
        <span
          aria-hidden="true"
          className="tp-wipe-seam absolute inset-y-0 w-0.5 bg-gradient-to-b from-blue-300/0 via-blue-300/80 to-blue-300/0"
        />
      </div>
    );
  }

  if (beat.mode === "pan") {
    return (
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10">
        <div className="tp-beat-pan absolute inset-y-0 left-0 w-[118%]">
          <Image
            src={beat.image}
            alt={beat.imageAlt}
            fill
            sizes="(max-width: 1024px) 108vw, 56vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10">
      <Image
        src={beat.image}
        alt={beat.imageAlt}
        fill
        sizes="(max-width: 1024px) 92vw, 46vw"
        className="tp-beat-parallax object-cover object-center"
      />
    </div>
  );
}
