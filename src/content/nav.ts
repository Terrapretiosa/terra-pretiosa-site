import { megaMenuTileMedia } from "./media";

export const megaMenuCategoryOrder = [
  "essais-analyses",
  "operations-minieres",
  "formations",
  "environnement",
  "gouvernance-minerale",
] as const;

export const companyMenuAnchors = [
  { id: "about", anchor: "about" },
  { id: "megatrends", anchor: "megatrends" },
  { id: "sustainable", anchor: "sustainable" },
  { id: "ambitions", anchor: "ambitions" },
  { id: "contact", anchor: "contact" },
] as const;

export const megaMenuTileImages: Record<string, string[]> = megaMenuTileMedia;
