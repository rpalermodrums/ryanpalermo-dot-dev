// ============ Discovery System ============

export const DISCOVERY_TRIGGERS = {
  "command-palette": 1,
  "keyboard-nav": 2,
  terminal: 3,
  "terminal-help": 4,
  "blog-post": 5,
  "context-menu": 6,
  "terminal-secret": 7,
} as const;

export type DiscoveryTrigger = keyof typeof DISCOVERY_TRIGGERS;

export interface DiscoveryState {
  level: number;
  items: Set<string>;
}

export const MAX_DISCOVERY_LEVEL = 7;
export const STORAGE_KEY = "ryanpalermo-discoveries";

// ============ Projects ============

export type ProjectStatus = "Live" | "Beta" | "In Development";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  stack: string[];
  url?: string;
}

// ============ Blog Posts ============

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  excerpt: string;
  content: string;
  featured?: boolean;
}

// ============ Contact ============

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

// ============ Navigation ============

export type SectionId = "home" | "projects" | "about" | "thoughts" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
  shortcut: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: "⌂", shortcut: "G H" },
  { id: "projects", label: "Projects", icon: "◈", shortcut: "G P" },
  { id: "about", label: "About", icon: "○", shortcut: "G A" },
  { id: "thoughts", label: "Thoughts", icon: "▤", shortcut: "G B" },
  { id: "contact", label: "Contact", icon: "◇", shortcut: "G C" },
];

export interface ExternalLink {
  label: string;
  href: string;
  icon: string;
}

export const EXTERNAL_LINKS: ExternalLink[] = [
  { label: "GitHub", href: "https://github.com/rpalermodrums", icon: "⬡" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ryanpalermo", icon: "▢" },
];
