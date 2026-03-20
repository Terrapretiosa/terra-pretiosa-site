import type { FaqItem } from "./types";

const faq = (question: string, answer: string): FaqItem => ({ question, answer });

export const serviceFaqsBySlugFr: Record<string, FaqItem[]> = {
  "fragmentation-des-roches": [
    faq(
      "Quel est l'objectif principal de la fragmentation ?",
      "Obtenir une granulométrie adaptée à l'étape suivante, qu'il s'agisse d'échantillonnage, d'analyses de laboratoire ou d'essais métallurgiques, tout en limitant la production de fines inutiles.",
    ),
    faq(
      "Quels paramètres suivez-vous en priorité ?",
      "Nous suivons notamment la taille d'alimentation, la distribution granulométrique, la régularité de broyage et les risques de sur-pulvérisation afin de sécuriser la représentativité et la récupération métallurgique.",
    ),
  ],
  "preparation-des-echantillons": [
    faq(
      "Comment garantissez-vous la représentativité des échantillons ?",
      "Nous appliquons une chaîne disciplinée: identification, séchage si requis, réduction granulométrique par étapes, homogénéisation, fractionnement et traçabilité documentaire à chaque transfert.",
    ),
    faq(
      "Comment maîtrisez-vous les risques de contamination ?",
      "Les protocoles intègrent le nettoyage entre lots, la séparation des matériaux sensibles, le contrôle des contenants et l'enregistrement des opérations critiques pour préserver l'intégrité analytique.",
    ),
  ],
  "analyses-mineralogiques-et-chimiques": [
    faq(
      "Quand faut-il combiner minéralogie et chimie ?",
      "Lorsque la décision dépend à la fois de la teneur et du mode d'occurrence des éléments. La chimie quantifie, tandis que la minéralogie précise les phases porteuses, les associations minérales et le comportement probable au traitement.",
    ),
    faq(
      "Quels livrables recevez-vous ?",
      "Des tableaux analytiques, une interprétation technique des résultats, les points de vigilance métallurgiques ou environnementaux et des recommandations de tests ou de contrôles complémentaires.",
    ),
  ],
  "tests-mineralurgiques-et-metallurgiques": [
    faq(
      "Quels essais pouvez-vous structurer ?",
      "Selon le minerai et l'objectif, nous structurons des essais granulométriques, gravimétriques, de flottation ou de lixiviation afin d'évaluer récupération, sélectivité et sensibilité aux paramètres opératoires.",
    ),
    faq(
      "À quoi servent les résultats d'essais ?",
      "Ils permettent de comparer des schémas de traitement, d'identifier les variables critiques, d'orienter les programmes de tests suivants et de réduire l'incertitude technique avant les décisions d'investissement.",
    ),
  ],
  "exhaure-des-mines": [
    faq(
      "Quand une mission d'exhaure devient-elle critique ?",
      "Dès que les arrivées d'eau compromettent la sécurité, l'accès aux zones de travail, la stabilité géotechnique, la disponibilité des équipements ou la continuité de production.",
    ),
    faq(
      "Comment dimensionnez-vous un dispositif d'exhaure ?",
      "Le dimensionnement repose sur les débits attendus, la profondeur, les caractéristiques physico-chimiques de l'eau, la configuration du site et les contraintes d'exploitation, de maintenance et de HSE.",
    ),
  ],
  "forage-minier": [
    faq(
      "Quels types de forage couvrez-vous ?",
      "Nous intervenons sur les forages de production et de drainage, en mine à ciel ouvert comme en souterrain, avec des exigences de précision adaptées à la géométrie, au diamètre et à la profondeur visés.",
    ),
    faq(
      "Comment suivez-vous la performance d'une campagne ?",
      "Nous suivons la productivité, la qualité d'exécution, la tenue des paramètres techniques, la disponibilité des équipements et le respect des exigences de sécurité sur l'ensemble du cycle.",
    ),
  ],
  "transport-minier": [
    faq(
      "Quels flux prenez-vous en charge ?",
      "Le transport des minerais, des équipements, des consommables et, selon les besoins, des fluides industriels, entre fosse, usine, base logistique et points d'exportation.",
    ),
    faq(
      "Comment sécurisez-vous la continuité logistique ?",
      "Par une flotte adaptée, un pilotage des itinéraires, une coordination opérationnelle resserrée, des standards HSE appliqués aux conducteurs et une traçabilité des mouvements.",
    ),
  ],
  "amelioration-continue": [
    faq(
      "À qui s'adressent ces formations ?",
      "Aux équipes mine, usine, maintenance, laboratoire et encadrement qui doivent réduire la variabilité, renforcer la discipline opérationnelle et améliorer les résultats de manière durable.",
    ),
    faq(
      "Quels résultats opérationnels visez-vous ?",
      "Une meilleure maîtrise des écarts, des routines de pilotage plus robustes, des indicateurs réellement exploités par le terrain et une culture de performance mieux ancrée.",
    ),
  ],
  "traitement-mineralurgique-et-des-eaux": [
    faq(
      "Quels thèmes le programme couvre-t-il ?",
      "Les opérations de concassage, broyage, classification, flottation, lixiviation, bilans massiques, recyclage de l'eau industrielle et traitement des effluents miniers.",
    ),
    faq(
      "Quelle est la finalité de cette formation ?",
      "Améliorer la performance métallurgique, réduire les pertes de procédé, renforcer la maîtrise des bilans d'eau et sécuriser la conformité environnementale des opérations.",
    ),
  ],
  "politique-environnementale": [
    faq(
      "Que couvre une mission de politique environnementale ?",
      "Le diagnostic sectoriel, l'analyse du cadre juridique, la consultation des parties prenantes, l'intégration des exigences ESG, les mécanismes de contrôle et, si nécessaire, la structuration d'une garantie environnementale.",
    ),
    faq(
      "Quels livrables sont attendus ?",
      "Des notes de diagnostic, des recommandations réglementaires et opérationnelles, un cadre de mise en œuvre, ainsi qu'un plan de renforcement des capacités institutionnelles.",
    ),
  ],
  "evaluation-et-rehabilitation-des-sites": [
    faq(
      "Quels risques évaluez-vous sur un site ?",
      "Les passifs environnementaux, la stabilité géotechnique, les impacts sur les sols et les eaux, la sécurité des infrastructures et les implications socio-économiques associées.",
    ),
    faq(
      "Pourquoi privilégier une réhabilitation progressive ?",
      "Parce qu'elle réduit les passifs accumulés, améliore la maîtrise des coûts, facilite le pilotage HSE et crédibilise la conformité environnementale tout au long de l'exploitation.",
    ),
  ],
  "controle-qualite-assurance-qualite": [
    faq(
      "Quels contrôles compose un système QA/QC robuste ?",
      "L'étalonnage des instruments, l'utilisation de standards certifiés, l'analyse de blancs et duplicatas, la revue critique des résultats et une chaîne de custody correctement documentée.",
    ),
    faq(
      "Pourquoi la chaîne de custody est-elle importante ?",
      "Elle permet de démontrer l'intégrité du flux d'échantillons depuis le prélèvement jusqu'au résultat final, ce qui sécurise la défendabilité technique et contractuelle des données.",
    ),
  ],
  "surveillance-qualite-des-eaux": [
    faq(
      "Quels types d'eaux pouvez-vous surveiller ?",
      "Les eaux de captage, eaux potables, eaux souterraines, eaux usées et effluents miniers, avec des plans adaptés à l'usage, au risque et au contexte réglementaire.",
    ),
    faq(
      "Quels sont les principaux résultats fournis ?",
      "Des campagnes d'échantillonnage documentées, des résultats physico-chimiques, une lecture de conformité, l'identification des dérives et des recommandations de suivi ou de traitement.",
    ),
  ],
  "effluents-miniers-et-drainage-minier-acide": [
    faq(
      "Quels paramètres analysez-vous en priorité ?",
      "Le pH, la conductivité, les sulfates, les métaux dissous, les cyanures ou autres paramètres critiques selon le contexte minéralogique et le type d'effluent.",
    ),
    faq(
      "Comment abordez-vous le drainage minier acide ?",
      "Nous combinons diagnostic des sources, caractérisation des eaux, hiérarchisation des risques et conception de solutions de neutralisation, de confinement ou de traitement adaptées au site.",
    ),
  ],
  "strategie-recettes-minieres": [
    faq(
      "Quel est le périmètre d'une stratégie de recettes minières ?",
      "Le diagnostic des mécanismes de mobilisation des recettes, l'identification des pertes de revenu, les points de contrôle de la chaîne extractive et les leviers d'amélioration budgétaire.",
    ),
    faq(
      "Quels livrables fournissez-vous ?",
      "Des recommandations de réforme, des schémas de contrôle, des outils de suivi, des procédures de rapprochement et une feuille de route de mise en œuvre adaptée à l'institution.",
    ),
  ],
  "structuration-organes-et-unites-revenus": [
    faq(
      "Pourquoi structurer les organes et unités de revenus ?",
      "Pour clarifier les mandats, réduire les chevauchements institutionnels, améliorer la circulation de l'information et renforcer la capacité de contrôle de l'administration minière.",
    ),
    faq(
      "Quels changements institutionnels recommandez-vous généralement ?",
      "La formalisation des responsabilités, la création d'unités spécialisées, des procédures de coordination interservices et des dispositifs de reporting permettant un pilotage plus fiable.",
    ),
  ],
  "integration-locale-et-politique-industrielle": [
    faq(
      "Que recouvre l'intégration locale ?",
      "L'ensemble des leviers permettant d'accroître la valeur ajoutée nationale: sous-traitance locale, transformation, emplois qualifiés, services industriels, incitations et zones économiques adaptées.",
    ),
    faq(
      "Quels types d'études réalisez-vous ?",
      "Des analyses de compétitivité, d'opportunité industrielle, de besoins en infrastructures, de soutenabilité CAPEX/OPEX et d'impact sur l'emploi et la chaîne de valeur.",
    ),
  ],
  "controle-production-et-reporting": [
    faq(
      "Quels points de contrôle doivent être couverts ?",
      "Les tonnages extraits, les mouvements de stock, les teneurs déclarées, les humidités, les flux usine, les expéditions et les rapprochements avec les systèmes de reporting.",
    ),
    faq(
      "Pourquoi le reporting est-il stratégique ?",
      "Parce qu'un reporting robuste améliore la qualité de la décision, sécurise les contrôles administratifs et réduit les écarts entre production physique, déclarations commerciales et recettes attendues.",
    ),
  ],
  "audit-flux-paiements-et-tracabilite-export": [
    faq(
      "Sur quoi porte un audit des flux de paiement ?",
      "Sur la cohérence entre production, contrats, prix, volumes exportés, paiements reçus et écarts de rapprochement afin d'identifier les fuites de revenus ou les zones d'opacité.",
    ),
    faq(
      "Comment traitez-vous les données sensibles ?",
      "Nous appliquons des règles strictes de confidentialité, limitons les accès, documentons les hypothèses d'analyse et organisons les restitutions selon le niveau de sensibilité des informations.",
    ),
  ],
  "renforcement-capacites-administration": [
    faq(
      "À quels publics s'adresse ce renforcement de capacités ?",
      "Aux cadres des ministères, directions techniques, unités de revenus, organes de contrôle et équipes transversales impliquées dans la gouvernance et la supervision du secteur minier.",
    ),
    faq(
      "Comment mesurez-vous l'impact d'un programme ?",
      "À travers des indicateurs concrets tels que la qualité du reporting, la rapidité des revues, la réduction des écarts de rapprochement, la robustesse des contrôles et l'autonomie opérationnelle des équipes.",
    ),
  ],
};

