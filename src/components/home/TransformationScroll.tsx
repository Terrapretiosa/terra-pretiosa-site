"use client";

import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useEffect, useRef, useState } from "react";
import type { Lang, TransformationBeat } from "@/content/types";
import { cn } from "@/lib/cn";

interface TransformationScrollProps {
  leadTitle: string;
  leadCtaLabel: string;
  leadCtaHref: string;
  title: string;
  intro: string;
  beats: TransformationBeat[];
  ctaBand: { missionCta: string; contactCta: string };
  lang: Lang;
  /**
   * La section ouvre la page. Quatre conséquences, indissociables — d'où une
   * seule propriété plutôt que quatre, pour qu'elles ne puissent pas diverger :
   *
   *   — elle annule le `pt-14` de <main> (src/app/[lang]/layout.tsx) pour
   *     atteindre y=0 sous le bandeau devenu transparent ;
   *   — son `leadTitle` est le <h1> du document ;
   *   — sa première image est l'élément LCP, donc préchargée ;
   *   — sa première scène s'ouvre texte VISIBLE : elle ne le fait pas entrer,
   *     elle ne fait que le sortir.
   */
  lead?: boolean;
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
 * Qualité de livraison des quatre scènes. Doit figurer dans `images.qualities`
 * de next.config.ts : une valeur non déclarée ne produit qu'un avertissement au
 * build, mais /_next/image répond 400 en production.
 *
 * 55 et non 75 : ces photographies sont plein cadre, en mouvement, sous un voile
 * blue-950/35 à /85. Les sources agrandies en 4000 px portent beaucoup plus de
 * haute fréquence, donc un même réglage coûte davantage — à 62 l'image LCP
 * pesait 295 Ko et sortait du budget. À 55 elle tient 219 Ko en 1920 et 65 Ko en
 * 828, tout en restant NETTEMENT plus nette qu'avant : 15,4 contre 10,1.
 */
const SCENE_QUALITY = 55;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * Avancement d'une scène épinglée, mesuré sur sa PISTE et non sur la scène :
 * la scène, elle, ne bouge pas. À `rect.top === 0` la scène vient de s'épingler
 * (0) ; elle se détache quand la piste a fini de passer (1).
 *
 * La distance parcourue vaut la hauteur de la piste MOINS celle de la scène :
 * un `sticky` est borné par son bloc conteneur. La hauteur de la fenêtre n'a
 * rien à faire ici, et l'y mettre était un vrai défaut — sur mobile en haut de
 * page la barre d'URL est déployée, donc `innerHeight` valait la grande hauteur
 * d'écran et non la petite, et l'avancement courait 7,5 % trop vite : la scène
 * se figeait une centaine de pixels avant de se détacher.
 *
 * La hauteur de la scène est MESURÉE plutôt que déduite du rapport 300/100.
 * Ce rapport n'est pas une propriété du composant : il tombe en mouvement
 * réduit, où la piste est ramenée à la hauteur d'une scène et où la distance
 * devient nulle — d'où la garde ci-dessous.
 *
 * La hauteur du bandeau fixe n'entre pas non plus dans le calcul : la scène est
 * épinglée à `top: 0` et passe dessous, donc il n'occulte rien de la piste.
 */
const trackProgress = (rect: DOMRect, stageHeight: number) => {
  const travel = rect.height - stageHeight;
  if (travel <= 0) {
    return 0;
  }
  return clamp(-rect.top / travel, 0, 1);
};

/**
 * Sortie du bloc de texte en fin de scène. L'ENTRÉE n'est plus ici : elle est
 * calculée en CSS, ligne par ligne, à partir de --tp-p et du décalage --tp-in
 * porté par chaque ligne. C'est ce qui donne l'impression de continuer à lire
 * en défilant, au lieu de voir un bloc entier apparaître d'un coup.
 *
 * Du même coup la scène d'ouverture n'a plus besoin de sa propre enveloppe :
 * toutes les scènes sortent de la même façon, et c'est --tp-in qui décide de ce
 * qui est déjà visible à l'arrivée.
 */
const exitEnvelope = (progress: number) =>
  clamp((1 - progress) / TEXT_RAMP, 0, 1);

export function TransformationScroll({
  leadTitle,
  leadCtaLabel,
  leadCtaHref,
  title,
  intro,
  beats,
  ctaBand,
  lang,
  lead = false,
}: TransformationScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastRef = useRef<number[]>([]);
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

    let rafId = 0;

    const tick = () => {
      rafId = 0;
      const elements = trackRefs.current;

      // Lire TOUTES les mesures d'abord, écrire ensuite. Entrelacer les deux
      // forcerait un recalcul de mise en page par scène au lieu d'un seul pour
      // toute la section. La hauteur de la scène se lit ici même : c'est le
      // premier enfant de la piste, et cette lecture reste dans la phase de
      // lecture, donc elle ne coûte aucun recalcul supplémentaire.
      const measures = elements.map((el) =>
        el
          ? {
              rect: el.getBoundingClientRect(),
              stage: (el.firstElementChild as HTMLElement | null)?.offsetHeight ?? 0,
            }
          : null,
      );

      measures.forEach((measure, index) => {
        const el = elements[index];
        if (!el || !measure) {
          return;
        }
        const next = trackProgress(measure.rect, measure.stage);
        if (Math.abs(next - (lastRef.current[index] ?? -1)) < DEAD_BAND) {
          return;
        }
        lastRef.current[index] = next;
        el.style.setProperty("--tp-p", next.toFixed(4));
        el.style.setProperty("--tp-t", exitEnvelope(next).toFixed(4));
      });
    };

    const schedule = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    // Un `resize` recalcule simplement. Il n'y a plus de hauteur de fenêtre en
    // cache à protéger : la géométrie est mesurée sur les éléments eux-mêmes,
    // donc le rétractement de la barre d'URL mobile n'a plus aucune prise.
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
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
      // -mt-14 annule le pt-14 de <main> pour que la première scène atteigne
      // y=0 sous le bandeau transparent. Sûr : <main> a un rembourrage non nul,
      // donc la marge négative ne peut pas s'échapper vers le haut — elle
      // décale l'enfant dans la boîte de rembourrage et s'arrête à 0.
      className={cn("bg-blue-950 text-white", lead && "-mt-14")}
    >
      {/* Intro dans le flux — seulement quand la section n'ouvre PAS la page.
          En tête, elle est fondue dans la première scène : un bloc de texte
          avant la première image irait contre tout l'effet. */}
      {lead ? null : (
        <div className="tp-container py-16 sm:py-24">
          <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-500" />
          <h2 className="max-w-3xl text-3xl font-semibold uppercase tracking-[0.07em] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {intro}
          </p>
        </div>
      )}

      {beats.map((beat, index) => {
        const isLead = lead && index === 0;
        return (
        <div
          key={beat.title}
          ref={(el) => {
            trackRefs.current[index] = el;
          }}
          // Valeurs par défaut rendues par le serveur : aucune fenêtre avant
          // hydratation, et l'état au repos est l'état achevé.
          //
          // La hauteur passe par --tp-track, jamais par `height` directement :
          // une hauteur en ligne l'emporterait sur toute règle de feuille de
          // style, et le bloc `prefers-reduced-motion` de globals.css ne
          // pourrait plus ramener la piste à un seul écran.
          style={
            {
              // La scène d'ouverture est rendue à son état de DÉPART (p=0), pas
              // à son état achevé : c'est ce que l'hydratation va calculer, donc
              // serveur et client sont d'accord et rien ne bouge au chargement.
              // Les autres restent à 1, leur repli sans JavaScript.
              "--tp-p": isLead ? 0 : 1,
              "--tp-t": 1,
              "--tp-track": `${TRACK_VH}svh`,
            } as CSSProperties
          }
          className="tp-scene relative"
        >
          <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
            <SceneVisual beat={beat} priority={isLead} />

            {/* Voile : lisibilité du texte par-dessus la photographie. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/35 to-blue-950/60" />

            <div className="tp-container relative flex h-full items-end pb-16 sm:items-center sm:pb-0">
              <div className="max-w-xl">
                {/* --tp-in : l'avancement auquel la ligne apparaît. L'écart de
                    0,08 entre deux lignes vaut environ 24vh de défilement sur
                    une piste de 300vh — assez pour qu'on ait fini de lire l'une
                    quand la suivante arrive.

                    Sur la scène d'ouverture, surtitre et <h1> sont à -0,2 :
                    négatif, donc déjà pleinement visibles à l'arrivée. Ils ne
                    doivent jamais apparaître en différé, c'est le titre de la
                    page. */}
                <p
                  className="tp-line tp-heading text-xs text-blue-300"
                  style={{ "--tp-in": isLead ? -0.2 : 0 } as CSSProperties}
                >
                  {beat.eyebrow}
                </p>

                {isLead ? (
                  <>
                    <h1
                      className="tp-line mt-3 text-3xl font-semibold uppercase leading-tight tracking-[0.04em] drop-shadow-[0_2px_18px_rgba(2,6,23,0.7)] sm:text-5xl"
                      style={{ "--tp-in": -0.2 } as CSSProperties}
                    >
                      {leadTitle}
                    </h1>
                    <p
                      className="tp-line mt-4 hidden max-w-xl text-base leading-relaxed text-white/75 drop-shadow-[0_1px_10px_rgba(2,6,23,0.8)] sm:block"
                      style={{ "--tp-in": 0.1 } as CSSProperties}
                    >
                      {intro}
                    </p>
                    <h2
                      className="tp-line mt-5 text-xl font-semibold leading-tight drop-shadow-[0_2px_18px_rgba(2,6,23,0.7)] sm:text-2xl"
                      style={{ "--tp-in": 0.2 } as CSSProperties}
                    >
                      {beat.title}
                    </h2>
                  </>
                ) : (
                  <h2
                    className="tp-line mt-3 text-3xl font-semibold leading-tight drop-shadow-[0_2px_18px_rgba(2,6,23,0.7)] sm:text-5xl"
                    style={{ "--tp-in": 0.08 } as CSSProperties}
                  >
                    {beat.title}
                  </h2>
                )}

                <p
                  className="tp-line mt-5 text-base leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(2,6,23,0.8)] sm:text-lg"
                  style={{ "--tp-in": isLead ? 0.3 : 0.18 } as CSSProperties}
                >
                  {beat.text}
                </p>

                {isLead ? (
                  <Link
                    href={leadCtaHref}
                    className="tp-line tp-blue-button mt-7"
                    style={{ "--tp-in": 0.4 } as CSSProperties}
                  >
                    {leadCtaLabel}
                  </Link>
                ) : null}
              </div>
            </div>

            {/* Indicateur de défilement, purement décoratif : rien ne signale
                autrement qu'une photographie plein cadre réagit au défilement.
                `aria-hidden` est délibéré et non un oubli — l'affordance est
                visuelle, et on n'annonce pas à un lecteur d'écran que la page
                défile. Il disparaît en mouvement réduit avec son animation. */}
            {isLead ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto hidden h-6 w-6 rotate-45 border-b-2 border-r-2 border-white/50 [animation:tpFloat_2.4s_ease-in-out_infinite] motion-reduce:hidden sm:block"
              />
            ) : null}
          </div>
        </div>
        );
      })}

