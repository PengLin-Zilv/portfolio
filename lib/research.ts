export type ResearchEntry = {
  slug: string;
  lab: string;
  affiliation: string;
  role: string;
  advisor: string;
  period: string;
  current?: boolean;
  threads: string[];
  links?: { label: string; href: string }[];
};

export const RESEARCH: ResearchEntry[] = [
  {
    slug: "leibniz-lab",
    lab: "Leibniz Lab",
    affiliation: "Syracuse University",
    role: "AI Research Intern",
    advisor: "Prof. Shakarian",
    period: "Spring 2026 — Present",
    threads: [
        "PyReason — contributed documentation and tutorials for the open-source neurosymbolic reasoning library, including Load Rules and Facts From File, LLM Generated PyReason Rules, and Natural Language to PyReason tutorials",     // PyReason library — docs, tutorials, LLM integration
        "VulReasoner — contributing the LLM component to an ARPA-H UPGRADE-funded vulnerability reasoning system",  
    ],
    links: [
      { label: "PyReason", href: "https://pyreason.syracuse.edu/" },
      { label: "PyReason Tutorial Docs", href: "https://pyreason.readthedocs.io/en/latest/tutorials/index.html" },
    ],
  },
  {
    slug: "linklab",
    lab: "LinkLab",
    affiliation: "Syracuse iSchool",
    role: "Research Assistant",
    advisor: "Prof. Banks",
    period: "May 2026 — Present",
    threads: [ 
        "AI Companion team: running Sunday data collection sessions at Destiny Mall for perception studies",
    ],
    links: [
      { label: "Lab site", href: "https://ischool.syracuse.edu/research/the-linklab/" },
    ],
  },
  {
    slug: "vr-semiconductor-manufacturing",
    lab: "Department of EECS",
    affiliation: "Syracuse University",
    role: "Research Assistant",
    advisor: "Prof. Ghosh",
    period: "January 2026 — May 2026",
    threads: [
      "Built Unity simulations of semiconductor manufacturing process modules for the SOURCE program.",
      "Presented to SOURCE - Spring 2026"       // VR for Semiconductor Manufacturing; mention SOURCE 2026 inline
    ],
    // links: [
    //   { label: "SOURCE poster", href: "..." },
    // ],
  },
];