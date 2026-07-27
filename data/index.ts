import {
  Frame,
  Layers,
  Paintbrush,
  PanelTop,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

const u = (id: string, w = 1200, h = 900): string =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const CONTACT = {
  phoneDisplay: "+234 803 000 0000",
  phoneHref: "tel:+2348030000000",
  whatsappHref: "https://wa.me/2348030000000",
  email: "hello@fiftyfold.ng",
  instagram: "https://instagram.com/fiftyfoldng",
  instagramHandle: "@fiftyfoldng",
  address: "Lekki Phase 1, Lagos, Nigeria",
};

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  image: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "painting",
    title: "Painting Contracting",
    icon: Paintbrush,
    short: "Flawless interior & exterior finishes at any scale.",
    description:
      "Full-service painting for residential and commercial developments — surface preparation, priming, and multi-coat application with premium, low-VOC paints.",
    image: u("1717281234297-3def5ae3eee1"),
    points: [
      "Interior & exterior application",
      "Decorative & textured finishes",
      "Site-scale project capacity",
      "Colour consultation",
    ],
  },
  {
    slug: "wall-skimming",
    title: "Wall Skimming",
    icon: Layers,
    short: "Perfectly smooth, paint-ready surfaces.",
    description:
      "Precision skim coating that transforms rough blockwork and plaster into a glass-smooth canvas ready for a premium paint finish.",
    image: u("1693985120993-e9b203ce7631"),
    points: [
      "Level 5 smooth finishes",
      "Crack & imperfection repair",
      "Fast turnaround",
      "Dust-controlled process",
    ],
  },
  {
    slug: "aluminium-windows",
    title: "Aluminium Windows",
    icon: Frame,
    short: "Custom fabrication & installation.",
    description:
      "In-house fabrication and installation of durable, weather-sealed aluminium windows and doors — engineered for the Lagos climate.",
    image: u("1614595737476-42487331b8a1"),
    points: [
      "Bespoke fabrication",
      "Sliding & casement systems",
      "Weather & noise sealing",
      "Precision installation",
    ],
  },
  {
    slug: "plasterboard-ceilings",
    title: "Plasterboard Ceilings",
    icon: PanelTop,
    short: "Clean, modern ceiling systems.",
    description:
      "Design and installation of plasterboard (POP-alternative) ceilings — from simple flush ceilings to layered, lit architectural designs.",
    image: u("1638369022547-1c763b1b9b3b"),
    points: [
      "Suspended & fixed systems",
      "Cove & recessed lighting details",
      "Moisture-resistant options",
      "Architectural detailing",
    ],
  },
  {
    slug: "paint-sales",
    title: "Paint Sales",
    icon: ShoppingBag,
    short: "Premium paints via Blendtech Limited.",
    description:
      "Through our strategic partnership with Blendtech Limited, we supply high-performance emulsion, textured, and specialty paints at trade-friendly rates.",
    image: u("1688372199140-cade7ae820fe"),
    points: [
      "Blendtech product range",
      "Trade & bulk pricing",
      "Colour matching",
      "Delivery across Lagos",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
};

export const PROJECTS: Project[] = [
  { id: "p1", title: "Banana Island Duplex", location: "Ikoyi, Lagos", category: "Painting", image: u("1649083048770-82e8ffd80431") },
  { id: "p2", title: "Lekki Terraces", location: "Lekki, Lagos", category: "Interiors", image: u("1682184805271-11671b7ecf4c") },
  { id: "p3", title: "Osapa Residence", location: "Osapa London, Lagos", category: "Wall Skimming", image: u("1680773525468-eda783c5bfe7") },
  { id: "p4", title: "Victoria Island Office", location: "Victoria Island, Lagos", category: "Ceilings", image: u("1750764515068-80d222d974bb") },
  { id: "p5", title: "Ikate Apartments", location: "Ikate, Lagos", category: "Aluminium", image: u("1691425700573-5e2e6e4f6157") },
  { id: "p6", title: "Chevron Villa", location: "Chevron, Lagos", category: "Painting", image: u("1714645921696-34675529ea04") },
  { id: "p7", title: "Ajah Family Home", location: "Ajah, Lagos", category: "Interiors", image: u("1762811003338-aef30274513b") },
  { id: "p8", title: "GRA Penthouse", location: "Ikeja GRA, Lagos", category: "Ceilings", image: u("1762810944373-d3cd437cbd1d") },
  { id: "p9", title: "Oniru Bathroom Suite", location: "Oniru, Lagos", category: "Wall Skimming", image: u("1781249144216-143445323087") },
];

export const HERO_IMAGE = u("1505691938895-1758d7feb511", 2000, 1200);
export const ABOUT_IMAGE = u("1511822148790-e7b58ba14c72", 1200, 1400);

export type StatItem = {
  value: string;
  numericTarget: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const STATS: StatItem[] = [
  { value: "200+", numericTarget: 200, suffix: "+", label: "Projects delivered" },
  { value: "2018", numericTarget: 2018, label: "Founded in Lagos" },
  { value: "5", numericTarget: 5, label: "Specialist services" },
  { value: "100%", numericTarget: 100, suffix: "%", label: "Client-referred growth" },
];

export type NavLinkItem = {
  label: string;
  to: string;
};

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];
