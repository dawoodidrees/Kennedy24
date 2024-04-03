import {
  LucideIcon,
  LayoutGrid,
  MessagesSquare,
  HelpCircle,
  FileMinus,
  ShieldHalf,
} from "lucide-react";

export type NavbarItem = {
  label: string;
  href: string;
  Icon: LucideIcon;
  children?: NavbarItemChild[];
};

export type NavbarItemChild = {
  label: string;
  href: string;
};

export type NavbarItems = NavbarItem[];

export const navbarItems: NavbarItems = [
  {
    label: "Dashboard",
    href: "/profile",
    Icon: LayoutGrid,
    children: [
      { label: "Profile", href: "/profile" },
      { label: "Jackpots", href: "/jackpots" },
      // { label: "Statistic", href: "/statistic" },
    ],
  },
  { label: "FAQ", href: "/faq", Icon: MessagesSquare },
  { label: "HOW IT WORKS", href: "/help", Icon: HelpCircle },
  { label: "TERMS & CONDITIONS", href: "/terms", Icon: FileMinus },
  { label: "PRIVACY POLICY", href: "/privacy", Icon: ShieldHalf },
];
