import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Plafond volontairement laissé à 1920. Les photographies des scènes sont
    // des agrandissements : leur plafond optique est 1536, donc servir plus
    // large ne livrerait que des pixels synthétisés, plus lourds. Et cette
    // liste est globale — une entrée de plus, c'est une transformation d'image
    // supplémentaire par fichier ET par format, sur l'ensemble du dossier.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 55 : les quatre scènes plein cadre, qui défilent sous un voile
    // blue-950/35 à /85. Doit rester aligné sur SCENE_QUALITY dans
    // TransformationScroll.tsx — c'est le seul endroit qui la demande.
    //
    // CETTE LIGNE EST OBLIGATOIRE. La valeur par défaut est [75] : une qualité
    // non déclarée ne produit qu'un AVERTISSEMENT au build — `next build`
    // passe — mais /_next/image répond 400 en production. Le défaut ne se
    // verrait donc qu'une fois en ligne.
    qualities: [55, 75],
  },
};

export default nextConfig;
