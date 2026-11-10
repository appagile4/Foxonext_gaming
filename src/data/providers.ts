export interface Provider {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const PROVIDERS: Provider[] = [
  {
    id: "pg-soft",
    name: "PG Soft",
    logo: "/images/providers/pg-soft.png",
    alt: "PG Pocket Games Soft",
  },
  {
    id: "jdb",
    name: "JDB",
    logo: "/images/providers/jdb.png",
    alt: "JDB Gaming",
  },
  {
    id: "pragmatic",
    name: "Pragmatic Play",
    logo: "/images/providers/pragmatic.png",
    alt: "Pragmatic Play",
  },
  {
    id: "db-gaming",
    name: "DB Gaming",
    logo: "/images/providers/db-gaming.png",
    alt: "DB Gaming",
  },
  {
    id: "spribe",
    name: "SPRIBE",
    logo: "/images/providers/spribe.png",
    alt: "Spribe Gaming",
  },
  {
    id: "in-out",
    name: "IN OUT",
    logo: "/images/providers/in-out.png",
    alt: "In Out Casino",
  },
  {
    id: "pescaria",
    name: "Pescaria",
    logo: "/images/providers/pescaria.png",
    alt: "Pescaria Fishing Games",
  },
  {
    id: "cq9",
    name: "CQ9",
    logo: "/images/providers/cq9.png",
    alt: "CQ9 Gaming",
  },
];

export const PROVIDER_STATS: StatItem[] = [
  {
    value: "3000+",
    label: "Years of technology leadership",
  },
  {
    value: "140+",
    label: "Industry awards for product excellence",
  },
  {
    value: "32+",
    label: "iGaming brands rely on our software",
  },
  {
    value: "32+",
    label: "Employees contributing globally",
  },
];
