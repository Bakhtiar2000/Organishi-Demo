"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import offer1 from "@/assets/offers/1.png";
import offer2 from "@/assets/offers/2.png";
import offer3 from "@/assets/offers/3.png";

const SALE_END = new Date("2026-06-20T23:59:59");

const pad = (n: number) => String(n).padStart(2, "0");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff % 86_400_000) / 3_600_000),
      mins: Math.floor((diff % 3_600_000) / 60_000),
      secs: Math.floor((diff % 60_000) / 1_000),
    };
  };

  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return time;
}

const ShopNowBtn = () => (
  <Link
    href="/products"
    className="group flex w-fit items-center gap-2 rounded-full border border-white bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground"
  >
    Shop Now <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={15} />
  </Link>
);

const Offers = () => {
  const { days, hours, mins, secs } = useCountdown(SALE_END);

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Card 1 — Sale of the Month (blue) */}
          <div className="relative h-[420px] overflow-hidden rounded-3xl hover:scale-[1.02] transition-transform">
            <Image src={offer1} alt="Sale of the Month" fill className="object-cover object-bottom" />
            <div className="absolute inset-0 bg-linear-to-b from-blue-500 via-blue-500/95 to-blue-400/10" />
            <div className="absolute inset-0 flex flex-col items-center px-6 pt-8 text-center text-white">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/70">
                Best Deals
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight">Sale of the Month</h2>

              {/* Countdown */}
              <div className="mb-6 flex items-end gap-3">
                {[
                  { value: days, label: "DAYS" },
                  { value: hours, label: "HOURS" },
                  { value: mins, label: "MINS" },
                  { value: secs, label: "SECS" },
                ].map(({ value, label }, i, arr) => (
                  <div key={label} className="flex items-end gap-3">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold tabular-nums leading-none">
                        {pad(value)}
                      </span>
                      <span className="mt-0.5 text-[10px] tracking-widest text-white/60">
                        {label}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="mb-4 text-xl font-bold leading-none text-white/60">:</span>
                    )}
                  </div>
                ))}
              </div>

              <ShopNowBtn />
            </div>
          </div>

          {/* Card 2 — Low-Fat Meat (dark) */}
          <div className="relative h-[420px] overflow-hidden rounded-3xl hover:scale-[1.02] transition-transform">
            <Image src={offer2} alt="Low-Fat Meat" fill className="object-cover object-bottom" />
            <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-gray-900/90 to-gray-900/10" />
            <div className="absolute inset-0 flex flex-col items-center px-6 pt-8 text-center text-white">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">
                85% Fat Free
              </p>
              <h2 className="mb-3 text-3xl font-bold leading-tight">Low-Fat Meat</h2>
              <p className="mb-6 text-sm text-white/70">
                Started at{" "}
                <span className="text-primary font-bold">$79.99</span>
              </p>
              <ShopNowBtn />
            </div>
          </div>

          {/* Card 3 — Fresh Fruit (yellow) */}
          <div className="relative h-[420px] overflow-hidden rounded-3xl hover:scale-[1.02] transition-transform">
            <Image src={offer3} alt="100% Fresh Fruit" fill className="object-cover object-bottom" />
            <div className="absolute inset-0 bg-linear-to-b from-yellow-400 via-yellow-400/95 to-yellow-300/10" />
            <div className="absolute inset-0 flex flex-col items-center px-6 pt-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-900/60">
                Summer Sale
              </p>
              <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900">
                100% Fresh Fruit
              </h2>
              <div className="mb-6 flex items-center gap-2">
                <span className="text-sm font-medium text-gray-800">Up to</span>
                <span className="rounded bg-gray-900 px-2.5 py-1 text-sm font-bold text-white">
                  64% OFF
                </span>
              </div>
              <Link
                href="/products"
                className="group flex w-fit items-center gap-2 rounded-full border border-gray-900 bg-gray-900/10 px-6 py-2.5 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-colors hover:bg-gray-900 hover:text-white"
              >
                Shop Now <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={15} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;
