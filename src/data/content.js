export const profile = {
  name: 'Darshil Pandya',
  title: 'Product Manager',
  location: 'Atlanta, Georgia',
  email: 'darshil.s.pandya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/darshilspandya',
  tagline: 'I build AI-native enterprise SaaS in regulated industries.',
  summary:
    "PM with a CS foundation and 4+ years building AI-powered enterprise SaaS at IQVIA, supporting 400K+ users across 60+ countries. I ship AI-native product capabilities — LLM automation, GenAI workflows, NLP — while using AI tooling myself to move faster through prioritization, prototyping, and delivery. Before product, I spent three years at Deloitte assessing payment infrastructure and information security for global banks, which is where the regulatory instincts (HIPAA, GDPR, PCI-DSS, RBI) come from.",
}

export const domains = [
  'All',
  'AI / ML',
  'Healthtech',
  'Fintech',
  'Enterprise SaaS',
  'Security & Compliance',
]

export const metrics = [
  { value: '400K+', label: 'users across 60+ countries' },
  { value: '50%', label: 'projected ICF turnaround reduction' },
  { value: '$300K', label: 'annual savings from AI localization' },
  { value: '+13', label: 'NPS points from a UX redesign' },
  { value: '18%', label: 'conversion rate, tiered GTM launch' },
  { value: '8', label: 'major product launches led' },
]

