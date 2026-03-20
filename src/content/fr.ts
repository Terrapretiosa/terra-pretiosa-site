import {
  categoryMedia,
  highlightMedia,
  homeMedia,
  newsMedia,
  serviceMedia,
} from "./media";
import type { Dictionary, ServiceItem } from "./types";

const serviceDetails: Record<
  string,
  { paragraphs: string[]; capabilities: string[] }
> = {
  "fragmentation-des-roches": {
    paragraphs: [
      "La fragmentation et le broyage sont des étapes cruciales en minéralurgie et métallurgie. Elles conditionnent la qualité de l'échantillonnage, la précision des analyses et l'efficacité du traitement.",
      "Une fragmentation adaptée permet une distribution homogène des particules. Un broyage contrôlé évite la sur-pulvérisation et limite les pertes métalliques.",
    ],
    capabilities: [
      "Contrôle granulométrique pour des échantillons représentatifs",
      "Optimisation du rendement et de la récupération",
      "Réduction des coûts d'exploitation",
      "Décisions techniques et économiques plus fiables",
      "Contribution à la conception des usines de traitement",
    ],
  },
  "preparation-des-echantillons": {
    paragraphs: [
      "Une bonne préparation des échantillons est une étape critique en métallurgie extractive. Elle vise un échantillon homogène et représentatif pour les tests chimiques et minéralogiques.",
      "Une préparation inadéquate peut fausser les résultats et impacter les choix de procédés, la conception des circuits et l'évaluation économique du projet.",
    ],
    capabilities: [
      "Inventaire et sélection rigoureuse selon les normes",
      "Séchage maximal des échantillons",
      "Fragmentation et broyage contrôlés",
      "Mélange et fractionnement stricts",
    ],
  },
  "analyses-mineralogiques-et-chimiques": {
    paragraphs: [
      "Les analyses minéralogiques et chimiques sont déterminantes pour la compréhension des gisements, la performance métallurgique et la conformité environnementale.",
      "Nous mobilisons XRD, FRX, SEM et QEMSCAN pour une lecture détaillée des associations minérales, de la granulométrie et de la composition chimique.",
    ],
    capabilities: [
      "Analyses XRD, FRX, SEM et QEMSCAN",
      "Intégration des données dans la conception métallurgique",
      "Réduction des délais d'acheminement des échantillons",
      "Reprise rapide des tests et meilleure coordination laboratoire-terrain",
    ],
  },
  "tests-mineralurgiques-et-metallurgiques": {
    paragraphs: [
      "Nous proposons une gamme complète d'essais pour évaluer le comportement du minerai avant et pendant l'exploitation.",
      "Ces tests orientent les choix de procédés et d'investissement en optimisant récupération, rendements et coûts.",
    ],
    capabilities: [
      "Analyses granulométriques",
      "Composition minéralogique et chimique",
      "Tests de flottation",
      "Essais gravimétriques",
      "Essais de lixiviation (cyanuration, acide)",
    ],
  },
  "exhaure-des-mines": {
    paragraphs: [
      "L'exhaure est essentielle pour la sécurité, la continuité de production et la protection des équipements en mine.",
      "Nous accompagnons la planification et l'exécution des opérations de pompage avec des solutions adaptées aux conditions de site.",
    ],
    capabilities: [
      "Pompage d'eau et maîtrise des infiltrations",
      "Équipements robustes: pompes submersibles et motopompes",
      "Maintenance préventive et réduction des risques HSE",
      "Optimisation des coûts d'exploitation",
    ],
  },
  "forage-minier": {
    paragraphs: [
      "Nous réalisons des forages d'exploitation, de production et de drainage en mines à ciel ouvert et souterraines.",
      "Nos équipes interviennent avec une approche adaptée aux exigences de profondeur, diamètre et précision.",
    ],
    capabilities: [
      "Forage de production",
      "Forage de drainage",
      "Rendement élevé et sécurité optimale",
      "Exécution adaptée aux contraintes géotechniques",
    ],
  },
  "transport-minier": {
    paragraphs: [
      "Nous assurons un transport minier fiable des minerais, équipements et consommables industriels.",
      "Notre logistique relie sites d'exploitation, ports et usines de traitement avec un suivi opérationnel continu.",
    ],
    capabilities: [
      "Flotte adaptée: bennes, plateaux, citernes",
      "Chauffeurs formés aux standards HSE",
      "Traçabilité et coordination en temps réel",
      "Respect des délais et contraintes opérationnelles",
    ],
  },
  "amelioration-continue": {
    paragraphs: [
      "Nos formations en amélioration continue renforcent les compétences des équipes minières et métallurgiques.",
      "Les modules combinent théorie, ateliers pratiques et cas réels pour installer une culture de performance durable.",
    ],
    capabilities: [
      "Lean Mining & optimisation des processus",
      "Contrôle statistique des procédés (SPC)",
      "Maintenance préventive & fiabilité des équipements",
      "Gestion des coûts & performance opérationnelle",
      "Culture de performance et leadership terrain",
    ],
  },
  "traitement-mineralurgique-et-des-eaux": {
    paragraphs: [
      "Cette formation couvre le traitement des minerais et la gestion des eaux industrielles dans les opérations minières.",
      "Elle vise à améliorer la performance métallurgique, réduire les pertes et garantir la conformité environnementale.",
    ],
    capabilities: [
      "Optimisation concassage, broyage, classification",
      "Flottation, lixiviation, récupération métallurgique",
      "Bilans massiques et contrôle des performances",
      "Traitement des effluents et gestion de l'AMD",
      "Recyclage et gestion durable de l'eau",
    ],
  },
  "politique-environnementale": {
    paragraphs: [
      "Nous aidons les pays et entreprises à développer ou améliorer leur politique environnementale en amont des projets et des plans de réhabilitation.",
      "L'approche intègre gouvernance ESG, cadre juridique, contrôle et mécanismes financiers de garantie environnementale.",
    ],
    capabilities: [
      "Diagnostic environnemental sectoriel",
      "Analyse du cadre juridique",
      "Consultation des parties prenantes",
      "Définition des standards environnementaux",
      "Intégration des exigences ESG et standards internationaux",
      "Mise en place des mécanismes de contrôle et d'application",
      "Structuration d'un mécanisme financier de garantie environnementale",
      "Plan de mise en œuvre et renforcement des capacités institutionnelles",
      "Évaluation de l'impact économique et ajustement stratégique",
    ],
  },
  "evaluation-et-rehabilitation-des-sites": {
    paragraphs: [
      "Nous réalisons des audits complets des sols, eaux, résidus et infrastructures pour cartographier les risques des sites miniers.",
      "Nous concevons des plans de réhabilitation technique et financière intégrant stabilisation et restauration écologique.",
    ],
    capabilities: [
      "Diagnostic des impacts environnementaux, géotechniques et sociaux",
      "Cartographie des risques et passifs miniers",
      "Estimation des coûts de restauration",
      "Plans de réhabilitation progressifs",
    ],
  },
  "controle-qualite-assurance-qualite": {
    paragraphs: [
      "Nous déployons un système QA/QC rigoureux pour garantir fiabilité, précision et traçabilité des analyses minières et environnementales.",
      "Nos procédures sont alignées sur les standards internationaux pour produire des résultats défendables.",
    ],
    capabilities: [
      "Étalonnage et vérification des instruments",
      "Blancs, duplicatas et standards certifiés",
      "Chaîne de custody documentée",
      "Audits internes et validation des résultats",
    ],
  },
  "surveillance-qualite-des-eaux": {
    paragraphs: [
      "Nous analysons et surveillons la qualité des eaux dans les zones reculées, nouveaux forages et environnements miniers.",
      "Le dispositif est adapté à l'usage: captage, eau potable, eaux usées, eaux souterraines et rejets.",
    ],
    capabilities: [
      "Échantillonnage multi-usages des eaux",
      "Analyse d'eau potable et eaux minières",
      "Suivi périodique et reporting de conformité",
    ],
  },
  "effluents-miniers-et-drainage-minier-acide": {
    paragraphs: [
      "Nous analysons les effluents et lixiviats miniers pour assurer la conformité réglementaire des rejets.",
      "Nos solutions couvrent le traitement des effluents, la gestion du drainage minier acide (AMD) et le monitoring continu.",
    ],
    capabilities: [
      "Analyse physico-chimique (pH, métaux lourds, sulfates, cyanures, arsenic)",
      "Diagnostic des sources de pollution",
      "Conception de systèmes de traitement adaptés",
      "Traitement du drainage minier acide (AMD)",
      "Mise en place de bassins de rétention et gestion des eaux pluviales",
      "Optimisation des circuits de recyclage d'eau industrielle",
      "Plan de surveillance et monitoring environnemental continu",
    ],
  },
  "strategie-recettes-minieres": {
    paragraphs: [
      "Nous proposons des stratégies d'amélioration des recettes minières pour les États producteurs.",
      "Les recommandations visent la sécurisation des flux, la transparence et l'efficacité budgétaire.",
    ],
    capabilities: [
      "Stratégie de mobilisation des recettes minières",
      "Outils d'évaluation des projets",
      "Manuels de procédures",
      "Assistance technique continue",
    ],
  },
  "structuration-organes-et-unites-revenus": {
    paragraphs: [
      "Nous accompagnons la structuration des organes et instances en charge des ressources minières et des unités de revenus.",
      "L'objectif est d'améliorer gouvernance, coordination institutionnelle et performance administrative.",
    ],
    capabilities: [
      "Structuration des instances et organes",
      "Formation des cadres ministériels",
      "Création d'unités spécialisées revenus miniers",
      "Assistance institutionnelle continue",
    ],
  },
  "integration-locale-et-politique-industrielle": {
    paragraphs: [
      "Nous conseillons l'intégration locale et la politique industrielle pour accroître la valeur ajoutée nationale.",
      "Les études couvrent compétitivité, raffineries, emploi, fiscalité industrielle et zones minières intégrées.",
    ],
    capabilities: [
      "Étude de compétitivité de la transformation locale",
      "Analyse CAPEX des raffineries",
      "Évaluation de l'impact emploi",
      "Plans d'incitations fiscales industrielles",
      "Structuration de zones industrielles minières",
    ],
  },
  "controle-production-et-reporting": {
    paragraphs: [
      "Nous mettons en place des moyens de contrôle de production et des dispositifs de reporting robustes.",
      "Ces systèmes améliorent la qualité de la donnée, la supervision des volumes et la transparence des flux miniers.",
    ],
    capabilities: [
      "Contrôle de production",
      "Systèmes de reporting",
      "Traçabilité des volumes exportés",
      "Alignement avec standards internationaux",
    ],
  },
  "audit-flux-paiements-et-tracabilite-export": {
    paragraphs: [
      "Nous auditons les flux de paiement miniers et les volumes exportés pour réduire les pertes de revenus.",
      "La traçabilité des flux financiers et physiques est structurée pour soutenir la conformité et la gouvernance.",
    ],
    capabilities: [
      "Audit des flux de paiement miniers",
      "Traçabilité des volumes exportés",
      "Vérification des écarts et risques",
      "Recommandations de sécurisation des recettes",
    ],
  },
  "renforcement-capacites-administration": {
    paragraphs: [
      "Nous renforçons les capacités des administrations minières via formation, outils et accompagnement opérationnel.",
      "L'objectif est d'ancrer des capacités durables de contrôle, pilotage et négociation stratégique.",
    ],
    capabilities: [
      "Formation des cadres ministériels",
      "Outils d'évaluation des projets",
      "Appui méthodologique et procédural",
      "Assistance technique continue",
    ],
  },
};

