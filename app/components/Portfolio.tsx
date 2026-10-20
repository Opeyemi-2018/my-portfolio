// Edit everything here — the components read from this file.

export const profile = {
  name: "Opeyemi",
  //   initials: "YN",
  role: "Software Engineer",
  email: "rabiuopeyemi2020@gmail.com",
  resumeUrl: "/Rabiu_opeyemi_CV.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/Opeyemi-2018" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rabiu-opeyemi/?isSelfProfile=true",
    },
    { label: "X", href: "https://x.com/ope_guchi" },
  ],
};

export type Project = {
  title: string;
  tag: string;
  stat: string;
  blurb: string;
  metricLabel: string;
  metricSub: string;
  metricValue: string;
  gradient: string;
  image?: string;
  logo?: string; // NEW: partner/platform logo shown big in the top-right
  logoLabel?: string; // NEW: small caption under the logo, e.g. "Built on Marqeta"
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "JT Rides",
    tag: "Mobility · Ride-hailing",
    stat: "Rides",
    blurb:
      "A ride-hailing platform where people book safe rides and fast deliveries with trained, verified drivers in company-owned vehicles. JT Rides is not just an app; it's a fleet.",
    metricLabel: "Trained. Verified. Trusted.",
    metricSub: "Available on the App Store",
    metricValue: "iOS",
    gradient: "from-neutral-900 via-zinc-800 to-neutral-950",
    image: "/jt-ride.jpeg",
    href: "https://apps.apple.com/ng/app/jt-rides/id6756083528",
    featured: true,
  },
  {
    title: "SaySwitch",
    tag: "Fintech · Payments",
    stat: "Payments",
    blurb:
      "The infrastructure that keeps commerce moving. SaySwitch gives businesses and institutions the tools to accept payments, move money and serve customers across the channels where commerce happens.",
    metricLabel: "Payment links",
    metricSub: "Wallets, storefronts & APIs",
    metricValue: "API",
    gradient: "from-green-800 via-green-700 to-lime-900",
    image: "/sayswitch.png",
    href: "https://merchant.sayswitchgroup.com/login",
    featured: true,
  },
  {
    title: "VendCliq",
    tag: "Marketplace · Beverages",
    stat: "Market",
    blurb:
      "A platform for beverage vendors to do business: create wallets to hold their funds, manage inventory, trade on the marketplace and track credit.",
    metricLabel: "Vendcliq AI",
    metricSub: "Wallet & spending assistant",
    metricValue: "AI",
    gradient: "from-blue-700 via-indigo-600 to-blue-900",
    image: "/vendcliq.png",
    href: "https://app.vendcliq.com/signin",
    featured: true,
  },
  {
    title: "RiskShield",
    tag: "Fintech · Spring Boot · AI",
    stat: "Cards",
    blurb: "A card platform on Marqeta that explains declines, money on hold and unusual purchases in plain language, with an AI assistant grounded in real transaction data.",
    metricLabel: "Webhooks, idempotency & Spring AI",
    metricSub: "Java · Spring Boot · PostgreSQL",
    metricValue: "Java",
    gradient: "from-indigo-950 via-indigo-800 to-violet-900",
    image: "/riskshield.png",
    logo: "/marqeta.jpeg",
    logoLabel: "Built on Marqeta",
    href: "https://github.com/Opeyemi-2018/risk-shield-backend",
  },
  {
    title: "TuneBoard",
    tag: "Side project · Node",
    stat: "300+",
    blurb: "Collaborative playlist board for churches and choirs.",
    metricLabel: "Communities",
    metricSub: "Using it weekly",
    metricValue: "300+",
    gradient: "from-slate-400 via-slate-500 to-slate-700",
    href: "#",
  },
];

export const qa = [
  {
    q: "What do you build?",
    a: "Full-stack web apps — React/Next.js on the front, Java/Spring Boot and Node on the back. I care most about fast, reliable products.",
  },
  {
    q: "What's your strongest skill?",
    a: "Turning fuzzy product ideas into clean, well-tested systems. I like owning a feature end to end.",
  },
  {
    q: "Are you open to work?",
    a: "Yes — open to full-time and contract roles, remote or hybrid. Email me and I'll reply within a day.",
  },
];

export const stack = [
  "JS",
  "React.js",
  "TypeScript",
  "Java",
  "Spring",
  "Node",
  "Postgres",
  "Docker",
  "AWS",
  "Tailwind",
];

export const aboutPoints = [
  { value: "4+", label: "years shipping" },
  { value: "20+", label: "projects delivered" },
  { value: "100%", label: "typed & tested" },
];
