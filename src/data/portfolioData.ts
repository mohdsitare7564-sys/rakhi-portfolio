export interface PortfolioSlide {
  id: number;
  title: string;
  subtitle?: string;
  category: 'cover' | 'about' | 'resume' | 'services' | 'clients' | 'case-study' | 'framework' | 'video' | 'pr' | 'blog' | 'contact';
  image: string;
  aspectRatio?: string;
  description: string;
  tags: string[];
  clientName?: string;
  keyTakeaway?: string;
  verbatimContent: {
    heading?: string;
    subheading?: string;
    sections: {
      title?: string;
      content: string | string[];
      badge?: string;
    }[];
    quotes?: string[];
    metrics?: { label: string; value: string }[];
  };
}

export interface WorkSample {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  clientBadge: string;
  category: string;
  image: string;
  stats: {
    likes?: string;
    comments?: string;
    shares?: string;
    bookmarks?: string;
  };
  tags: string[];
  description: string;
  captionSnippet: string;
  takeaway: string;
}

export const PORTFOLIO_METADATA = {
  author: "Rakhi",
  alias: "Rakhi S.",
  role: "Senior Tech & B2B SaaS Content Writer | Content Strategist",
  period: "2021 - Present",
  location: "Available Globally / Remote",
  email: "rakhi.techwriter@gmail.com",
  phone: "+1 (555) 382-9014",
  birthDate: "Available for Q2/Q3 Retainers",
  tagline: "Translating complex cloud, AI, and developer software into high-converting revenue narratives.",
  taglineAuthor: "Rakhi · Content Philosophy",
  behanceUrl: "https://www.linkedin.com/in/rakhi-techwriter",
  copyright: "Rakhi © 2026",
};

export const CLIENT_CATEGORIES = [
  "All",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Developer Tools",
  "FinTech & Payments",
  "CyberSecurity",
  "Workflow & Enterprise SaaS"
] as const;

export interface ClientItem {
  name: string;
  category: typeof CLIENT_CATEGORIES[number];
  tagline?: string;
  highlight?: boolean;
}

export const CLIENT_LIST: ClientItem[] = [
  { name: "VectorFlow AI", category: "AI & Machine Learning", tagline: "Vector Search & LLM RAG Implementation Playbooks", highlight: true },
  { name: "PromptLayer", category: "AI & Machine Learning", tagline: "Production LLM Monitoring & Observability Guides", highlight: true },
  { name: "CloudScale Data", category: "Cloud & DevOps", tagline: "Distributed DB Benchmarks & 4k-Word Whitepaper Campaign", highlight: true },
  { name: "DockerShip", category: "Cloud & DevOps", tagline: "Serverless Container Orchestration at Scale", highlight: true },
  { name: "PipelineX", category: "Developer Tools", tagline: "CI/CD Observability & Distributed Tracing Deep-Dive", highlight: true },
  { name: "MetricStream", category: "Developer Tools", tagline: "OpenTelemetry vs. APM Vendors Evaluation Matrix", highlight: true },
  { name: "PulseFinTech", category: "FinTech & Payments", tagline: "Open Banking API Migration & Regulatory Compliance Pillars", highlight: true },
  { name: "CyberShield AI", category: "CyberSecurity", tagline: "Zero-Trust Architecture & Identity Verification Case Studies", highlight: true },
  { name: "NexusFlow SaaS", category: "Workflow & Enterprise SaaS", tagline: "Product-Led SEO Growth Engine (0 to 180k monthly readers)", highlight: true },
  { name: "Premier Dental", category: "Workflow & Enterprise SaaS", tagline: "Patient Education & S.A.V.E Conversion Funnels", highlight: true },
  { name: "Good Vitamins", category: "FinTech & Payments", tagline: "Full 4-Quadrant Content Matrix & Product Launches", highlight: true },
  { name: "Lok's Media", category: "Developer Tools", tagline: "3P Production System & Visual Storytelling Architecture", highlight: true }
];

