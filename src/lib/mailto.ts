/**
 * Construit une URL `mailto:` à partir de champs étiquetés.
 *
 * INTERIM — tant que les formulaires n'ont pas de route d'envoi côté serveur
 * (voir ONBOARDING.md §5.1), ils ouvrent le logiciel de messagerie du visiteur
 * avec un message déjà rédigé, au lieu de prétendre avoir envoyé quoi que ce
 * soit. Le message ne part qu'une fois que le visiteur clique « Envoyer ».
 *
 * À remplacer par un POST vers /api/contact quand le SMTP sera branché.
 */
export function buildMailtoHref(
  to: string,
  subject: string,
  fields: { label: string; value: string }[],
): string {
  const body = fields
    .filter((field) => field.value.trim().length > 0)
    .map((field) => `${field.label}: ${field.value.trim()}`)
    .join("\n");

  const params = new URLSearchParams({ subject, body });

  // URLSearchParams encode l'espace en "+", que les clients mail interprètent
  // littéralement dans un corps de message. %20 est la forme correcte ici.
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
