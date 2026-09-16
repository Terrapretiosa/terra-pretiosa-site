//
// TEMPORAIRE — demande client, septembre 2026 ("Dossier Rodrique").
//
// Ce fichier pilote le masquage STRUCTUREL : routage, sitemap, menus,
// recherche, grilles, compteurs, footer et listes déroulantes. Tout ce qui est
// listé ici existe encore intégralement dans le code et se restaure en vidant
// la constante correspondante.
//
// Ce qui ne se restaure PAS d'ici, parce qu'il s'agit de textes réécrits et non
// de contenu masqué :
//   1. renommer  src/app/[lang]/_team  ->  src/app/[lang]/team
//   2. remettre « opérations minières » dans la carte d'accueil n°1 (fr.ts,
//      en.ts) et dans news.intro (fr.ts uniquement)
//   3. remettre le groupe « Accès rapide » en colonne 3 du footer
//   4. rétablir services/page.tsx ligne 66 en sm:grid-cols-3 AVEC sa troisième
//      tuile de statistiques, ligne 149 en xl:grid-cols-3, et
//      ServicesSitemapHero.tsx ligne 49 en xl:grid-cols-5
//

/**
 * Catégories de services retirées du site. Le slug reste dans fr.ts avec tous
 * ses services, ses traductions et ses FAQ ; il n'est simplement plus servi.
 */
export const HIDDEN_CATEGORY_SLUGS: readonly string[] = ["operations-minieres"];

/**
 * Route /[lang]/team. Le dossier est renommé `_team` (convention des dossiers
 * privés de Next), ce drapeau retire les liens, l'entrée de sitemap et les
 * biographies de la charge RSC.
 */
export const TEAM_PAGE_HIDDEN: boolean = true;

/**
 * Libellés à retirer des listes déroulantes des formulaires. Le couplage est
 * explicite et non dérivé : ces listes emploient leur propre libellé, qui n'est
 * pas le titre de la catégorie (« Gouvernance minérale » côté formulaire contre
 * « Conseil en gouvernance des matières premières minérales » côté catégorie).
 */
export const HIDDEN_FORM_LABELS: readonly string[] = [
  "Opérations minières",
  "Mining Operations",
];