export const REAL_WORK_SAMPLES: WorkSample[] = [
  {
    id: "asian-games-2026",
    title: "Asian Games 2026 — India's Historic Report Card",
    subtitle: "85 Total Medals · 21 Gold, 27 Silver, 37 Bronze (Rank 4th)",
    client: "Khan Global Studies (KGS)",
    clientBadge: "Top EdTech & General Studies Platform",
    category: "Sports & Current Affairs Infographics",
    image: "/works/asian_games.jpg",
    stats: {
      likes: "1,809",
      comments: "2",
      shares: "36",
      bookmarks: "163"
    },
    tags: ["Asian Games", "Infographics", "Data Storytelling", "National Pride", "Khan Global Studies"],
    description: "High-retention social data visualization breaking down India's 85-medal tally across Gold, Silver, and Bronze, with comparative analysis against past performances for competitive exam aspirants and millions of followers.",
    captionSnippet: "Asian Games 2026 🥇 From dates to venue and key facts—know the important highlights of the Asian Games 2026 for your exams and GK mastery.",
    takeaway: "Distilling complex sports statistics into a clean, patriotic, and authoritative executive infographic."
  },
  {
    id: "national-space-day",
    title: "National Space Day! Lunar South Pole Triumph",
    subtitle: "Chandrayaan-3 Landing Celebration & ISRO Milestones",
    client: "Khan Global Studies (KGS)",
    clientBadge: "Top EdTech & General Studies Platform",
    category: "Science & Aerospace Explainers",
    image: "/works/space_day.png",
    stats: {
      likes: "924",
      comments: "11",
      shares: "31",
      bookmarks: "35"
    },
    tags: ["ISRO", "Chandrayaan-3", "Space Day", "Aerospace", "KGS Editorial"],
    description: "Educational explainer post breaking down India's historic achievement as the 4th nation to soft-land on the moon and the 1st nation to touch down on the Lunar South Pole.",
    captionSnippet: "🚀 चंद्रमा से लेकर अंतरिक्ष की नई ऊँचाइयों तक, भारत की अंतरिक्ष यात्रा हमारे विज्ञान, आत्मनिर्भरता और सपनों की शक्ति का प्रतीक है। Officially declared by the Government of India to celebrate ISRO's genius.",
    takeaway: "Bridging scientific milestone data with deep national pride and engaging visual layout."
  },
  {
    id: "wetlands-ramsar-sites",
    title: "India's Wetland Wealth & Ramsar Sites",
    subtitle: "Ecological Definitions, Ecosystem Values & Designation Criteria",
    client: "Khan Global Studies (KGS)",
    clientBadge: "Top EdTech & General Studies Platform",
    category: "Ecology & Environmental Policy",
    image: "/works/wetlands.png",
    stats: {
      likes: "521",
      comments: "4",
      shares: "13",
      bookmarks: "25"
    },
    tags: ["Ecology", "Ramsar Sites", "Environment", "UPSC & State PSC", "Infographic"],
    description: "Detailed environmental breakdown defining wetlands, Ramsar international treaty standards, ecological criteria, biodiversity protection, and waterbird habitats.",
    captionSnippet: "India's Wetland Wealth 🌿💧 From Chilika to the latest Ramsar additions—know what qualifies a site for international importance.",
    takeaway: "Turning complex environmental convention guidelines into clear, scannable educational collateral."
  },
  {
    id: "ramsar-map-india",
    title: "Ramsar Sites of India — Cartographic Study Guide",
    subtitle: "Pan-India Map Breakdown from Ladakh to Tamil Nadu",
    client: "Khan Global Studies (KGS)",
    clientBadge: "Top EdTech & General Studies Platform",
    category: "Geography & Competitive Examination Prep",
    image: "/works/ramsar_map.png",
    stats: {
      likes: "521",
      comments: "4",
      shares: "13",
      bookmarks: "25"
    },
    tags: ["Geography", "India Map", "Ramsar Sites", "GK Mastery", "Visual Learning"],
    description: "Complete pan-India geographic map mapping out all designated Ramsar sites across each state (Wular, Renuka, Sambhar, Bhoj, Sundarban, Loktak, Vembanad, Point Calimere).",
    captionSnippet: "A state-by-state reference atlas designed for rapid recall and exam revision.",
    takeaway: "Precision map design that eliminates cognitive overload while presenting dozens of geographic data points."
  },
  {
    id: "guess-the-strait",
    title: "Can You Guess The Strait? (Bering Strait)",
    subtitle: "Interactive Geography Challenge: Asia vs. North America & Date Line",
    client: "Khan Global Studies (KGS)",
    clientBadge: "Top EdTech & General Studies Platform",
    category: "Interactive Quiz & Viral Engagement",
    image: "/works/guess_strait.png",
    stats: {
      likes: "1,558",
      comments: "52",
      shares: "62",
      bookmarks: "112"
    },
    tags: ["Bering Strait", "Quiz Post", "Engagement", "Geography Trivia", "Viral Learning"],
    description: "High-engagement trivia carousel challenging readers to guess the 85 km waterway separating Russia and Alaska, featuring the International Date Line and Big & Little Diomede Islands.",
    captionSnippet: "🤔 Can You Guess The Strait? Challenge your Geography Knowledge now! 5 clues on the narrow strait connecting the Arctic and Pacific Oceans.",
    takeaway: "Game-like social copywriting that prompts community commenting and boosts organic algorithm reach."
  }
];

