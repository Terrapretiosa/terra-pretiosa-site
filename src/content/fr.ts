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
      title: "Diagnostic ciblé",
      text: "Nous identifions rapidement les points critiques pour prioriser les actions à plus fort impact.",
      ctaLabel: "Échanger avec un expert",
      ctaHref: "/fr/contact",
      image: "/placeholders/highlight-1.svg",
    },
    {
      title: "Exécution maîtrisée",
      text: "Le plan d'intervention est rythmé par des jalons clairs, un suivi qualité et des revues d'avancement.",
      ctaLabel: "Voir nos services",
      ctaHref: "/fr/services",
      image: "/placeholders/highlight-2.svg",
    },
    {
      title: "Mesure des résultats",
      text: "Nous suivons des indicateurs techniques et économiques pour sécuriser la performance de la mission.",
      ctaLabel: "Lancer une mission",
      ctaHref: "/fr/contact",
      image: "/placeholders/highlight-3.svg",
    },
    {
      title: "Transfert durable",
      text: "Les équipes client disposent de méthodes, standards et supports directement utilisables après la mission.",
      ctaLabel: "Nous contacter",
      ctaHref: "/fr/contact",
      image: "/placeholders/highlight-4.svg",
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
    partnerCta: "PARTENAIRE AVEC TERRA PRETIOSA",
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
        image: "/placeholders/hero-1.svg",
      },
      {
        title: "Gouvernance minérale et industrialisation durable",
        subtitle:
          "Firme stratégique spécialisée en prestation de services et gouvernance des ressources minérales, résilience des chaînes d'approvisionnement et industrialisation durable en Afrique.",
        ctaLabel: "Voir notre approche",
        ctaHref: "/fr/company",
        image: "/placeholders/hero-2.svg",
      },
      {
        title: "Partenaire des États, institutions et industriels",
        subtitle:
          "Nous accompagnons la conception et la mise en œuvre de stratégies intégrées pour passer d'un modèle d'exportation brute à une économie de valeur ajoutée locale.",
        ctaLabel: "Lancer une mission",
        ctaHref: "/fr/contact",
        image: "/placeholders/hero-3.svg",
      },
    ],
    features: [
      {
        title: "Une offre intégrée Mines & Ressources",
        text: "Essais et analyses, opérations minières, formations, environnement et gouvernance: des services intégrés, durables et orientés résultats.",
        ctaLabel: "Explorer les catégories",
        ctaHref: "/fr/services",
        image: "/placeholders/feature-1.svg",
      },
      {
        title: "Corridor d'activité africain",
        text: "Nous intervenons au Burkina Faso, en RDC, en Guinée Conakry, au Sénégal, au Niger et au Mali, avec un siège social à Gaithersburg (Maryland, USA).",
        ctaLabel: "Voir le corridor d'activité",
        ctaHref: "/fr/company#corridor",
        image: "/placeholders/feature-2.svg",
      },
      {
        title: "Souveraineté industrielle et prospérité durable",
        text: "Notre ambition est de transformer les ressources naturelles en leviers de développement économique, de souveraineté industrielle et de stabilité macroéconomique.",
        ctaLabel: "Découvrir nos ambitions",
        ctaHref: "/fr/company#ambitions",
        image: "/placeholders/feature-3.svg",
      },
    ],
    servicesSitemapTitle: "SERVICES",
    servicesSitemapSubtitle:
      "Parcourez nos domaines d'intervention pour structurer, sécuriser et accélérer vos opérations minières et environnementales.",
    serviceGridTitle: "Expertises clés",
    serviceGridIntro:
      "Une sélection de services à haute valeur ajoutée couvrant la chaîne technique, opérationnelle et de gouvernance.",
    insights: {
      title: "Insights",
      featuredTitle: "Mégatendance: services miniers intégrés et durables",
      featuredExcerpt:
        "Face à la montée des exigences environnementales, de sécurité et de productivité, les États et compagnies minières africaines recherchent des partenaires capables de combiner technologie, réactivité locale et conformité environnementale.",
      featuredHref: "/fr/company#megatrends",
      items: [
        {
          title: "Lutte contre la pauvreté rurale et le chômage des jeunes",
          excerpt:
            "Nos interventions visent des impacts socioéconomiques locaux mesurables et durables.",
          href: "/fr/company#megatrends",
        },
        {
          title: "Qualité des eaux et conformité ESG",
          excerpt:
            "Le suivi des effluents et des eaux minières devient un levier de performance durable.",
          href: "/fr/services/environnement",
        },
        {
          title: "Transmission du savoir-faire minier",
          excerpt:
            "Formations et renforcement de capacités pour opérateurs, institutions et administrations.",
          href: "/fr/services/formations",
        },
        {
          title: "Conseil en gouvernance des ressources minérales",
          excerpt:
            "Appui stratégique aux États pour structurer les recettes minières, le contrôle de production et la traçabilité export.",
          href: "/fr/services/gouvernance-minerale",
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
        text: "La civilisation humaine doit tout au sol et au sous-sol. Nous devons l'exploiter intelligemment pour notre prospérité et le protéger pour les générations futures.",
      },
      {
        title: "Positionnement",
        text: "Nous sommes une firme stratégique spécialisée en prestation de services et gouvernance des ressources minérales critiques, résilience des chaînes d'approvisionnement et industrialisation durable en Afrique.",
      },
      {
        title: "Ambition",
        text: "Notre ambition est de renforcer la capacité des pays africains à transformer leurs ressources naturelles en leviers de développement économique, souveraineté industrielle et stabilité macroéconomique.",
      },
      {
        title: "Approche",
        text: "Nous accompagnons gouvernements, institutions financières internationales et partenaires industriels avec une combinaison rigoureuse d'expertise technique minérale, analyse macroéconomique, politiques industrielles ciblées et gouvernance ESG alignée aux standards internationaux.",
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
      "Face à la montée des exigences environnementales, de sécurité et de productivité, les États et compagnies minières africaines recherchent des partenaires capables d'offrir des services intégrés et durables: forage de précision, transport sécurisé, exhaure efficace des sites inondés et analyses rapides des minerais. Terra Pretiosa s'inscrit dans cette dynamique avec une forte réactivité locale et une conformité environnementale robuste.",
    miningDevTitle: "Exploitation minière pour un développement efficace",
    miningDevText:
      "Le concept clé est l'exploitation minière comme moteur de développement et de transformation continentale. Être acteur majeur des opérations minières permet de créer de la richesse, des emplois et de transmettre la connaissance et le savoir-faire.",
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
      "Prestation de services en mines et ressources minérales: Terra Pretiosa intervient de l'analyse technique à la gouvernance stratégique avec une exécution orientée résultats, conformité et création de valeur locale.",
    categoriesTitle: "Catégories de services",
    sitemapTitle: "Plan des services",
    featuredTitle: "Insight en vedette",
    featuredText:
      "Nous plaçons l'Afrique au cœur de l'action en combinant excellence technique, maîtrise des risques opérationnels et gouvernance responsable.",
    categories: [
      {
        slug: "essais-analyses",
        title: "Essais & Analyses",
        summary:
          "Essais et analyses en traitement des minerais: au cœur de l'action pour une Afrique plus prospère et soucieuse de ses ressources.",
        icon: "EA",
        image: "/placeholders/category-1.svg",
        services: [
          makeService(
            "fragmentation-des-roches",
            "Fragmentation des roches",
            "Contrôle de la fragmentation et du broyage pour fiabiliser l'échantillonnage, les analyses et la récupération métallurgique.",
            "/placeholders/service-card-1.svg",
          ),
          makeService(
            "preparation-des-echantillons",
            "Préparation des échantillons",
            "Préparation rigoureuse d'échantillons homogènes et représentatifs pour sécuriser les décisions techniques et économiques.",
            "/placeholders/service-card-2.svg",
          ),
          makeService(
            "analyses-mineralogiques-et-chimiques",
            "Analyses minéralogiques et chimiques",
            "Analyses avancées (XRD, FRX, SEM, QEMSCAN) pour comprendre le gisement et optimiser les choix métallurgiques.",
            "/placeholders/service-card-3.svg",
          ),
          makeService(
            "tests-mineralurgiques-et-metallurgiques",
            "Tests minéralurgiques et métallurgiques",
            "Essais complets (flottation, gravimétrie, lixiviation) pour optimiser rendement, récupération et schémas de traitement.",
            "/placeholders/service-card-4.svg",
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
        image: "/placeholders/category-2.svg",
        services: [
          makeService(
            "exhaure-des-mines",
            "Exhaure des mines",
            "Exhaure et pompage d'eau pour sécuriser les opérations, prévenir les risques HSE et protéger les équipements.",
            "/placeholders/service-card-5.svg",
          ),
          makeService(
            "forage-minier",
            "Forage minier",
            "Forage de production et de drainage en mine à ciel ouvert/souterraine avec maîtrise technique, rendement et sécurité.",
            "/placeholders/service-card-6.svg",
          ),
          makeService(
            "transport-minier",
            "Transport minier",
            "Transport sécurisé des minerais, équipements et consommables industriels avec traçabilité et coordination temps réel.",
            "/placeholders/service-card-7.svg",
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
        image: "/placeholders/category-3.svg",
        services: [
          makeService(
            "amelioration-continue",
            "Amélioration continue",
            "Formations Lean Mining, SPC, maintenance, coûts et performance pour ancrer une culture d'excellence opérationnelle.",
            "/placeholders/service-card-8.svg",
          ),
          makeService(
            "traitement-mineralurgique-et-des-eaux",
            "Traitement minéralurgique et des eaux",
            "Formation en procédés minéralurgiques, performance métallurgique, traitement des effluents et gestion durable de l'eau.",
            "/placeholders/service-card-9.svg",
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
        image: "/placeholders/category-4.svg",
        services: [
          makeService(
            "politique-environnementale",
            "Politique environnementale",
            "Diagnostic, cadre juridique, consultation, standards ESG et mécanismes de contrôle pour des politiques environnementales robustes.",
            "/placeholders/service-card-10.svg",
          ),
          makeService(
            "evaluation-et-rehabilitation-des-sites",
            "Évaluation & réhabilitation des sites",
            "Audits des passifs environnementaux, cartographie des risques et plans techniques/financiers de réhabilitation.",
            "/placeholders/service-card-11.svg",
          ),
          makeService(
            "controle-qualite-assurance-qualite",
            "Contrôle qualité / Assurance qualité",
            "Système QA/QC complet (étalonnage, standards, blancs, duplicatas, chain of custody) pour résultats défendables.",
            "/placeholders/service-card-12.svg",
          ),
          makeService(
            "surveillance-qualite-des-eaux",
            "Surveillance qualité des eaux",
            "Surveillance de la qualité des eaux en zones reculées et nouveaux forages selon les usages et exigences de conformité.",
            "/placeholders/service-card-13.svg",
          ),
          makeService(
            "effluents-miniers-et-drainage-minier-acide",
            "Effluents miniers + drainage minier acide (AMD)",
            "Analyses, diagnostic des pollutions et conception de solutions de traitement des effluents et du drainage minier acide.",
            "/placeholders/service-card-14.svg",
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
        image: "/placeholders/category-5.svg",
        services: [
          makeService(
            "strategie-recettes-minieres",
            "Stratégie recettes minières",
            "Stratégies d'amélioration des recettes minières et sécurisation des flux financiers extractifs.",
            "/placeholders/service-card-15.svg",
          ),
          makeService(
            "structuration-organes-et-unites-revenus",
            "Structuration organes/instances & unités revenus",
            "Structuration institutionnelle des organes et unités en charge des ressources et revenus miniers.",
            "/placeholders/service-card-16.svg",
          ),
          makeService(
            "integration-locale-et-politique-industrielle",
            "Intégration locale & politique industrielle",
            "Conseil en intégration locale: compétitivité, CAPEX raffineries, emploi, incitations fiscales et zones industrielles.",
            "/placeholders/service-card-17.svg",
          ),
          makeService(
            "controle-production-et-reporting",
            "Contrôle production + reporting",
            "Mise en œuvre des contrôles de production et systèmes de reporting pour une supervision minière fiable.",
            "/placeholders/service-card-18.svg",
          ),
          makeService(
            "audit-flux-paiements-et-tracabilite-export",
            "Audit flux paiements + traçabilité export",
            "Audit des flux de paiements et traçabilité des volumes exportés pour réduire les pertes de revenus.",
            "/placeholders/service-card-19.svg",
          ),
          makeService(
            "renforcement-capacites-administration",
            "Renforcement capacités administration",
            "Renforcement des capacités des administrations minières: formation, outils d'évaluation et assistance technique continue.",
            "/placeholders/service-card-20.svg",
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
      primaryCta: "PARTENAIRE AVEC TERRA PRETIOSA",
      secondaryCta: "Nous contacter",
    },
    relatedTitle: "Services associés",
    faqTitle: "Questions fréquentes",
  },
  team: {
    pageTitle: "Notre équipe",
    intro:
      "Ici, nous mettrons les photos et mini CV de toute l'équipe qui travaille dans la firme.",
    note: "Photos et mini CV en cours d'intégration.",
    cvLabel: "Télécharger mini CV",
    members: [
      {
        name: "Amina Traoré",
        role: "Associée - Gouvernance minière",
        bio: "Spécialiste des politiques minières, recettes extractives et cadres institutionnels.",
        image: "/placeholders/team-1.svg",
      },
      {
        name: "Moussa Diallo",
        role: "Directeur opérations",
        bio: "Expert en pilotage de sites miniers, performance terrain et sécurité opérationnelle.",
        image: "/placeholders/team-2.svg",
      },
      {
        name: "Clara Mvemba",
        role: "Lead environnement",
        bio: "Ingénieure en gestion des eaux minières, conformité ESG et réhabilitation de sites.",
        image: "/placeholders/team-3.svg",
      },
      {
        name: "Jean Kaboré",
        role: "Responsable analyses",
        bio: "Expert en QA/QC, préparation d'échantillons et interprétation des données analytiques.",
        image: "/placeholders/team-4.svg",
      },
      {
        name: "Fatou Ndiaye",
        role: "Consultante formation",
        bio: "Conçoit des programmes Lean/SPC et d'amélioration continue pour équipes techniques.",
        image: "/placeholders/team-5.svg",
      },
      {
        name: "David Okoro",
        role: "Consultant stratégie",
        bio: "Accompagne les stratégies d'intégration locale et de politique industrielle minérale.",
        image: "/placeholders/team-6.svg",
      },
    ],
  },
  contact: {
    pageTitle: "Contact",
    intro:
      "Discutons de vos enjeux techniques, environnementaux et de gouvernance des matières premières minérales. Vous pouvez également nous contacter via le formulaire ci-dessous.",
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
    emailValue: "Email de la compagnie à créer",
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
        "Etats-Unis",
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
      "Partagez les objectifs et contraintes de votre mission. Notre équipe vous répondra avec une proposition adaptée au contexte de votre projet.",
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
              { label: "Contact", href: "/fr/contact" },
            ],
          },
          {
            title: "Corridor d'activité",
            links: [
              { label: "Pays d'intervention", href: "/fr/company#corridor" },
              { label: "Lancer une mission", href: "/fr/contact" },
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
              { label: "Lancer une mission", href: "/fr/contact" },
            ],
          },
        ],
      },
    ],
    quickLinksTitle: "Autres liens",
    quickLinks: [
      { label: "Corridor d'activité", href: "/fr/company#corridor" },
      { label: "Page entreprise", href: "/fr/company" },
      { label: "Formulaire mission", href: "/fr/contact" },
    ],
    legal: "(c) Terra Pretiosa. Tous droits réservés.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "X", href: "https://x.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
    ],
  },
  search: {
    title: "Recherche",
    placeholder: "Rechercher un service, une page ou un insight...",
    suggestedLabel: "Suggestions",
    noResult: "Aucun résultat pour cette recherche.",
  },
};


