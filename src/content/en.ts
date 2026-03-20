import { fr } from "./fr";
import { highlightMedia, homeMedia, newsMedia } from "./media";
import type { Dictionary } from "./types";

const categoryTranslations: Record<string, { title: string; summary: string }> =
  {
    "essais-analyses": {
      title: "Testing & Analysis",
      summary:
        "Material characterization, sample integrity, and analytical reliability for robust technical decisions.",
    },
    "operations-minieres": {
      title: "Mining Operations",
      summary:
        "Operational execution and technical support to strengthen availability, safety, and productivity.",
    },
    formations: {
      title: "Training",
      summary:
        "Capability-building programs focused on continuous improvement, processing, and quality outcomes.",
    },
    environnement: {
      title: "Environment",
      summary:
        "Environmental compliance, quality monitoring, and rehabilitation for long-term mining performance.",
    },
    "gouvernance-minerale": {
      title: "Mineral Resources Governance Advisory",
      summary:
        "Strategic advisory to structure revenue, control systems, and traceability across the mineral sector.",
    },
  };

const serviceTranslations: Record<string, { title: string; excerpt: string }> = {
  "fragmentation-des-roches": {
    title: "Rock Fragmentation",
    excerpt:
      "Optimization of fragmentation parameters to improve mineral liberation and downstream performance.",
  },
  "preparation-des-echantillons": {
    title: "Sample Preparation",
    excerpt:
      "Standardized preparation chain to ensure representativeness and reduce analytical bias.",
  },
  "analyses-mineralogiques-et-chimiques": {
    title: "Mineralogical and Chemical Analysis",
    excerpt:
      "Targeted analysis to determine composition, variability, and value/penalty elements.",
  },
  "tests-mineralurgiques-et-metallurgiques": {
    title: "Mineral Processing and Metallurgical Testing",
    excerpt:
      "Test programs designed to optimize recovery, process routes, and metallurgical performance.",
  },
  "exhaure-des-mines": {
    title: "Mine Dewatering",
    excerpt:
      "Sizing and supervision of dewatering solutions to protect continuity of operations.",
  },
  "forage-minier": {
    title: "Mining Drilling",
    excerpt:
      "Technical and organizational support to improve drilling precision, pace, and safety.",
  },
  "transport-minier": {
    title: "Mining Transport",
    excerpt:
      "Optimization of transport flows, from fleet planning to field logistics performance.",
  },
  "amelioration-continue": {
    title: "Continuous Improvement",
    excerpt:
      "Lean, SPC, maintenance, and performance training to build a measurable improvement culture.",
  },
  "traitement-mineralurgique-et-des-eaux": {
    title: "Mineral Processing and Water Treatment",
    excerpt:
      "Technical training on mineral processing and water quality management.",
  },
  "politique-environnementale": {
    title: "Environmental Policy",
    excerpt:
      "Diagnosis, legal framework, ESG alignment, and implementation of fit-for-purpose policies.",
  },
  "evaluation-et-rehabilitation-des-sites": {
    title: "Site Assessment and Rehabilitation",
    excerpt:
      "Risk-based assessment and phased rehabilitation planning for mining sites.",
  },
  "controle-qualite-assurance-qualite": {
    title: "Quality Control / Quality Assurance",
    excerpt:
      "QA/QC and chain-of-custody systems to improve data and flow reliability.",
  },
  "surveillance-qualite-des-eaux": {
    title: "Water Quality Monitoring",
    excerpt:
      "Monitoring programs for surface and groundwater quality with compliance reporting.",
  },
  "effluents-miniers-et-drainage-minier-acide": {
    title: "Mine Effluents and Acid Mine Drainage (AMD)",
    excerpt:
      "Assessment and treatment of mining effluents, plus AMD prevention and mitigation.",
  },
  "strategie-recettes-minieres": {
    title: "Mining Revenue Strategy",
    excerpt:
      "Design of strategies to mobilize, secure, and forecast mining revenues.",
  },
  "structuration-organes-et-unites-revenus": {
    title: "Structuring Bodies and Revenue Units",
    excerpt:
      "Institutional structuring for governance and revenue-focused mining functions.",
  },
  "integration-locale-et-politique-industrielle": {
    title: "Local Integration and Industrial Policy",
    excerpt:
      "Local-content mechanisms to strengthen transformation and national value addition.",
  },
  "controle-production-et-reporting": {
    title: "Production Control and Reporting",
    excerpt:
      "Control and reporting frameworks for reliable production oversight.",
  },
  "audit-flux-paiements-et-tracabilite-export": {
    title: "Payment Flow Audit and Export Traceability",
    excerpt:
      "Audit of financial flows and export volumes to reduce revenue leakage.",
  },
  "renforcement-capacites-administration": {
    title: "Public Administration Capacity Building",
    excerpt:
      "Capacity-building programs for mining administrations and supervisory units.",
  },
};

const serviceDetails: Record<
  string,
  { paragraphs: string[]; capabilities: string[] }
