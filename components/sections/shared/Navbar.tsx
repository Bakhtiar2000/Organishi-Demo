"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, X, Menu } from "lucide-react";
import { mainRoutes } from "@/route/main.route";
import { productCategories } from "@/data/categories";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo/organishi_logo_light_compact.png";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ── Top Nav ── */}
      <div className="w-full bg-white">
        <div className="container mx-auto  flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="Organishi" className="h-16 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-7 lg:flex">
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
                      ? "text-primary after:bg-primary after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            {/* Search — expands on click */}
            <div className="flex items-center">
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  searchOpen ? "w-44 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <input
                  autoFocus={searchOpen}
                  type="search"
                  placeholder="Search…"
                  className="border-border focus:border-primary w-full rounded-lg border bg-white px-3 py-1 text-sm outline-none"
                />
              </div>
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="text-foreground hover:text-primary p-2 transition-colors"
                aria-label="Toggle search"
              >
                {searchOpen ? <X size={19} /> : <Search size={19} />}
              </button>
            </div>

            {/* Cart — slides in from right */}
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-foreground hover:text-primary relative p-2 transition-colors"
                  aria-label="Open cart"
                >
                  <ShoppingCart size={19} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <p className="text-muted-foreground mt-6 text-sm">
                  Your cart is empty.
                </p>
              </SheetContent>
            </Sheet>

            {/* User → login */}
            <Link
              href="/login"
              className="text-foreground hover:text-primary p-2 transition-colors"
              aria-label="Login"
            >
              <User size={19} />
            </Link>

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-foreground hover:text-primary p-2 transition-colors lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu size={21} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader className="border-b pb-3">
                  <SheetTitle>
                    <Image src={logo} alt="Organishi" height={30} className="h-8 w-auto" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-4 space-y-1">
                  {mainRoutes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-foreground hover:bg-muted hover:text-primary block rounded-md px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {route.label}
                    </Link>
                  ))}
                  <div className="border-t pt-3">
                    <p className="text-muted-foreground mb-2 px-3 text-xs font-semibold uppercase tracking-widest">
                      Categories
                    </p>
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/product-category/${cat.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="text-muted-foreground hover:bg-muted hover:text-foreground block rounded-md px-3 py-2 text-sm transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* ── Bottom Category Nav — sticky ── */}
      <div className="bg-white border-b border-border/40 sticky top-0 z-40 border-t shadow-sm">
        <div className="container mx-auto flex items-center gap-0.5 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-2">
          {productCategories.map((cat) => {
            const isActive = pathname === `/product-category/${cat.slug}`;
            return (
              <Link
                key={cat.slug}
                href={`/product-category/${cat.slug}`}
                className={`whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
