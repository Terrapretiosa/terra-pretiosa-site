import type { FaqItem } from "./types";

export const serviceFaqsBySlugEn: Record<string, FaqItem[]> = {
  "fragmentation-des-roches": [
    {
      "question": "Who is this service for?",
      "answer": "For exploration and operations teams who need controlled size reduction before sampling, laboratory analysis, or processing tests. It is also relevant for projects preparing representative composites from heterogeneous materials."
    },
    {
      "question": "What do you need from the client to start?",
      "answer": "Sample type and approximate mass, the downstream objective (chemical analysis, mineralogy, or metallurgical testing), target top size if known, and any constraints such as moisture, contamination risk, or safety requirements."
    },
    {
      "question": "How do you define the target particle size?",
      "answer": "We set the target size based on the next step: representativeness for splitting, suitability for specific analytical methods, or liberation needs for test work. We can validate the target using simple checks such as sieving or particle size distribution where relevant."
    },
    {
      "question": "How do you avoid over-grinding and analytical bias?",
      "answer": "We use staged reduction (coarse to fine), control residence time, limit excessive fines, and apply cleaning steps between batches. When needed, we separate high-grade materials and document key steps so results are repeatable."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "You receive labeled outputs at the required size range, plus a brief process record describing the reduction steps, target size, and any checks performed. Where requested, we also provide a simple size distribution snapshot."
    }
  ],
  "preparation-des-echantillons": [
    {
      "question": "How do you ensure the prepared sample remains representative?",
      "answer": "We follow a controlled workflow: sample inventory and identification, drying when required, staged crushing/grinding, thorough mixing, and disciplined splitting/fractioning. The goal is to minimize bias and keep subsamples consistent with the original material."
    },
    {
      "question": "What do you need from me to begin sample preparation?",
      "answer": "We need sample IDs, material type, approximate mass, the intended analyses/tests, and the required grain size or format (coarse fraction, pulp, duplicates). Any special constraints (trace elements, contamination sensitivity) should be shared upfront."
    },
    {
      "question": "How do you prevent cross-contamination between samples?",
      "answer": "We apply cleaning protocols between batches, use appropriate containers, separate sensitive or high-grade materials when needed, and document handling steps. Extra precautions can be added for trace-level work."
    },
    {
      "question": "What output formats can you deliver?",
      "answer": "Common outputs include coarse fractions, fine pulp, split duplicates, and composite samples. The exact format depends on the downstream method and the decisions you need to make."
    },
    {
      "question": "Do you provide documentation and chain-of-custody support?",
      "answer": "Yes. We can provide an inventory log, labeling and packaging conventions, and documented handoffs so the sample path from receipt to final output remains traceable."
    }
  ],
  "analyses-mineralogiques-et-chimiques": [
    {
      "question": "How do you choose the right analytical approach?",
      "answer": "We start from the decision you need to make-resource understanding, process design, environmental risk, or compliance-then select methods that best answer it. We often combine mineralogy and chemistry to avoid incomplete interpretation."
    },
    {
      "question": "When do I need mineralogy versus chemistry?",
      "answer": "Chemistry tells you how much of each element is present; mineralogy tells you the minerals hosting those elements and how they are associated. Mineralogy is especially important for processing behavior, liberation, and environmental reactivity."
    },
    {
      "question": "What information do you need about the sample?",
      "answer": "We need sample IDs, material type, project context, and what you want to learn (e.g., host phases, gangue, deleterious elements). We may request specific preparation such as pulp, sized fractions, or prepared mounts depending on the method."
    },
    {
      "question": "How do you manage confidence and data quality?",
      "answer": "We apply QA/QC practices appropriate to the scope-standards, duplicates, blanks, and consistency checks-then interpret results with clear notes on limitations. Any assumptions are made explicit in the reporting."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "You receive structured results (tables and summaries), key findings such as mineral associations or drivers of behavior, and recommended next steps (additional tests, process options, or monitoring priorities) based on the outcomes."
    }
  ],
  "tests-mineralurgiques-et-metallurgiques": [
    {
      "question": "What types of tests can you run?",
      "answer": "Depending on the ore and objectives, we can scope and run tests such as particle size analysis, gravity separation screening, flotation scoping, and leaching scoping. The program is tailored to commodity targets and project stage."
    },
    {
      "question": "What sample mass and preparation do you need?",
      "answer": "Requirements depend on variability, test objectives, and the number of conditions to evaluate. We define target mass, top size, and preparation steps after a short scoping discussion and review of available sample material."
    },
    {
      "question": "What performance indicators do you report?",
      "answer": "Typical KPIs include recovery, product grade, mass pull, and sensitivity to grind size or operating conditions. Where relevant, we also note practical observations that affect scale-up decisions."
    },
    {
      "question": "How do these results support project decisions?",
      "answer": "They help screen viable processing routes, identify key risks (liberation limits, reagent sensitivity, leach behavior), and prioritize next-stage testing. This reduces uncertainty before committing to larger programs or process design."
    },
    {
      "question": "What is a typical timeline?",
      "answer": "Timelines depend on sample readiness and test scope. After scoping, we provide a practical plan with sequencing (preparation -> baseline tests -> optimization loops) and expected turnaround for each stage."
    }
  ],
  "exhaure-des-mines": [
    {
      "question": "When do I need mine dewatering services?",
      "answer": "When water inflow or accumulation threatens safety, production continuity, slope stability, underground access, or equipment reliability. Dewatering is also critical during rainy seasons, commissioning, or when expanding to new benches or headings."
    },
    {
      "question": "What information do you need to size the solution?",
      "answer": "We need the site context (open pit or underground), estimated inflow rates, pumping head (depth/elevation), water quality constraints, power availability, discharge points, and any operational constraints (access, mobility, duty cycle). If flow data is unavailable, we can start with field measurements and conservative assumptions."
    },
    {
      "question": "How do you choose pumps and setup (submersible, diesel, pipelines)?",
      "answer": "We select equipment based on required flow, head, solids content, reliability needs, and site logistics. The setup is designed for robustness and maintainability, with redundancy where uptime is critical."
    },
    {
      "question": "How do you manage HSE risks during dewatering operations?",
      "answer": "We apply a site-specific risk assessment, safe work procedures, lockout/tagout where applicable, and controls for electrical, lifting, confined space, and slip hazards. We also coordinate with the mine's HSE system and reporting requirements."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "Typically: a dewatering plan (assumptions, equipment sizing, layout), operating procedures, maintenance recommendations, and optional monitoring indicators (flow, downtime, water levels). For urgent deployments, we provide a rapid action plan followed by stabilization improvements."
    }
  ],
  "forage-minier": [
    {
      "question": "What types of drilling do you provide?",
      "answer": "We support drilling for production and operational needs, including drainage drilling in open pit and underground environments. The exact scope is defined based on target depth, diameter, accuracy, and site conditions."
    },
    {
      "question": "What do you need from the client before mobilization?",
      "answer": "We need the drilling objectives, site access conditions, target depths/diameters, ground conditions (if known), HSE requirements, and any permitting or site induction constraints. A basic schedule and priorities help optimize deployment."
    },
    {
      "question": "How do you ensure technical performance and accuracy?",
      "answer": "We define operating parameters and quality checks aligned to the objective, maintain equipment readiness, and use disciplined supervision and documentation. Where required, we capture drill logs and verify key parameters during execution."
    },
    {
      "question": "How do you manage safety and operational compliance on site?",
      "answer": "We follow mine site rules, conduct pre-start checks, apply job hazard analysis, and ensure crew competency for the environment (open pit or underground). Coordination with the client's supervisors and HSE team is built into the workflow."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "Deliverables may include drill logs, execution summaries, basic performance metrics (e.g., completed meters, downtime causes), and recommendations for optimization or follow-on work. The exact deliverable pack depends on the drilling program type."
    }
  ],
  "transport-minier": [
    {
      "question": "What can you transport for mining operations?",
      "answer": "We can support transport of ore, equipment, and industrial consumables between sites, processing facilities, and logistics hubs. The exact scope depends on load type, route constraints, and safety requirements."
    },
    {
      "question": "What kind of fleet and logistics setup do you use?",
      "answer": "We deploy fleet configurations appropriate to the cargo (e.g., dump trucks, flatbeds, tankers where relevant) and coordinate dispatch with scheduling and route planning. The aim is to meet deadlines while maintaining safety and traceability."
    },
    {
      "question": "How do you ensure security and traceability?",
      "answer": "We implement basic tracking and documentation for loads, handoffs, and delivery confirmations. For higher-risk cargo, we can add stricter controls such as controlled handover points and reporting checkpoints."
    },
    {
      "question": "What regions do you cover?",
      "answer": "We prioritize operations aligned with Terra Pretiosa's corridor of activity in West Africa and select neighboring routes based on feasibility, security, and client timelines. Coverage is confirmed during scoping to match the project's logistics realities."
    },
    {
      "question": "How do you handle incidents, delays, or changes in plan?",
      "answer": "We communicate quickly, document the situation, and propose practical alternatives (rerouting, rescheduling, or load adjustments) while maintaining safety first. For critical operations, we recommend contingency planning and buffer capacity."
    }
  ],
  "amelioration-continue": [
    {
      "question": "Who is this training designed for?",
      "answer": "For mining and metallurgical professionals involved in operations, maintenance, processing, quality, and supervision. It also fits managers who need practical levers to improve productivity, reduce variability, and strengthen performance culture."
    },
    {
      "question": "What is the format and typical duration?",
      "answer": "We offer onsite or remote delivery depending on constraints. Duration ranges from short workshops (1-2 days) to multi-week programs with coaching and project-based assignments, depending on your objectives."
    },
    {
      "question": "What topics are covered?",
      "answer": "Typical modules include Lean Mining fundamentals, process mapping, waste reduction, Statistical Process Control (SPC), preventive maintenance and equipment reliability, cost drivers and operational performance, and how to sustain continuous improvement through routines and governance."
    },
    {
      "question": "Can the training be tailored to our site and KPIs?",
      "answer": "Yes. We adapt examples, exercises, and case studies to your flows, constraints, and KPIs (throughput, recovery, downtime, energy, quality). If you share baseline data, we can align the training to real improvement opportunities."
    },
    {
      "question": "What deliverables do participants receive?",
      "answer": "Participants receive training materials, practical tools/templates, and a clear action plan. For longer programs, we also deliver a shortlist of improvement projects with measurable targets and a follow-up plan."
    }
  ],
  "traitement-mineralurgique-et-des-eaux": [
    {
      "question": "Who should attend this training?",
      "answer": "It is designed for plant operators, technicians, metallurgists, and supervisors who want to improve mineral processing performance and industrial water management. It also supports teams working on environmental compliance and water reuse."
    },
    {
      "question": "Are there prerequisites?",
      "answer": "No strict prerequisites are required, but basic familiarity with plant operations helps. We can deliver a fundamentals track for newer staff and a more advanced track for experienced teams."
    },
    {
      "question": "What topics are included?",
      "answer": "Modules can cover crushing, grinding, classification, flotation, gravity separation, leaching basics, mass balances and performance control, plus water treatment and recycling principles, including effluent constraints and practical monitoring."
    },
    {
      "question": "Is the training practical and hands-on?",
      "answer": "Yes. We use real case studies, calculation exercises (mass balances, KPIs), and scenario-based problem solving. Where feasible, we align exercises to your circuit and operating constraints."
    },
    {
      "question": "What measurable outcomes should we expect?",
      "answer": "Teams typically gain improved control of key operating variables, clearer understanding of performance losses, and stronger decision-making around water reuse and treatment options. We can define site-specific success metrics during scoping."
    }
  ],
  "politique-environnementale": [
    {
      "question": "Why do we need an environmental policy and strategy before rehabilitation work?",
      "answer": "A clear policy sets standards, roles, and enforcement mechanisms so rehabilitation and compliance are consistent and defensible. It also helps align stakeholders, secure funding mechanisms, and reduce regulatory and operational uncertainty."
    },
    {
      "question": "What does your policy development scope typically include?",
      "answer": "It commonly includes a sector or site diagnosis, review of the legal and institutional framework, stakeholder consultation, definition of standards and procedures, ESG alignment with international expectations, and a practical implementation roadmap."
    },
    {
      "question": "How do you handle stakeholder consultation?",
      "answer": "We define the relevant stakeholder map (government, operators, communities, financiers, regulators), run structured interviews or workshops, and translate findings into clear requirements and trade-offs. The process is documented to support transparency."
    },
    {
      "question": "How do you address enforcement and compliance mechanisms?",
      "answer": "We propose realistic monitoring, reporting, and control mechanisms that match institutional capacity. This can include audit routines, thresholds for action, reporting templates, and recommended governance structures for oversight."
    },
    {
      "question": "What deliverables will we receive?",
      "answer": "Deliverables typically include a policy document, standards/guidelines, an implementation plan with milestones, recommended institutional roles, and optional financial mechanisms such as environmental guarantees where relevant."
    }
  ],
  "evaluation-et-rehabilitation-des-sites": [
    {
      "question": "What do you assess during a site evaluation?",
      "answer": "We assess environmental, geotechnical, and operational risks linked to mining legacies, including soils, water, residues/tailings, drainage pathways, and infrastructure conditions. The goal is to map liabilities and prioritize interventions."
    },
    {
      "question": "How do you estimate rehabilitation costs?",
      "answer": "We base estimates on the identified liabilities, required remediation actions, access/logistics constraints, material volumes, and monitoring needs. Assumptions and uncertainty ranges are documented so decisions remain transparent."
    },
    {
      "question": "What does a rehabilitation plan include?",
      "answer": "A typical plan includes the technical approach (stabilization, containment, treatment, revegetation), sequencing, HSE controls, required resources, cost and schedule, and monitoring indicators to verify effectiveness over time."
    },
    {
      "question": "Do you coordinate with authorities and compliance requirements?",
      "answer": "Yes. We align the rehabilitation approach with applicable regulations and stakeholder expectations, and we can support reporting packages that facilitate review, approvals, and follow-up monitoring."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "You receive an assessment report, risk and liability mapping, a prioritized action plan, and a rehabilitation concept with cost/schedule. Where needed, we include monitoring recommendations and documentation suitable for decision-makers."
    }
  ],
  "controle-qualite-assurance-qualite": [
    {
      "question": "What does QA/QC mean in your context?",
      "answer": "QA/QC refers to structured procedures that ensure results are reliable, traceable, and defensible. It includes preventive controls (QA) and verification checks (QC) applied to sampling, handling, analysis, and reporting."
    },
    {
      "question": "Which controls do you typically use?",
      "answer": "Common controls include instrument calibration checks, certified reference materials, blanks, duplicates, and documented procedures for sample handling and data validation. The exact control set is adapted to the project risk level."
    },
    {
      "question": "Do you support chain-of-custody and traceability?",
      "answer": "Yes. We can implement chain-of-custody documentation and controlled handoffs, including labeling conventions, logs, and integrity checks, to preserve traceability from collection to reporting."
    },
    {
      "question": "Do you perform audits or result validation?",
      "answer": "We can run internal checks and consistency reviews, and we can support audit-ready reporting by documenting methods, controls, and non-conformance handling. Any limitations are disclosed clearly."
    },
    {
      "question": "How do you handle non-conformities or questionable results?",
      "answer": "We flag anomalies, review possible causes (sampling, preparation, instrument drift, contamination), and recommend corrective actions such as re-analysis, additional controls, or revised procedures. The resolution path is documented."
    }
  ],
  "surveillance-qualite-des-eaux": [
    {
      "question": "What types of water do you monitor?",
      "answer": "We can monitor potable, surface, groundwater, industrial process water, and wastewater depending on the site context. The scope is defined based on intended use, risk, and regulatory requirements."
    },
    {
      "question": "How do you define the sampling plan?",
      "answer": "We define sampling locations, frequency, and parameters based on risk pathways, operational needs, and compliance expectations. If baseline data is limited, we start with a practical baseline campaign and refine from results."
    },
    {
      "question": "Can you operate in remote areas and new boreholes?",
      "answer": "Yes, we can plan logistics for remote sampling and coordinate handling to preserve sample integrity. We prioritize practical scheduling, safety constraints, and clear documentation of field conditions."
    },
    {
      "question": "How are results reported and interpreted?",
      "answer": "Results are delivered in structured tables with key indicators and short interpretation notes. Where thresholds apply, we highlight exceedances and recommend follow-up actions or confirmatory sampling."
    },
    {
      "question": "How often should monitoring be performed?",
      "answer": "Frequency depends on risk level, seasonality, operational changes, and regulatory needs. We typically recommend a baseline phase followed by a routine schedule that can be increased during high-risk periods."
    }
  ],
  "effluents-miniers-et-drainage-minier-acide": [
    {
      "question": "Which parameters do you typically evaluate?",
      "answer": "We focus on indicators relevant to mine effluents such as pH, conductivity, sulfates, dissolved metals, and other site-specific contaminants. The final list is based on the mine context and compliance thresholds."
    },
    {
      "question": "How do you diagnose pollution sources (AMD, tailings, ponds)?",
      "answer": "We map drainage pathways, identify likely generation zones, review operational water circuits, and correlate water chemistry with site features. The objective is to target interventions where they will be most effective."
    },
    {
      "question": "What treatment options can you propose?",
      "answer": "Options may include neutralization, chemical precipitation, filtration, and other modular approaches depending on water chemistry and volumes. We prioritize solutions that are operable in the local context and maintainable over time."
    },
    {
      "question": "Can you help optimize industrial water recycling?",
      "answer": "Yes. We can propose practical circuit improvements, retention or settling strategies, and treatment steps that improve reuse while controlling scaling, corrosion, and contamination risks."
    },
    {
      "question": "What deliverables will I receive?",
      "answer": "You receive an assessment summary (sources, risks, constraints), recommended treatment and management options, and a monitoring plan. If required, we include implementation steps and operational checks to sustain performance."
    }
  ],
  "strategie-recettes-minieres": [
    {
      "question": "What is the goal of a mining revenue improvement strategy?",
      "answer": "To increase the state's ability to capture fair and predictable value from mining by improving rules, processes, monitoring, and negotiation capacity. The focus is on reducing leakages, strengthening reporting, and aligning incentives with long-term development."
    },
    {
      "question": "What information do you need to start?",
      "answer": "We typically need the current fiscal and regulatory framework, production and export data, contract/permit structures, institutional roles, and existing reporting processes. If data is fragmented, we start with a structured data inventory and gap analysis."
    },
    {
      "question": "How do you approach the work in practice?",
      "answer": "We combine technical understanding of mineral value chains with policy and macroeconomic analysis. The work usually includes diagnosis, benchmarking, stakeholder interviews, and a prioritized roadmap with quick wins and structural reforms."
    },
    {
      "question": "What deliverables will we receive?",
      "answer": "Common deliverables include a diagnostic report, a prioritized reform roadmap, recommended KPIs and reporting templates, and proposals for institutional strengthening. Where requested, we include implementation guidance and capacity-building actions."
    },
    {
      "question": "How do you measure impact?",
      "answer": "We define measurable indicators such as improved reporting coverage, reduced reconciliation gaps, faster audit cycles, increased compliance, and better predictability of revenue flows. The exact KPIs are agreed during scoping."
    }
  ],
  "structuration-organes-et-unites-revenus": [
    {
      "question": "What does institutional structuring mean in this context?",
      "answer": "It means designing or improving the roles, workflows, and coordination mechanisms between agencies responsible for mining oversight, revenue, and compliance. The objective is to reduce overlap, close gaps, and improve execution capacity."
    },
    {
      "question": "What is typically included in the scope?",
      "answer": "We assess the current institutional landscape, propose target operating models, define responsibilities, and recommend staffing profiles and workflows. We also align procedures with reporting needs and audit readiness."
    },
    {
      "question": "Do you help create specialized mining revenue units?",
      "answer": "Yes. We can propose the mandate, structure, governance, and operating procedures for specialized units, including required skills and interfaces with other ministries and regulators."
    },
    {
      "question": "Do you produce manuals and procedures?",
      "answer": "Yes. We can draft practical procedure manuals, templates, and checklists to standardize operations, improve traceability, and support continuity even when teams change."
    },
    {
      "question": "How do you support capacity building?",
      "answer": "We provide targeted training for managers and technical staff, coaching for implementation, and tools that help teams apply the new procedures in day-to-day work. The goal is to embed capability, not just deliver documents."
    }
  ],
  "integration-locale-et-politique-industrielle": [
    {
      "question": "What is the objective of local content and industrial policy work?",
      "answer": "To move from raw export dependence toward value addition, competitive local supply chains, and job creation-while remaining realistic about costs, infrastructure, and market access. The goal is a practical pathway to industrialization."
    },
    {
      "question": "What analysis do you typically conduct?",
      "answer": "We assess competitiveness of local transformation options, CAPEX and operating requirements, supply chain constraints, and potential employment and revenue impacts. We also examine incentive structures and implementation feasibility."
    },
    {
      "question": "What deliverables will we receive?",
      "answer": "Deliverables may include competitiveness studies, policy options with trade-offs, incentive design proposals, and an implementation roadmap. Where relevant, we include recommendations for industrial zones linked to mining corridors."
    },
    {
      "question": "Who do you work with during the mission?",
      "answer": "We typically coordinate with ministries, regulators, state-owned entities, financiers, and industrial partners. We align priorities through structured workshops and translate them into operational policy recommendations."
    },
    {
      "question": "How do you define success for this work?",
      "answer": "Success is a realistic plan that can be executed: clearly defined priority value chains, credible investment and infrastructure requirements, enforceable local content measures, and measurable KPIs for jobs, capability, and value addition."
    }
  ],
  "controle-production-et-reporting": [
    {
      "question": "Why are production controls and reporting systems critical?",
      "answer": "Because production and export volumes drive royalties, taxes, and macroeconomic planning. Weak controls create leakages, disputes, and unreliable planning. Strong systems improve transparency and trust."
    },
    {
      "question": "What do you typically implement or improve?",
      "answer": "We can help design reporting workflows, define required data fields, propose verification points, and recommend tools for consolidation and auditability. The approach is scaled to local capacity and available infrastructure."
    },
    {
      "question": "How do you verify reported production and exports?",
      "answer": "We propose controls such as reconciliation across sources (site, transport, port, customs), targeted audits, and traceability steps. The goal is a defensible data chain rather than reliance on a single reporting point."
    },
    {
      "question": "What deliverables will we receive?",
      "answer": "Typically: a target reporting framework, templates and procedures, recommended verification controls, and an implementation roadmap. We can also define KPIs and governance routines to sustain the system."
    },
    {
      "question": "How long does implementation usually take?",
      "answer": "It depends on scope and data maturity. We usually start with a rapid diagnostic and quick-win improvements, then build toward a more complete system in phases with clear milestones."
    }
  ],
  "audit-flux-paiements-et-tracabilite-export": [
    {
      "question": "What does a payment flow audit focus on?",
      "answer": "It focuses on how money should flow versus how it actually flows-identifying gaps, timing issues, reconciliation problems, and potential leakages. It also checks whether payments align with production, pricing, and contractual terms."
    },
    {
      "question": "What data do you need to conduct the audit?",
      "answer": "We typically need payment records, declarations, production/export data, contract terms, institutional processes, and any prior audit findings. If full data access is limited, we can start with a high-level mapping and progressively deepen."
    },
    {
      "question": "How do you approach export traceability?",
      "answer": "We map the chain from mine to export point, define control points, and propose documentation and reconciliation steps. The objective is to reduce uncertainty on volumes, grades, and declared values."
    },
    {
      "question": "What outputs do you deliver?",
      "answer": "You receive a findings report with prioritized issues, recommended controls and procedure changes, and a practical action plan. Where appropriate, we provide templates for reconciliation and reporting."
    },
    {
      "question": "How do you handle confidentiality and sensitive information?",
      "answer": "We apply strict confidentiality practices, restrict access to mission data, and document assumptions without exposing sensitive details in public-facing materials. Confidential handling rules are agreed at the start of the engagement."
    }
  ],
  "renforcement-capacites-administration": [
    {
      "question": "Who is capacity building intended for?",
      "answer": "For government and regulatory staff involved in licensing, monitoring, revenue oversight, environmental compliance, and data management. It can also include cross-ministry coordination teams where responsibilities overlap."
    },
    {
      "question": "What topics can the capacity building cover?",
      "answer": "Topics may include project evaluation tools, procedures and manuals, audit readiness, reporting and reconciliation methods, governance routines, and negotiation support. The curriculum is adapted to role profiles and current maturity."
    },
    {
      "question": "What is the delivery format?",
      "answer": "We can deliver workshops, hands-on labs using real datasets (where permitted), coaching sessions, and follow-up support during implementation. Programs can be short and intensive or staged over time."
    },
    {
      "question": "What deliverables come with the training?",
      "answer": "Participants receive practical toolkits (templates, checklists, workflows) and a clear operational playbook aligned to their responsibilities. Where needed, we define standard operating procedures to ensure continuity."
    },
    {
      "question": "How do you measure success of capacity building?",
      "answer": "We use measurable outcomes such as improved reporting quality, faster review cycles, reduced reconciliation gaps, stronger audit execution, and clearer decision documentation. Metrics are agreed upfront to match the institution's goals."
    }
  ]
};

