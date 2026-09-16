import { en } from "./en";
import { fr } from "./fr";
import type { Dictionary, Lang, ServiceCategory, ServiceItem } from "./types";
import {
  HIDDEN_CATEGORY_SLUGS,
  HIDDEN_FORM_LABELS,
  TEAM_PAGE_HIDDEN,
} from "./visibility";

export const SUPPORTED_LANGS: Lang[] = ["fr", "en"];

export const isSupportedLang = (value: string): value is Lang =>
  SUPPORTED_LANGS.includes(value as Lang);

/**
 * Un lien vise-t-il quelque chose de masqué ? Le href est découpé en segments
 * plutôt que cherché en sous-chaîne, sinon un article nommé « dream-team »
 * serait élagué par erreur.
 */
const isHiddenHref = (href: string): boolean => {
  const path = href.split("#")[0].split("?")[0];
  const segments = path.split("/").filter(Boolean); // ["fr", "services", "slug"]

  if (TEAM_PAGE_HIDDEN && segments.length === 2 && segments[1] === "team") {
    return true;
  }

  if (segments.length >= 3 && segments[1] === "services") {
    return HIDDEN_CATEGORY_SLUGS.includes(segments[2]);
  }

  return false;
};

/**
 * Projette un dictionnaire en retirant ce que `visibility.ts` masque. Ne fait
 * que répandre et filtrer : les objets `fr` et `en` ne sont jamais mutés.
 *
 * C'est le seul point d'étranglement du contenu — toutes les pages et tous les
 * composants passent par `getDictionary` —, donc filtrer ici suffit à faire
 * disparaître une catégorie du routage, du sitemap, des deux méga-menus, de la
 * recherche, des grilles, des compteurs, du footer et des formulaires.
 */
const applyVisibility = (dictionary: Dictionary): Dictionary => ({
  ...dictionary,

  services: {
    ...dictionary.services,
    categories: dictionary.services.categories.filter(
      (category) => !HIDDEN_CATEGORY_SLUGS.includes(category.slug),
    ),
  },

  // `layout.tsx` passe le dictionnaire entier à <Navbar>, qui est un composant
  // client : sans cela les biographies partiraient dans la charge RSC de chaque
  // page du site, alors même que la page Équipe n'est plus accessible.
  team: TEAM_PAGE_HIDDEN
    ? { ...dictionary.team, intro: "", note: "", members: [] }
    : dictionary.team,

  contact: {
    ...dictionary.contact,
    formOptions: {
      ...dictionary.contact.formOptions,
      serviceIndustries: dictionary.contact.formOptions.serviceIndustries.filter(
        (label) => !HIDDEN_FORM_LABELS.includes(label),
      ),
    },
  },

  mission: {
    ...dictionary.mission,
    missionTypes: dictionary.mission.missionTypes.filter(
      (label) => !HIDDEN_FORM_LABELS.includes(label),
    ),
  },

  footer: {
    ...dictionary.footer,
    columns: dictionary.footer.columns
      .map((column) => ({
        ...column,
        groups: column.groups
          .map((group) => ({
            ...group,
            links: group.links.filter((link) => !isHiddenHref(link.href)),
          }))
          .filter((group) => group.links.length > 0),
      }))
      .filter((column) => column.groups.length > 0),
    quickLinks: dictionary.footer.quickLinks.filter(
      (link) => !isHiddenHref(link.href),
    ),
  },
});

// Calculé une fois au chargement du module, pas à chaque appel : getDictionary
// est appelé par le layout, par chaque page et deux fois par le sitemap.
const visibleFr = applyVisibility(fr);
const visibleEn = applyVisibility(en);

export const getDictionary = (lang: Lang): Dictionary =>
  lang === "fr" ? visibleFr : visibleEn;

export const getCategoryBySlug = (
  dictionary: Dictionary,
  slug: string,
): ServiceCategory | undefined =>
  dictionary.services.categories.find((category) => category.slug === slug);

export const getServiceBySlug = (
  category: ServiceCategory,
  slug: string,
): ServiceItem | undefined =>
  category.services.find((service) => service.slug === slug);
