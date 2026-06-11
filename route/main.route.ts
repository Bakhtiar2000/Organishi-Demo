export interface RouteItem {
  label: string;
  href: string;
}

export const mainRoutes: RouteItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
