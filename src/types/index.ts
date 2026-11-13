export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  subItems?: NavSubItem[];
}

export interface Milestone {
  id: string;
  label: string;
  description: string;
  isActive?: boolean;
}

export interface HeroContent {
  badge: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}