const makeService = (
  slug: string,
  title: string,
  excerpt: string,
  image: string,
): ServiceItem => ({
  slug,
  title,
  excerpt,
  image,
  paragraphs:
    serviceDetails[slug]?.paragraphs ?? [
      `Terra Pretiosa conçoit et pilote des prestations de ${title.toLowerCase()} adaptées aux contraintes techniques, humaines et réglementaires de chaque site.`,
      "Nous sommes au cœur de l'action pour une Afrique plus prospère, avec des services intégrés, responsables et orientés résultats.",
      "Notre approche combine expertise technique minérale, analyse macroéconomique, politiques industrielles ciblées et gouvernance ESG alignée sur les standards internationaux.",
    ],
  capabilities:
    serviceDetails[slug]?.capabilities ?? [
      "Diagnostic initial et cadrage opérationnel",
      "Déploiement terrain avec indicateurs de performance",
      "Traçabilité documentaire et restitution claire",
      "Transfert de savoir-faire et renforcement de capacités",
      "Conformité HSE/ESG et alignement réglementaire",
    ],
  highlights: [
    {
      title: serviceDetails[slug]?.capabilities?.[0] ?? "Diagnostic ciblé",
      text: `Nos interventions en ${title.toLowerCase()} démarrent par un cadrage technique centré sur ${(
        serviceDetails[slug]?.capabilities?.[0] ?? "les points critiques"
      ).toLowerCase()} afin de fiabiliser l'exécution et les décisions terrain.`,
      ctaLabel: "Contactez-nous",
      ctaHref: "/fr/contact",
      image: highlightMedia.diagnostic,
    },
    {
      title: serviceDetails[slug]?.capabilities?.[1] ?? "Exécution maîtrisée",
      text: `La mission est structurée autour de ${(
        serviceDetails[slug]?.capabilities?.[1] ?? "jalons opérationnels"
      ).toLowerCase()} pour réduire la variabilité, maîtriser les risques et sécuriser la qualité des résultats.`,
      ctaLabel: "Lancer une mission",
      ctaHref: "/fr/mission",
      image: highlightMedia.execution,
    },
    {
      title: serviceDetails[slug]?.capabilities?.[2] ?? "Résultats défendables",
      text: `Les livrables documentent ${(
        serviceDetails[slug]?.capabilities?.[2] ?? "la traçabilité des opérations"
      ).toLowerCase()} afin d'offrir une base technique exploitable par les équipes, les décideurs et les autorités de contrôle.`,
      ctaLabel: "Voir nos services",
      ctaHref: "/fr/services",
      image: highlightMedia.performance,
    },
    {
      title: serviceDetails[slug]?.capabilities?.[3] ?? "Transfert durable",
      text: `Nous ancrons ${(
        serviceDetails[slug]?.capabilities?.[3] ?? "le transfert de savoir-faire"
      ).toLowerCase()} dans des standards, outils et routines directement réutilisables après la mission.`,
      ctaLabel: "Nous contacter",
      ctaHref: "/fr/contact",
      image: highlightMedia.transfer,
    },
  ],
});

