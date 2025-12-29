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
    slug: "jazz-engineers",
    title: "Why Jazz Musicians Make Great Product Engineers",
    subtitle: "The skill that transfers isn't music. It's obsession.",
    date: "2025-01-15",
    excerpt:
      "What actually carried over is simpler and impossible to teach: the disposition to sit alone with something difficult and build your own systems to get through it. That, and taste.",
    featured: true,
    content: "",
  },
  {
    slug: "happy-path",
    title: "The Happy Path Is a Lie",
    subtitle: 'Designing for "almost done"',
    date: "2024-12-15",
    excerpt:
      'Designing for "almost done" — the messy middle where trust is won or lost.',
    content: "",
  },
  {
    slug: "data-model",
    title: "Don't Hide the Data Model",
    subtitle: "Why backend shape is a UX choice",
    date: "2024-11-20",
    excerpt:
      "Why backend shape is a UX choice. Hidden models leak as magic and confusion.",
    content: "",
  },
  {
    slug: "no-copy",
    title: "The Best Copy Is No Copy",
    subtitle: "If the interface needs explanation, the interface doesn't work",
    date: "2024-08-10",
    excerpt: "If the interface needs explanation, the interface doesn't work.",
    content: "",
  },
  {
    slug: "animation",
    title: "Stop Animating Everything",
    subtitle: "Motion as cognitive tax",
    date: "2024-06-05",
    excerpt:
      'Motion is a cognitive tax. Most "premium" animation is latency in disguise.',
    content: "",
  },
  {
    slug: "support-inbox",
    title: "Peak UX Doesn't Always Look Nice",
    subtitle: "From the support inbox",
    date: "2024-02-18",
    excerpt:
      "From the support inbox: what survives reality, what gets tickets.",
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
  linkedin: "https://linkedin.com/in/ryanpalermo",
};
