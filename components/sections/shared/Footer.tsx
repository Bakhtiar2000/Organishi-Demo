"use client";

import React from "react";
import Link from "next/link";
import { Globe, Heart, Camera, Mail, MapPin, Phone, Leaf, PlayCircle, X } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  hoverColor: string;
}

interface QuickLink {
  name: string;
  path: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: <Globe className="h-5 w-5" />,
      url: "https://facebook.com",
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "Twitter / X",
      icon: <X className="h-5 w-5" />,
      url: "https://twitter.com",
      hoverColor: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: <Camera className="h-5 w-5" />,
      url: "https://instagram.com",
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: <PlayCircle className="h-5 w-5" />,
      url: "https://youtube.com",
      hoverColor: "hover:text-red-500",
    },
  ];

  const quickLinks: QuickLink[] = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Track Order", path: "/track-order" },
  ];

  const shineStyle: React.CSSProperties = {
    background:
      "linear-gradient(90deg, #15803d 0%, #4ade80 25%, #86efac 50%, #4ade80 75%, #15803d 100%)",
    backgroundSize: "200%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shine 8s linear infinite",
  };

  return (
    <footer>
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200%; }
          100% { background-position: -200%; }
        }
      `}</style>

      <div className="border-t-2 border-green-900 bg-gray-900 px-4 md:px-0">
        <div className="container pb-0!">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex items-center gap-3">
                <Leaf className="h-8 w-8 text-green-400" />
                <div>
                  <h2 className="merriweather-font text-2xl font-bold text-gray-100">ORGANISHI</h2>
                  <p className="text-sm text-gray-400">Farm Fresh. Delivered.</p>
                </div>
              </div>
              <p className="mb-6 leading-relaxed text-gray-300">
                Bringing you 100% certified organic produce straight from trusted farms to your
                table. Fresh, healthy, and sustainable.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gray-300 transition-all duration-300 hover:bg-white/20 ${social.hoverColor}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="mb-4 text-lg font-semibold text-gray-200">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="group flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-green-400"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex cursor-pointer items-start gap-4 rounded-2xl border border-gray-700 p-4 transition-all duration-300 hover:border-green-500">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-200">Our Location</h4>
                    <p className="text-sm leading-relaxed text-gray-400">
                      123 Green Valley Road
                      <br />
                      Portland, OR 97201
                    </p>
                  </div>
                </div>

                <div className="flex cursor-pointer items-start gap-4 rounded-2xl border border-gray-700 p-4 transition-all duration-300 hover:border-green-500">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-200">Phone</h4>
                    <a
                      href="tel:+18006742644"
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-green-400"
                    >
                      +1-800-ORGANIC
                    </a>
                  </div>
                </div>

                <div className="flex cursor-pointer items-start gap-4 rounded-2xl border border-gray-700 p-4 transition-all duration-300 hover:border-green-500">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-200">Email</h4>
                    <a
                      href="mailto:hello@organishi.com"
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-green-400"
                    >
                      hello@organishi.com
                    </a>
                  </div>
                </div>

                <div className="flex cursor-pointer items-start gap-4 rounded-2xl border border-gray-700 p-4 transition-all duration-300 hover:border-green-500">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-400">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-200">Business Hours</h4>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Mon – Sun: 7AM – 9PM
                      <br />
                      Same-day delivery available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Big brand text */}
          <h2 className="w-full overflow-hidden text-center text-[clamp(40px,10vw,200px)] font-bold">
            <span
              style={shineStyle}
              className="merriweather-font inline-block w-full px-2 md:px-4"
            >
              ORGANISHI
            </span>
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container py-3!">
            <div className="flex flex-col items-center justify-between gap-2 text-sm md:flex-row">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Organishi. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-gray-400">
                Made with <Heart className="h-4 w-4 fill-current text-red-500" /> for a healthier
                planet
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