export const fr: Dictionary = {
  lang: "fr",
  siteName: "Terra Pretiosa",
  logoLabel: "Terra Pretiosa",
  nav: {
    services: "Services",
    company: "Entreprise",
    team: "Équipe",
    news: "Actualités",
    contact: "Contact",
    search: "Recherche",
    login: "Connexion",
    mission: "Lancer une mission",
    companyMenu: "Entreprise",
    companyLinks: {
      about: "À propos",
      megatrends: "Mégatendance",
      sustainable: "Développement durable",
      ambitions: "Nos ambitions",
      contact: "Contact",
    },
  },
  common: {
    partnerCta: "PARTENARIAT AVEC TERRA PRETIOSA",
    contactUs: "Contactez-nous",
    learnMore: "En savoir plus",
    readMore: "Lire plus",
    takeNextStep: "Passez à l'étape suivante",
    breadcrumbs: {
      home: "Accueil",
      services: "Services",
    },
  },
  home: {
    hero: [
      {
        title: "La civilisation humaine doit tout au sol et au sous-sol",
        subtitle:
          "Nous devons l'exploiter intelligemment pour notre prospérité et nous devons aussi le protéger pour les générations futures.",
        ctaLabel: "Découvrir nos services",
        ctaHref: "/fr/services",
        image: homeMedia.heroDrilling,
      },
      {
        title: "Gouvernance minérale et industrialisation durable",
        subtitle:
          "Firme stratégique spécialisée en prestation de services et gouvernance des ressources minérales, résilience des chaînes d'approvisionnement et industrialisation durable en Afrique.",
        ctaLabel: "Voir notre approche",
        ctaHref: "/fr/company",
        image: homeMedia.heroGovernance,
      },
      {
        title: "Partenaire des États, institutions et industriels",
        subtitle:
          "Nous accompagnons la conception et la mise en œuvre de stratégies intégrées pour passer d'un modèle d'exportation brute à une économie de valeur ajoutée locale.",
        ctaLabel: "Lancer une mission",
        ctaHref: "/fr/mission",
        image: homeMedia.heroLaboratory,
      },
    ],
    features: [
      {
        title: "Une offre intégrée Mines & Ressources",
        text: "Essais et analyses, opérations minières, formations, environnement et gouvernance: des services intégrés, durables et orientés résultats.",
        ctaLabel: "Explorer les catégories",
        ctaHref: "/fr/services",
        image: homeMedia.featureIntegrated,
      },
      {
        title: "Corridor d'activité africain",
        text: "Nous intervenons au Burkina Faso, en RDC, en Guinée Conakry, au Sénégal, au Niger et au Mali, avec un siège social à Gaithersburg (Maryland, USA).",
        ctaLabel: "Voir le corridor d'activité",
        ctaHref: "/fr/company#corridor",
        image: homeMedia.featureCorridor,
      },
      {
        title: "Souveraineté industrielle et prospérité durable",
        text: "Notre ambition est de transformer les ressources naturelles en leviers de développement économique, de souveraineté industrielle et de stabilité macroéconomique.",
        ctaLabel: "Découvrir nos ambitions",
        ctaHref: "/fr/company#ambitions",
        image: homeMedia.featureSustainability,
      },
    ],
    servicesSitemapTitle: "SERVICES",
    servicesSitemapSubtitle:
      "Parcourez nos domaines d'intervention pour structurer, sécuriser et accélérer vos opérations minières et environnementales.",
    serviceGridTitle: "Expertises clés",
    serviceGridIntro:
      "Une sélection de services à haute valeur ajoutée couvrant la chaîne technique, opérationnelle et de gouvernance.",
    insights: {
      title: "Analyses",
      featuredTitle:
        "Minerais critiques : convertir la pression de la demande mondiale en valeur industrielle locale",
      featuredExcerpt:
        "La hausse de la demande en minerais critiques ne crée pas automatiquement de prospérité pour les pays producteurs. La création de valeur dépend de quatre disciplines conjointes : qualité de la gouvernance, traçabilité des flux, maîtrise environnementale et montée en compétence des équipes techniques.",
      featuredHref: "/fr/news/gouvernance-minerale-afrique-2026",
      items: [
        {
          title: "Traçabilité export et sécurisation des recettes",
          excerpt:
            "Le rapprochement entre tonnages produits, teneurs payables, humidité, expéditions et encaissements devient un levier central de gouvernance minérale.",
          href: "/fr/news/chaines-approvisionnement-mineraux-critiques",
        },
        {
          title: "Réhabilitation progressive et coûts de fermeture",
          excerpt:
            "Les passifs environnementaux doivent être chiffrés tôt et intégrés aux plans de mine, aux bilans d'eau et aux garanties financières.",
          href: "/fr/news/rehabilitation-sites-miniers",
        },
        {
          title: "Compétences opératoires et stabilité usine",
          excerpt:
            "La performance métallurgique durable repose sur la discipline opératoire, les standards de maintenance et le traitement rapide des écarts terrain.",
          href: "/fr/news/formation-competences-minieres",
        },
        {
          title: "Gouvernance minérale et arbitrages budgétaires",
          excerpt:
            "Les États doivent désormais piloter simultanément attractivité de l'investissement, capture de la rente et transformation locale.",
          href: "/fr/news/gouvernance-minerale-afrique-2026",
        },
      ],
    },
    ctaBand: {
      title: "Prêt à lancer une mission structurante ?",
      missionCta: "Lancer une mission",
      contactCta: "Nous contacter",
    },
  },
  company: {
    pageTitle: "Entreprise",
    introTitle: "À propos de Terra Pretiosa",
    introBlocks: [
      {
        title: "Notre conviction",
        text: "La civilisation humaine repose fondamentalement sur les ressources du sol et du sous-sol. Elles soutiennent le développement industriel, énergétique et technologique et doivent donc être exploitées de manière stratégique, efficiente et durable.",
      },
      {
        title: "Positionnement",
        text: "Terra Pretiosa est un cabinet de conseil stratégique spécialisé dans la gouvernance des ressources minérales, la résilience des chaînes d'approvisionnement et l'industrialisation durable en Afrique.",
      },
      {
        title: "Ambition",
        text: "Notre ambition est de contribuer activement au renforcement des capacités des pays africains afin de transformer leurs ressources naturelles en leviers de développement économique, de souveraineté industrielle et de stabilité macroéconomique.",
      },
      {
        title: "Approche",
        text: "Nous accompagnons les gouvernements, les institutions financières internationales et les partenaires industriels dans la conception et la mise en œuvre de stratégies intégrées combinant expertise technique minière, analyse macroéconomique, politiques industrielles ciblées et cadres ESG alignés sur les standards internationaux.",
      },
    ],
    corridorTitle: "Corridor d'activité",
    corridorCountries: [
      "Burkina Faso",
      "RDC",
      "Guinée Conakry",
      "Sénégal",
      "Niger",
      "Mali",
    ],
    hqTitle: "Siège",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    megatrendsTitle: "Mégatendance",
    megatrendsText:
      "La demande mondiale en ressources minérales stratégiques et critiques est en forte croissance. Dans ce contexte, les États et opérateurs miniers doivent s'appuyer sur des partenaires capables de fournir des solutions techniques intégrées, performantes et conformes aux standards internationaux, tout en sécurisant la chaîne de valeur et la création de valeur locale.",
    miningDevTitle: "Exploitation minière pour un développement efficace",
    miningDevText:
      "Nous défendons une exploitation minière conçue comme un moteur de transformation économique. L'enjeu n'est pas seulement d'extraire, mais de structurer des opérations performantes capables de soutenir l'emploi, le transfert de compétences, la mobilisation des recettes publiques et l'industrialisation locale.",
    sustainableTitle: "Développement durable",
    sustainableBullets: [
      "Suivi environnemental périodique",
      "Gestion des déchets et boues miniers",
      "Réhabilitation des sites et revégétalisation",
      "Formation locale et emploi des jeunes opérateurs",
      "Fourniture d'équipements écoénergétiques",
      "Exhaure et traitement des eaux",
      "Attraction du capital-investissement et mobilisation du capital humain pour soutenir une croissance forte du secteur",
    ],
    ambitionsTitle: "Nos ambitions",
    ambitionsBullets: [
      "La souveraineté économique des États producteurs",
      "La résilience des chaînes d'approvisionnement stratégiques",
      "L'industrialisation durable de l'Afrique",
      "L'accélération de la transition énergétique mondiale",
      "La stabilisation géopolitique des corridors miniers critiques",
    ],
  },
  services: {
    landingTitle: "Services",
    landingIntro:
      "Terra Pretiosa intervient sur l'ensemble de la chaîne minière, de l'analyse technique et des opérations de terrain jusqu'à la gouvernance stratégique du secteur, avec une exécution orientée résultats, conformité et création de valeur locale.",
    categoriesTitle: "Catégories de services",
    sitemapTitle: "Plan des services",
    featuredTitle: "Insight en vedette",
    featuredText:
      "Notre approche articule rigueur technique, continuité opérationnelle, conformité environnementale et gouvernance responsable pour transformer les ressources minérales en performance durable.",
    categories: [
      {
        slug: "essais-analyses",
        title: "Essais & Analyses",
        summary:
          "Essais et analyses en traitement des minerais: au cœur de l'action pour une Afrique plus prospère et soucieuse de ses ressources.",
        icon: "EA",
        image: categoryMedia["essais-analyses"],
        services: [
          makeService(
            "fragmentation-des-roches",
            "Fragmentation des roches",
            "Contrôle de la fragmentation et du broyage pour fiabiliser l'échantillonnage, les analyses et la récupération métallurgique.",
            serviceMedia["fragmentation-des-roches"],
          ),
          makeService(
            "preparation-des-echantillons",
            "Préparation des échantillons",
            "Préparation rigoureuse d'échantillons homogènes et représentatifs pour sécuriser les décisions techniques et économiques.",
            serviceMedia["preparation-des-echantillons"],
          ),
          makeService(
            "analyses-mineralogiques-et-chimiques",
            "Analyses minéralogiques et chimiques",
            "Analyses avancées (XRD, FRX, SEM, QEMSCAN) pour comprendre le gisement et optimiser les choix métallurgiques.",
            serviceMedia["analyses-mineralogiques-et-chimiques"],
          ),
          makeService(
            "tests-mineralurgiques-et-metallurgiques",
            "Tests minéralurgiques et métallurgiques",
            "Essais complets (flottation, gravimétrie, lixiviation) pour optimiser rendement, récupération et schémas de traitement.",
            serviceMedia["tests-mineralurgiques-et-metallurgiques"],
          ),
        ],
        faq: [
          {
            question: "Pourquoi standardiser la préparation des échantillons ?",
            answer:
              "Une préparation inadéquate peut fausser la teneur, la minéralogie et la répartition des métaux. La standardisation réduit les écarts, améliore la comparabilité des résultats et sécurise les choix de procédés (flottation, lixiviation, gravimétrie).",
          },
          {
            question: "Quels livrables recevez-vous ?",
            answer:
              "Des rapports techniques structurés, tableaux de résultats, interprétation minéralogique/chimique et recommandations opérationnelles actionnables.",
          },
          {
            question: "Quelles techniques analytiques utilisez-vous ?",
            answer:
              "Nos équipes utilisent notamment XRD, FRX, SEM et QEMSCAN pour produire une image détaillée de la répartition minéralogique, des associations minérales et de la granulométrie.",
          },
        ],
      },
      {
        slug: "operations-minieres",
        title: "Opérations minières",
        summary:
          "Exhaure, forage et transport minier avec une approche orientée sécurité, rendement et continuité des opérations.",
        icon: "OM",
        image: categoryMedia["operations-minieres"],
        services: [
          makeService(
            "exhaure-des-mines",
            "Exhaure des mines",
            "Exhaure et pompage d'eau pour sécuriser les opérations, prévenir les risques HSE et protéger les équipements.",
            serviceMedia["exhaure-des-mines"],
          ),
          makeService(
            "forage-minier",
            "Forage minier",
            "Forage de production et de drainage en mine à ciel ouvert/souterraine avec maîtrise technique, rendement et sécurité.",
            serviceMedia["forage-minier"],
          ),
          makeService(
            "transport-minier",
            "Transport minier",
            "Transport sécurisé des minerais, équipements et consommables industriels avec traçabilité et coordination temps réel.",
            serviceMedia["transport-minier"],
          ),
        ],
        faq: [
          {
            question: "Quelle est votre approche pour l'exhaure des mines ?",
            answer:
              "Nous combinons réactivité opérationnelle, robustesse des équipements (pompes submersibles, motopompes, tuyauterie), maintenance préventive et planification des risques pour sécuriser la continuité des opérations.",
          },
          {
            question: "Intervenez-vous en forage de production et de drainage ?",
            answer:
              "Oui. Nous réalisons forage de production et forage de drainage en mine à ciel ouvert et souterraine, avec une adaptation aux contraintes de profondeur, diamètre et précision.",
          },
          {
            question: "Comment garantissez-vous la fiabilité du transport minier ?",
            answer:
              "Nous mobilisons une flotte adaptée (bennes, camions plateaux, citernes), des chauffeurs formés HSE, une traçabilité continue et une coordination temps réel.",
          },
        ],
      },
      {
        slug: "formations",
        title: "Formations",
        summary:
          "Montée en compétences des équipes minières pour gagner en confiance, leadership et performance.",
        icon: "FO",
        image: categoryMedia.formations,
        services: [
          makeService(
            "amelioration-continue",
            "Amélioration continue",
            "Formations Lean Mining, SPC, maintenance, coûts et performance pour ancrer une culture d'excellence opérationnelle.",
            serviceMedia["amelioration-continue"],
          ),
          makeService(
            "traitement-mineralurgique-et-des-eaux",
            "Traitement minéralurgique et des eaux",
            "Formation en procédés minéralurgiques, performance métallurgique, traitement des effluents et gestion durable de l'eau.",
            serviceMedia["traitement-mineralurgique-et-des-eaux"],
          ),
        ],
        faq: [
          {
            question: "Quels modules couvrez-vous en amélioration continue ?",
            answer:
              "Lean Mining, SPC, maintenance préventive, fiabilité des équipements, gestion des coûts et culture de performance, avec études de cas et ateliers pratiques.",
          },
          {
            question: "La formation traitement minéralurgique inclut-elle les eaux ?",
            answer:
              "Oui. Elle inclut traitement des effluents, recyclage de l'eau industrielle et gestion du drainage minier acide (AMD), en plus des procédés minéralurgiques.",
          },
        ],
      },
      {
        slug: "environnement",
        title: "Environnement",
        summary:
          "Politique environnementale, réhabilitation de sites, QA/QC et surveillance des eaux pour une performance durable.",
        icon: "EN",
        image: categoryMedia.environnement,
        services: [
          makeService(
            "politique-environnementale",
            "Politique environnementale",
            "Diagnostic, cadre juridique, consultation, standards ESG et mécanismes de contrôle pour des politiques environnementales robustes.",
            serviceMedia["politique-environnementale"],
          ),
          makeService(
            "evaluation-et-rehabilitation-des-sites",
            "Évaluation & réhabilitation des sites",
            "Audits des passifs environnementaux, cartographie des risques et plans techniques/financiers de réhabilitation.",
            serviceMedia["evaluation-et-rehabilitation-des-sites"],
          ),
          makeService(
            "controle-qualite-assurance-qualite",
            "Contrôle qualité / Assurance qualité",
            "Système QA/QC complet (étalonnage, standards, blancs, duplicatas, chain of custody) pour résultats défendables.",
            serviceMedia["controle-qualite-assurance-qualite"],
          ),
          makeService(
            "surveillance-qualite-des-eaux",
            "Surveillance qualité des eaux",
            "Surveillance de la qualité des eaux en zones reculées et nouveaux forages selon les usages et exigences de conformité.",
            serviceMedia["surveillance-qualite-des-eaux"],
          ),
          makeService(
            "effluents-miniers-et-drainage-minier-acide",
            "Effluents miniers + drainage minier acide (AMD)",
            "Analyses, diagnostic des pollutions et conception de solutions de traitement des effluents et du drainage minier acide.",
            serviceMedia["effluents-miniers-et-drainage-minier-acide"],
          ),
        ],
        faq: [
          {
            question: "Que couvre votre service de politique environnementale ?",
            answer:
              "Diagnostic sectoriel, analyse du cadre juridique, consultation des parties prenantes, standards ESG, mécanismes de contrôle, garantie environnementale et plan de mise en œuvre.",
          },
          {
            question: "Comment sécurisez-vous la qualité des analyses ?",
            answer:
              "Par un système QA/QC strict: étalonnage des instruments, échantillons blancs et duplicatas, standards certifiés, chaîne de custody documentée et audits internes.",
          },
          {
            question: "Proposez-vous des solutions contre le drainage minier acide (AMD) ?",
            answer:
              "Oui. Nous faisons le diagnostic des sources de pollution, concevons des traitements adaptés (neutralisation, précipitation, filtration, membranes) et mettons en place un monitoring continu.",
          },
        ],
      },
      {
        slug: "gouvernance-minerale",
        title: "Conseil en gouvernance des matières premières minérales",
        summary:
          "Gouvernance et développement stratégique des ressources naturelles pour transformer l'extraction en valeur locale durable.",
        icon: "GV",
        image: categoryMedia["gouvernance-minerale"],
        services: [
          makeService(
            "strategie-recettes-minieres",
            "Stratégie recettes minières",
            "Stratégies d'amélioration des recettes minières et sécurisation des flux financiers extractifs.",
            serviceMedia["strategie-recettes-minieres"],
          ),
          makeService(
            "structuration-organes-et-unites-revenus",
            "Structuration organes/instances & unités revenus",
            "Structuration institutionnelle des organes et unités en charge des ressources et revenus miniers.",
            serviceMedia["structuration-organes-et-unites-revenus"],
          ),
          makeService(
            "integration-locale-et-politique-industrielle",
            "Intégration locale & politique industrielle",
            "Conseil en intégration locale: compétitivité, CAPEX raffineries, emploi, incitations fiscales et zones industrielles.",
            serviceMedia["integration-locale-et-politique-industrielle"],
          ),
          makeService(
            "controle-production-et-reporting",
            "Contrôle production + reporting",
            "Mise en œuvre des contrôles de production et systèmes de reporting pour une supervision minière fiable.",
            serviceMedia["controle-production-et-reporting"],
          ),
          makeService(
            "audit-flux-paiements-et-tracabilite-export",
            "Audit flux paiements + traçabilité export",
            "Audit des flux de paiements et traçabilité des volumes exportés pour réduire les pertes de revenus.",
            serviceMedia["audit-flux-paiements-et-tracabilite-export"],
          ),
          makeService(
            "renforcement-capacites-administration",
            "Renforcement capacités administration",
            "Renforcement des capacités des administrations minières: formation, outils d'évaluation et assistance technique continue.",
            serviceMedia["renforcement-capacites-administration"],
          ),
        ],
        faq: [
          {
            question: "Quels livrables en gouvernance minérale fournissez-vous ?",
            answer:
              "Stratégies d'amélioration des recettes minières, manuels de procédures, outils d'évaluation des projets, plans de contrôle production/reporting et dispositifs de traçabilité export.",
          },
          {
            question: "Intervenez-vous sur l'intégration locale et la politique industrielle ?",
            answer:
              "Oui. Nous réalisons études de compétitivité, analyses CAPEX de raffineries, plans d'incitations fiscales et structuration de zones industrielles minières.",
          },
          {
            question: "Accompagnez-vous les administrations sur la durée ?",
            answer:
              "Oui. Nos programmes incluent formation des cadres ministériels, création d'unités spécialisées revenus miniers et assistance technique continue.",
          },
        ],
      },
    ],
    ctaBand: {
      title: "Partenaire de vos projets miniers",
      subtitle:
        "Nous mobilisons les bonnes expertises pour accélérer l'impact opérationnel, institutionnel et durable.",
      primaryCta: "PARTENARIAT AVEC TERRA PRETIOSA",
      secondaryCta: "Nous contacter",
    },
    capabilitiesTitle: "Compétences clés",
    exploreLabel: "Explorer",
    allServicesLabel: "Tous les services",
    relatedTitle: "Services associés",
    faqTitle: "Questions fréquentes",
  },
  team: {
    pageTitle: "Notre équipe",
    intro:
      "La présentation détaillée de l'équipe Terra Pretiosa sera intégrée avec les photos et mini CV dès validation des profils définitifs.",
    note: "Photos et mini CV seront ajoutés après validation client.",
    cvLabel: "Télécharger mini CV",
    members: [
      {
        name: "Profil gouvernance minérale",
        role: "En cours d'intégration",
        bio: "Photo et mini CV à venir après validation des profils Terra Pretiosa.",
        image: "/placeholders/team-1.svg",
      },
      {
        name: "Profil opérations minières",
        role: "En cours d'intégration",
        bio: "Photo et mini CV à venir après validation des profils Terra Pretiosa.",
        image: "/placeholders/team-2.svg",
      },
      {
        name: "Profil environnement",
        role: "En cours d'intégration",
        bio: "Photo et mini CV à venir après validation des profils Terra Pretiosa.",
        image: "/placeholders/team-3.svg",
      },
      {
        name: "Profil essais et analyses",
        role: "En cours d'intégration",
        bio: "Photo et mini CV à venir après validation des profils Terra Pretiosa.",
        image: "/placeholders/team-4.svg",
      },
      {
        name: "Profil formation",
        role: "En cours d'intégration",
        bio: "Photo et mini CV à venir après validation des profils Terra Pretiosa.",
        image: "/placeholders/team-5.svg",
      },
      {
        name: "Profil stratégie et gouvernance",
        role: "En cours d'intégration",
        bio: "Photo et mini CV à venir après validation des profils Terra Pretiosa.",
        image: "/placeholders/team-6.svg",
      },
    ],
  },
  contact: {
    pageTitle: "Contact",
    intro:
      "Échangeons sur vos enjeux techniques, environnementaux et de gouvernance des matières premières minérales. Utilisez le formulaire ci-dessous pour cadrer votre besoin, votre zone d'intervention et le type d'appui recherché.",
    hqTitle: "Siège social",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    corridorTitle: "Corridor d'activité",
    corridorCountries: [
      "Burkina Faso",
      "RDC",
      "Guinée Conakry",
      "Sénégal",
      "Niger",
      "Mali",
    ],
    phoneLabel: "Téléphone",
    phoneValue: "Numéro personnel (temporaire, en attendant la ligne entreprise)",
    emailLabel: "Email",
    emailValue: "Adresse email de la compagnie en cours de création",
    formTitle: "Nous contacter",
    formSuccess: "Merci, votre message a bien été envoyé.",
    formFields: {
      firstName: "Prénom *",
      lastName: "Nom *",
      email: "Email *",
      phoneOptional: "Téléphone (optionnel)",
      serviceLocation: "Lieu du service *",
      stateProvince: "État/Province",
      serviceIndustry: "Secteur de service",
      enquiryType: "Type de demande *",
      message: "Message *",
      consentText: "J'accepte la",
      privacyPolicyLabel: "Politique de confidentialité",
      submit: "SOUMETTRE",
    },
    formOptions: {
      selectPlaceholder: "-",
      serviceLocations: [
        "Burkina Faso",
        "RDC",
        "Guinée Conakry",
        "Sénégal",
        "Niger",
        "Mali",
        "États-Unis",
      ],
      statesProvinces: [
        "Kadiogo",
        "Haut-Katanga",
        "Conakry",
        "Dakar",
        "Niamey",
        "Bamako",
        "Maryland",
      ],
      serviceIndustries: [
        "Essais & Analyses",
        "Opérations minières",
        "Formations",
        "Environnement",
        "Gouvernance minérale",
      ],
      enquiryTypes: [
        "Demande de service",
        "Question technique",
        "Partenariat",
        "Autre",
      ],
    },
    formErrors: {
      required: "Ce champ est requis.",
      email: "Adresse email invalide.",
      consent: "Vous devez accepter la politique de confidentialité.",
    },
  },
  mission: {
    pageTitle: "Lancer une mission",
    intro:
      "Décrivez le contexte de votre projet, les objectifs techniques ou institutionnels, le calendrier visé et les contraintes clés. Nous vous répondrons avec un cadrage de mission adapté à votre besoin.",
    formSuccess: "Merci. Votre demande de mission a été enregistrée.",
    missionTypes: [
      "Essais & Analyses",
      "Opérations minières",
      "Formations",
      "Environnement",
      "Gouvernance minérale",
    ],
    formFields: {
      name: "Nom complet",
      email: "Email",
      organization: "Organisation",
      country: "Pays",
      missionType: "Type de mission",
      timeline: "Calendrier souhaité",
      budget: "Budget (optionnel)",
      details: "Détails de la mission",
      submit: "Soumettre la demande",
    },
    formErrors: {
      required: "Ce champ est requis.",
      email: "Adresse email invalide.",
    },
  },
  footer: {
    columns: [
      {
        groups: [
          {
            title: "Informations entreprise",
            links: [
              { label: "À propos", href: "/fr/company#about" },
              { label: "Mégatendance", href: "/fr/company#megatrends" },
              { label: "Développement durable", href: "/fr/company#sustainable" },
              { label: "Nos ambitions", href: "/fr/company#ambitions" },
              { label: "Équipe", href: "/fr/team" },
              { label: "Actualités", href: "/fr/news" },
              { label: "Contact", href: "/fr/contact" },
            ],
          },
          {
            title: "Corridor d'activité",
            links: [
              { label: "Pays d'intervention", href: "/fr/company#corridor" },
              { label: "Lancer une mission", href: "/fr/mission" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Essais & Analyses",
            links: [
              {
                label: "Fragmentation des roches",
                href: "/fr/services/essais-analyses/fragmentation-des-roches",
              },
              {
                label: "Préparation des échantillons",
                href: "/fr/services/essais-analyses/preparation-des-echantillons",
              },
              {
                label: "Analyses minéralogiques et chimiques",
                href: "/fr/services/essais-analyses/analyses-mineralogiques-et-chimiques",
              },
              {
                label: "Tests minéralurgiques et métallurgiques",
                href: "/fr/services/essais-analyses/tests-mineralurgiques-et-metallurgiques",
              },
            ],
          },
          {
            title: "Opérations minières",
            links: [
              {
                label: "Exhaure des mines",
                href: "/fr/services/operations-minieres/exhaure-des-mines",
              },
              {
                label: "Forage minier",
                href: "/fr/services/operations-minieres/forage-minier",
              },
              {
                label: "Transport minier",
                href: "/fr/services/operations-minieres/transport-minier",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Formations",
            links: [
              {
                label: "Amélioration continue",
                href: "/fr/services/formations/amelioration-continue",
              },
              {
                label: "Traitement minéralurgique et des eaux",
                href: "/fr/services/formations/traitement-mineralurgique-et-des-eaux",
              },
            ],
          },
          {
            title: "Environnement",
            links: [
              {
                label: "Politique environnementale",
                href: "/fr/services/environnement/politique-environnementale",
              },
              {
                label: "Évaluation et réhabilitation des sites",
                href: "/fr/services/environnement/evaluation-et-rehabilitation-des-sites",
              },
              {
                label: "Contrôle qualité / Assurance qualité",
                href: "/fr/services/environnement/controle-qualite-assurance-qualite",
              },
              {
                label: "Surveillance qualité des eaux",
                href: "/fr/services/environnement/surveillance-qualite-des-eaux",
              },
              {
                label: "Effluents miniers + AMD",
                href: "/fr/services/environnement/effluents-miniers-et-drainage-minier-acide",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Gouvernance minérale",
            links: [
              {
                label: "Stratégie recettes minières",
                href: "/fr/services/gouvernance-minerale/strategie-recettes-minieres",
              },
              {
                label: "Structuration organes et unités revenus",
                href: "/fr/services/gouvernance-minerale/structuration-organes-et-unites-revenus",
              },
              {
                label: "Intégration locale et politique industrielle",
                href: "/fr/services/gouvernance-minerale/integration-locale-et-politique-industrielle",
              },
              {
                label: "Contrôle production et reporting",
                href: "/fr/services/gouvernance-minerale/controle-production-et-reporting",
              },
              {
                label: "Audit flux paiements et traçabilité export",
                href: "/fr/services/gouvernance-minerale/audit-flux-paiements-et-tracabilite-export",
              },
              {
                label: "Renforcement capacités administration",
                href: "/fr/services/gouvernance-minerale/renforcement-capacites-administration",
              },
            ],
          },
          {
            title: "Accès rapide",
            links: [
              { label: "Tous les services", href: "/fr/services" },
              { label: "Nous écrire", href: "/fr/contact" },
              { label: "Lancer une mission", href: "/fr/mission" },
            ],
          },
        ],
      },
    ],
    quickLinksTitle: "Autres liens",
    quickLinks: [
      { label: "Corridor d'activité", href: "/fr/company#corridor" },
      { label: "Page entreprise", href: "/fr/company" },
      { label: "Formulaire mission", href: "/fr/mission" },
    ],
    legal: "(c) Terra Pretiosa. Tous droits réservés.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "X", href: "https://x.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
    ],
  },
  news: {
    pageTitle: "Actualités & analyses",
    intro:
      "Notes d'analyse, retours d'expérience et décryptages techniques consacrés à la gouvernance minérale, aux opérations minières, à la performance environnementale et à la création de valeur en Afrique.",
    allNewsLabel: "Toutes les analyses",
    latestLabel: "Dernières analyses",
    readArticle: "Lire l'analyse",
    articles: [
      {
        slug: "gouvernance-minerale-afrique-2026",
        title:
          "Minerais critiques en Afrique : de la rente extractive à la valeur industrielle",
        excerpt:
          "La décennie qui s'ouvre se jouera sur la capacité des pays producteurs à transformer les recettes minières en infrastructures, compétences, énergie fiable et base industrielle locale.",
        date: "2026-03-10",
        image: newsMedia.governance,
        tag: "Gouvernance",
        body: [
          "La compétition autour des minerais critiques ne porte plus uniquement sur l'accès au gisement. Elle porte désormais sur la qualité des cadres de gouvernance, la fiabilité des données déclaratives, la rapidité des décisions administratives et la capacité à créer de la valeur au-delà de l'exportation brute.",
          "Pour les États producteurs, l'enjeu n'est pas seulement d'accroître les volumes sortis de mine. Il s'agit de sécuriser l'assiette fiscale, de contrôler les tonnages et les teneurs commercialisées, et d'orienter la rente minière vers des investissements productifs : énergie, logistique, formation technique et services industriels.",
          "Une gouvernance robuste repose sur des mécanismes très concrets : procédures normalisées de reporting, rapprochement production-export, audit des flux de paiement, exigences ESG crédibles et instruments financiers permettant de couvrir les engagements de réhabilitation.",
          "Terra Pretiosa accompagne cette transition en combinant conseil institutionnel, renforcement de capacités administratives et appui technique aux opérateurs afin que la performance minière se traduise en création de valeur mesurable pour les territoires.",
        ],
      },
      {
        slug: "chaines-approvisionnement-mineraux-critiques",
        title:
          "Traçabilité export et contrôle de production : verrouiller les flux de minéraux critiques",
        excerpt:
          "L'enjeu n'est plus seulement d'extraire. Il faut rapprocher données de fosse, échantillonnage, stocks, expéditions et paiements pour fiabiliser la recette minière et limiter les écarts.",
        date: "2026-02-22",
        image: newsMedia.supplyChain,
        tag: "Supply Chain",
        body: [
          "Les ruptures logistiques et les exigences accrues des acheteurs ont déplacé le centre de gravité de la performance minière vers la maîtrise des flux. Une chaîne de valeur crédible doit être capable de relier données de production, qualité marchande, humidité, pertes de manutention, volumes exportés et règlements effectivement reçus.",
          "Dans de nombreux contextes, l'écart de performance ne se situe pas à l'usine mais dans les interfaces : sondages mal rapprochés des stocks, absence de contrôles indépendants, faible discipline documentaire ou reporting non harmonisé entre mine, laboratoire, logistique et administration.",
          "Le contrôle de production et la traçabilité export doivent donc reposer sur une architecture opérationnelle claire : points de mesure identifiés, chaîne de custody documentée, protocoles de réconciliation matière et tableaux de bord partagés entre exploitant, autorités de contrôle et fonctions financières.",
          "Terra Pretiosa structure ces dispositifs pour réduire les fuites de revenus, améliorer la qualité des déclarations et renforcer la confiance entre opérateurs, États et partenaires commerciaux.",
        ],
      },
      {
        slug: "rehabilitation-sites-miniers",
        title:
          "Réhabilitation progressive : intégrer fermeture, gestion des eaux et passifs dès la conception",
        excerpt:
          "La performance ESG d'un site minier se construit dès l'étude de faisabilité, lorsque les passifs, les risques hydrogéologiques et les coûts de fermeture peuvent encore être maîtrisés.",
        date: "2026-02-05",
        image: newsMedia.environment,
        tag: "Environnement",
        body: [
          "La fermeture n'est plus un sujet de fin de vie de la mine. Elle est devenue une variable de conception qui influence le séquencement des travaux, la gestion des stériles, la stratégie de stockage des résidus et le coût total du projet.",
          "Une approche rigoureuse commence par l'identification précoce des passifs potentiels : drainage minier acide, stabilité géotechnique, contamination des eaux, érosion, sécurité des infrastructures abandonnées et usages futurs du foncier.",
          "La réhabilitation progressive permet de traiter ces enjeux au rythme de l'exploitation plutôt qu'en fin de cycle, lorsque les coûts augmentent et que la marge de manœuvre technique se réduit. Elle améliore également la lisibilité des engagements ESG auprès des communautés, des investisseurs et des autorités.",
          "Terra Pretiosa accompagne les opérateurs avec des diagnostics de risque, des plans de réhabilitation phasés, des bilans d'eau et des dispositifs de suivi environnemental permettant d'aligner conformité réglementaire, maîtrise des coûts et crédibilité opérationnelle.",
        ],
      },
      {
        slug: "formation-competences-minieres",
        title:
          "Compétences mine-usine : la performance durable se construit sur le terrain",
        excerpt:
          "La stabilité métallurgique, la disponibilité des équipements et la rigueur QA/QC dépendent moins des présentations en salle que de la discipline opératoire installée sur site.",
        date: "2026-01-18",
        image: newsMedia.training,
        tag: "Formation",
        body: [
          "Dans de nombreuses opérations, les contre-performances répétées ne proviennent pas d'un manque d'équipements, mais d'écarts de pratique : paramètres de procédé mal tenus, inspections préventives irrégulières, dérive des protocoles d'échantillonnage ou transmission incomplète entre équipes de quart.",
          "La montée en compétence doit donc être pensée comme un dispositif de terrain. Elle combine standards opératoires, routines de supervision, analyses de causes racines, coaching poste de travail et indicateurs simples directement exploitables par les responsables mine, usine, maintenance et laboratoire.",
          "Les formations efficaces relient les contenus techniques aux variables de performance réelles : récupération métallurgique, dilution, disponibilité mécanique, qualité des données analytiques, temps d'arrêt et conformité environnementale.",
          "Terra Pretiosa construit ses programmes de formation autour de cette logique d'appropriation opérationnelle afin que le transfert de savoir-faire se traduise par moins de variabilité, plus de maîtrise et une meilleure autonomie des équipes locales.",
        ],
      },
    ],
  },
  search: {
    title: "Recherche",
    placeholder: "Rechercher un service, une page ou un insight...",
    suggestedLabel: "Suggestions",
    noResult: "Aucun résultat pour cette recherche.",
  },
};