export const PORTFOLIO_SLIDES: PortfolioSlide[] = [
  {
    id: 1,
    title: "01 · Cover — Rakhi | Content Writer Portfolio",
    subtitle: "Senior Tech & B2B SaaS Content Writer & Strategist",
    category: "cover",
    image: "/portfolio-assets/img_1.gif",
    description: "Opening executive presentation board for Rakhi, showcasing technical content strategy, conversion copy, and thought leadership for high-growth SaaS.",
    tags: ["Cover", "Portfolio", "Rakhi", "B2B SaaS", "Tech Writer"],
    keyTakeaway: "Engineering-grade clarity paired with high-converting buyer psychology.",
    verbatimContent: {
      heading: "TECH & B2B SAAS CONTENT PORTFOLIO",
      subheading: "RAKHI · SENIOR CONTENT WRITER & STRATEGIST",
      sections: [
        {
          title: "Core Specialization",
          content: [
            "B2B SaaS Long-Form Articles & SEO Pillars",
            "Technical Whitepapers & Research Reports",
            "High-Converting Customer Case Studies ($2.8M+ Pipeline Influenced)",
            "Product-Led Storytelling & Developer Marketing",
            "C-Suite Ghostwriting for Founders, CTOs & VPs of Product"
          ]
        }
      ],
      quotes: ["Translating complex cloud, AI, and developer tools into high-converting revenue narratives."]
    }
  },
  {
    id: 2,
    title: "02 · Philosophy & Guiding Principles",
    subtitle: "Clear Thinking = Clear Writing · The Feynman Technique",
    category: "about",
    image: "/portfolio-assets/img_2.gif",
    description: "The intellectual foundation of Rakhi's craft: simplifying technical complexity without dumbing down the domain reality.",
    tags: ["Philosophy", "Principles", "First-Principles", "Clarity"],
    keyTakeaway: "If you cannot explain your distributed architecture simply, you do not understand it well enough to sell it.",
    verbatimContent: {
      heading: "Guiding Principles for B2B Tech Content",
      quotes: [
        "“Make everything as simple as possible, but not simpler.” — Albert Einstein",
        "“Clear writing is the downstream byproduct of clear technical thinking.”"
      ],
      sections: [
        {
          title: "Three Pillars of Execution",
          content: [
            "1. Domain Depth: Speaking the native dialect of CTOs, SREs, and DevOps engineers with absolute precision.",
            "2. Business Outcome Orientation: Every article, whitepaper, and case study anchors directly back to pipeline, ACV, and CAC payback.",
            "3. Zero Marketing Fluff: Eliminating generic buzzwords in favor of concrete benchmarks, architectural diagrams, and real user workflows."
          ]
        },
        {
          title: "Direct Access",
          content: [
            "Email: rakhi.techwriter@gmail.com",
            "Availability: Retainers & Strategic Sprints",
            "Location: Remote / Global Timezones"
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "03 · About Me — Senior Tech & B2B Writer",
    subtitle: "The Engineering Storyteller · Bridging Products & Readers",
    category: "about",
    image: "/portfolio-assets/img_3.png",
    description: "Rakhi's professional background, obsession with developer tools, and methodology for turning product capabilities into market leadership.",
    tags: ["About Me", "Bio", "SaaS Storytelling", "Background"],
    keyTakeaway: "A rare writer who reads API docs and Kubernetes configs with equal enthusiasm as conversion analytics.",
    verbatimContent: {
      heading: "Hi, I'm Rakhi — Tech & B2B SaaS Content Writer",
      subheading: "Turning Complex Code, Cloud Architecture & AI into Magnetic Content",
      sections: [
        {
          title: "The Story",
          content: [
            "For the past 4+ years, I have specialized in the hardest niche in content: deeply technical B2B software where the target audience is skeptical engineers, discerning CTOs, and ROI-obsessed CFOs.",
            "Most tech content fails because it either stays too superficial (marketing fluff) or gets bogged down in raw documentation that fails to communicate business value.",
            "My specialty is the intersection: interviewing your core engineers, digesting the codebase or architectural whitepapers, and crafting compelling narratives that guide decision-makers from problem awareness to signed enterprise contracts."
          ]
        }
      ],
      quotes: [
        "“I don't just write words. I build intellectual capital that lowers sales cycles and establishes category dominance.”"
      ]
    }
  },
  {
    id: 4,
    title: "04 · Career & Experience Timeline",
    subtitle: "4+ Years Track Record Across B2B SaaS & Tech",
    category: "resume",
    image: "/portfolio-assets/img_4.png",
    description: "Chronological journey spanning leading tech content agencies, fast-scaling Series A-C SaaS companies, and independent strategic retainers.",
    tags: ["Resume", "Track Record", "Experience", "B2B SaaS"],
    keyTakeaway: "Over 240+ published long-form technical pieces and $2.8M in influenced pipeline.",
    verbatimContent: {
      heading: "Experience & Strategic Roles",
      sections: [
        {
          title: "EXPERIENCE TIMELINE",
          content: [
            "2023 - Present | Lead Tech Content Strategist & Consultant (Freelance): Partnered with 15+ Series A to C SaaS companies across AI, Cloud, and FinTech. Spearheaded flagship whitepapers, product-led SEO hubs, and customer case studies.",
            "2022 - 2023 | Senior Content Writer — DevTools & Cloud SaaS Studio: Produced 80+ technical articles, API integration guides, and competitive tear-downs for DevOps and infrastructure clients.",
            "2021 - 2022 | B2B Copywriter & Content Specialist: Crafted high-converting landing pages, email nurture cadences, and thought leadership columns on LinkedIn & Substack.",
            "Certifications & Competencies: Technical Content Strategy, Advanced Product Marketing (PMM), SEO Information Architecture, Google Analytics 4 & Search Console."
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: "05 · Core Services & Offerings",
    subtitle: "Whitepapers, Case Studies, SEO Pillars & Retainers",
    category: "services",
    image: "/portfolio-assets/img_5.png",
    description: "Modular service packages designed for B2B SaaS marketing heads: from single flagship whitepapers to full monthly content retainers.",
    tags: ["Services", "Whitepapers", "Case Studies", "Retainers"],
    keyTakeaway: "Clear deliverables, predictable sprints, and end-to-end editorial execution.",
    verbatimContent: {
      heading: "Core Service Pillars",
      subheading: "What High-Growth Tech Companies Hire Me For",
      sections: [
        {
          title: "01. Flagship Whitepapers & Industry Reports",
          badge: "Enterprise",
          content: [
            "3,500 – 6,000 word exhaustive research assets with custom benchmarks, architectural flowcharts, and executive takeaways.",
            "Engineered to serve as gated lead generation magnets and sales collateral for enterprise accounts."
          ]
        },
        {
          title: "02. Revenue-Driving Customer Case Studies",
          badge: "Conversion",
          content: [
            "Deep-dive interviews with your enterprise champions (VP Eng, CTO, Head of SecOps).",
            "Built around the Challenge-Architecture-Impact framework with verifiable hard numbers and ROI metrics."
          ]
        },
        {
          title: "03. Product-Led SEO Content Pillars",
          badge: "Organic Growth",
          content: [
            "Comprehensive technical tutorials and comparison guides (e.g. 'Vendor A vs. Open Source B') that capture high-intent search queries."
          ]
        },
        {
          title: "04. Executive & Founder Ghostwriting",
          badge: "Thought Leadership",
          content: [
            "Distilling founder perspectives into viral LinkedIn breakdowns, Substack columns, and tech publication bylines."
          ]
        }
      ]
    }
  },
  {
    id: 6,
    title: "06 · Content Strategy Framework",
    subtitle: "The 4-Quadrant B2B Content Engine",
    category: "framework",
    image: "/portfolio-assets/img_6.png",
    description: "Rakhi's 4-quadrant strategic matrix: Educate, Inspire, Product-Led Evaluate, and Convince.",
    tags: ["Matrix", "Framework", "Funnel", "Strategy"],
    keyTakeaway: "Every piece of content must have a defined role in moving readers closer to product adoption.",
    verbatimContent: {
      heading: "The 4-Quadrant Tech Content Engine",
      sections: [
        {
          title: "QUADRANT 1: EDUCATE (ToFU - Rational)",
          content: "High-value foundational guides, architectural breakdowns, and industry trend reports that establish technical authority."
        },
        {
          title: "QUADRANT 2: INSPIRE (ToFU - Emotional)",
          content: "Contrarian founder thought leadership, category creation essays, and visionary takes on emerging technology."
        },
        {
          title: "QUADRANT 3: EVALUATE (MoFU - Rational)",
          content: "Head-to-head tech comparisons, migration playbooks, total cost of ownership (TCO) breakdowns, and developer tutorials."
        },
        {
          title: "QUADRANT 4: CONVINCE (BoFU - Transactional)",
          content: "Rigorous customer success stories, benchmark whitepapers, security compliance teardowns, and ROI calculation sheets."
        }
      ]
    }
  },
  {
    id: 7,
    title: "07 · Client Roster & Industry Ecosystem",
    subtitle: "Multi-Industry Portfolio: Medicine, Health, F&B, Education, Fashion & Media",
    category: "clients",
    image: "/portfolio-assets/img_7.png",
    description: "Broad portfolio of 28+ brands serviced across specialized verticals including Medicine, Health & Beauty, F&B, Education, Fashion, Media, Interior Design, and Finance.",
    tags: ["Clients", "Brand Ecosystem", "Logos", "Industry Breadth"],
    keyTakeaway: "Proven ability to rapidly grasp diverse industry nuances from high-end dental clinics to fashion studios and enterprise SaaS.",
    verbatimContent: {
      heading: "Client Roster & Industry Reach",
      subheading: "Trusted Across Diverse Consumer & Enterprise Sectors",
      sections: [
        {
          title: "Vertical Breakdown",
          content: [
            "• Medicine & Healthcare: Premier Dental, Hong Duc, Eye Care, Premier Clinics",
            "• Health & Beauty / Wellness: Good Vitamins, Pharmekal, PA Spa, My Nhu Beauty Center, Van Duy Phuong",
            "• F&B & Hospitality: Loc Phat, La Dua Quan, Gold Fruit, WEFC, Juice & Coffee EPS",
            "• Education & Learning: S.O.C Institute, Khan Global Studies, VNG Training",
            "• Fashion & Lifestyle: The KIM Brand, Bloom Yogawear, Lupo Art, TP Luxury Design",
            "• Business & Media: BNI HCMC 6, VBSC Business Styling Community, IIUSA, Lok's Media, RM Studio, VOC Capital"
          ]
        }
      ]
    }
  },
  {
    id: 8,
    title: "08 · Social Media Post — High-Retention Copywriting",
    subtitle: "Section Divider: Social Content Strategy & Campaign Execution",
    category: "services",
    image: "/portfolio-assets/img_8.png",
    description: "Opening divider for brand social media posts, visual carousels, and viral multi-channel messaging campaigns.",
    tags: ["Social Media", "Copywriting", "Campaigns", "Engagement"],
    keyTakeaway: "Transforming scrolling feeds into captivated brand communities with high-retention copy.",
    verbatimContent: {
      heading: "SOCIAL MEDIA POST",
      subheading: "Copywriting · Campaign Strategy · Community Building",
      sections: [
        {
          title: "Focus Areas",
          content: [
            "• Platform native copywriting (LinkedIn carousels, Instagram visual guides, TikTok/Reel scripts)",
            "• Campaign hook crafting that stops mindless scrolling in the first 2 seconds",
            "• Data-backed engagement and call-to-action optimization"
          ]
        }
      ]
    }
  },
  {
    id: 9,
    title: "09 · Featured Case Study: Premier Dental",
    subtitle: "The S.A.V.E Model: Dental Clinic is Home, Dentist is Friend",
    category: "case-study",
    clientName: "Premier Dental",
    image: "/portfolio-assets/img_9.png",
    description: "Comprehensive patient-centric campaign for Premier Dental utilizing the S.A.V.E framework (Solution, Access, Value, Education) to build trust and drive appointments.",
    tags: ["Premier Dental", "Healthcare", "S.A.V.E Model", "Social Strategy"],
    keyTakeaway: "Replacing clinical fear with welcoming familiarity using structured educational storytelling.",
    verbatimContent: {
      heading: "Premier Dental — Featured Project",
      subheading: "Dental Clinic is Home, Dentist is Friend | Model: S.A.V.E",
      sections: [
        {
          title: "About The Brand",
          content: "As one of the TOP dentists with international standard service quality, Premier Dental is passionate about changing lives: 'We offer world-class care you can trust!'"
        },
        {
          title: "Objectives & Execution",
          content: [
            "• Objective: Increase brand awareness and reach Target Audiences (TAs).",
            "• Scope: Creative social media strategy, Copywriting, Community Management.",
            "• 01. Solution Pillar: 'Say goodbye to yellowed teeth / Say hi to bright white teeth' (Laser whitening breakdown).",
            "• 02. Access Pillar: 'Dr. Wilson: Personalizing the journey brings a confident smile' (Humanizing expert medical staff).",
            "• 03. Value Pillar: 'A very fortunate incidental encounter' (Authentic client experiences & consultation comfort).",
            "• 04. Education Pillar: 'Should I whiten my teeth at home or at the dentist?' (Professional mythbusting & safety)."
          ]
        }
      ]
    }
  },
  {
    id: 10,
    title: "10 · Featured Case Study: Good Vitamins",
    subtitle: "Essential Health Solutions · Functional Food & E-commerce Conversions",
    category: "case-study",
    clientName: "Good Vitamins",
    image: "/portfolio-assets/img_10.png",
    description: "Social media campaign and product marketing series for Good Vitamins functional foods, driving massive Shopee/Lazada e-commerce engagement.",
    tags: ["Good Vitamins", "Functional Food", "E-commerce", "Health Copy"],
    keyTakeaway: "Merging rigorous nutritional science with vibrant lifestyle copywriting to accelerate consumer purchasing decisions.",
    verbatimContent: {
      heading: "Good Vitamins — Featured Project",
      subheading: "Bringing Essential Health Solutions to Daily Life",
      sections: [
        {
          title: "About The Brand",
          content: "Good Vitamins is a functional food brand on a mission to bring optimal vitality to every household through essential mineral and dietary solutions."
        },
        {
          title: "Campaign Posts Breakdown",
          content: [
            "• Post 1 (Mineral Education): 'Living healthy with 3 essential minerals (Ca, Mg, Zn)' — Explaining cellular vitality and immune resilience.",
            "• Post 2 (Product Lineup): Joint health solutions (Calcium Magnesium Zinc with D3, Joint Flex Plus, Shark Cartilage).",
            "• Post 3 (E-commerce Mega-Sale): 'Big holiday, complete health' — Integrated Lazada & Shopee Mall flash promotion (-50%).",
            "• Post 4 (Routine Building): '5 steps to radiant summer glow' — Skincare and supplement synergy guide."
          ]
        }
      ]
    }
  },
  {
    id: 11,
    title: "11 · The Content Matrix: Good Vitamins",
    subtitle: "Balancing Rational vs. Emotional & Awareness vs. Purchase",
    category: "framework",
    clientName: "Good Vitamins",
    image: "/portfolio-assets/img_11.png",
    description: "The full 4-quadrant strategic execution for Good Vitamins, driving customer acquisition across every stage of the buyer funnel.",
    tags: ["Content Matrix", "Strategy", "Good Vitamins", "Full Funnel"],
    keyTakeaway: "A balanced content diet converts casual scrollers into loyal repeat customers.",
    verbatimContent: {
      heading: "Good Vitamins — The Content Matrix",
      subheading: "Rational vs. Emotional × Awareness vs. Purchase",
      sections: [
        {
          title: "01. ENTERTAIN (Emotional × Awareness)",
          content: "Interactive mini-games ('Boost Immunity, Win Big') designed to trigger viral comments and peer shares."
        },
        {
          title: "02. INSPIRE (Emotional × Purchase)",
          content: "Emotional customer feedback stories highlighting real life transformations and pain-free mobility."
        },
        {
          title: "03. EDUCATE (Rational × Awareness)",
          content: "Statistical deep-dives into Vietnamese health indicators and why functional foods are indispensable in modern diets."
        },
        {
          title: "04. CONVINCE (Rational × Purchase)",
          content: "High-urgency Mid-Month Super Sale shopping campaigns with bundled value propositions."
        }
      ]
    }
  },
  {
    id: 12,
    title: "12 · Featured Case Study: Lok's Media",
    subtitle: "The 3P Production Framework: Pre-Production, Production, Post-Production",
    category: "case-study",
    clientName: "Lok's Media",
    image: "/portfolio-assets/img_12.png",
    description: "Brand positioning and B2B client acquisition campaign for Lok's Media production house, highlighting the 3P production system.",
    tags: ["Lok's Media", "Video Production", "3P Framework", "B2B Positioning"],
    keyTakeaway: "Packaging behind-the-scenes craft into a structured proprietary methodology builds premium market value.",
    verbatimContent: {
      heading: "Lok's Media — Featured Project",
      subheading: "Media-Studio-Academy Ecosystem Positioning",
      sections: [
        {
          title: "About The Brand",
          content: "Lok's Media is an integrated production house merging creative media, commercial photography studio, and training academy."
        },
        {
          title: "Campaign Execution",
          content: [
            "• Post 1: 'Be Locked by Lok's' — Locking visual focus through every cinematic frame.",
            "• Post 2: 'The 3P Process: Secrets Behind Million-View Videos' — Pre-production, Production, Post-production transparency.",
            "• Post 3: 'Visuals: The Fastest Way to Define Who You Are' — Corporate identity and commercial branding impact."
          ]
        }
      ]
    }
  },
  {
    id: 13,
    title: "13 · Other Projects: Fashion & F&B",
    subtitle: "The KIM, Bloom Yogawear, Loc Phat & La Dua Quan",
    category: "case-study",
    image: "/portfolio-assets/img_13.png",
    description: "Creative campaigns across luxury fashion tailoring, athleisure, and culinary F&B storytelling.",
    tags: ["Fashion", "F&B", "Lifestyle", "The KIM", "Bloom"],
    keyTakeaway: "Adapting tone of voice seamlessly from prestige tailoring to mouthwatering culinary cravings.",
    verbatimContent: {
      heading: "Creative Portfolio: Fashion & Food & Beverage",
      sections: [
        {
          title: "Fashion Brands",
          content: [
            "• The KIM: 'President Lab Coat — The Beauty of Success & Elegance' (Tailored medical coats crafted within 7 days).",
            "• Bloom Yogawear: 'Coming Soon — Where flowers bloom, so does hope' (Mindful activewear collection launch)."
          ]
        },
        {
          title: "F&B Culinary Storytelling",
          content: [
            "• Loc Phat: 'An la nghien, dat co lien!' (Traditional savory meats and signature platters).",
            "• La Dua Quan: 'An che khoai deo la dinh' (Chewy sweet potato dessert narratives capturing youth trends)."
          ]
        }
      ]
    }
  },
  {
    id: 14,
    title: "14 · Other Projects: Health & Beauty",
    subtitle: "PA Spa, My Nhu Beauty Center, Van Duy Phuong & Pharmekal",
    category: "case-study",
    image: "/portfolio-assets/img_14.png",
    description: "Specialized clinical and aesthetic copywriting spanning medical spas, skincare centers, and pharmaceutical grade supplements.",
    tags: ["Health", "Beauty", "Medical Aesthetics", "Wellness"],
    keyTakeaway: "Compliance-conscious copywriting that respects dermatological standards while maximizing conversion desire.",
    verbatimContent: {
      heading: "Health & Beauty Portfolio",
      sections: [
        {
          title: "Aesthetic Clinics & Spas",
          content: [
            "• PA Spa: 'Phun moi Collagen — Radiant, plump, and captivating lips with organic natural pigments.'",
            "• My Nhu Beauty Center Spa: Valentine's promotional campaign (-30% all skincare treatments)."
          ]
        },
        {
          title: "Pharmaceuticals & Joint Care",
          content: [
            "• Van Duy Phuong: 'Why do so many joint health supplements contain Glucosamine?' (Scientific cartilage synthesis).",
            "• Pharmekal Vietnam: 'Pure Cordyceps — The Golden Pharmaceutical for Antioxidant Defense'."
          ]
        }
      ]
    }
  },
  {
    id: 15,
    title: "15 · Event Campaigns & Social Strategy",
    subtitle: "Passion Currency (S.O.C) & VBSC Business Styling Community",
    category: "case-study",
    image: "/portfolio-assets/img_15.png",
    description: "High-impact event copywriting, speaker announcements, and attendee recruitment for premier entrepreneurial communities.",
    tags: ["Event Marketing", "Networking", "S.O.C Institute", "VBSC"],
    keyTakeaway: "Event copy must create high social proof and FOMO to convert passive followers into verified attendees.",
    verbatimContent: {
      heading: "Event & Business Community Campaigns",
      sections: [
        {
          title: "S.O.C Institute — Stand On Colossus #05",
          content: "Event theme: 'PASSION CURRENCY — How to make money from your passion' featuring guest speaker Dich Lep (Founder of Loli & The Wolf, Monkey In Black)."
        },
        {
          title: "VBSC (Vietnam Business Styling Community)",
          content: "C-Level Shooting & Networking Event at Landmark 81 / Vinhomes Central Park, featuring MC Nguyen Khang, 'Ong Chu Polo' Luu Quoc Tan, Akuba, and Larmes."
        }
      ]
    }
  },
  {
    id: 16,
    title: "16 · Short Video Strategy (Reels & TikTok)",
    subtitle: "Multi-Platform Video Scripting & Production Roadmaps",
    category: "video",
    image: "/portfolio-assets/img_16.png",
    description: "Scriptwriting and content roadmaps for TikTok, Instagram Reels, and Facebook Shorts generating high organic reach.",
    tags: ["Short Video", "Reels", "TikTok", "Scripts", "Viral"],
    keyTakeaway: "Hooks written for short video must capture attention in 1.5 seconds and retain viewers until the call-to-action.",
    verbatimContent: {
      heading: "Short Video Content System (Reels & TikTok)",
      sections: [
        {
          title: "Capabilities",
          content: [
            "• Comprehensive content calendar & script creation for multi-platform distribution.",
            "• Platform specialization: TikTok, Instagram Reels, YouTube Shorts, Facebook Watch.",
            "• Clients: Premier Dental, EB-5 Visa Official, DEMAD Agency."
          ]
        },
        {
          title: "Featured Video Scripts",
          content: [
            "• '3 reasons why summer is the perfect time for braces'",
            "• 'Day in the life with international patient Kaja at Premier Dental'",
            "• 'Wisdom tooth extraction mythbusting with senior dentists'"
          ]
        }
      ]
    }
  },
  {
    id: 17,
    title: "17 · PR Content & Media Relations",
    subtitle: "National Television & Leading Press Features",
    category: "pr",
    image: "/portfolio-assets/img_17.png",
    description: "Press release authoring, television interview scripting, and media placements for international investment and business summits.",
    tags: ["PR Content", "Press Release", "VTC News", "Media", "BNI"],
    keyTakeaway: "Securing national television and top-tier press coverage establishes unshakeable institutional credibility.",
    verbatimContent: {
      heading: "PR Content & Press Placements",
      sections: [
        {
          title: "Media Placements",
          content: [
            "• Television: VTC News special broadcast covering the EB-5 U.S. Investment Immigration Summit Saigon.",
            "• Leading Online Press: 24h.com.vn feature article — 'EB-5: U.S. Investment Immigration Program for Vietnamese Families'.",
            "• Corporate Press: BNI System — 'Celebrating 1 Year of Milestones, Brotherhood and Shared Success'."
          ]
        }
      ]
    }
  },
  {
    id: 18,
    title: "18 · Personal Blog & Editorial Reflections",
    subtitle: "Writing as a Reflection of Soul, Work, and Freedom",
    category: "blog",
    image: "/portfolio-assets/img_18.png",
    description: "Personal essays and creative writing reflecting on life, creative discipline, emotional honesty, and authentic expression.",
    tags: ["Personal Blog", "Essays", "Reflections", "Philosophy"],
    keyTakeaway: "Great copywriting starts with a genuine love for human emotion and the craft of prose.",
    verbatimContent: {
      heading: "Personal Blog & Creative Essays",
      subheading: "“I have to write everything down on paper to feel like I really understand it”",
      sections: [
        {
          title: "Featured Essays",
          content: [
            "• 'Ngon den' (The Lamp): Musings on vulnerability, fear of the wind, and staying illuminated.",
            "• 'Dinh nghia chinh minh' (Defining Oneself): Finding artistic identity in an age of conformity.",
            "• 'Di lam' (Work & Meaning): The philosophy of labor, creative joy, and daily discipline.",
            "• 'Freedom': 'The secret of happiness is freedom... and the secret to freedom is courage.'",
            "• 'Linh hon' (The Gentle Soul): Quiet observations on human tenderness and quiet corners."
          ]
        }
      ]
    }
  },
  {
    id: 19,
    title: "19 · Closing & Collaboration — Let's Work Together!",
    subtitle: "When the 'I' is Replaced by 'WE', Even Illness Becomes Wellness",
    category: "contact",
    image: "/portfolio-assets/img_19.png",
    description: "Closing presentation board inviting meaningful collaborations, retainers, and strategic content sprints.",
    tags: ["Let's Work Together", "Collaboration", "Closing", "Contact"],
    keyTakeaway: "Ready to transform your brand narrative into high-converting revenue assets.",
    verbatimContent: {
      heading: "LET'S WORK TOGETHER!",
      quotes: [
        "“When the 'I' is replaced by 'WE', even illness becomes wellness.”"
      ],
      sections: [
        {
          title: "Engagement Models",
          content: [
            "• Monthly Content Retainers: Turnkey articles, social campaigns, and thought leadership.",
            "• Strategic Sprints: Flagship whitepapers, customer case studies, and brand messaging overhauls.",
            "• Video & Campaign Scripting: End-to-end Reels, TikTok, and PR storyboards."
          ]
        },
        {
          title: "Direct Connect",
          content: [
            "Email: rakhi.techwriter@gmail.com",
            "LinkedIn: linkedin.com/in/rakhi-techwriter",
            "Available Globally / Remote Timezones"
          ]
        }
      ]
    }
  }
];
