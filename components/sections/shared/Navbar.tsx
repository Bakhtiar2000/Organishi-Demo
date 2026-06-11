"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
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
import imgCabbage from "@/assets/products/cabbage.png";
import imgCorn from "@/assets/products/corn.png";
import imgEggplant from "@/assets/products/eggplant.png";

const cartItems = [
  { id: 1, name: "Fresh Cabbage", qty: 1, price: 45, img: imgCabbage },
  { id: 2, name: "Sweet Corn", qty: 2, price: 30, img: imgCorn },
  { id: 3, name: "Eggplant", qty: 1, price: 25, img: imgEggplant },
];

const Navbar = () => {
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
                  className={`relative font-medium transition-colors ${
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
          <div className="flex items-center gap-2">
            {/* Search bar — always visible on desktop, icon only on mobile */}
            <div className="relative hidden lg:block">
              <Search size={15} className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2" />
              <input
                type="search"
                placeholder="Search products…"
                className="border-border focus:border-primary w-52 rounded-lg border bg-white py-1.5 pr-3 pl-8 text-sm outline-none"
              />
            </div>
            <button
              className="text-foreground hover:text-primary p-2 transition-colors lg:hidden"
              aria-label="Search"
            >
              <Search size={19} />
            </button>

            {/* Cart — slides in from right */}
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <button
                  className="cursor-pointer text-foreground hover:text-primary relative p-2 transition-colors"
                  aria-label="Open cart"
                >
                  <ShoppingCart size={19} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-80 flex-col">
                <SheetHeader className="border-b pb-3">
                  <SheetTitle>Your Cart ({cartItems.length})</SheetTitle>
                </SheetHeader>

                <ul className="flex-1 divide-y overflow-y-auto">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex items-center gap-3 py-3">
                      <div className="bg-muted flex h-16 w-16 shrink-0 items-center justify-center rounded-lg overflow-hidden">
                        <Image src={item.img} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-medium">{item.name}</p>
                        <p className="text-muted-foreground text-xs">Qty: {item.qty}</p>
                      </div>
                      <p className="text-primary shrink-0 text-sm font-semibold">
                        ৳{item.qty * item.price}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Total</span>
                    <span className="text-primary">
                      ৳{cartItems.reduce((s, i) => s + i.qty * i.price, 0)}
                    </span>
                  </div>
                  <Link
                    href="/cart"
                    onClick={() => setCartOpen(false)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 block w-full rounded-lg py-2 text-center text-sm font-medium transition-colors"
                  >
                    View Cart
                  </Link>
                </div>
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
