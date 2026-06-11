import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo/organishi_logo_dark_compact.png";

const columns = [
  {
    heading: "Pages",
    links: ["About", "Shop", "Product", "Track Order"],
  },
  {
    heading: "Categories",
    links: ["Fruit & Vegetables", "Meat & Fish", "Bread & Bakery", "Beauty & Health"],
  },
  {
    heading: "My Account",
    links: ["My Account", "Order History", "Shopping Cart", "Wishlist"],
  },
  {
    heading: "Helps",
    links: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#111316] text-gray-300">
      {/* Main grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image src={logo} alt="Organishi" height={60} className="mb-4 h-14 w-auto" />

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum
              magna congue nec.
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
                {col.links.map((label) => (
                  <li key={label}>
                    <Link
                      href="/"
                      className="text-sm text-gray-400 transition-colors hover:text-primary"
                    >
                      {label}
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
            <span className="rounded border border-white/20 bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-white">
              Apple Pay
            </span>
            <span className="rounded border border-white/20 bg-white/5 px-2 py-0.5 text-[11px] font-bold italic text-blue-400">
              VISA
            </span>
            <span className="rounded border border-white/20 bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-orange-400">
              DISCOVER
            </span>
            <span className="rounded border border-white/20 bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-red-400">
              Mastercard
            </span>
            <span className="flex items-center gap-1 rounded border border-white/20 bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-green-400">
              <ShieldCheck size={11} />
              Secure Payment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
