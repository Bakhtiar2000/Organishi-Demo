"use client";

import { categories } from "@/data/categories";
import { useState } from "react";

const ProductFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="space-y-6 rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="font-semibold">Filters</h3>

      {/* Category */}
      <div>
        <p className="mb-3 text-sm font-medium">Category</p>
        <div className="space-y-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ""}
              onChange={() => setSelectedCategory("")}
              className="accent-primary"
            />
            All Categories
          </label>
          {categories.map((cat) => (
            <label key={cat.slug} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name="category"
                value={cat.slug}
                checked={selectedCategory === cat.slug}
                onChange={() => setSelectedCategory(cat.slug)}
                className="accent-primary"
              />
              <span>{cat.emoji}</span>
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-medium">Price Range</p>
          <span className="text-muted-foreground text-xs">
            ${priceRange[0]} – ${priceRange[1]}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="accent-primary w-full"
        />
      </div>

      {/* Sort By */}
      <div>
        <p className="mb-2 text-sm font-medium">Sort By</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border-border focus:ring-primary w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none"
        >
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setSelectedCategory("");
          setPriceRange([0, 100]);
          setSortBy("newest");
        }}
        className="border-border hover:bg-muted w-full rounded-lg border py-2 text-sm font-medium transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFilters;