> = {
  "fragmentation-des-roches": {
    paragraphs: [
      "Fragmentation and grinding are critical steps in mineral processing because they condition sample integrity, analytical reliability, and downstream recovery.",
      "A controlled size-reduction strategy improves particle-size distribution, limits over-grinding, and supports more robust technical decisions on plant design and operating parameters.",
    ],
    capabilities: [
      "Particle-size control for representative sampling",
      "Improved liberation and metallurgical recovery",
      "Reduced operating losses and unnecessary fines generation",
      "More defensible data for process and investment decisions",
    ],
  },
  "preparation-des-echantillons": {
    paragraphs: [
      "Sample preparation is a foundational step in extractive metallurgy. The quality of drying, crushing, grinding, homogenization, and splitting directly affects analytical confidence.",
      "A disciplined preparation workflow reduces bias, secures comparability between samples, and improves the quality of decisions related to process selection, circuit design, and project economics.",
    ],
    capabilities: [
      "Standards-based sample inventory and identification",
      "Controlled drying, crushing, and grinding sequence",
      "Homogenization and precise splitting for representativeness",
      "Traceable preparation records for QA/QC review",
    ],
  },
  "analyses-mineralogiques-et-chimiques": {
    paragraphs: [
      "Mineralogical and chemical analyses support resource understanding, process optimization, and environmental risk evaluation by clarifying both grade and mineral hosting.",
      "We combine methods such as XRD, XRF, SEM, and QEMSCAN to characterize mineral associations, particle behavior, and chemical composition with the level of detail required for technical decision-making.",
    ],
    capabilities: [
      "XRD, XRF, SEM, and QEMSCAN-based characterization",
      "Interpretation of mineral associations and deleterious phases",
      "Support to process design and test-work programs",
      "Faster feedback loops between field, laboratory, and metallurgy teams",
    ],
  },
  "tests-mineralurgiques-et-metallurgiques": {
    paragraphs: [
      "We structure mineral processing test programs to evaluate ore behavior before and during exploitation, with the objective of comparing process routes and reducing technical uncertainty.",
      "The results support flowsheet selection, recovery estimation, reagent strategy, and the prioritization of follow-up work at laboratory, pilot, or plant scale.",
    ],
    capabilities: [
      "Particle-size analysis and process-scoping test work",
      "Mineralogical and chemical characterization for test interpretation",
      "Gravity, flotation, and leaching test programs",
      "Recovery, grade, and selectivity analysis for route comparison",
    ],
  },
  "exhaure-des-mines": {
    paragraphs: [
      "Mine dewatering is essential to operational safety, production continuity, and infrastructure protection in both open-pit and underground environments.",
      "Our approach combines hydraulic planning, field deployment, maintenance discipline, and HSE risk control to keep water management aligned with mine progression.",
    ],
    capabilities: [
      "Sizing of pumps and discharge systems to site conditions",
      "Control of inflows, runoff, and flooding risks",
      "Preventive maintenance and operating continuity",
      "Integration of HSE and cost-control constraints",
    ],
  },
  "forage-minier": {
    paragraphs: [
      "We support production and drainage drilling with a focus on execution quality, operating safety, and the technical reliability required by mining schedules.",
      "Interventions are adapted to depth, diameter, accessibility, and geotechnical constraints so that drilling performance remains aligned with the objectives of the mine plan.",
    ],
    capabilities: [
      "Production and drainage drilling support",
      "Control of drilling parameters and execution quality",
      "Adaptation to open-pit and underground constraints",
      "Safety-driven field coordination and performance monitoring",
    ],
  },
  "transport-minier": {
    paragraphs: [
      "Mining transport requires more than fleet availability. It depends on route discipline, safe handling, operational coordination, and reliable movement tracking.",
      "We help secure ore, equipment, and consumable flows between mine, plant, logistics nodes, and export infrastructure with an emphasis on continuity and HSE compliance.",
    ],
    capabilities: [
      "Transport planning for ore, equipment, and industrial consumables",
      "Fleet mobilization suited to operating constraints",
      "Movement traceability and field coordination",
      "Schedule reliability aligned with production continuity",
    ],
  },
  "amelioration-continue": {
    paragraphs: [
      "Our continuous-improvement training programs are designed for mining and metallurgical teams that need practical methods to reduce variability and improve execution discipline.",
      "The content combines Lean thinking, process control, maintenance reliability, and performance management in formats that can be applied directly in the field.",
    ],
    capabilities: [
      "Lean Mining and process-improvement routines",
      "Statistical process control and deviation management",
      "Preventive maintenance and equipment reliability practices",
      "Cost, performance, and leadership routines for supervisors",
    ],
  },
  "traitement-mineralurgique-et-des-eaux": {
    paragraphs: [
      "This training stream covers mineral processing operations together with industrial-water and effluent management, which are increasingly interdependent in mining performance.",
      "The goal is to strengthen metallurgical control, reduce process losses, and improve compliance in water recycling, effluent treatment, and acid mine drainage management.",
    ],
    capabilities: [
      "Crushing, grinding, classification, flotation, and leaching fundamentals",
      "Mass-balance reading and metallurgical-performance tracking",
      "Effluent treatment and AMD management principles",
      "Sustainable water recycling and plant water-management practices",
    ],
  },
  "politique-environnementale": {
    paragraphs: [
      "We support governments and institutions in reviewing or structuring environmental policy frameworks for the mining sector, with a focus on implementation credibility.",
      "Assignments combine legal review, stakeholder consultation, ESG alignment, control mechanisms, and environmental-financial assurance thinking.",
    ],
    capabilities: [
      "Sector-wide environmental diagnosis and legal review",
      "Stakeholder consultation and ESG integration",
      "Environmental standards and enforcement mechanisms",
      "Implementation planning and institutional capacity support",
    ],
  },
  "evaluation-et-rehabilitation-des-sites": {
    paragraphs: [
      "Site assessment and rehabilitation work begins with a structured diagnosis of environmental liabilities, geotechnical issues, water risks, and safety constraints.",
      "We translate that diagnosis into phased rehabilitation plans with technical, environmental, and cost dimensions that can be implemented progressively.",
    ],
    capabilities: [
      "Environmental and geotechnical liability diagnosis",
      "Risk mapping for soils, water, residues, and infrastructure",
      "Cost estimation and phased rehabilitation planning",
      "Progressive restoration and monitoring strategy support",
    ],
  },
  "controle-qualite-assurance-qualite": {
    paragraphs: [
      "A credible QA/QC system is essential wherever laboratory data, environmental measurements, or production-control figures are used to make decisions.",
      "We structure controls that improve reliability, traceability, and confidence in the result stream, from sampling to final reporting.",
    ],
    capabilities: [
      "Instrument calibration and performance checks",
      "Use of blanks, duplicates, and certified standards",
      "Documented chain of custody and handling controls",
      "Internal review and validation of analytical outputs",
    ],
  },
  "surveillance-qualite-des-eaux": {
    paragraphs: [
      "Water-quality monitoring programs must be adapted to the intended use, the exposure pathway, and the regulatory threshold that applies to each site or corridor.",
      "We support structured sampling, interpretation of analytical results, and monitoring plans that remain practical in remote and operationally constrained environments.",
    ],
    capabilities: [
      "Sampling programs for groundwater, potable water, and effluents",
      "Physico-chemical characterization of mining-related waters",
      "Compliance-oriented interpretation and reporting",
      "Monitoring plans suited to remote operating conditions",
    ],
  },
  "effluents-miniers-et-drainage-minier-acide": {
    paragraphs: [
      "Mine effluents and acid mine drainage require early diagnosis because chemistry, flow regime, and source conditions determine the effectiveness of any treatment strategy.",
      "We assess pollution sources, characterize water quality, and recommend practical treatment or mitigation options suited to regulatory requirements and site constraints.",
    ],
    capabilities: [
      "Physico-chemical analysis of mine effluents and leachates",
      "Diagnosis of pollution sources and AMD exposure pathways",
      "Design support for treatment and containment systems",
      "Continuous monitoring frameworks for compliance control",
    ],
  },
  "strategie-recettes-minieres": {
    paragraphs: [
      "Mining revenue strategy work focuses on how producing states mobilize, secure, and monitor revenues generated across the extractive chain.",
      "We identify leakage risks, weak control points, and operational or institutional reforms that can strengthen fiscal performance and transparency.",
    ],
    capabilities: [
      "Assessment of mining-revenue collection mechanisms",
      "Identification of leakage risks and control gaps",
      "Monitoring tools and reconciliation procedures",
      "Implementation roadmaps for stronger fiscal governance",
    ],
  },
  "structuration-organes-et-unites-revenus": {
    paragraphs: [
      "Institutional structuring assignments are designed to clarify roles, strengthen coordination, and improve operational control within mining administrations and revenue-related units.",
      "We translate governance objectives into responsibilities, workflows, and reporting lines that public institutions can actually implement.",
    ],
    capabilities: [
      "Mandate clarification across institutions and units",
      "Design of specialized teams and operating procedures",
      "Coordination frameworks for cross-functional supervision",
      "Capacity support for more reliable administrative execution",
    ],
  },
  "integration-locale-et-politique-industrielle": {
    paragraphs: [
      "Local integration and industrial-policy advisory aims to turn mineral extraction into wider national value creation through procurement, transformation, skills, and industrial services.",
      "We help frame realistic pathways for domestic value addition based on competitiveness, infrastructure readiness, fiscal incentives, and industrial capability.",
    ],
    capabilities: [
      "Competitiveness and value-addition analysis",
      "Industrial opportunity and infrastructure assessment",
      "Local-content and employment-impact structuring",
      "Policy options for transformation and industrial clusters",
    ],
  },
  "controle-production-et-reporting": {
    paragraphs: [
      "Production control and reporting systems are critical to reconcile physical flows, declared values, and the management decisions that depend on them.",
      "We help structure measurement points, reporting routines, and reconciliation logic so that operators and authorities can supervise volumes more reliably.",
    ],
    capabilities: [
      "Definition of production-control points and responsibilities",
      "Reporting routines aligned with operational reality",
      "Traceability of volumes, grades, and shipment data",
      "Improved data quality for management and oversight",
    ],
  },
  "audit-flux-paiements-et-tracabilite-export": {
    paragraphs: [
      "Auditing payment flows and export traceability means linking production, contracts, pricing, shipments, and effective settlement in a controlled way.",
      "The objective is to identify leakage, weak reconciliation points, and documentary gaps that affect transparency and revenue security.",
    ],
    capabilities: [
      "Review of payment pathways and reconciliation logic",
      "Traceability of export volumes and commercial declarations",
      "Detection of control weaknesses and leakage risks",
      "Action-oriented recommendations for revenue security",
    ],
  },
  "renforcement-capacites-administration": {
    paragraphs: [
      "Capacity building for public mining administrations must go beyond training sessions; it must improve how institutions supervise, review, reconcile, and decide.",
      "We support administrations with practical tools, operating routines, and technical coaching so that capability gains remain usable after the mission ends.",
    ],
    capabilities: [
      "Training for ministry and regulatory staff",
      "Project-review and control toolkits",
      "Procedural support for supervision and reconciliation",
      "Follow-up coaching for sustainable implementation",
    ],
  },
};