      {/* Les appels à l'action sont DANS LE FLUX, après la dernière piste, et
          non dans le texte animé : `.tp-line` anime l'opacité, qui ne
          retire ni le pointeur ni l'ordre de tabulation. Deux liens à
          `opacity: 0` posés sur le dernier écran seraient cliquables sans être
          visibles, et un piège au clavier. */}
      {lead ? (
        <div className="tp-container flex flex-col gap-3 py-14 sm:flex-row sm:items-center sm:py-20">
          <Link
            href={`/${lang}/mission`}
            className="tp-blue-button tp-card-lift bg-white text-center text-blue-900 hover:bg-blue-100"
          >
            {ctaBand.missionCta}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            {ctaBand.contactCta}
          </Link>
        </div>
      ) : null}
    </section>
  );
}

function SceneVisual({
  beat,
  priority,
}: {
  beat: TransformationBeat;
  /**
   * Passé par les TROIS branches ci-dessous, jamais par une seule : `mode` est
   * une donnée de contenu, et personne ne doit pouvoir faire sauter le
   * préchargement de l'image LCP en modifiant fr.ts.
   */
  priority: boolean;
}) {
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
            quality={SCENE_QUALITY}
            priority={priority}
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
              quality={SCENE_QUALITY}
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
          quality={SCENE_QUALITY}
          priority={priority}
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
      quality={SCENE_QUALITY}
      priority={priority}
      className="tp-scene-image object-cover object-center"
    />
  );
}
