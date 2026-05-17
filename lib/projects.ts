export type Project = {
  slug: string;
  title: string;
  year: string;
  status?: "Shipped" | "WIP" | "Archived";
  summary: string;
  description?: string;
  stack: string[];
  links: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "watch-to-read",
    title: "WatchToRead",
    year: "2026",
    status: "Shipped",  // optional — set to "Shipped" | "WIP" | "Archived" when known
    summary: "Pipeline that converts YouTube videos into audience-tailored eBooks via the Claude API.",
    // description: "{{WTR_DESCRIPTION}}", // optional — delete the line if not used
    stack: ["Python", "Flask", "Claude API"],
    links: {
      // live: "https://...",
      repo: "https://github.com/PengLin-Zilv/watch-to-read",
      // caseStudy: "/projects/watch-to-read",  // uncomment when case study page exists
    },
  },
  {
    slug: "personal-finance-dashboard",
    title: "Personal Finance Dashboard",
    year: "2025",
    status: "Shipped",
    summary: "Personal finance dashboard that parses and categorizes BoA and Apple Card credit-card transactions with 92% accuracy.",
    // description: "{{PFD_DESCRIPTION}}",
stack: ["JavaScript", "Python", "SQLAlchemy","React"],
    links: {
      // live: "https://...",
      repo: "https://github.com/PengLin-Zilv/personal-finance-dashboard",
      // caseStudy: "/projects/personal-finance-dashboard",
    },
  },
];