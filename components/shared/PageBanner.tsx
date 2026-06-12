"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import bannerImg from "@/assets/banner/discount_bannar.png";

const SALE_END = new Date("2026-06-20T23:59:59");
const pad = (n: number) => String(n).padStart(2, "0");

const PageBanner = () => {
  const calc = () => {
    const diff = Math.max(0, SALE_END.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff % 86_400_000) / 3_600_000),
      mins: Math.floor((diff % 3_600_000) / 60_000),
      secs: Math.floor((diff % 60_000) / 1_000),
    };
  };

  // null on server → same null on client initial render → no hydration mismatch
  const [time, setTime] = useState<ReturnType<typeof calc> | null>(null);

  useEffect(() => {
    setTime(calc());
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = time ?? { days: 0, hours: 0, mins: 0, secs: 0 };
  const units = [
    { value: t.days, label: "DAYS" },
    { value: t.hours, label: "HOURS" },
    { value: t.mins, label: "MINS" },
    { value: t.secs, label: "SECS" },
  ];

  return (
    <div className="relative h-52 overflow-hidden rounded-2xl">
      <Image src={bannerImg} alt="Sale banner" fill className="object-cover" />
      {/* subtle left-to-right blue fade */}
      <div className="absolute inset-0 bg-linear-to-r from-sky-400/80 via-sky-300/40 to-transparent" />

      {/* Content row */}
      <div className="absolute inset-0 flex items-center justify-between px-10">
        {/* Left — text */}
        <div className="text-white">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/80">
            Best Deals
          </p>
          <h2 className="mb-3 text-4xl font-bold leading-tight">Sale of the Month</h2>

          {/* Countdown */}
          <div className="mb-4 flex items-start gap-1">
            {units.map(({ value, label }, i) => (
              <div key={label} className="flex items-start">
                <div className="flex flex-col items-center min-w-[44px]">
                  <span className="text-2xl font-bold leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {pad(value)}
                  </span>
                  <span className="mt-1 text-[9px] font-semibold tracking-widest text-white/70">
                    {label}
                  </span>
                </div>
                {i < units.length - 1 && (
                  <span className="mt-0.5 px-0.5 text-xl font-bold text-white/60">:</span>
                )}
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full border border-white px-5 py-2 text-sm font-semibold backdrop-blur-sm transition-colors bg-white text-foreground"
          >
            Shop now <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
          </Link>
        </div>

        {/* Right — orange badge */}
        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-orange-400 text-white shadow-lg">
          <span className="text-2xl font-extrabold leading-none">56%</span>
          <span className="text-xs font-semibold tracking-wider">OFF</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
