import Link from "next/link";
import { categories } from "@/data/categories";

const FeaturedCategories = () => {
  return (
    <section className="container">
      <div className="mb-10 text-center">
        <h2 className="title-text mb-3">Shop by Category</h2>
        <p className="description-text mx-auto max-w-xl">
          Explore our wide range of organic categories, sourced from certified farms worldwide.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products?category=${cat.slug}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-3xl transition-transform duration-300 group-hover:scale-110">
              {cat.emoji}
            </div>
            <span className="text-foreground group-hover:text-primary text-sm font-medium transition-colors">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
