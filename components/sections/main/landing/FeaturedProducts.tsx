import Link from "next/link";
import ProductCard from "@/components/custom/ProductCard";
import { mockProducts } from "@/data/products";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const featured = mockProducts.slice(0, 4);

  return (
    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="title-text mb-3">Featured Products</h2>
            <p className="description-text max-w-lg">
              Hand-picked organic favorites, loved by our community.
            </p>
          </div>
          <Link
            href="/products"
            className="text-primary hover:text-primary/80 hidden items-center gap-1 text-sm font-medium transition-colors sm:flex"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
