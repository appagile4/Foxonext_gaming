import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Products",
    href: "#products",
    subItems: [
      { label: "Game Aggregator", href: "/game-aggregator" },
      { label: "CRM - Data Analysis", href: "/crm-data-analysis" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    subItems: [
      { label: "White-Label Solutions", href: "/white-label-solution" },
      { label: "Remote Desktop", href: "/remote-desktop" },
    ],
  },
  {
    label: "Company",
    href: "#company",
    subItems: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  },
  {
    label: "News",
    href: "#news",
    subItems: [
      { label: "Events", href: "#events" },
      { label: "Knowledge Resources", href: "#knowledge" },
    ],
  },
];

export const CONTACT_CTA = {
  label: "Contact Us",
  href: "/contact",
};