export const serviceFaqsBySlugFr: Record<string, FaqItem[]> = {
  "fragmentation-des-roches": [
    {
      "question": "A qui s'adresse ce service?",
      "answer": "Pour les équipes d'exploration et d'exploitation qui ont besoin d'une réduction contrôlée de la taille avant les tests d'échantillonnage, d'analyse en laboratoire ou de traitement. Cela est également pertinent pour les projets préparant des composites représentatifs à partir de matériaux hétérogènes."
    },
    {
      "question": "De quoi avez-vous besoin du client pour commencer?",
      "answer": "Type d'échantillon et masse approximative, objectif en aval (analyse chimique, minéralogie ou essais métallurgiques), taille supérieure cible si connue et eventuelles contraintes telles que l'humidite, le risque de contamination ou les exigences de sécurité."
    },
    {
      "question": "Comment définir la taille des particules cibles?",
      "answer": "Nous définissons la taille cible en fonction de l'étape suivante : représentativité pour le fractionnement, adéquation a des méthodes analytiques spécifiques ou besoins de libération pour les travaux de test. Nous pouvons valider la cible a l'aide de contrôles simples tels que le tamisage ou la distribution granulométrique le cas echeant."
    },
    {
      "question": "Comment éviter les exces de broyage et les biais analytiques?",
      "answer": "Nous utilisons une réduction par étapes (de grossiere a fine), controlons le temps de sejour, limitons les fines excessives et appliquons des étapes de nettoyage entre les lots. Si nécessaire, nous séparons les matériaux de haute qualité et documentons les étapes clés afin que les résultats soient reproductibles."
    },
    {
      "question": "Quels livrables vais-je recevoir?",
      "answer": "Vous recevez des résultats étiquetés dans la plage de tailles requise, ainsi qu'un bref enregistrement du processus décrivant les étapes de réduction, la taille cible et toutes les vérifications effectuées. Sur demande, nous fournissons également un simple instantané de distribution de taille."
    }
  ],
  "preparation-des-echantillons": [
    {
      "question": "Comment vous assurez-vous que l'échantillon préparé reste représentatif?",
      "answer": "Nous suivons un flux de travail contrôle : inventaire et identification des échantillons, sechage si nécessaire, concassage/broyage par étapes, melange minutieux et fractionnement/fractionnement discipline. L'objectif est de minimiser les biais et de maintenir la cohérence des sous-échantillons avec le matériel original."
    },
    {
      "question": "De quoi avez-vous besoin de ma part pour commencer la préparation des échantillons?",
      "answer": "Nous avons besoin des identifiants des échantillons, du type de matériau, de la masse approximative, des analyses/tests prevus et de la granulometrie ou du format requis (fraction grossiere, pulpe, doublons). Les eventuelles contraintes particulieres (éléments traces, sensibilité a la contamination) doivent être communiquees en amont."
    },
    {
      "question": "Comment éviter la contamination croisée entre les échantillons?",
      "answer": "Nous appliquons des protocoles de nettoyage entre les lots, utilisons des conteneurs appropriés, séparons les matériaux sensibles ou de haute qualité si nécessaire et documentons les étapes de traitement. Des précautions supplémentaires peuvent être ajoutées pour les travaux au niveau des traces."
    },
    {
      "question": "Quels formats de sortie pouvez-vous fournir?",
      "answer": "Les résultats courants incluent les fractions grossieres, la pulpe fine, les doublons fractionnes et les échantillons composites. Le format exact dépend de la méthode en aval et des décisions que vous devez prendre."
    },
    {
      "question": "Fournissez-vous un support en matière de documentation et de chaîne de traçabilité?",
      "answer": "Oui. Nous pouvons fournir un journal d'inventaire, des conventions d'étiquetage et d'emballage, ainsi que des transferts documentes afin que le chemin de l'échantillon depuis la reception jusqu'a la sortie finale reste tracable."
    }
  ],
  "analyses-mineralogiques-et-chimiques": [
    {
      "question": "Comment choisir la bonne approche analytique?",
      "answer": "Nous partons de la décision que vous devez prendre (compréhension des ressources, conception des processus, risque environnemental ou conformité), puis sélectionnons les méthodes qui y repondent le mieux. Nous combinons souvent minéralogie et chimie pour éviter des interpretations incompletes."
    },
    {
      "question": "Quand ai-je besoin de minéralogie plutôt que de chimie?",
      "answer": "La chimie vous indique la quantité de chaque élément présente ; la minéralogie vous indique les minéraux qui hébergent ces éléments et comment ils sont associés. La minéralogie est particulièrement importante pour le comportement de transformation, la libération et la réactivité environnementale."
    },
    {
      "question": "De quelles informations avez-vous besoin sur l'échantillon?",
      "answer": "Nous avons besoin des identifiants des échantillons, du type de matériau, du contexte du projet et de ce que vous souhaitez apprendre (par exemple, phases hôtes, gangue, éléments délétères). Nous pouvons demander des préparations spécifiques telles que de la pâte, des fractions calibrées ou des supports prepares selon la méthode."
    },
    {
      "question": "Comment gerez-vous la confiance et la qualité des données?",
      "answer": "Nous appliquons des pratiques d'AQ/CQ appropriees aux normes de portée, aux doublons, aux blancs et aux contrôles de cohérence, puis interpretons les résultats avec des notes claires sur les limites. Toutes les hypothèses sont explicitees dans le rapport."
    },
    {
      "question": "Quels livrables vais-je recevoir?",
      "answer": "Vous recevez des résultats structurés (tableaux et résumés), des conclusions clés telles que des associations de minéraux ou des facteurs de comportement, et les prochaines étapes recommandées (tests supplémentaires, options de processus ou priorités de surveillance) en fonction des résultats."
    }
  ],
  "tests-mineralurgiques-et-metallurgiques": [
    {
      "question": "Quels types de tests pouvez-vous exécuter?",
      "answer": "En fonction du minerai et des objectifs, nous pouvons définir et exécuter des tests tels que l'analyse granulométrique, le criblage par séparation par gravite, la determination de la portée par flottation et la determination de la portée par lixiviation. Le programme est adapté aux objectifs en matière de produits et au stade du projet."
    },
    {
      "question": "De quelle masse d'échantillon et de quelle préparation avez-vous besoin?",
      "answer": "Les exigences dépendent de la variabilite, des objectifs du test et du nombre de conditions a evaluer. Nous définissons la masse cible, la taille supérieure et les étapes de préparation après une breve discussion de portée et un examen des échantillons disponibles."
    },
    {
      "question": "Quels indicateurs de performance rapportez-vous?",
      "answer": "Les KPI typiques incluent la récupération, la qualité du produit, la traction massique et la sensibilité a la taille de la mouture ou aux conditions de fonctionnement. Le cas echeant, nous notons également des observations pratiques qui affectent les décisions de mise a l'échelle."
    },
    {
      "question": "Comment ces résultats soutiennent-ils les décisions de projet?",
      "answer": "Ils aident a sélectionner les itinéraires de traitement viables, a identifier les principaux risques (limites de libération, sensibilité des réactifs, comportement de lixiviation) et a prioriser les tests de l'étape suivante. Cela réduit l'incertitude avant de s'engager dans des programmes ou une conception de processus plus vastes."
    },
    {
      "question": "Quelle est une chronologie typique?",
      "answer": "Les délais dépendent de l'état de préparation des échantillons et de la portée des tests. Après le cadrage, nous fournissons un plan pratique avec le séquençage (préparation -> tests de base -> boucles d'optimisation) et le délai d'exécution attendu pour chaque étape."
    }
  ],
  "exhaure-des-mines": [
    {
      "question": "Quand ai-je besoin de services d'assèchement de mine ?",
      "answer": "Lorsque l'afflux ou l'accumulation d'eau menace la sécurité, la continuité de la production, la stabilité des pentes, les accès souterrains ou la fiabilité des équipements. La déshydratation est également essentielle pendant les saisons des pluies, lors de la mise en service ou lors de l'expansion vers de nouveaux bancs ou captages."
    },
    {
      "question": "De quelles informations avez-vous besoin pour dimensionner la solution?",
      "answer": "Nous avons besoin du contexte du site (à ciel ouvert ou souterrain), des débits entrants estimés, de la hauteur de pompage (profondeur/élévation), des contraintes de qualité de l'eau, de la disponibilité de l'électricité, des points de rejet et de toute contrainte opérationnelle (accès, mobilité, cycle de service). Si les données de débit ne sont pas disponibles, nous pouvons commencer par des mesures sur le terrain et des hypothèses prudentes."
    },
    {
      "question": "Comment choisissez-vous les pompes et leur configuration (submersibles, diesel, pipelines)?",
      "answer": "Nous sélectionnons les équipements en fonction du débit requis, de la hauteur, de la teneur en solides, des besoins de fiabilité et de la logistique du site. La configuration est conçue pour la robustesse et la maintenabilité, avec une redondance la ou la disponibilité est critique."
    },
    {
      "question": "Comment gérer les risques HSE lors des opérations d'assèchement?",
      "answer": "Nous appliquons une évaluation des risques spécifiques au site, des procédures de travail sûres, un verrouillage/étiquetage le cas echeant et des contrôles pour les risques électriques, de levage, d'espace confine et de glissade. Nous nous coordonnons également avec le système HSE de la mine et les exigences en matière de reporting."
    },
    {
      "question": "Quels livrables vais-je recevoir?",
      "answer": "Typiquement : un plan de déshydratation (hypothèses, dimensionnement des équipements, disposition), des procédures d'exploitation, des recommandations de maintenance et des indicateurs de suivi optionnels (débit, temps d'arrêt, niveaux d'eau). Pour les déploiements urgents, nous proposons un plan d'action rapide suivi d'améliorations de stabilisation."
    }
  ],
  "forage-minier": [
    {
      "question": "Quels types de forages proposez-vous?",
      "answer": "Nous soutenons le forage pour les besoins de production et opérationnels, y compris le forage de drainage dans les environnements à ciel ouvert et souterrains. La portée exacte est définie en fonction de la profondeur, du diametre, de la précision et des conditions du site."
    },
    {
      "question": "Qu'attendez-vous du client avant la mobilisation?",
      "answer": "Nous avons besoin des objectifs de forage, des conditions d'accès au site, des profondeurs/diametres cibles, des conditions du sol (si connues), des exigences HSE et de toute contrainte d'autorisation ou d'induction du site. Un calendrier et des priorités de base aident a optimiser le deploiement."
    },
    {
      "question": "Comment garantissez-vous les performances techniques et la précision?",
      "answer": "Nous définissons les paramètres de fonctionnement et les contrôles de qualité alignés sur l'objectif, maintenons l'état de préparation des équipements et utilisons une supervision et une documentation disciplinees. Si nécessaire, nous capturons les journaux de forage et verifions les paramètres clés pendant l'exécution."
    },
    {
      "question": "Comment gerez-vous la sécurité et la conformité opérationnelle sur site?",
      "answer": "Nous suivons les règles du site minier, effectuons des vérifications avant le démarrage, appliquons une analyse des risques professionnels et garantissons la competence de l'équipe pour l'environnement (à ciel ouvert ou souterrain). La coordination avec les superviseurs du client et l'équipe HSE est intégrée au flux de travail."
    },
    {
      "question": "Quels livrables vais-je recevoir?",
      "answer": "Les livrables peuvent inclure des journaux de forage, des résumés d'exécution, des mesures de performance de base (par exemple, compteurs termines, causes de temps d'arrêt) et des recommandations pour l'optimisation ou les travaux de suivi. Le pack exact livrable dépend du type de programme de forage."
    }
  ],
  "transport-minier": [
    {
      "question": "Que peut-on transporter pour les opérations minières?",
      "answer": "Nous pouvons prendre en charge le transport de minerais, d'équipements et de consommables industriels entre les sites, les installations de traitement et les pôles logistiques. La portée exacte dépend du type de charge, des contraintes d'itinéraire et des exigences de sécurité."
    },
    {
      "question": "Quel type de flotte et de configuration logistique utilisez-vous?",
      "answer": "Nous déployons des configurations de flotte adaptées a la cargaison (par exemple, camions a benne basculante, plateaux, camions-citernes le cas echeant) et coordonnons l'expédition avec la planification et la planification des itinéraires. L'objectif est de respecter les délais tout en préservant la sécurité et la traçabilité."
    },
    {
      "question": "Comment assurer la sécurité et la traçabilité?",
      "answer": "Nous mettons en oeuvre un suivi et une documentation de base pour les chargements, les transferts et les confirmations de livraison. Pour les marchandises a plus haut risque, nous pouvons ajouter des contrôles plus stricts tels que des points de remise contrôles et des points de contrôle de declaration."
    },
    {
      "question": "Quelles régions couvrez-vous?",
      "answer": "Nous donnons la priorité aux opérations alignees sur le corridor d'activité de Terra Pretiosa en Afrique de l'Ouest et sélectionnons les itinéraires voisins en fonction de la faisabilite, de la sécurité et des délais du client. La couverture est confirmée lors du cadrage pour correspondre aux réalités logistiques du projet."
    },
    {
      "question": "Comment gerez-vous les incidents, les retards ou les changements de plan?",
      "answer": "Nous communiquons rapidement, documentons la situation et proposons des alternatives pratiques (reacheminement, reprogrammation ou ajustements de charge) tout en maintenant la sécurité avant tout. Pour les opérations critiques, nous recommandons une planification d'urgence et une capacité tampon."
    }
  ],
  "amelioration-continue": [
    {
      "question": "A qui s'adresse cette formation?",
      "answer": "Pour les professionnels des mines et de la métallurgie impliqués dans les opérations, la maintenance, la transformation, la qualité et la supervision. Il convient également aux managers qui ont besoin de leviers pratiques pour améliorer la productivite, réduire la variabilite et renforcer la culture de la performance."
    },
    {
      "question": "Quel est le format et la durée typique?",
      "answer": "Nous proposons une livraison sur place ou à distance selon les contraintes. La durée varie d'ateliers courts (1 a 2 jours) a des programmes de plusieurs semaines avec coaching et missions basees sur des projets, en fonction de vos objectifs."
    },
    {
      "question": "Quels sujets sont abordés?",
      "answer": "Les modules typiques incluent les principes fondamentaux du Lean Mining, la cartographie des processus, la réduction des déchets, le contrôle statistique des processus (SPC), la maintenance préventive et la fiabilité des équipements, les facteurs de coûts et les performances opérationnelles, ainsi que la manière de maintenir une amélioration continue grâce aux routines et a la gouvernance."
    },
    {
      "question": "La formation peut-elle être adaptée a notre site et a nos KPI?",
      "answer": "Oui. Nous adaptons exemples, exercices et études de cas a vos flux, contraintes et KPI (débit, récupération, temps d'arrêt, energie, qualité). Si vous partagez des données de reference, nous pouvons aligner la formation sur de réelles opportunités d'amélioration."
    },
    {
      "question": "Quels livrables les participants reçoivent-ils?",
      "answer": "Les participants reçoivent du matériel de formation, des outils/modèles pratiques et un plan d'action clair. Pour les programmes plus longs, nous proposons également une liste restreinte de projets d'amélioration avec des objectifs mesurables et un plan de suivi."
    }
  ],
  "traitement-mineralurgique-et-des-eaux": [
    {
      "question": "Qui doit suivre cette formation?",
      "answer": "Il est conçu pour les opérateurs d'usine, les techniciens, les métallurgistes et les superviseurs qui souhaitent améliorer les performances du traitement des minéraux et la gestion de l'eau industrielle. Il accompagne également les équipes travaillant sur la conformité environnementale et la réutilisation de l'eau."
    },
    {
      "question": "Y a-t-il des prérequis?",
      "answer": "Aucune condition préalable stricte n'est requise, mais une connaissance de base du fonctionnement de l'usine est utile. Nous pouvons proposer un parcours de base pour le personnel les plus récents et un parcours plus avancé pour les équipes experimentees."
    },
    {
      "question": "Quels sujets sont inclus?",
      "answer": "Les modules peuvent couvrir le concassage, le broyage, la classification, la flottation, la séparation par gravite, les bases de la lixiviation, les bilans de masse et le contrôle des performances, ainsi que les principes de traitement et de recyclage de l'eau, y compris les contraintes en matière d'effluents et la surveillance pratique."
    },
    {
      "question": "La formation est-elle pratique et concrète?",
      "answer": "Oui. Nous utilisons des études de cas reels, des exercices de calcul (bilans massiques, KPI) et des resolutions de problèmes basees sur des scenarios. Lorsque cela est possible, nous alignons les exercices sur votre circuit et vos contraintes opérationnelles."
    },
    {
      "question": "A quels résultats mesurables devons-nous nous attendre?",
      "answer": "Les équipes beneficient généralement d'un meilleur contrôle des variables opérationnelles clés, d'une compréhension plus claire des pertes de performances et d'une prise de décision plus solide concernant les options de réutilisation et de traitement de l'eau. Nous pouvons définir des mesures de reussite spécifiques au site lors de la definition du périmètre."
    }
  ],
  "politique-environnementale": [
    {
      "question": "Pourquoi avons-nous besoin d'une politique et d'une stratégie environnementales avant les travaux de réhabilitation?",
      "answer": "Une politique claire définit les normes, les rôles et les mécanismes d'application afin que la réhabilitation et la conformité soient cohérentes et défendables. Cela permet également d'aligner les parties prenantes, de sécuriser les mécanismes de financement et de réduire l'incertitude réglementaire et opérationnelle."
    },
    {
      "question": "Que comprend généralement la portée de votre élaboration de politiques?",
      "answer": "Il comprend généralement un diagnostic de secteur ou de site, une revue du cadre juridique et institutionnel, une consultation des parties prenantes, la definition de normes et de procédures, l'alignement ESG avec les attentes internationales et une feuille de route de mise en œuvre pratique."
    },
    {
      "question": "Comment gerez-vous la consultation des parties prenantes?",
      "answer": "Nous définissons la carte des parties prenantes pertinentes (gouvernement, opérateurs, communautes, financiers, régulateurs), organisons des entretiens ou des ateliers structurés et traduisons les résultats en exigences et compromis clairs. Le processus est documente pour soutenir la transparence."
    },
    {
      "question": "Comment abordez-vous les mécanismes d'application et de conformité?",
      "answer": "Nous proposons des mécanismes réalistes de suivi, de reporting et de contrôle qui correspondent aux capacités institutionnelles. Cela peut inclure des routines d'audit, des seuils d'action, des modèles de reporting et des structures de gouvernance recommandées pour la surveillance."
    },
    {
      "question": "Quels livrables recevrons-nous?",
      "answer": "Les livrables comprennent généralement un document de politique, des normes/directives, un plan de mise en œuvre avec des étapes, des rôles institutionnels recommandés et des mécanismes financiers facultatifs tels que des garanties environnementales, le cas echeant."
    }
  ],
  "evaluation-et-rehabilitation-des-sites": [
    {
      "question": "Qu'évaluez-vous lors d'une évaluation de site?",
      "answer": "Nous évaluons les risques environnementaux, géotechniques et opérationnels liés a l'héritage minier, y compris les sols, l'eau, les résidus/résidus, les voies de drainage et l'état des infrastructures. L'objectif est de cartographier les responsabilités et de prioriser les interventions."
    },
    {
      "question": "Comment estimez-vous les coûts de réhabilitation ?",
      "answer": "Nous basons nos estimations sur les responsabilités identifiées, les actions correctives requises, les contraintes d'accès/logistique, les volumes de matériaux et les besoins de surveillance. Les hypothèses et les plages d'incertitude sont documentees afin que les décisions restent transparentes."
    },
    {
      "question": "Que comprend un plan de réhabilitation?",
      "answer": "Un plan typique comprend l'approche technique (stabilisation, confinement, traitement, revégétalisation), le séquençage, les contrôles HSE, les ressources requises, les coûts et le calendrier, ainsi que les indicateurs de suivi pour vérifier l'efficacité dans le temps."
    },
    {
      "question": "Vous coordonnez-vous avec les autorités et les exigences de conformité?",
      "answer": "Oui. Nous alignons l'approche de réhabilitation sur les réglementations applicables et les attentes des parties prenantes, et nous pouvons prendre en charge des packages de reporting qui facilitent l'examen, les approbations et la surveillance de suivi."
    },
    {
      "question": "Quels livrables vais-je recevoir?",
      "answer": "Vous recevez un rapport d'évaluation, une cartographie des risques et des responsabilités, un plan d'action priorisé et un concept de réhabilitation avec coût/échéancier. Si nécessaire, nous incluons des recommandations de suivi et une documentation adaptée aux décideurs."
    }
  ],
  "controle-qualite-assurance-qualite": [
    {
      "question": "Que signifie QA/QC dans votre contexte?",
      "answer": "L'AQ/CQ fait reference a des procédures structurees qui garantissent que les résultats sont fiables, tracables et défendables. Il comprend des contrôles preventifs (AQ) et des contrôles de vérification (CQ) appliques a l'échantillonnage, a la manipulation, a l'analyse et aux rapports."
    },
    {
      "question": "Quels contrôles utilisez-vous généralement?",
      "answer": "Les contrôles courants comprennent les contrôles d'etalonnage des instruments, les matériaux de reference certifies, les blancs, les duplicata et les procédures documentees pour la manipulation des échantillons et la validation des données. L'ensemble de contrôles exact est adapté au niveau de risque du projet."
    },
    {
      "question": "Soutenez-vous la chaîne de traçabilité et la traçabilité?",
      "answer": "Oui. Nous pouvons mettre en oeuvre une documentation de chaîne de traçabilité et des transferts contrôles, y compris des conventions d'étiquetage, des journaux et des contrôles d'intégrité, pour préserver la traçabilité depuis la collecte jusqu'au reporting."
    },
    {
      "question": "Effectuez-vous des audits ou une validation des résultats?",
      "answer": "Nous pouvons effectuer des contrôles internes et des examens de cohérence, et nous pouvons prendre en charge des rapports prets a être audites en documentant les méthodes, les contrôles et le traitement des non-conformités. Toutes les limitations sont clairement indiquées."
    },
    {
      "question": "Comment gérer les non-conformités ou les résultats douteux?",
      "answer": "Nous signalons les anomalies, examinons les causes possibles (échantillonnage, préparation, dérive des instruments, contamination) et recommandons des actions correctives telles qu'une nouvelle analyse, des contrôles supplémentaires ou des procédures revisees. Le chemin de resolution est documente."
    }
  ],
  "surveillance-qualite-des-eaux": [
    {
      "question": "Quels types d'eau surveillez-vous?",
      "answer": "Nous pouvons surveiller les eaux potables, de surface, souterraines, les eaux de procédés industriels et les eaux usees en fonction du contexte du site. Le champ d'application est defini en fonction de l'utilisation prévue, des risques et des exigences réglementaires."
    },
    {
      "question": "Comment définir le plan d'échantillonnage?",
      "answer": "Nous définissons les lieux d'échantillonnage, la fréquence et les paramètres en fonction des cheminements de risque, des besoins opérationnels et des attentes en matière de conformité. Si les données de reference sont limitees, nous commencons par une campagne de reference pratique et affinons à partir des résultats."
    },
    {
      "question": "Pouvez-vous opérer dans des zones reculées et de nouveaux forages?",
      "answer": "Oui, nous pouvons planifier la logistique pour l'échantillonnage à distance et coordonner la manipulation afin de préserver l'intégrité des échantillons. Nous accordons la priorité a une planification pratique, aux contraintes de sécurité et a une documentation claire des conditions sur le terrain."
    },
    {
      "question": "Comment les résultats sont-ils rapportés et interprétés?",
      "answer": "Les résultats sont presentes sous forme de tableaux structurés avec des indicateurs clés et de courtes notes d'interpretation. Lorsque des seuils s'appliquent, nous soulignons les dépassements et recommandons des actions de suivi ou un échantillonnage de confirmation."
    },
    {
      "question": "A quelle fréquence la surveillance doit-elle être effectuée?",
      "answer": "La fréquence dépend du niveau de risque, de la saisonnalite, des changements opérationnels et des besoins réglementaires. Nous recommandons généralement une phase de base suivie d'un programme de routine qui peut être augmente pendant les périodes a haut risque."
    }
  ],
  "effluents-miniers-et-drainage-minier-acide": [
    {
      "question": "Quels paramètres évaluez-vous généralement?",
      "answer": "Nous nous concentrons sur les indicateurs pertinents aux effluents miniers tels que le pH, la conductivite, les sulfates, les métaux dissous et d'autres contaminants spécifiques au site. La liste finale est basee sur le contexte minier et les seuils de conformité."
    },
    {
      "question": "Comment diagnostiquer les sources de pollution (DMA, résidus, bassins)?",
      "answer": "Nous cartographions les voies de drainage, identifions les zones de production probables, examinons les circuits d'eau opérationnels et correlons la chimie de l'eau avec les caractéristiques du site. L'objectif est de cibler les interventions la ou elles seront les plus efficaces."
    },
    {
      "question": "Quelles options de traitement pouvez-vous proposer?",
      "answer": "Les options peuvent inclure la neutralisation, la précipitation chimique, la filtration et d'autres approches modulaires en fonction de la chimie et des volumes de l'eau. Nous privilegions les solutions exploitables dans le contexte local et maintenables dans le temps."
    },
    {
      "question": "Pouvez-vous contribuer a optimiser le recyclage des eaux industrielles?",
      "answer": "Oui. Nous pouvons proposer des améliorations pratiques des circuits, des stratégies de rétention ou de decantation et des étapes de traitement qui ameliorent la réutilisation tout en controlant les risques de tartre, de corrosion et de contamination."
    },
    {
      "question": "Quels livrables vais-je recevoir?",
      "answer": "Vous recevez un resume de l'évaluation (sources, risques, contraintes), les options de traitement et de prise en charge recommandées et un plan de surveillance. Si nécessaire, nous incluons des étapes de mise en œuvre et des contrôles opérationnels pour maintenir les performances."
    }
  ],
  "strategie-recettes-minieres": [
    {
      "question": "Quel est l'objectif d'une stratégie d'amélioration des revenus miniers?",
      "answer": "Accroître la capacité de l'État a tirer une valeur juste et prévisible de l'exploitation minière en améliorant les règles, les processus, la surveillance et la capacité de négociation. L'accent est mis sur la réduction des fuites, le renforcement des rapports et l'alignement des incitations sur le développement a long terme."
    },
    {
      "question": "De quelles informations avez-vous besoin pour commencer?",
      "answer": "Nous avons généralement besoin du cadre fiscal et réglementaire actuel, des données de production et d'exportation, des structures de contrats/permis, des rôles institutionnels et des processus de reporting existants. Si les données sont fragmentees, nous commencons par un inventaire structure des données et une analyse des lacunes."
    },
    {
      "question": "Comment abordez-vous le travail en pratique?",
      "answer": "Nous combinons la compréhension technique des chaînes de valeur minérales avec l'analyse politique et macroéconomique. Le travail comprend généralement un diagnostic, une analyse comparative, des entretiens avec les parties prenantes et une feuille de route hiérarchisée avec des gains rapides et des réformes structurelles."
    },
    {
      "question": "Quels livrables recevrons-nous?",
      "answer": "Les produits livrables courants comprennent un rapport de diagnostic, une feuille de route de réforme hiérarchisée, des KPI et des modèles de rapport recommandés, ainsi que des propositions de renforcement institutionnel. Sur demande, nous incluons des conseils de mise en œuvre et des actions de renforcement des capacités."
    },
    {
      "question": "Comment mesurer l'impact?",
      "answer": "Nous définissons des indicateurs mesurables tels qu'une couverture améliorée des rapports, une réduction des écarts de rapprochement, des cycles d'audit plus rapides, une conformité accrue et une meilleure previsibilite des flux de revenus. Les KPI exacts sont convenus lors du cadrage."
    }
  ],
  "structuration-organes-et-unites-revenus": [
    {
      "question": "Que signifie la structuration institutionnelle dans ce contexte?",
      "answer": "Cela signifie concevoir ou améliorer les rôles, les flux de travail et les mécanismes de coordination entre les agences responsables de la surveillance, des revenus et de la conformité du secteur minier. L'objectif est de réduire les chevauchements, de combler les écarts et d'améliorer la capacité d'exécution."
    },
    {
      "question": "Qu'est-ce qui est généralement inclus dans le champ d'application?",
      "answer": "Nous évaluons le paysage institutionnel actuel, proposons des modèles opérationnels cibles, définissons les responsabilités et recommandons des profils de personnel et des flux de travail. Nous alignons également les procédures sur les besoins en matière de reporting et de préparation aux audits."
    },
    {
      "question": "Aidez-vous a creer des unités spécialisées dans les revenus miniers?",
      "answer": "Oui. Nous pouvons proposer le mandat, la structure, la gouvernance et les procédures de fonctionnement des unités spécialisées, y compris les compétences requises et les interfaces avec d'autres ministères et régulateurs."
    },
    {
      "question": "Produisez-vous des manuels et des procédures?",
      "answer": "Oui. Nous pouvons rediger des manuels de procédures pratiques, des modèles et des listes de contrôle pour standardiser les opérations, améliorer la traçabilité et soutenir la continuité même lorsque les équipes changent."
    },
    {
      "question": "Comment soutenez-vous le renforcement des capacités?",
      "answer": "Nous proposons des formations ciblees pour les managers et le personnel technique, un coaching pour la mise en œuvre et des outils qui aident les équipes a appliquer les nouvelles procédures dans leur travail quotidien. L'objectif est d'integrer des capacités, et pas seulement de fournir des documents."
    }
  ],
  "integration-locale-et-politique-industrielle": [
    {
      "question": "Quel est l'objectif du travail sur le contenu local et la politique industrielle?",
      "answer": "Passer d'une dépendance brute aux exportations vers une valeur ajoutée, des chaînes d'approvisionnement locales compétitives et la création d'emplois, tout en restant réaliste quant aux coûts, aux infrastructures et a l'accès au marché. L'objectif est une voie pratique vers l'industrialisation."
    },
    {
      "question": "Quelle analyse effectuez-vous généralement?",
      "answer": "Nous évaluons la compétitivité des options de transformation locales, les besoins d'investissement et d'exploitation, les contraintes de la chaîne d'approvisionnement et les impacts potentiels sur l'emploi et les revenus. Nous examinons également les structures d'incitation et la faisabilite de leur mise en œuvre."
    },
    {
      "question": "Quels livrables recevrons-nous?",
      "answer": "Les livrables peuvent inclure des études de compétitivité, des options politiques avec des compromis, des propositions de conception d'incitations et une feuille de route de mise en œuvre. Le cas echeant, nous incluons des recommandations pour les zones industrielles liées aux corridors miniers."
    },
    {
      "question": "Avec qui travaillez-vous pendant la mission?",
      "answer": "Nous coordonnons généralement avec les ministères, les régulateurs, les entites publiques, les financiers et les partenaires industriels. Nous alignons les priorités via des ateliers structurés et les traduisons en recommandations politiques opérationnelles."
    },
    {
      "question": "Comment definissez-vous le succès de ce travail?",
      "answer": "Le succès est un plan réaliste qui peut être exécuté : des chaînes de valeur prioritaires clairement définies, des exigences crédibles en matière d'investissement et d'infrastructure, des mesures de contenu local exécutoires et des KPI mesurables pour les emplois, les capacités et la valeur ajoutée."
    }
  ],
  "controle-production-et-reporting": [
    {
      "question": "Pourquoi les contrôles de production et les systèmes de reporting sont-ils essentiels?",
      "answer": "Parce que les volumes de production et d'exportation determinent les redevances, les impôts et la planification macroéconomique. Des contrôles faibles creent des fuites, des conflits et une planification peu fiable. Des systèmes solides ameliorent la transparence et la confiance."
    },
    {
      "question": "Qu'implémentez-vous ou améliorez-vous généralement?",
      "answer": "Nous pouvons vous aider à concevoir des flux de travail de reporting, à définir les champs de données requis, à proposer des points de vérification et à recommander des outils de consolidation et d'auditabilité. L'approche est adaptée aux capacités locales et aux infrastructures disponibles."
    },
    {
      "question": "Comment vérifiez-vous la production et les exportations déclarées?",
      "answer": "Nous proposons des contrôles tels que le rapprochement entre sources (site, transport, port, douane), des audits cibles et des étapes de traçabilité. L'objectif est d'avoir une chaîne de données defendable plutôt que de s'appuyer sur un seul point de reporting."
    },
    {
      "question": "Quels livrables recevrons-nous?",
      "answer": "Généralement : un cadre de reporting cible, des modèles et des procédures, des contrôles de vérification recommandés et une feuille de route de mise en œuvre. Nous pouvons également définir des KPI et des routines de gouvernance pour pérenniser le système."
    },
    {
      "question": "Combien de temps prend habituellement la mise en œuvre?",
      "answer": "Cela dépend de la portée et de la maturité des données. Nous commencons généralement par un diagnostic rapide et des améliorations rapides, puis nous construisons vers un système plus complet par étapes avec des jalons clairs."
    }
  ],
  "audit-flux-paiements-et-tracabilite-export": [
    {
      "question": "Sur quoi se concentre un audit des flux de paiement?",
      "answer": "Il se concentre sur la manière dont l'argent devrait circuler par rapport a la manière dont il circule réellement, en identifiant les écarts, les problèmes de calendrier, les problèmes de rapprochement et les fuites potentielles. Il vérifie également si les paiements correspondent a la production, aux prix et aux conditions contractuelles."
    },
    {
      "question": "De quelles données avez-vous besoin pour réaliser l'audit?",
      "answer": "Nous avons généralement besoin de releves de paiement, de declarations, de données de production/exportation, de conditions contractuelles, de processus institutionnels et de toute conclusion d'audit préalable. Si l'accès complet aux données est limite, nous pouvons commencer par une cartographie de haut niveau et l'approfondir progressivement."
    },
    {
      "question": "Comment abordez-vous la traçabilité des exportations?",
      "answer": "Nous cartographions la chaîne depuis la mine jusqu'au point d'exportation, définissons les points de contrôle et proposons des étapes de documentation et de rapprochement. L'objectif est de réduire l'incertitude sur les volumes, les qualités et les valeurs déclarées."
    },
    {
      "question": "Quels résultats livrez-vous?",
      "answer": "Vous recevez un rapport de conclusions avec les problèmes prioritaires, les contrôles recommandés et les modifications de procédures, ainsi qu'un plan d'action pratique. Le cas echeant, nous fournissons des modèles de rapprochement et de reporting."
    },
    {
      "question": "Comment gerez-vous la confidentialité et les informations sensibles?",
      "answer": "Nous appliquons des pratiques de confidentialité strictes, limitons l'accès aux données de mission et documentons les hypothèses sans exposer de details sensibles dans les documents destines au public. Des règles de traitement confidentielles sont convenues au début de la mission."
    }
  ],
  "renforcement-capacites-administration": [
    {
      "question": "A qui s'adresse le renforcement des capacités?",
      "answer": "Pour le personnel gouvernemental et réglementaire impliqué dans les licences, la surveillance, la surveillance des revenus, la conformité environnementale et la gestion des données. Il peut également inclure des équipes de coordination interministérielles ou les responsabilités se chevauchent."
    },
    {
      "question": "Quels sujets le renforcement des capacités peut-il couvrir?",
      "answer": "Les sujets peuvent inclure les outils, procédures et manuels d'évaluation de projet, la préparation a l'audit, les méthodes de reporting et de rapprochement, les routines de gouvernance et l'aide aux negociations. Le programme est adapté aux profils de rôle et a la maturité actuelle."
    },
    {
      "question": "Quel est le format de livraison?",
      "answer": "Nous pouvons organiser des ateliers, des laboratoires pratiques utilisant des ensembles de données reels (lorsque cela est autorise), des séances de coaching et un soutien de suivi pendant la mise en œuvre. Les programmes peuvent être courts et intensifs ou echelonnes dans le temps."
    },
    {
      "question": "Quels livrables accompagnent la formation?",
      "answer": "Les participants reçoivent des boîtes à outils pratiques (modèles, listes de contrôle, flux de travail) et un manuel opérationnel clair adapté a leurs responsabilités. Si nécessaire, nous définissons des procédures opérationnelles standard pour assurer la continuité."
    },
    {
      "question": "Comment mesurez-vous le succès du renforcement des capacités?",
      "answer": "Nous utilisons des résultats mesurables tels qu'une qualité de reporting améliorée, des cycles d'examen plus rapides, des écarts de rapprochement réduits, une exécution d'audit plus solide et une documentation de décision plus claire. Les mesures sont convenues dès le départ pour correspondre aux objectifs de l'institution."
    }
  ]
};
