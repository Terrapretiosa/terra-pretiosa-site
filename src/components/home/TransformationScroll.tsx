"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import type { TransformationBeat } from "@/content/types";

interface TransformationScrollProps {
  title: string;
  intro: string;
  beats: TransformationBeat[];
}

/**
 * Hauteur de la piste de défilement de chaque scène, en hauteurs d'écran.
 * La scène reste épinglée sur (TRACK_VH - 1) écrans : c'est cette distance qui
 * donne à l'animation le temps de se dérouler.
 */
const TRACK_VH = 300;

/** Part de la piste consacrée à l'entrée puis à la sortie du texte. */
const TEXT_RAMP = 0.22;

/** Ignore les variations d'avancement sous ce seuil (cf. ScrollSpotlightHero). */
const DEAD_BAND = 0.003;

/**
 * En deçà de ce seuil, un `resize` est traité comme le rétractement de la barre
 * d'URL mobile et la hauteur en cache n'est PAS mise à jour, sinon l'avancement
 * sauterait en plein défilement. Au-delà : rotation ou vrai redimensionnement.
 */
const VIEWPORT_JUMP_THRESHOLD = 120;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * Avancement d'une scène épinglée, mesuré sur sa PISTE et non sur la scène :
 * la scène, elle, ne bouge pas. À `rect.top === 0` la scène vient de s'épingler
 * (0) ; elle se détache quand la piste a fini de passer (1).
 *
 * La hauteur du bandeau fixe n'entre pas dans ce calcul : la scène est épinglée
 * à `top: 0` et passe sous le bandeau, donc il n'occulte rien de la piste.
 */
const trackProgress = (rect: DOMRect, viewportH: number) => {
  const travel = rect.height - viewportH;
  if (travel <= 0) {
    return 0;
  }
  return clamp(-rect.top / travel, 0, 1);
};

/** Enveloppe du texte : monte sur la première rampe, tient, redescend. */
const textEnvelope = (progress: number) =>
  clamp(
    Math.min(progress / TEXT_RAMP, (1 - progress) / TEXT_RAMP),
    0,
    1,
  );

export function TransformationScroll({
  title,
  intro,
  beats,
}: TransformationScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
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
    if (reduceMotion) {
      trackRefs.current.forEach((el) => {
        el?.style.setProperty("--tp-p", "1");
        el?.style.setProperty("--tp-t", "1");
      });
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
      const elements = trackRefs.current;

      // Lire TOUTES les positions d'abord, écrire ensuite. Entrelacer les deux
      // forcerait un recalcul de mise en page par scène au lieu d'un seul pour
      // toute la section.
      const rects = elements.map((el) => el?.getBoundingClientRect() ?? null);

      rects.forEach((rect, index) => {
        const el = elements[index];
        if (!el || !rect) {
          return;
        }
        const next = trackProgress(rect, viewportH);
        if (Math.abs(next - (lastRef.current[index] ?? -1)) < DEAD_BAND) {
          return;
        }
        lastRef.current[index] = next;
        el.style.setProperty("--tp-p", next.toFixed(4));
        el.style.setProperty("--tp-t", textEnvelope(next).toFixed(4));
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
      if (Math.abs(next - viewportRef.current) > VIEWPORT_JUMP_THRESHOLD) {
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
    <section ref={sectionRef} className="bg-blue-950 text-white">
      {/* Intro dans le flux, avant que l'épinglage ne commence. */}
      <div className="tp-container py-16 sm:py-24">
        <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
        <h2 className="max-w-3xl text-3xl font-semibold uppercase tracking-[0.07em] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
          {intro}
        </p>
      </div>

      {beats.map((beat, index) => (
        <div
          key={beat.title}
          ref={(el) => {
            trackRefs.current[index] = el;
          }}
          // Valeurs par défaut rendues par le serveur : aucune fenêtre avant
          // hydratation, et l'état au repos est l'état achevé.
          style={
            { "--tp-p": 1, "--tp-t": 1, height: `${TRACK_VH}svh` } as CSSProperties
          }
          className="tp-scene relative"
        >
          <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
            <SceneVisual beat={beat} />

            {/* Voile : lisibilité du texte, et il masque une part de la mollesse
                d'une photographie de 1536 px étirée en plein écran. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/35 to-blue-950/60" />

            <div className="tp-container relative flex h-full items-end pb-16 sm:items-center sm:pb-0">
              <div className="tp-scene-text max-w-xl">
                <p className="tp-heading text-xs text-blue-300">{beat.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight drop-shadow-[0_2px_18px_rgba(2,6,23,0.7)] sm:text-5xl">
                  {beat.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(2,6,23,0.8)] sm:text-lg">
                  {beat.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function SceneVisual({ beat }: { beat: TransformationBeat }) {
  // Le diptyque : deux couches de la MÊME photographie, chacune cadrée sur sa
  // moitié. Les largeurs et le décalage sont dérivés de la césure mesurée —
  // voir le commentaire de .tp-wipe-layer-before dans globals.css.
  if (beat.mode === "wipe") {
    return (
      <>
        <div className="tp-wipe-layer-before absolute inset-y-0">
          <Image
            src={beat.image}
            alt={beat.imageAlt}
            fill
            sizes="200vw"
            className="object-cover object-center"
          />
        </div>

        <div className="tp-wipe-window absolute inset-0">
          <div className="tp-wipe-layer-after absolute inset-y-0">
            {/* Même fichier : une seule des deux copies est annoncée aux
                lecteurs d'écran, sinon la photo serait décrite deux fois. */}
            <Image
              src={beat.image}
              alt=""
              aria-hidden="true"
              fill
              sizes="200vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <span
          aria-hidden="true"
          className="tp-wipe-seam absolute inset-y-0 z-10 w-0.5 bg-gradient-to-b from-blue-300/0 via-blue-300/90 to-blue-300/0"
        />
      </>
    );
  }

  // Scène unique qui se lit de gauche à droite : balayage latéral.
  if (beat.mode === "pan") {
    return (
      <div className="tp-scene-pan absolute inset-y-0 left-0">
        <Image
          src={beat.image}
          alt={beat.imageAlt}
          fill
          sizes="122vw"
          className="object-cover object-center"
        />
      </div>
    );
  }

  // Scène unique : lent dézoom pendant l'épinglage.
  //
  // Aucune image ne porte `loading="eager"` : mesuré sur un build de
  // production, Next émet alors un <link rel="preload"> qui concurrencerait
  // l'image LCP du carrousel, pour une section très en dessous de la ligne de
  // flottaison.
  return (
    <Image
      src={beat.image}
      alt={beat.imageAlt}
      fill
      sizes="100vw"
      className="tp-scene-image object-cover object-center"
    />
  );
}
