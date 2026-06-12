import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo/organishi_logo_dark_compact.png";
import apple_pay from "@/assets/cards/apple_pay.png";
import discover from "@/assets/cards/discover.png";
import mastercard from "@/assets/cards/mastercard.png";
import visa from "@/assets/cards/visa.png";

const columns = [
  {
    heading: "Pages",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Shop", href: "/products" },
      { label: "Combos", href: "/combos" },
      { label: "Offers", href: "/offers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Categories",
    links: [
      { label: "Fruits", href: "/products?cat=1" },
      { label: "Vegetables", href: "/products?cat=2" },
      { label: "Dairy & Eggs", href: "/products?cat=3" },
      { label: "Meat & Fish", href: "/products?cat=4" },
      { label: "Honey", href: "/products?cat=8" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "My Account", href: "/" },
      { label: "Order History", href: "/" },
      { label: "Shopping Cart", href: "/" },
      { label: "Wishlist", href: "/" },
    ],
  },
  {
    heading: "Helps",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/" },
      { label: "Terms & Condition", href: "/" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#111316] text-gray-300">
      {/* Main grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Image src={logo} alt="Organishi" height={60} className="mb-4 h-14 w-auto" />

            <p className="mb-6 text-sm leading-relaxed text-gray-400 w-100 ">
              Finest organic products — sourced directly from trusted farmers and
              delivered fresh to your door. Pure ingredients, honest sourcing, and a healthier
              lifestyle starts here.
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <a
                href="tel:01904324889"
                className="border-primary border-b pb-0.5 text-white transition-colors hover:text-primary"
              >
                <span className="flex items-center gap-1">
                  <Phone size={13} />
                  019043-24889
                </span>
              </a>
              <span className="text-gray-500">or</span>
              <a
                href="mailto:info.organishi@gmail.com"
                className="border-primary border-b pb-0.5 text-white transition-colors hover:text-primary"
              >
                <span className="flex items-center gap-1">
                  <Mail size={13} />
                  info.organishi@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className="lg:col-span-1">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 tracking-tighter leading-tight transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-3 text-xs text-gray-500 sm:flex-row">
          <p>Organishi eCommerce &copy; {new Date().getFullYear()}. All Rights Reserved</p>

          {/* Payment badges */}
          <div className="flex items-center gap-2">
            <Image src={apple_pay} alt="Apple Pay" height={20} className="h-5 w-auto border border-border/10 p-1 rounded-sm" />
            <Image src={visa} alt="VISA" height={20} className="h-5 w-auto border border-border/10 p-1 rounded-sm" />
            <Image src={discover} alt="Discover" height={20} className="h-5 w-auto border border-border/10 p-1 rounded-sm" />
            <Image src={mastercard} alt="Mastercard" height={20} className="h-5 w-auto border border-border/10 p-1 rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