export const caseStudies = [
  {
    id: 'icf-digitization',
    title: 'AI-Powered ICF Digitization Engine',
    company: 'IQVIA · Complete Consent',
    domains: ['AI / ML', 'Healthtech'],
    hook: 'Turning paper informed-consent forms into compliant digital documents, automatically.',
    impact: '50% projected reduction in ICF turnaround time',
    body: [
      'Informed Consent Forms (ICFs) are the compliance backbone of every clinical trial — and for decades, converting them from paper to digital has been a slow, manual, error-prone process that delays trial startup.',
      'I led end-to-end product development of an AI-powered ICF digitization engine that automatically converts paper-based consent documents into compliant digital formats, paired with an automated version-comparison tool that surfaces textual discrepancies, generates accuracy scores, and streamlines QA for document authoring teams.',
      'The result is projected to cut ICF turnaround time by 50%, directly accelerating clinical trial startup timelines for global pharma sponsors, while holding the line on regulatory compliance across multi-jurisdictional trial environments.',
    ],
  },
  {
    id: 'telehealth-dct',
    title: 'Telehealth / Live Video Integration for Decentralized Trials',
    company: 'IQVIA · Complete Consent',
    domains: ['Healthtech'],
    hook: 'Letting patients consent to a clinical trial from home, without compromising privacy or scale.',
    impact: 'Enabled decentralized (DCT) trial participation at multi-site scale',
    body: [
      'Decentralized clinical trials (DCT) let patients participate without traveling to a site — but that only works if consent, one of the most legally sensitive moments in a trial, can happen remotely and still hold up.',
      'I spearheaded the design and go-to-market strategy for a live video calling integration inside the eConsent platform, working closely with UX, Legal, and Site Operations to keep it HIPAA/GDPR compliant and ready for multi-site scale.',
      'The hardest part was balancing a genuinely high-touch patient experience against industry-leading encryption and data-privacy safeguards — neither side of that trade-off was negotiable.',
    ],
  },
  {
    id: 'oce-growth',
    title: 'OCE Digital Growth: UI/UX Redesign & Analytics Framework',
    company: 'IQVIA · OCE Digital',
    domains: ['Enterprise SaaS'],
    hook: 'Rebuilding a marketing SaaS product around the features customers actually used.',
    impact: '+13 NPS, 50% engagement lift, 25% adoption improvement',
    body: [
      'OCE Digital is IQVIA’s B2B marketing SaaS for pharma professionals — plan, personalize, and optimize multichannel campaigns at scale. It had usability problems that were quietly capping adoption.',
      'I built a product telemetry and analytics framework from scratch to surface feature-level usage and friction signals, used behavioral data and user interviews to find the critical drop-off points, then spearheaded a full UI/UX redesign around what I found.',
      'That work increased usability and engagement by 50%, lifted NPS by 13 points, and improved feature adoption by 25% — and the same telemetry framework was used to restructure the entire 12-month roadmap around highest-impact features, cutting low-value engineering investment.',
    ],
  },
  {
    id: 'gpt-localization',
    title: 'AI/GPT Localization Module',
    company: 'IQVIA · OCE Digital',
    domains: ['AI / ML', 'Enterprise SaaS'],
    hook: 'A business case for GPT-based translation that paid for itself in year one.',
    impact: '$300K in projected annual savings',
    body: [
      'Localizing marketing content for a global pharma customer base was expensive and slow, running through traditional translation vendors for every campaign and market.',
      'I proposed and prototyped a GPT-based translation and localization module, building the executive business case myself: competitive analysis, MVP scope, and a cost model showing where the savings would come from.',
      'The business case was strong enough to secure executive sponsorship and move the module from prototype into the actual roadmap, with a projected $300K in annual localization savings.',
    ],
  },
  {
    id: 'crm-assistant',
    title: 'AI-Powered CRM Assistant — from Intern Prototype to Shipped Product',
    company: 'IQVIA · OCE Digital',
    domains: ['AI / ML', 'Enterprise SaaS'],
    hook: 'I conceived this product as an intern in 2021 — then came back and shipped it.',
    impact: 'Full product-line integration, secured at executive level',
    body: [
      'As a PM intern in 2021, I conceptualized an AI-powered digital voice assistant for IQVIA’s B2B CRM platform — wrote the product vision, use cases, user stories, flow diagrams, and Figma wireframes, and built the MVP case that leadership approved for further development.',
      'After joining full-time, I came back to that same idea and drove the 0-to-1 product definition for what it became: an AI-powered CRM Assistant. I synthesized market research, competitive benchmarking, and cross-functional stakeholder input to define the MVP.',
      'That work secured executive approval for full product-line integration — closing the loop on a product I first sketched out as an intern.',
    ],
  },
  {
    id: 'swift-toolkit',
    title: 'SWIFT Payments Assessment Toolkit & Aadhaar Regulation Dashboard',
    company: 'Deloitte · Cyber Risk',
    domains: ['Fintech', 'Security & Compliance'],
    hook: 'An assessment toolkit I built on my own initiative expanded Deloitte’s entire Financial Risk practice into APAC.',
    impact: '$200K in new project wins',
    body: [
      'Global banking clients needed a consistent way to assess SWIFT payment infrastructure against India’s Aadhaar identity regulations — a genuinely complex regulatory surface with no standard toolkit behind it.',
      'On my own initiative, I drafted the project vision and built a SWIFT payments assessment toolkit, along with a companion toolkit covering Aadhaar regulations with an automated reporting dashboard, simplifying regulatory complexity for global banking partners.',
      'That toolkit became a repeatable asset: it enabled Deloitte to expand its Financial Risk service line across the APAC region and secured $200K in new project wins.',
    ],
  },
  {
    id: 'banking-localization',
    title: 'Banking Data Localization & Vendor Risk Management',
    company: 'Deloitte · Cyber Risk',
    domains: ['Fintech', 'Security & Compliance'],
    hook: 'Auditing payment providers and hundreds of vendors against RBI, GDPR, and ISO standards.',
    impact: '$100K–$200K in projects; 130% payment on deliverables',
    body: [
      'International banks needed to prove their data localization and vendor relationships held up against Reserve Bank of India guidelines, GDPR, and ISO standards — across payment providers, digital wallets, and hundreds of third-party vendors.',
      'I led large-scale data localization projects, audited major payment and digital wallet providers in India for RBI compliance, validated encryption/authentication/authorization controls, and consolidated compliance data for hundreds of vendors across geographies for a multinational bank, reporting findings via Qlik Sense dashboards.',
      'The work led to $100K–$200K in new data-localization projects and results strong enough to earn 130% payment on multiple deliverables.',
    ],
  },
]

