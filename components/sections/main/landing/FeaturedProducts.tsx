import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/custom/ProductCard";
import ProductCard2 from "@/components/custom/ProductCard2";
import { mockProducts } from "@/data/products";
import productBanner from "@/assets/products/banner/product_banner.png";

const bottomSections = [
  { label: "Hot Deals", key: "Hot Deals" as const },
  { label: "Best Seller", key: "Best Sellers" as const },
  { label: "Top Rated", key: "Top rated" as const },
] satisfies { label: string; key: NonNullable<(typeof mockProducts)[number]["section"]> }[];

const FeaturedProducts = () => {
  const featured = mockProducts.slice(0, 5);

  return (
    <section className="py-16">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="bg-primary mx-auto mt-2 h-1 w-10 rounded-full" />
        </div>

        {/* Top row — 5 ProductCards */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom row — 4 cols */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Cols 1–3: section groups using ProductCard2 */}
          {bottomSections.map(({ label, key }) => {
            const items = mockProducts.filter((p) => p.section === key).slice(0, 3);
            return (
              <div key={key}>
                <h3 className="mb-3 text-base font-bold">{label}</h3>
                <div className="space-y-2">
                  {items.map((product) => (
                    <ProductCard2 key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Col 4: banner card */}
          <div className="relative min-h-64 overflow-hidden rounded-2xl">
            <Image src={productBanner} alt="Summer sale" fill className="object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                Summer Sale
              </p>
              <p className="text-primary text-6xl font-extrabold leading-none">75%</p>
              <p className="text-primary mb-3 text-2xl font-bold">off</p>
              <Link
                href="/products"
                className="border-primary text-primary hover:bg-primary flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-colors hover:text-white"
              >
                Shop Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
