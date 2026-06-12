import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/custom/ProductCard";
import { mockProducts } from "@/data/products";

const LatestProducts = () => {
  const latest = mockProducts.slice(-5).reverse();

  return (
    <section className="py-12">
      <div className="container">
        {/* Heading */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">Newest Products</h2>
            <div className="bg-primary mt-2 h-1 w-10 rounded-full" />
          </div>
          <Link
            href="/products"
            className="text-primary flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {latest.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
