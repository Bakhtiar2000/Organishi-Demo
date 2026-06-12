"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, Tag } from "lucide-react";
import mango from "@/assets/products/mango.png";

export default function WelcomeModal() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const already = sessionStorage.getItem("welcome_shown");
    if (already) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("welcome_shown", "1");
      setMounted(true);
      // Trigger CSS transition on next frame
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => setMounted(false), 350);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[998] flex items-center justify-center px-4 transition-opacity duration-350 ${visible ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal card */}
      <div
        className={`relative z-10 flex w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl transition-all duration-350 ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
      >
        {/* Left — green panel */}
        <div className="relative hidden w-2/5 flex-col items-center justify-center bg-linear-to-br from-primary to-green-700 p-8 sm:flex">
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10" />

          {/* Product image */}
          <div className="relative z-10 h-44 w-44 drop-shadow-2xl">
            <Image src={mango} alt="Mango" fill className="object-contain" />
          </div>

          {/* Badge */}
          <div className="relative z-10 mt-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-orange-400 text-white shadow-lg">
            <span className="text-2xl font-extrabold leading-none">50%</span>
            <span className="text-[10px] font-semibold tracking-wider">OFF</span>
          </div>
        </div>

        {/* Right — white panel */}
        <div className="relative flex flex-1 flex-col justify-center bg-white p-8">
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-gray-100 hover:text-foreground"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Welcome to Organishi 🎉
          </p>
          <h2 className="mb-2 text-3xl font-extrabold leading-tight text-foreground">
            Special <span className="text-primary">50% Off</span>
            <br />
            Your First Order
          </h2>
          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            Enjoy half off on fresh organic fruits &amp; vegetables when you shop
            with us for the first time. No minimum order required.
          </p>

          {/* Promo code */}
          <div className="mb-5 flex items-center gap-2 rounded-xl border border-dashed border-primary/50 bg-green-50 px-4 py-3">
            <Tag size={15} className="text-primary shrink-0" />
            <span className="text-sm text-muted-foreground">Use code:</span>
            <span className="font-bold tracking-widest text-primary select-all">
              WELCOME50
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={close}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Shop Now
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <button
              onClick={close}
              className="text-muted-foreground text-xs underline underline-offset-2 hover:text-foreground transition-colors"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
