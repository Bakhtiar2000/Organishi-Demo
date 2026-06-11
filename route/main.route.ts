export interface RouteItem {
  label: string;
  href: string;
}

export const mainRoutes: RouteItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Combos", href: "/combos" },
  { label: "Offers", href: "/offers" },
];
