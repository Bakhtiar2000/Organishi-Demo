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

  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const units = [
    { value: time.days, label: "DAYS" },
    { value: time.hours, label: "HOURS" },
    { value: time.mins, label: "MINS" },
    { value: time.secs, label: "SECS" },
  ];

  return (
    <div className="relative h-44 overflow-hidden rounded-2xl">
      <Image src={bannerImg} alt="Sale banner" fill className="object-cover object-right-bottom" />
      <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-blue-500/90 to-transparent" />

      <div className="relative flex h-full flex-col justify-center px-8 text-white">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/70">
          Best Deals
        </p>
        <h2 className="mb-3 text-2xl font-bold leading-tight">Sale of the Month</h2>

        {/* Countdown */}
        <div className="mb-4 flex items-end gap-2">
          {units.map(({ value, label }, i) => (
            <div key={label} className="flex items-end gap-2">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold tabular-nums leading-none">{pad(value)}</span>
                <span className="mt-0.5 text-[9px] tracking-widest text-white/60">{label}</span>
              </div>
              {i < units.length - 1 && (
                <span className="mb-3.5 text-sm text-white/50">:</span>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/products"
          className="flex w-fit items-center gap-2 rounded-full border border-white px-4 py-1.5 text-xs font-semibold transition-colors hover:bg-white hover:text-foreground"
        >
          Shop now <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default PageBanner;
