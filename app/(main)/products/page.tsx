"use client";

import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, SlidersHorizontal } from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import Breadcrumb from "@/components/ui/breadcrumb";
import PriceRangeSlider from "@/components/ui/price-range-slider";
import ProductCard from "@/components/custom/ProductCard";
import { mockProducts } from "@/data/products";
import { categories } from "@/data/categories";

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const RATING_OPTIONS = [
  { label: "5.0", min: 5.0, stars: 5 },
  { label: "4.5 & up", min: 4.5, stars: 4 },
  { label: "3.5 & up", min: 3.5, stars: 3 },
  { label: "2.5 & up", min: 2.5, stars: 2 },
  { label: "1.0 & up", min: 1.0, stars: 1 },
];

const MAX_PRICE = Math.ceil(Math.max(...mockProducts.map((p) => p.price)));

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState("latest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, MAX_PRICE]);
  const [minRating, setMinRating] = useState(0);
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    rating: true,
  });

  const toggle = (key: keyof typeof openSections) =>
    setOpenSections((s) => ({ ...s, [key]: !s[key] }));

  const filtered = useMemo(() => {
    let list = mockProducts.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1] && p.rating >= minRating
    );
    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [priceRange, minRating, sortBy]);

  return (
    <div className="bg-background min-h-screen">
      <div className="container py-6">
        {/* Banner */}
        <PageBanner />

        {/* Breadcrumb */}
        <div className="my-4">
          <Breadcrumb items={[{ label: "Products" }]} />
        </div>

        <div className="flex gap-6">
          {/* ── Filter Sidebar ── */}
          <aside className="hidden w-56 shrink-0 lg:block">

            {/* Categories */}
            <div className="mb-4 rounded-xl border bg-white p-4">
              <button
                onClick={() => toggle("categories")}
                className="flex w-full items-center justify-between text-sm font-bold"
              >
                All Categories
                {openSections.categories ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
              {openSections.categories && (
                <ul className="mt-3 space-y-2">
                  {categories.map((cat, i) => {
                    const count = [25, 36, 14, 14, 47, 16, 21, 11][i] ?? 10;
                    return (
                      <li key={cat.id} className="flex items-center justify-between text-xs">
                        <label className="flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-foreground">
                          <input type="checkbox" className="accent-primary h-3.5 w-3.5 rounded" />
                          {cat.name}
                        </label>
                        <span className="text-muted-foreground">({count})</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Price Range */}
            <div className="mb-4 rounded-xl border bg-white p-4">
              <button
                onClick={() => toggle("price")}
                className="flex w-full items-center justify-between text-sm font-bold"
              >
                Price
                {openSections.price ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
              {openSections.price && (
                <div className="mt-4">
                  <PriceRangeSlider
                    min={0}
                    max={MAX_PRICE}
                    value={priceRange}
                    onChange={setPriceRange}
                  />
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="rounded-xl border bg-white p-4">
              <button
                onClick={() => toggle("rating")}
                className="flex w-full items-center justify-between text-sm font-bold"
              >
                Rating
                {openSections.rating ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
              {openSections.rating && (
                <ul className="mt-3 space-y-2.5">
                  {RATING_OPTIONS.map((opt) => (
                    <li key={opt.label}>
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="rating"
                          className="accent-primary h-3.5 w-3.5"
                          checked={minRating === opt.min}
                          onChange={() => setMinRating(opt.min)}
                        />
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              viewBox="0 0 12 12"
                              className={`h-3 w-3 ${i < opt.stars ? "fill-yellow-400" : "fill-gray-200"}`}
                            >
                              <path d="M6 0l1.5 4H12L8.5 6.5 10 11 6 8.5 2 11l1.5-4.5L0 4h4.5z" />
                            </svg>
                          ))}
                          <span className="text-muted-foreground ml-1 text-xs">{opt.label}</span>
                        </div>
                      </label>
                    </li>
                  ))}
                  {minRating > 0 && (
                    <li>
                      <button
                        onClick={() => setMinRating(0)}
                        className="text-primary text-xs underline"
                      >
                        Clear
                      </button>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </aside>

          {/* ── Products Area ── */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-4 flex items-center justify-between rounded-xl border bg-white px-4 py-2.5">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={15} className="text-muted-foreground" />
                <span className="text-muted-foreground text-sm">
                  <span className="font-semibold text-foreground">{filtered.length}</span> Results Found
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-border rounded-lg border bg-white px-3 py-1 text-sm outline-none"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-muted-foreground flex h-64 items-center justify-center rounded-xl border bg-white text-sm">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
