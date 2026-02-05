import type { Project, BlogPost, ContactLink } from "./types";

export const projects: Project[] = [
  {
    id: "tempolock",
    name: "TempoLock",
    tagline: "Adaptive metronome",
    description:
      "Adjusts click volume based on timing accuracy. The better you play, the quieter it gets. Practice smarter, not louder.",
    status: "Beta",
    stack: ["Swift", "Core Audio", "AudioKit"],
  },
  {
    id: "unison",
    name: "Unison",
    tagline: "Universal music sharing",
    description:
      "Paste any streaming link, get links for every platform. Never lose a song recommendation because someone uses a different service.",
    status: "Live",
    stack: ["TypeScript", "Node", "Redis"],
  },
  {
    id: "trane",
    name: "Trane",
    tagline: "AI jazz toolkit",
    description:
      "Named after John Coltrane. Generates practice exercises, analyzes your playing, suggests harmonic substitutions.",
    status: "In Development",
    stack: ["Python", "PyTorch", "Core ML"],
  },
  {
    id: "seam",
    name: "Seam",
    tagline: "API dependency contracts",
    description:
      "Define what you expect from external services, get alerted when reality drifts. Know when things break before your users do.",
    status: "In Development",
    stack: ["Go", "PostgreSQL", "Temporal"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "artist-in-the-loop",
    title: "AI Made Me Faster at Shipping Code",
    subtitle: "Why Can't We Build Artist-in-the-Loop Tools for the Arts?",
    date: "2026-02-05",
    excerpt:
      "AI made me faster at shipping code. The arts deserve leverage tools that keep creators in the loop.",
    content: "",
    draft: true,
  },
  {
    slug: "captive-users",
    title: "Internal Users Can't Leave",
    subtitle: "The cruelest interfaces are those with captive audiences",
    date: "2025-12-29",
    excerpt:
      "The cruelest interfaces are those with captive audiences. Internal tools deserve real UX.",
    content: "",
  },
  {
    slug: "jazz-engineers",
    title: "Nobody is Coming to Save You in the Practice Room",
    subtitle: "Why musicians make great product engineers",
    date: "2026-01-05",
    featured: true,
    content: "",
    excerpt:
      "Why musicians make great product engineers",
  },
  {
    slug: "peak-ux",
    title: "Peak UX Doesn't Always Look Nice",
    subtitle: "Why the best interfaces sometimes look like they belong in a regional bank",
    date: "2025-12-18",
    excerpt:
      "Pretty interfaces can lie to you. Sometimes great UX looks boring on purpose.",
    content: "",
  },
  {
    slug: "data-model",
    title: "Don't Hide the Data Model",
    subtitle: "Why database design is a UX choice",
    date: "2025-11-20",
    excerpt:
      "Why database design is a UX choice. Hidden models leak as magic and confusion.",
    content: "",
  },
  {
    slug: "no-copy",
    title: "The Best Copy Is No Copy",
    subtitle: "If the interface needs explanation, the interface doesn't work",
    date: "2025-08-10",
    excerpt: "If the interface needs explanation, the interface doesn't work.",
    content: "",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "ryan@ryanpalermo.dev",
    href: "mailto:ryan@ryanpalermo.dev",
  },
  {
    label: "GitHub",
    value: "github.com/rpalermodrums",
    href: "https://github.com/rpalermodrums",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ryanpalermo",
    href: "https://linkedin.com/in/ryanpalermo",
    external: true,
  },
];

export const contact = {
  email: "ryan@ryanpalermo.dev",
  github: "https://github.com/rpalermodrums",
  linkedin: "https://www.linkedin.com/in/ryan-palermo-bb22bb49/",
};
