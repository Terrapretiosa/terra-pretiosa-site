export const homeMedia = {
  heroDrilling: "/site-images/home/hero-drilling.webp",
  heroGovernance: "/site-images/home/hero-governance.webp",
  heroLaboratory: "/site-images/home/hero-laboratory.webp",
  featureIntegrated: "/site-images/home/feature-integrated.webp",
  featureCorridor: "/site-images/home/feature-corridor.webp",
  featureSustainability: "/site-images/home/feature-sustainability.webp",
  servicesSitemapBackground: "/site-images/home/services-sitemap-background.webp",
} as const;

export const companyMedia = {
  about: "/site-images/company/about-governance.webp",
  megatrends: "/site-images/company/megatrends-logistics.webp",
  sustainable: "/site-images/company/sustainable-rehabilitation.webp",
} as const;

export const categoryMedia = {
  "essais-analyses": "/site-images/categories/essais-analyses.webp",
  "operations-minieres": "/site-images/categories/operations-minieres.webp",
  formations: "/site-images/categories/formations.webp",
  environnement: "/site-images/categories/environnement.webp",
  "gouvernance-minerale": "/site-images/categories/gouvernance-minerale.webp",
} as const;

export const serviceMedia = {
  "fragmentation-des-roches":
    "/site-images/services/fragmentation-des-roches.webp",
  "preparation-des-echantillons":
    "/site-images/services/preparation-des-echantillons.webp",
  "analyses-mineralogiques-et-chimiques":
    "/site-images/services/analyses-mineralogiques-et-chimiques.webp",
  "tests-mineralurgiques-et-metallurgiques":
    "/site-images/services/tests-mineralurgiques-et-metallurgiques.webp",
  "exhaure-des-mines": "/site-images/services/exhaure-des-mines.webp",
  "forage-minier": "/site-images/services/forage-minier.webp",
  "transport-minier": "/site-images/services/transport-minier.webp",
  "amelioration-continue":
    "/site-images/services/amelioration-continue.webp",
  "traitement-mineralurgique-et-des-eaux":
    "/site-images/services/traitement-mineralurgique-et-des-eaux.webp",
  "politique-environnementale":
    "/site-images/services/politique-environnementale.webp",
  "evaluation-et-rehabilitation-des-sites":
    "/site-images/services/evaluation-et-rehabilitation-des-sites.webp",
  "controle-qualite-assurance-qualite":
    "/site-images/services/controle-qualite-assurance-qualite.webp",
  "surveillance-qualite-des-eaux":
    "/site-images/services/surveillance-qualite-des-eaux.webp",
  "effluents-miniers-et-drainage-minier-acide":
    "/site-images/services/effluents-miniers-et-drainage-minier-acide.webp",
  "strategie-recettes-minieres":
    "/site-images/services/strategie-recettes-minieres.webp",
  "structuration-organes-et-unites-revenus":
    "/site-images/services/structuration-organes-et-unites-revenus.webp",
  "integration-locale-et-politique-industrielle":
    "/site-images/services/integration-locale-et-politique-industrielle.webp",
  "controle-production-et-reporting":
    "/site-images/services/controle-production-et-reporting.webp",
  "audit-flux-paiements-et-tracabilite-export":
    "/site-images/services/audit-flux-paiements-et-tracabilite-export.webp",
  "renforcement-capacites-administration":
    "/site-images/services/renforcement-capacites-administration.webp",
} as const;

export const highlightMedia = {
  diagnostic: "/site-images/highlights/diagnostic.webp",
  execution: "/site-images/highlights/execution.webp",
  performance: "/site-images/highlights/performance.webp",
  transfer: "/site-images/highlights/transfer.webp",
} as const;

export const newsMedia = {
  governance: "/site-images/categories/gouvernance-minerale.webp",
  supplyChain: "/site-images/categories/operations-minieres.webp",
  environment: "/site-images/categories/environnement.webp",
  training: "/site-images/categories/formations.webp",
} as const;

export const megaMenuTileMedia: Record<string, string[]> = {
  "essais-analyses": [
    serviceMedia["fragmentation-des-roches"],
    serviceMedia["preparation-des-echantillons"],
    serviceMedia["analyses-mineralogiques-et-chimiques"],
    serviceMedia["tests-mineralurgiques-et-metallurgiques"],
  ],
  "operations-minieres": [
    serviceMedia["exhaure-des-mines"],
    serviceMedia["forage-minier"],
    serviceMedia["transport-minier"],
  ],
  formations: [
    serviceMedia["amelioration-continue"],
    serviceMedia["traitement-mineralurgique-et-des-eaux"],
  ],
  environnement: [
    serviceMedia["politique-environnementale"],
    serviceMedia["evaluation-et-rehabilitation-des-sites"],
    serviceMedia["controle-qualite-assurance-qualite"],
    serviceMedia["surveillance-qualite-des-eaux"],
    serviceMedia["effluents-miniers-et-drainage-minier-acide"],
  ],
  "gouvernance-minerale": [
    serviceMedia["strategie-recettes-minieres"],
    serviceMedia["structuration-organes-et-unites-revenus"],
    serviceMedia["integration-locale-et-politique-industrielle"],
    serviceMedia["controle-production-et-reporting"],
    serviceMedia["audit-flux-paiements-et-tracabilite-export"],
    serviceMedia["renforcement-capacites-administration"],
  ],
};
