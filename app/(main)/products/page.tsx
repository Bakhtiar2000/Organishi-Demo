import type { Metadata } from "next";
import ProductsGrid from "@/components/sections/main/products/ProductsGrid";
import ProductFilters from "@/components/sections/main/products/ProductFilters";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our full range of certified organic products.",
};

export default function ProductsPage() {
  return (
    <div className="container">
      <div className="mb-8">
        <h1 className="title-text mb-2">Our Products</h1>
        <p className="description-text">
          Certified organic. Farm-fresh. Delivered to your door.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 lg:shrink-0">
          <ProductFilters />
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}
