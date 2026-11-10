export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
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
