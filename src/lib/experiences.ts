/**
 * Illustrative seed data for the Evoluteon marketplace.
 *
 * Venues are REAL partners from our curated Greater-Lisbon shortlist
 * (clinic-led blend). Imagery, pricing, durations, and program details are
 * PLACEHOLDERS pending signed partner agreements and supplied media — replace
 * with negotiated content before launch.
 */

export type Category = "Clinic" | "Hotel" | "Retreat";

export interface Experience {
  slug: string;
  title: string;
  category: Category;
  location: string;
  country: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  priceRange: string;
  duration: string;
  treatments: string[];
  credentials: string;
  scientificBacking: string;
  highlights: string[];
}

export const CATEGORIES: Category[] = ["Clinic", "Hotel", "Retreat"];

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

export const experiences: Experience[] = [
  /* ─────────── CLINICS ─────────── */
  {
    slug: "longevity-senses-cascais",
    title: "Longevity Senses Cascais",
    category: "Clinic",
    location: "Cascais",
    country: "Portugal",
    shortDescription:
      "A boutique hotel and clinic on the Cascais coast with signature health and longevity programmes.",
    description:
      "On the Estoril coast just west of Lisbon, Longevity Senses unites a boutique hotel with a dedicated medical clinic. Guests begin with a comprehensive health assessment, then follow a physician-designed programme blending diagnostics, recovery, and restorative therapies across a three-, five-, or seven-night stay — all without leaving the comfort of the residence.",
    heroImage: img("1629909613654-28e377c37b09", 1200),
    gallery: [img("1576091160550-2173dba999ef"), img("1551076805-e1869033e561"), img("1544161515-4ab6ce6db874")],
    priceRange: "From €6,500 / programme (indicative)",
    duration: "3–7 nights",
    treatments: [
      "Comprehensive health assessment",
      "Metabolic & longevity diagnostics",
      "Personalised nutrition programme",
      "Recovery & physiotherapy",
      "Aesthetic & regenerative treatments",
    ],
    credentials:
      "Physician-supervised medical team specialising in preventive and longevity medicine, integrated with hotel hospitality.",
    scientificBacking:
      "Programmes built on evidence-based preventive medicine, diagnostics, and measurable health markers.",
    highlights: ["Hotel and clinic in one", "Estoril coast setting", "Signature 3–7 night programmes"],
  },
  {
    slug: "longevity-medical-spa-corinthia",
    title: "Longevity Medical Spa at Corinthia",
    category: "Clinic",
    location: "Lisbon",
    country: "Portugal",
    shortDescription:
      "One of Europe's largest medical spas, devoted to preventive medicine and anti-ageing within the Corinthia Lisbon.",
    description:
      "Spanning thousands of square metres inside the Corinthia Lisbon, this benchmark medical spa pairs five-star hospitality with a serious preventive-medicine programme. Executive health checks, anti-ageing protocols, and a full thermal and hydrotherapy circuit are delivered under medical supervision — a city-centre sanctuary for guests optimising healthspan between meetings.",
    heroImage: img("1544161515-4ab6ce6db874", 1200),
    gallery: [img("1551076805-e1869033e561"), img("1576091160550-2173dba999ef"), img("1629909613654-28e377c37b09")],
    priceRange: "From €3,500 / programme (indicative)",
    duration: "1–7 days",
    treatments: [
      "Executive health check-up",
      "Anti-ageing & aesthetic medicine",
      "Thermal & hydrotherapy circuit",
      "Nutrition & metabolic consulting",
      "Stress & recovery programmes",
    ],
    credentials:
      "Medical spa operating under physician supervision, integrated with the five-star Corinthia Lisbon.",
    scientificBacking:
      "Preventive and anti-ageing protocols grounded in diagnostics and evidence-based medicine.",
    highlights: ["City-centre medical spa", "Executive health checks", "Five-star integration"],
  },
  {
    slug: "healthy-horizon-longevity-club",
    title: "Healthy Horizon Longevity Club",
    category: "Clinic",
    location: "Lisbon",
    country: "Portugal",
    shortDescription:
      "A members-style longevity club bringing together evidence-based optimisation therapies under one roof.",
    description:
      "Healthy Horizon is Lisbon's longevity club, assembling a suite of evidence-based optimisation therapies in a single, design-led space. From hyperbaric oxygen and intermittent hypoxic training to red-light therapy, cold plunge, and float, each modality is sequenced into a personalised protocol oriented around measurable results.",
    heroImage: img("1551076805-e1869033e561", 1200),
    gallery: [img("1629909613654-28e377c37b09"), img("1576091160550-2173dba999ef"), img("1544161515-4ab6ce6db874")],
    priceRange: "From €2,400 / programme (indicative)",
    duration: "Single sessions to multi-week",
    treatments: [
      "Hyperbaric oxygen therapy (HBOT)",
      "Intermittent hypoxic training (IHHT)",
      "Red-light & photobiomodulation",
      "Cold plunge & contrast therapy",
      "Float & recovery",
    ],
    credentials:
      "Specialist-led longevity practice delivering protocolised, evidence-based optimisation therapies.",
    scientificBacking:
      "Modalities selected for published evidence in recovery, metabolic, and longevity research.",
    highlights: ["Seven core therapies", "Protocol-driven", "Design-led Lisbon space"],
  },
  {
    slug: "open-hearts-lisboa",
    title: "Open Hearts Lisboa",
    category: "Clinic",
    location: "Lisbon",
    country: "Portugal",
    shortDescription:
      "Physician-led biohacking and longevity programmes for cognitive, metabolic, and emotional optimisation.",
    description:
      "Open Hearts brings a science-forward, physician-led approach to biohacking and longevity in the heart of Lisbon. Programmes combine advanced diagnostics with cognitive, metabolic, and nervous-system optimisation — designed for those who want to understand and improve their biology with rigour and warmth in equal measure.",
    heroImage: img("1576091160550-2173dba999ef", 1200),
    gallery: [img("1629909613654-28e377c37b09"), img("1551076805-e1869033e561"), img("1545205597-3d9d02c29597")],
    priceRange: "From €2,800 / programme (indicative)",
    duration: "Programmes from 1 day",
    treatments: [
      "Advanced biomarker diagnostics",
      "Cognitive & nervous-system optimisation",
      "Metabolic conditioning",
      "Personalised supplementation",
      "Longevity coaching",
    ],
    credentials:
      "Physician-led practice combining diagnostics with personalised biohacking protocols.",
    scientificBacking:
      "Protocols informed by neuroscience and metabolic-health research.",
    highlights: ["Physician-led biohacking", "Diagnostics-first", "Central Lisbon"],
  },
  {
    slug: "longevity-wellness-clinics-cascais",
    title: "Longevity Wellness Clinics Cascais",
    category: "Clinic",
    location: "Cascais",
    country: "Portugal",
    shortDescription:
      "Functional medicine, diagnostics, and cellular regeneration on the Cascais coast.",
    description:
      "Part of Portugal's benchmark longevity group, the Cascais clinic pairs functional-medicine consultations with advanced diagnostics, aesthetic medicine, and cellular-regeneration protocols. Programmes are tailored from a detailed work-up of metabolism, inflammation, and longevity markers, then delivered in a calm coastal setting.",
    heroImage: img("1629909613654-28e377c37b09", 1200),
    gallery: [img("1544161515-4ab6ce6db874"), img("1551076805-e1869033e561"), img("1576091160550-2173dba999ef")],
    priceRange: "From €3,000 / programme (indicative)",
    duration: "3–7 days",
    treatments: [
      "Functional-medicine consultation",
      "Advanced longevity diagnostics",
      "Cellular-regeneration protocols",
      "Aesthetic medicine",
      "Nutrition & lifestyle design",
    ],
    credentials:
      "Functional-medicine physicians within Portugal's established longevity clinic group.",
    scientificBacking:
      "Diagnostics-led protocols spanning metabolism, inflammation, and longevity markers.",
    highlights: ["Functional medicine", "Cellular regeneration", "Coastal Cascais clinic"],
  },

  /* ─────────── HOTELS ─────────── */
  {
    slug: "penha-longa-resort",
    title: "Penha Longa Resort",
    category: "Hotel",
    location: "Sintra",
    country: "Portugal",
    shortDescription:
      "A Ritz-Carlton palace resort and spa within the Sintra-Cascais Natural Park.",
    description:
      "Set in an 18th-century estate within the Sintra-Cascais Natural Park, Penha Longa is a Ritz-Carlton resort where heritage architecture meets a serious wellness centre. Days move between forest trails, the spa's thermal circuit, and private wellness classes — restoration framed by some of the most beautiful landscape near Lisbon.",
    heroImage: img("1571896349842-33c89424de2d", 1200),
    gallery: [img("1582719478250-c89cae4dc85b"), img("1571003123894-1f0594d2b5d9"), img("1544161515-4ab6ce6db874")],
    priceRange: "From €450 / night (indicative)",
    duration: "2–10 nights",
    treatments: [
      "Spa thermal circuit",
      "Private wellness classes",
      "Forest & nature immersion",
      "Golf & active recovery",
      "Restorative spa rituals",
    ],
    credentials:
      "Wellness programmes delivered by certified therapists and visiting practitioners.",
    scientificBacking:
      "Restorative protocols centred on movement, recovery, and nature exposure.",
    highlights: ["18th-century palace", "Sintra-Cascais Natural Park", "Award-winning spa"],
  },
  {
    slug: "four-seasons-ritz-lisbon",
    title: "Four Seasons Hotel Ritz Lisbon",
    category: "Hotel",
    location: "Lisbon",
    country: "Portugal",
    shortDescription:
      "The Ritz Spa, an 18-metre indoor pool, and Michelin-level dining above Eduardo VII Park.",
    description:
      "An icon of the city, the Four Seasons Hotel Ritz Lisbon pairs Art Deco grandeur with the award-winning Ritz Spa. A marble-and-oak sanctuary with an 18-metre indoor lap pool and treatments by ESPA and Sodashi sits above the hotel gardens — wellness woven into one of Lisbon's most storied addresses.",
    heroImage: img("1571003123894-1f0594d2b5d9", 1200),
    gallery: [img("1544161515-4ab6ce6db874"), img("1551076805-e1869033e561"), img("1571896349842-33c89424de2d")],
    priceRange: "From €700 / night (indicative)",
    duration: "2–10 nights",
    treatments: [
      "Ritz Spa signature treatments",
      "18m indoor lap pool",
      "Personal training & fitness",
      "ESPA & Sodashi therapies",
      "Wellness dining",
    ],
    credentials:
      "Award-winning spa staffed by expert therapists, with premium wellness partners.",
    scientificBacking:
      "Treatment menus built around recovery, circulation, and restorative care.",
    highlights: ["Ritz Spa", "18m indoor pool", "Michelin-starred dining"],
  },
  {
    slug: "the-oitavos",
    title: "The Oitavos",
    category: "Hotel",
    location: "Cascais",
    country: "Portugal",
    shortDescription:
      "Contemporary design and open nature within the Sintra-Cascais Natural Park.",
    description:
      "The Oitavos is a quietly luxurious, design-led hotel set against the dunes and pines of the Sintra-Cascais Natural Park. With a semi-Olympic indoor pool, yoga and pilates, championship golf, and floor-to-ceiling views of the Atlantic, it offers an active, restorative base minutes from Cascais.",
    heroImage: img("1600585154340-be6161a56a0c", 1200),
    gallery: [img("1600596542815-ffad4c1539a9"), img("1571896349842-33c89424de2d"), img("1545205597-3d9d02c29597")],
    priceRange: "From €380 / night (indicative)",
    duration: "2–10 nights",
    treatments: [
      "Spa & wellness treatments",
      "Yoga & pilates",
      "Semi-Olympic indoor pool",
      "Golf & outdoor fitness",
      "Nature & coastal trails",
    ],
    credentials:
      "Wellness and fitness programmes delivered by qualified instructors and therapists.",
    scientificBacking:
      "Active-recovery focus combining movement, nature, and rest.",
    highlights: ["Natural-park setting", "Semi-Olympic pool", "Design-led architecture"],
  },
  {
    slug: "grande-real-villa-italia",
    title: "Grande Real Villa Itália Hotel & Spa",
    category: "Hotel",
    location: "Cascais",
    country: "Portugal",
    shortDescription:
      "A 1,000m² thalassotherapy spa in a historic clifftop villa overlooking the Atlantic.",
    description:
      "Once a royal residence, Grande Real Villa Itália now houses Real Spa Therapy — roughly 1,000m² dedicated to thalassotherapy and marine-mineral recovery, with ten treatment rooms, a seawater circuit, sauna, and steam. Set on the Cascais cliffs, it is restoration with the Atlantic as backdrop.",
    heroImage: img("1571896349842-33c89424de2d", 1200),
    gallery: [img("1544161515-4ab6ce6db874"), img("1582719478250-c89cae4dc85b"), img("1551076805-e1869033e561")],
    priceRange: "From €320 / night (indicative)",
    duration: "2–10 nights",
    treatments: [
      "Thalassotherapy circuit",
      "Marine-mineral recovery",
      "Seawater hydrotherapy",
      "Massage & body treatments",
      "Sauna & steam rituals",
    ],
    credentials:
      "Thalassotherapy and spa treatments delivered by certified therapists.",
    scientificBacking:
      "Marine-based hydrotherapy traditions applied for circulation and recovery.",
    highlights: ["1,000m² thalassotherapy spa", "Clifftop Atlantic views", "Historic royal villa"],
  },
  {
    slug: "palacio-estoril",
    title: "Palácio Estoril Hotel, Golf & Spa",
    category: "Hotel",
    location: "Estoril",
    country: "Portugal",
    shortDescription:
      "A legendary Estoril palace hotel with a Banyan Tree Spa, moments from the Atlantic.",
    description:
      "A grande-dame of the Estoril coast, Palácio Estoril pairs old-world glamour with a serene Banyan Tree Spa. Indoor and outdoor pools, Asian-inspired therapies, and a championship golf course sit just 200 metres from the ocean — twenty minutes from central Lisbon, a world away in pace.",
    heroImage: img("1582719478250-c89cae4dc85b", 1200),
    gallery: [img("1571896349842-33c89424de2d"), img("1571003123894-1f0594d2b5d9"), img("1544161515-4ab6ce6db874")],
    priceRange: "From €350 / night (indicative)",
    duration: "2–10 nights",
    treatments: [
      "Banyan Tree Spa therapies",
      "Indoor & outdoor pools",
      "Asian-inspired rituals",
      "Golf & active recovery",
      "Turkish bath & hydro",
    ],
    credentials:
      "Spa therapies delivered in partnership with an internationally recognised spa brand.",
    scientificBacking:
      "Treatments centred on relaxation, circulation, and restorative care.",
    highlights: ["Banyan Tree Spa", "200m from the Atlantic", "20 minutes from Lisbon"],
  },

  /* ─────────── RETREATS ─────────── */
  {
    slug: "quinta-da-comporta",
    title: "Quinta da Comporta",
    category: "Retreat",
    location: "Comporta",
    country: "Portugal",
    shortDescription:
      "A wellness boutique resort among the rice paddies, home to the Oryza Spa.",
    description:
      "Quinta da Comporta is a serene wellness retreat set among the rice fields and dunes of Comporta, an hour south of Lisbon. Light-filled, design-led, and a member of Small Luxury Hotels, it centres on the Oryza Spa — a place built for slowness, with thermal waters, holistic rituals, and uninterrupted nature.",
    heroImage: img("1505691938895-1758d7feb511", 1200),
    gallery: [img("1507652313519-d4e9174996dd"), img("1545205597-3d9d02c29597"), img("1600596542815-ffad4c1539a9")],
    priceRange: "From €380 / night (indicative)",
    duration: "3–7 nights",
    treatments: [
      "Oryza Spa rituals",
      "Indoor thermal pool",
      "Holistic bodywork",
      "Yoga & breathwork",
      "Nature immersion",
    ],
    credentials:
      "Holistic practitioners and spa therapists; medical wellness available on request.",
    scientificBacking:
      "Restorative programmes centred on rest, movement, and nature exposure.",
    highlights: ["Oryza Spa", "Rice-paddy setting", "Small Luxury Hotels member"],
  },
  {
    slug: "sublime-comporta",
    title: "Sublime Comporta Country Retreat & Spa",
    category: "Retreat",
    location: "Comporta",
    country: "Portugal",
    shortDescription:
      "A design-led country retreat and spa set across cork oaks and umbrella pines.",
    description:
      "Sublime Comporta is a sprawling country retreat where stone, wood, and umbrella pines frame a deeply private escape. The spa draws on local elements — sand, salt, pine, and cork — for restorative rituals, while villas and suites scattered across the estate offer the seclusion that has made Comporta a quiet favourite of those in the know.",
    heroImage: img("1600596542815-ffad4c1539a9", 1200),
    gallery: [img("1505691938895-1758d7feb511"), img("1507652313519-d4e9174996dd"), img("1545205597-3d9d02c29597")],
    priceRange: "From €450 / night (indicative)",
    duration: "3–7 nights",
    treatments: [
      "Nature-element spa rituals",
      "Massage & bodywork",
      "Yoga & movement",
      "Forest & estate walks",
      "Farm-to-table nutrition",
    ],
    credentials:
      "Spa therapists and wellness practitioners across a private estate setting.",
    scientificBacking:
      "Restoration through nature immersion, movement, and nutrition.",
    highlights: ["Private estate villas", "Nature-element spa", "Comporta seclusion"],
  },
  {
    slug: "shamballah-retreats-sintra",
    title: "Shamballah Retreats",
    category: "Retreat",
    location: "Sintra",
    country: "Portugal",
    shortDescription:
      "An intimate eco-retreat in the Sintra hills for breathwork, sound, and nervous-system reset.",
    description:
      "Tucked into the mystical Sintra hills, Shamballah is an intimate eco-retreat devoted to nervous-system restoration. Small cohorts move through breathwork, sound healing, yoga, and forest immersion across a few unhurried days — a deliberate, screen-free reset within easy reach of Lisbon.",
    heroImage: img("1545205597-3d9d02c29597", 1200),
    gallery: [img("1507652313519-d4e9174996dd"), img("1505691938895-1758d7feb511"), img("1544161515-4ab6ce6db874")],
    priceRange: "From €1,800 / retreat (indicative)",
    duration: "3–5 nights",
    treatments: [
      "Breathwork & pranayama",
      "Sound healing",
      "Yoga & movement",
      "Forest immersion",
      "Guided meditation",
    ],
    credentials:
      "Experienced breathwork, yoga, and holistic-wellness facilitators.",
    scientificBacking:
      "Practices oriented to parasympathetic recovery and stress reduction.",
    highlights: ["Intimate cohorts", "Sintra hills", "Screen-free reset"],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
