import { ImageResponse } from "next/og";
import { getDictionary, isSupportedLang } from "@/content";

// Carte affichée quand le site est partagé sur LinkedIn, WhatsApp, X, Slack…
// Elle est générée ici plutôt que stockée comme fichier image : le texte suit
// la langue de la page, et rien ne se désynchronise d'une refonte graphique.
//
// `twitter.card` vaut "summary_large_image" dans app/layout.tsx, ce qui
// promettait une vignette qui n'existait pas — un partage n'affichait rien.

export const alt = "Terra Pretiosa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(isSupportedLang(lang) ? lang : "fr");
  const tagline =
    lang === "en"
      ? "Mining services · Mineral governance · Raw materials"
      : "Services miniers · Gouvernance minérale · Matières premières";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          // Le même dégradé que les bandeaux sombres du site
          // (from-blue-950 via-blue-900 to-blue-800).
          backgroundImage:
            "linear-gradient(135deg, #172554 0%, #1e3a8a 55%, #1e40af 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 72,
            height: 5,
            borderRadius: 999,
            marginBottom: 40,
            backgroundImage: "linear-gradient(90deg, #93c5fd 0%, #3b82f6 100%)",
          }}
        />
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "0.06em",
            lineHeight: 1.05,
          }}
        >
          {dictionary.siteName.toUpperCase()}
        </div>
        <div
          style={{
            marginTop: 28,
            // 30 et non 34 : au-delà, la ligne française déborde des 1008 px
            // utiles et renvoie « premières » seule sur une deuxième ligne.
            fontSize: 30,
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {tagline}
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 26,
            letterSpacing: "0.14em",
            color: "rgba(147,197,253,0.9)",
          }}
        >
          WWW.TERRAPRETIOSA.COM
        </div>
      </div>
    ),
    size,
  );
}