export const experience = [
  {
    role: 'Product Manager',
    org: 'IQVIA',
    logo: 'logos/iqvia.svg',
    location: 'Atlanta, Georgia',
    period: 'Jun 2022 – Present',
    bullets: [
      'Own end-to-end roadmap for Complete Consent, a mission-critical SaaS platform supporting 400K+ users across 60+ countries, 300+ studies, and 10,000+ clinical sites for top-10 pharma and biotech sponsors.',
      'Led 8 major product launches and 30+ iterative releases on OCE Digital; drove 10% customer base expansion and a tiered-pricing GTM strategy with 18% year-one conversion.',
      'Led 2–3 global agile scrum teams on monthly release cycles; mentored an Associate Product Manager.',
      'Rated "Exceeding Expectations" in two consecutive annual performance cycles.',
    ],
  },
  {
    role: 'Product Management Intern',
    org: 'IQVIA',
    logo: 'logos/iqvia.svg',
    location: 'New Jersey',
    period: 'Jun 2021 – Aug 2021',
    bullets: [
      'Conceptualized an AI-powered digital voice assistant for a B2B CRM platform — vision, use cases, user stories, flow diagrams, and Figma wireframes.',
      'MVP and roadmap were well received by leadership and later developed into a full shipped product.',
    ],
  },
  {
    role: 'Assistant Manager & Consultant, Cyber Risk',
    org: 'Deloitte',
    logo: 'logos/deloitte.png',
    location: 'Mumbai, India',
    period: 'Jul 2017 – Oct 2020',
    bullets: [
      'Promoted from Consultant to Assistant Manager in 2020. Assessed backend infrastructure for major payment institutions, reviewing 30+ end-to-end payment flows including UPI.',
      'Independently built a SWIFT assessment toolkit and Aadhaar regulation dashboard, expanding Deloitte’s Financial Risk practice into APAC and securing $200K in new wins.',
      'Led information security reviews spanning access control, network security, cloud security, encryption, DLP, and source code review (Python, Java, SQL).',
      'Won 3 awards for managing high-pressure projects; trained analysts and consultants; presented risk findings to C-suite audiences.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Information Systems Management (MISM)',
    org: 'Carnegie Mellon University',
    logo: 'logos/cmu.png',
    location: 'Pittsburgh, PA',
    period: 'Jan 2021 – May 2022',
    note: 'GPA 3.8 — Summa Cum Laude',
  },
  {
    degree: 'B.E., Computer Science',
    org: 'Sardar Patel Institute of Technology, Mumbai University',
    logo: 'logos/spit.jpeg',
    location: 'Mumbai, India',
    period: 'Aug 2013 – May 2017',
    note: 'GPA 3.42 — Distinction',
  },
]

export const skills = [
  {
    group: 'Product & Strategy',
    items: ['Product Vision & Roadmapping', '0-to-1 Development', 'Go-to-Market Planning', 'Customer Discovery', 'Design Thinking', 'Agile / Scrum Leadership'],
  },
  {
    group: 'AI & Data',
    items: ['LLM / GPT Prototyping', 'NLP Workflows', 'Product Telemetry', 'SQL', 'Snowflake', 'Tableau'],
  },
  {
    group: 'Compliance & Security',
    items: ['HIPAA', 'GDPR', 'PCI-DSS', 'ISO', 'FDA / Clinical Regulatory', 'Cloud Security'],
  },
  {
    group: 'Tools & Languages',
    items: ['Figma', 'JIRA / Confluence', 'Salesforce APIs', 'Python', 'Java', 'React / JavaScript'],
  },
]

export const certifications = [
  'Registered Product Owner — Scrum Inc.',
  'Registered Scrum Master — Scrum Inc.',
]