const buildServiceHighlights = (title: string, capabilities: string[]) => [
  {
    title: capabilities[0] ?? "Targeted diagnosis",
    text: `Each ${title.toLowerCase()} assignment starts with a structured technical frame focused on ${(
      capabilities[0] ?? "the critical variables"
    ).toLowerCase()} so that execution begins on a defensible basis.`,
    ctaLabel: "Contact us",
    ctaHref: "/en/contact",
    image: highlightMedia.diagnostic,
  },
  {
    title: capabilities[1] ?? "Controlled execution",
    text: `The operating sequence is built around ${(
      capabilities[1] ?? "clear milestones"
    ).toLowerCase()} in order to reduce variability, improve control, and support field teams with usable methods.`,
    ctaLabel: "Launch a mission",
    ctaHref: "/en/mission",
    image: highlightMedia.execution,
  },
  {
    title: capabilities[2] ?? "Defensible results",
    text: `Deliverables document ${(
      capabilities[2] ?? "traceability and measurable outcomes"
    ).toLowerCase()} so that operators, institutions, and partners can act on the results with confidence.`,
    ctaLabel: "Explore services",
    ctaHref: "/en/services",
    image: highlightMedia.performance,
  },
  {
    title: capabilities[3] ?? "Sustainable transfer",
    text: `We anchor ${(
      capabilities[3] ?? "capacity transfer"
    ).toLowerCase()} into standards, tools, and routines that remain useful after the engagement.`,
    ctaLabel: "Contact us",
    ctaHref: "/en/contact",
    image: highlightMedia.transfer,
  },
];

