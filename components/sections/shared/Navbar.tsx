"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart, Leaf, LogIn, ChevronDown } from "lucide-react";
import { mainRoutes } from "@/route/main.route";
import { organicCategories } from "@/data/categories";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-secondary w-full">
      {/* Top Bar */}
      <div
        className={`bg-primary container mx-auto hidden text-sm text-white transition-all duration-300 ease-in-out lg:flex ${
          isSticky ? "h-0 overflow-hidden opacity-0" : "h-auto overflow-visible py-2 opacity-100"
        }`}
      >
        <div className="flex w-1/2 items-center gap-2">
          <Leaf size={16} />
          <span className="font-semibold">100% Certified Organic</span>
          <span className="text-white/70">·</span>
          <span>Free delivery on orders over $50</span>
        </div>
        <div className="flex w-1/2 items-center justify-end gap-6">
          <a
            href="tel:+18006742644"
            className="flex items-center gap-1 transition-colors hover:text-white/80"
          >
            Call Us: <span className="font-semibold">+1-800-ORGANIC</span>
          </a>
          <div className="flex items-center gap-2 border-l border-white/20 pl-4">
            <Link href="/login" className="transition-colors hover:text-white/80">
              Login
            </Link>
            <span>/</span>
            <Link href="/register" className="transition-colors hover:text-white/80">
              Register
            </Link>
          </div>
        </div>
      </div>

      {isSticky && <div className="h-16" />}

      <nav
        className={`bg-secondary left-0 w-full transition-all duration-300 ease-in-out ${
          isSticky ? "fixed top-0 z-40 py-3 shadow-md" : "relative py-3 shadow-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-0 md:px-4">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="text-primary" size={26} />
              <span className="merriweather-font text-primary text-2xl font-extrabold tracking-wider">
                ORGANISHI
              </span>
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              {mainRoutes.map((route) => {
                const isActive =
                  pathname === route.href ||
                  (route.href !== "/" && pathname.startsWith(route.href));
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary after:bg-primary font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {route.label}
                  </Link>
                );
              })}

              {/* Shop dropdown */}
              <div
                className="group relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button className="text-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors">
                  Shop
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${shopOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {shopOpen && (
                  <div className="bg-popover border-border absolute top-full left-0 z-50 mt-2 w-48 rounded-xl border shadow-lg">
                    <ul className="py-1">
                      {organicCategories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/products?category=${cat.slug}`}
                            className="hover:bg-muted flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                          >
                            <span>{cat.emoji}</span>
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/cart"
              className="text-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              <ShoppingCart size={22} />
              <span className="text-sm">(0)</span>
            </Link>
            <Link
              href="/login"
              className="text-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link href="/cart" className="text-foreground hover:text-primary">
              <ShoppingCart size={22} />
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <button className="cursor-pointer">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle className="flex items-center gap-2">
                    <Leaf className="text-primary" size={20} />
                    <span className="merriweather-font text-primary text-xl font-extrabold tracking-wider">
                      ORGANISHI
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 space-y-1">
                  {mainRoutes.map((route) => {
                    const isActive =
                      pathname === route.href ||
                      (route.href !== "/" && pathname.startsWith(route.href));
                    return (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {route.label}
                      </Link>
                    );
                  })}

                  <div className="mt-2 border-t pt-2">
                    <p className="text-muted-foreground mb-2 px-3 text-xs font-bold uppercase tracking-widest">
                      Shop By Category
                    </p>
                    {organicCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products?category=${cat.slug}`}
                        className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                      >
                        <span>{cat.emoji}</span>
                        {cat.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-2 border-t pt-4">
                    <Link
                      href="/login"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-colors"
                    >
                      <LogIn size={16} />
                      Sign In
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