export const serviceFaqsBySlugEn: Record<string, FaqItem[]> = {
  "fragmentation-des-roches": [
    faq(
      "What is the main objective of fragmentation work?",
      "To reach a particle size distribution suited to the next step, whether that is sampling, laboratory analysis, or metallurgical test work, while avoiding unnecessary fines generation.",
    ),
    faq(
      "Which parameters do you monitor first?",
      "We monitor feed size, particle size distribution, grinding consistency, and over-grinding risk to protect sample representativeness and metallurgical recovery.",
    ),
  ],
  "preparation-des-echantillons": [
    faq(
      "How do you ensure sample representativeness?",
      "We apply a controlled chain of custody: identification, drying where required, staged size reduction, homogenization, disciplined splitting, and documented handover at each critical step.",
    ),
    faq(
      "How do you control contamination risk?",
      "Protocols include cleaning between batches, segregation of sensitive materials, suitable containers, and recording of critical handling steps to preserve analytical integrity.",
    ),
  ],
  "analyses-mineralogiques-et-chimiques": [
    faq(
      "When should mineralogy and chemistry be combined?",
      "When a decision depends both on grade and on the way elements occur in the ore. Chemistry quantifies the elements, while mineralogy identifies host phases, associations, and likely processing behavior.",
    ),
    faq(
      "What are the usual deliverables?",
      "Analytical tables, technical interpretation of the results, metallurgical or environmental watch points, and recommendations for additional testing or control measures.",
    ),
  ],
  "tests-mineralurgiques-et-metallurgiques": [
    faq(
      "What test programs can you structure?",
      "Depending on the ore and the objective, we structure particle sizing, gravity, flotation, or leaching programs to assess recovery, selectivity, and sensitivity to operating parameters.",
    ),
    faq(
      "How do test results support project decisions?",
      "They help compare process routes, identify critical variables, prioritize follow-up programs, and reduce technical uncertainty before larger investments are made.",
    ),
  ],
  "exhaure-des-mines": [
    faq(
      "When does dewatering become a critical issue?",
      "As soon as water inflows threaten safety, access to working areas, geotechnical stability, equipment reliability, or continuity of production.",
    ),
    faq(
      "How do you size a dewatering system?",
      "Sizing is based on expected flow rates, depth, physico-chemical water characteristics, site layout, and the operational, maintenance, and HSE constraints of the mine.",
    ),
  ],
  "forage-minier": [
    faq(
      "Which drilling scopes do you cover?",
      "We support production and drainage drilling in both open-pit and underground mines, with technical parameters adapted to geometry, diameter, and target depth.",
    ),
    faq(
      "How do you monitor campaign performance?",
      "We track productivity, execution quality, adherence to technical parameters, equipment availability, and safety performance across the campaign.",
    ),
  ],
  "transport-minier": [
    faq(
      "Which flows can you manage?",
      "Ore haulage, equipment transport, industrial consumables, and, when required, fluid transport between pit, plant, logistics base, and export points.",
    ),
    faq(
      "How do you secure logistics continuity?",
      "Through an adapted fleet, route management, tight operational coordination, HSE-trained drivers, and movement traceability.",
    ),
  ],
  "amelioration-continue": [
    faq(
      "Who are these training programs designed for?",
      "Mine, plant, maintenance, laboratory, and supervisory teams that need to reduce variability, strengthen operating discipline, and improve measurable performance.",
    ),
    faq(
      "What operational outcomes do you target?",
      "Better control of deviations, stronger management routines, indicators that are truly used in the field, and a more durable performance culture.",
    ),
  ],
  "traitement-mineralurgique-et-des-eaux": [
    faq(
      "Which topics are covered?",
      "Crushing, grinding, classification, flotation, leaching, mass balancing, industrial water recycling, and mine-effluent treatment.",
    ),
    faq(
      "What is the expected outcome of the training?",
      "Improved metallurgical performance, lower process losses, better control of water balances, and stronger environmental compliance.",
    ),
  ],
  "politique-environnementale": [
    faq(
      "What does an environmental policy assignment cover?",
      "Sector diagnosis, legal framework review, stakeholder consultation, ESG integration, control mechanisms, and, where relevant, the structuring of environmental guarantee instruments.",
    ),
    faq(
      "What deliverables should be expected?",
      "Diagnostic notes, regulatory and operational recommendations, an implementation framework, and an institutional capacity-building roadmap.",
    ),
  ],
  "evaluation-et-rehabilitation-des-sites": [
    faq(
      "Which risks do you assess on a site?",
      "Environmental liabilities, geotechnical stability, soil and water impacts, infrastructure safety, and the related socio-economic implications.",
    ),
    faq(
      "Why prioritize progressive rehabilitation?",
      "Because it limits legacy liabilities, improves cost control, strengthens HSE management, and gives more credibility to environmental compliance throughout the mine life.",
    ),
  ],
  "controle-qualite-assurance-qualite": [
    faq(
      "What controls make up a robust QA/QC system?",
      "Instrument calibration, certified reference materials, blanks and duplicates, critical review of results, and a properly documented chain of custody.",
    ),
    faq(
      "Why is chain of custody so important?",
      "It demonstrates sample integrity from collection to final result, which protects the technical and contractual defensibility of the data.",
    ),
  ],
  "surveillance-qualite-des-eaux": [
    faq(
      "Which water types can you monitor?",
      "Abstraction water, potable water, groundwater, wastewater, and mining effluents, with plans adapted to use, risk profile, and regulatory context.",
    ),
    faq(
      "What are the main outputs?",
      "Documented sampling campaigns, physico-chemical results, compliance interpretation, identification of deviations, and monitoring or treatment recommendations.",
    ),
  ],
  "effluents-miniers-et-drainage-minier-acide": [
    faq(
      "Which parameters do you prioritize?",
      "pH, conductivity, sulfates, dissolved metals, cyanides, or other critical parameters depending on the mineralogical context and the type of effluent.",
    ),
    faq(
      "How do you approach acid mine drainage?",
      "We combine source diagnosis, water characterization, risk prioritization, and the design of neutralization, containment, or treatment solutions suited to the site.",
    ),
  ],
  "strategie-recettes-minieres": [
    faq(
      "What is included in a mining revenue strategy review?",
      "Assessment of revenue collection mechanisms, identification of leakage points, control points across the extractive chain, and budget-improvement levers.",
    ),
    faq(
      "What do you deliver?",
      "Reform recommendations, control schemes, monitoring tools, reconciliation procedures, and an implementation roadmap adapted to the institution.",
    ),
  ],
  "structuration-organes-et-unites-revenus": [
    faq(
      "Why structure governance bodies and revenue units?",
      "To clarify mandates, reduce institutional overlap, improve information circulation, and strengthen the control capacity of the mining administration.",
    ),
    faq(
      "Which institutional changes do you typically recommend?",
      "Formalized responsibilities, specialized units, interdepartmental coordination procedures, and reporting arrangements that support more reliable supervision.",
    ),
  ],
  "integration-locale-et-politique-industrielle": [
    faq(
      "What does local integration cover?",
      "All the levers that increase national value addition: local procurement, transformation, skilled jobs, industrial services, incentives, and fit-for-purpose economic zones.",
    ),
    faq(
      "Which studies do you carry out?",
      "Competitiveness studies, industrial opportunity reviews, infrastructure needs assessments, CAPEX/OPEX sustainability analyses, and value-chain and employment impact studies.",
    ),
  ],
  "controle-production-et-reporting": [
    faq(
      "Which control points should be covered?",
      "Extracted tonnages, stock movements, declared grades, moisture, plant flows, shipments, and reconciliations with reporting systems.",
    ),
    faq(
      "Why is reporting a strategic issue?",
      "Because robust reporting improves decision quality, strengthens administrative control, and reduces the gap between physical production, commercial declarations, and expected revenues.",
    ),
  ],
  "audit-flux-paiements-et-tracabilite-export": [
    faq(
      "What does a payment-flow audit focus on?",
      "Consistency between production, contracts, pricing, exported volumes, received payments, and reconciliation gaps in order to identify revenue leakage or opaque areas.",
    ),
    faq(
      "How do you handle sensitive data?",
      "We apply strict confidentiality rules, limit access, document analytical assumptions, and organize reporting according to the sensitivity of the information involved.",
    ),
  ],
  "renforcement-capacites-administration": [
    faq(
      "Who is the target audience for capacity building?",
      "Ministry staff, technical departments, revenue units, control bodies, and cross-functional teams involved in mineral governance and sector supervision.",
    ),
    faq(
      "How do you measure the impact of a program?",
      "Through practical indicators such as reporting quality, review cycle time, reconciliation-gap reduction, stronger controls, and greater operational autonomy of the teams.",
    ),
  ],
};