export const en: Dictionary = {
  lang: "en",
  siteName: "Terra Pretiosa",
  logoLabel: "Terra Pretiosa",
  nav: {
    services: "Services",
    company: "Company",
    team: "Team",
    news: "News",
    contact: "Contact",
    search: "Search",
    login: "Login",
    mission: "Launch a mission",
    companyMenu: "Company",
    companyLinks: {
      about: "About",
      megatrends: "Megatrends",
      sustainable: "Sustainable development",
      ambitions: "Ambitions",
      contact: "Contact",
    },
  },
  common: {
    partnerCta: "PARTNER WITH TERRA PRETIOSA",
    contactUs: "Contact us",
    learnMore: "Learn more",
    readMore: "Read more",
    takeNextStep: "Take the next step",
    breadcrumbs: {
      home: "Home",
      services: "Services",
    },
  },
  home: {
    hero: [
      {
        title: "Human civilization depends on the ground and subsoil",
        subtitle:
          "These resources support industrial, energy, and technological development. They must be developed strategically, efficiently, and sustainably for long-term prosperity.",
        ctaLabel: "Explore services",
        ctaHref: "/en/services",
        image: homeMedia.heroDrilling,
      },
      {
        title: "Mineral governance and sustainable industrialization",
        subtitle:
          "Strategic advisory firm specialized in mineral-resource governance, supply-chain resilience, and sustainable industrialization in Africa.",
        ctaLabel: "See our approach",
        ctaHref: "/en/company",
        image: homeMedia.heroGovernance,
      },
      {
        title: "Partner to states, institutions, and industry",
        subtitle:
          "We support integrated strategies that move mineral-producing economies from raw exports toward competitive local value creation.",
        ctaLabel: "Launch a mission",
        ctaHref: "/en/mission",
        image: homeMedia.heroLaboratory,
      },
    ],
    features: [
      {
        title: "Integrated mining and mineral-resources offering",
        text: "Testing and analysis, mining operations, training, environmental performance, and governance advisory combined in one delivery model.",
        ctaLabel: "Browse categories",
        ctaHref: "/en/services",
        image: homeMedia.featureIntegrated,
      },
      {
        title: "African operating corridor",
        text: "We work across Burkina Faso, the DRC, Guinea Conakry, Senegal, Niger, and Mali, with headquarters in Gaithersburg, Maryland.",
        ctaLabel: "View activity corridor",
        ctaHref: "/en/company#corridor",
        image: homeMedia.featureCorridor,
      },
      {
        title: "Industrial sovereignty and durable prosperity",
        text: "Our ambition is to help transform natural resources into drivers of economic development, industrial sovereignty, and macroeconomic stability.",
        ctaLabel: "Read our ambitions",
        ctaHref: "/en/company#ambitions",
        image: homeMedia.featureSustainability,
      },
    ],
    servicesSitemapTitle: "SERVICES",
    servicesSitemapSubtitle:
      "Explore our intervention areas to structure, secure, and accelerate mining and environmental operations.",
    serviceGridTitle: "Core expertise",
    serviceGridIntro:
      "A selection of high-value services for demanding mining missions.",
    insights: {
      title: "Insights",
      featuredTitle:
        "Critical minerals: turning global demand pressure into local industrial value",
      featuredExcerpt:
        "Rising demand for critical minerals does not automatically generate prosperity for producing countries. Value creation depends on four disciplines working together: governance quality, flow traceability, environmental control, and technical capability building.",
      featuredHref: "/en/news/mineral-governance-africa-2026",
      items: [
        {
          title: "Export traceability and revenue security",
          excerpt:
            "Reconciling produced tonnage, payable grade, moisture, shipped volumes, and cash collection is now a core mineral-governance control.",
          href: "/en/news/critical-mineral-supply-chains",
        },
        {
          title: "Progressive rehabilitation and closure cost control",
          excerpt:
            "Mining liabilities must be quantified early and integrated into mine planning, water balances, and financial assurance mechanisms.",
          href: "/en/news/mining-site-rehabilitation",
        },
        {
          title: "Operational skills and plant stability",
          excerpt:
            "Sustainable metallurgical performance depends on operating discipline, maintenance standards, and rapid treatment of field deviations.",
          href: "/en/news/mining-skills-training",
        },
        {
          title: "Mineral governance and fiscal arbitration",
          excerpt:
            "Producing states now need to balance investment attractiveness, rent capture, and domestic industrial development at the same time.",
          href: "/en/news/mineral-governance-africa-2026",
        },
      ],
    },
    ctaBand: {
      title: "Ready to launch a structuring mission?",
      missionCta: "Launch a mission",
      contactCta: "Contact us",
    },
  },
  company: {
    pageTitle: "Company",
    introTitle: "About Terra Pretiosa",
    introBlocks: [
      {
        title: "Conviction",
        text: "Human civilization fundamentally depends on the resources of the ground and subsoil. They underpin industrial, energy, and technological development and must therefore be developed strategically, efficiently, and sustainably.",
      },
      {
        title: "Positioning",
        text: "Terra Pretiosa is a strategic advisory firm specialized in mineral-resource governance, supply-chain resilience, and sustainable industrialization in Africa.",
      },
      {
        title: "Ambition",
        text: "Our ambition is to strengthen the capacity of African countries to convert natural resources into drivers of economic development, industrial sovereignty, and macroeconomic stability.",
      },
      {
        title: "Approach",
        text: "We support governments, international financial institutions, and industrial partners through integrated strategies combining mining technical expertise, macroeconomic analysis, targeted industrial policy, and ESG-aligned governance frameworks.",
      },
    ],
    corridorTitle: "Activity corridor",
    corridorCountries: [
      "Burkina Faso",
      "DRC",
      "Guinea Conakry",
      "Senegal",
      "Niger",
      "Mali",
    ],
    hqTitle: "Headquarters",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    megatrendsTitle: "Megatrends",
    megatrendsText:
      "Global demand for strategic and critical minerals is rising sharply. In that context, states and mining operators need partners able to deliver integrated technical solutions, operational credibility, and value-chain discipline aligned with international standards.",
    miningDevTitle: "Mining for effective development",
    miningDevText:
      "We see mining as a transformation engine. The objective is not simply to extract, but to structure high-performing operations that support jobs, skills transfer, public revenue mobilization, and local industrial development.",
    sustainableTitle: "Sustainable development",
    sustainableBullets: [
      "Periodic environmental monitoring",
      "Mine-waste and sludge management",
      "Site rehabilitation and revegetation",
      "Local skills development and youth employment",
      "Mine dewatering and water treatment",
      "Mobilization of financial and human capital to support sector growth",
    ],
    ambitionsTitle: "Our ambitions",
    ambitionsBullets: [
      "Economic sovereignty of producing states",
      "Resilience of strategic supply chains",
      "Sustainable industrialization of Africa",
      "Acceleration of the global energy transition",
      "Geopolitical stabilization of critical mining corridors",
    ],
  },
  services: {
    landingTitle: "Services",
    landingIntro:
      "Terra Pretiosa works across the mining value chain, from technical analysis and field operations to strategic mineral-sector governance, with a delivery model focused on results, compliance, and local value creation.",
    categoriesTitle: "Service categories",
    sitemapTitle: "Service sitemap",
    featuredTitle: "Featured insight",
    featuredText:
      "Our model combines technical rigor, operational continuity, environmental compliance, and responsible governance to turn mineral resources into durable performance.",
    categories: fr.services.categories.map((category) => ({
      ...category,
      title: categoryTranslations[category.slug]?.title ?? category.title,
      summary: categoryTranslations[category.slug]?.summary ?? category.summary,
      services: category.services.map((service) => ({
        ...service,
        title: serviceTranslations[service.slug]?.title ?? service.title,
        excerpt: serviceTranslations[service.slug]?.excerpt ?? service.excerpt,
        paragraphs:
          serviceDetails[service.slug]?.paragraphs ?? [
            `Terra Pretiosa designs and delivers ${(serviceTranslations[service.slug]?.title ?? service.title).toLowerCase()} assignments tailored to the technical, human, and regulatory constraints of each engagement.`,
            "Our operating model combines field expertise, quality assurance, and capability transfer to secure durable outcomes.",
          ],
        capabilities:
          serviceDetails[service.slug]?.capabilities ?? [
            "Initial diagnosis and operational framing",
            "Field deployment with measurable performance indicators",
            "Documented traceability and clear reporting",
            "Capacity transfer to local teams",
          ],
        highlights: buildServiceHighlights(
          serviceTranslations[service.slug]?.title ?? service.title,
          serviceDetails[service.slug]?.capabilities ?? [],
        ),
      })),
      faq: category.faq,
    })),
    ctaBand: {
      title: "Partner for your mining projects",
      subtitle:
        "We mobilize the right capabilities to accelerate operational, institutional, and sustainable impact.",
      primaryCta: "PARTNER WITH TERRA PRETIOSA",
      secondaryCta: "Contact us",
    },
    capabilitiesTitle: "Capabilities",
    exploreLabel: "Explore",
    allServicesLabel: "All services",
    relatedTitle: "Related services",
    faqTitle: "Frequently asked questions",
  },
  team: {
    pageTitle: "Our team",
    intro:
      "The detailed Terra Pretiosa team presentation will be added with photographs and mini CVs once the final profiles are validated.",
    note: "Photos and mini CVs will be added after client validation.",
    cvLabel: "Download mini CV",
    members: [
      {
        name: "Mineral governance profile",
        role: "Being integrated",
        bio: "Photograph and mini CV to be added after Terra Pretiosa profile validation.",
        image: "/placeholders/team-1.svg",
      },
      {
        name: "Mining operations profile",
        role: "Being integrated",
        bio: "Photograph and mini CV to be added after Terra Pretiosa profile validation.",
        image: "/placeholders/team-2.svg",
      },
      {
        name: "Environment profile",
        role: "Being integrated",
        bio: "Photograph and mini CV to be added after Terra Pretiosa profile validation.",
        image: "/placeholders/team-3.svg",
      },
      {
        name: "Testing and analysis profile",
        role: "Being integrated",
        bio: "Photograph and mini CV to be added after Terra Pretiosa profile validation.",
        image: "/placeholders/team-4.svg",
      },
      {
        name: "Training profile",
        role: "Being integrated",
        bio: "Photograph and mini CV to be added after Terra Pretiosa profile validation.",
        image: "/placeholders/team-5.svg",
      },
      {
        name: "Strategy and governance profile",
        role: "Being integrated",
        bio: "Photograph and mini CV to be added after Terra Pretiosa profile validation.",
        image: "/placeholders/team-6.svg",
      },
    ],
  },
  contact: {
    pageTitle: "Contact",
    intro:
      "Discuss your technical, environmental, or mineral-governance requirements with Terra Pretiosa. Use the form below to frame the need, location, and type of support expected.",
    hqTitle: "Headquarters",
    hqAddress: "438 N Frederick Ave, Gaithersburg, MD 20877",
    corridorTitle: "Activity corridor",
    corridorCountries: [
      "Burkina Faso",
      "DRC",
      "Guinea Conakry",
      "Senegal",
      "Niger",
      "Mali",
    ],
    phoneLabel: "Phone",
    phoneValue: "Personal number (temporary, pending company line)",
    emailLabel: "Email",
    emailValue: "Company email address to be created",
    formTitle: "Contact us",
    formSuccess: "Thank you, your message has been sent.",
    formFields: {
      firstName: "First Name *",
      lastName: "Last Name *",
      email: "Email *",
      phoneOptional: "Phone (optional)",
      serviceLocation: "Service Location *",
      stateProvince: "State/Province",
      serviceIndustry: "Service Industry",
      enquiryType: "Type of enquiry *",
      message: "Message *",
      consentText: "I agree to the",
      privacyPolicyLabel: "Privacy Policy",
      submit: "SUBMIT",
    },
    formOptions: {
      selectPlaceholder: "-",
      serviceLocations: [
        "Burkina Faso",
        "DRC",
        "Guinea Conakry",
        "Senegal",
        "Niger",
        "Mali",
        "United States",
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
        "Testing & Analysis",
        "Mining Operations",
        "Training",
        "Environment",
        "Mineral governance advisory",
      ],
      enquiryTypes: [
        "Service request",
        "Technical question",
        "Partnership",
        "Other",
      ],
    },
    formErrors: {
      required: "This field is required.",
      email: "Invalid email address.",
      consent: "You must accept the privacy policy.",
    },
  },
  mission: {
    pageTitle: "Launch a mission",
    intro:
      "Describe your project context, technical or institutional objectives, target timeline, and key constraints. Our team will respond with a mission framing adapted to your needs.",
    formSuccess: "Thank you. Your mission request has been registered.",
    missionTypes: [
      "Testing & Analysis",
      "Mining Operations",
      "Training",
      "Environment",
      "Mineral governance advisory",
    ],
    formFields: {
      name: "Full name",
      email: "Email",
      organization: "Organization",
      country: "Country",
      missionType: "Mission type",
      timeline: "Preferred timeline",
      budget: "Budget (optional)",
      details: "Mission details",
      submit: "Submit request",
    },
    formErrors: {
      required: "This field is required.",
      email: "Invalid email address.",
    },
  },
  footer: {
    columns: [
      {
        groups: [
          {
            title: "Company information",
            links: [
              { label: "About", href: "/en/company#about" },
              { label: "Megatrends", href: "/en/company#megatrends" },
              { label: "Sustainable development", href: "/en/company#sustainable" },
              { label: "Ambitions", href: "/en/company#ambitions" },
              { label: "Team", href: "/en/team" },
              { label: "News", href: "/en/news" },
              { label: "Contact", href: "/en/contact" },
            ],
          },
          {
            title: "Activity corridor",
            links: [
              { label: "Countries of operation", href: "/en/company#corridor" },
              { label: "Launch a mission", href: "/en/mission" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Testing & Analysis",
            links: [
              {
                label: "Rock Fragmentation",
                href: "/en/services/essais-analyses/fragmentation-des-roches",
              },
              {
                label: "Sample Preparation",
                href: "/en/services/essais-analyses/preparation-des-echantillons",
              },
              {
                label: "Mineralogical and Chemical Analysis",
                href: "/en/services/essais-analyses/analyses-mineralogiques-et-chimiques",
              },
              {
                label: "Mineralurgical and Metallurgical Testing",
                href: "/en/services/essais-analyses/tests-mineralurgiques-et-metallurgiques",
              },
            ],
          },
          {
            title: "Mining Operations",
            links: [
              {
                label: "Mine Dewatering",
                href: "/en/services/operations-minieres/exhaure-des-mines",
              },
              {
                label: "Mining Drilling",
                href: "/en/services/operations-minieres/forage-minier",
              },
              {
                label: "Mining Transport",
                href: "/en/services/operations-minieres/transport-minier",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Training",
            links: [
              {
                label: "Continuous Improvement",
                href: "/en/services/formations/amelioration-continue",
              },
              {
                label: "Mineral Processing and Water Treatment",
                href: "/en/services/formations/traitement-mineralurgique-et-des-eaux",
              },
            ],
          },
          {
            title: "Environment",
            links: [
              {
                label: "Environmental Policy",
                href: "/en/services/environnement/politique-environnementale",
              },
              {
                label: "Site Assessment and Rehabilitation",
                href: "/en/services/environnement/evaluation-et-rehabilitation-des-sites",
              },
              {
                label: "Quality Control / Quality Assurance",
                href: "/en/services/environnement/controle-qualite-assurance-qualite",
              },
              {
                label: "Water Quality Monitoring",
                href: "/en/services/environnement/surveillance-qualite-des-eaux",
              },
              {
                label: "Mine Effluents + AMD",
                href: "/en/services/environnement/effluents-miniers-et-drainage-minier-acide",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Mineral governance advisory",
            links: [
              {
                label: "Mining Revenue Strategy",
                href: "/en/services/gouvernance-minerale/strategie-recettes-minieres",
              },
              {
                label: "Structuring Bodies and Revenue Units",
                href: "/en/services/gouvernance-minerale/structuration-organes-et-unites-revenus",
              },
              {
                label: "Local Integration and Industrial Policy",
                href: "/en/services/gouvernance-minerale/integration-locale-et-politique-industrielle",
              },
              {
                label: "Production Control and Reporting",
                href: "/en/services/gouvernance-minerale/controle-production-et-reporting",
              },
              {
                label: "Payment Flow Audit and Export Traceability",
                href: "/en/services/gouvernance-minerale/audit-flux-paiements-et-tracabilite-export",
              },
              {
                label: "Public Administration Capacity Building",
                href: "/en/services/gouvernance-minerale/renforcement-capacites-administration",
              },
            ],
          },
          {
            title: "Quick access",
            links: [
              { label: "All services", href: "/en/services" },
              { label: "Contact us", href: "/en/contact" },
              { label: "Launch a mission", href: "/en/mission" },
            ],
          },
        ],
      },
    ],
    quickLinksTitle: "Other links",
    quickLinks: [
      { label: "Activity corridor", href: "/en/company#corridor" },
      { label: "Company page", href: "/en/company" },
      { label: "Mission request", href: "/en/mission" },
    ],
    legal: "(c) Terra Pretiosa. All rights reserved.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "X", href: "https://x.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
    ],
  },
  news: {
    pageTitle: "News & Analysis",
    intro:
      "Operational lessons learned, mineral-governance notes, ESG watchpoints, and technical analysis across the African mining value chain.",
    allNewsLabel: "All articles",
    latestLabel: "Latest articles",
    readArticle: "Read article",
    articles: [
      {
        slug: "mineral-governance-africa-2026",
        title:
          "Critical minerals in Africa: moving from extractive rent to industrial value",
        excerpt:
          "The next decade will depend on whether producing countries can convert mining revenues into infrastructure, skills, reliable power, and local industrial capability.",
        date: "2026-03-10",
        image: newsMedia.governance,
        tag: "Governance",
        body: [
          "Competition around critical minerals is no longer only about access to the orebody. It is increasingly about governance quality, data reliability, permitting discipline, and the ability to create value beyond raw ore exports.",
          "For producing states, the objective is not simply to increase mined volume. It is to secure the fiscal base, control marketed tonnage and grade, and direct mining rent toward productive investments such as power, logistics, technical education, and industrial services.",
          "Robust mineral governance rests on practical mechanisms: standardized reporting procedures, production-to-export reconciliation, payment-flow audits, credible ESG requirements, and financial instruments capable of covering rehabilitation commitments.",
          "Terra Pretiosa supports this transition by combining institutional advisory, administrative capacity building, and technical support for operators so that mining performance translates into measurable economic value.",
        ],
      },
      {
        slug: "critical-mineral-supply-chains",
        title:
          "Export traceability and production control: locking down critical mineral flows",
        excerpt:
          "The challenge is no longer just extraction. Operators and regulators need reconciled pit, laboratory, stockpile, shipment, and payment data to secure mining revenue.",
        date: "2026-02-22",
        image: newsMedia.supplyChain,
        tag: "Supply Chain",
        body: [
          "Logistics shocks and tighter buyer requirements have shifted mining performance toward flow control. A credible value chain must be able to connect production data, commercial quality, moisture, handling losses, exported volumes, and actual cash settlement.",
          "In many operations, the performance gap is not inside the plant but at the interfaces: poorly reconciled stock movements, weak independent controls, inconsistent documentation, or fragmented reporting between mine, laboratory, logistics, and administration.",
          "Production control and export traceability therefore need a clear operating architecture with defined measurement points, documented chain of custody, reconciliation protocols, and dashboards shared between operators, regulators, and finance teams.",
          "Terra Pretiosa structures these systems to reduce revenue leakage, improve declaration quality, and strengthen confidence between operators, states, and commercial counterparties.",
        ],
      },
      {
        slug: "mining-site-rehabilitation",
        title:
          "Progressive rehabilitation: integrating closure, water, and liabilities from project design",
        excerpt:
          "A mine's ESG credibility is built at feasibility stage, when liabilities, hydrogeological risks, and closure costs can still be controlled technically and financially.",
        date: "2026-02-05",
        image: newsMedia.environment,
        tag: "Environment",
        body: [
          "Closure is no longer a late-life issue. It has become a design variable that influences mine sequencing, waste placement, residue management strategy, and total project cost.",
          "A rigorous approach starts with early identification of liabilities: acid mine drainage potential, geotechnical instability, water contamination pathways, erosion, abandoned-infrastructure safety, and future land-use constraints.",
          "Progressive rehabilitation addresses these risks at the pace of mining instead of waiting until the end of the cycle, when costs rise and technical flexibility drops. It also improves the credibility of ESG commitments with communities, investors, and regulators.",
          "Terra Pretiosa supports operators through risk diagnostics, phased rehabilitation plans, water balances, and environmental monitoring frameworks that align regulatory compliance, cost control, and operational credibility.",
        ],
      },
      {
        slug: "mining-skills-training",
        title:
          "Mine-to-plant skills: durable performance is built in the field",
        excerpt:
          "Stable metallurgy, equipment availability, and QA/QC discipline depend less on classroom theory than on the operating discipline installed on site.",
        date: "2026-01-18",
        image: newsMedia.training,
        tag: "Training",
        body: [
          "In many operations, repeated underperformance does not come from missing equipment but from practice drift: unstable process settings, inconsistent preventive inspection, weak sampling discipline, or poor handover between shifts.",
          "Capability building must therefore be designed as a field system. It combines operating standards, supervision routines, root-cause analysis, workstation coaching, and practical indicators that mine, plant, maintenance, and laboratory supervisors can act on immediately.",
          "Effective training links technical content directly to performance variables such as metallurgical recovery, dilution, mechanical availability, analytical-data quality, downtime, and environmental compliance.",
          "Terra Pretiosa structures its programs around this operational-ownership logic so that skills transfer produces less variability, stronger control, and higher autonomy in local teams.",
        ],
      },
    ],
  },
  search: {
    title: "Search",
    placeholder: "Search for a service, page, or insight...",
    suggestedLabel: "Suggestions",
    noResult: "No result for this query.",
  },
};
