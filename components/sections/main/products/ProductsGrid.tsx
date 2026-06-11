import ProductCard from "@/components/custom/ProductCard";
import { mockProducts } from "@/data/products";

const ProductsGrid = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          Showing <span className="text-foreground font-medium">{mockProducts.length}</span> products
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination placeholder */}
      <div className="mt-10 flex justify-center gap-2">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
              page === 1
                ? "bg-primary text-primary-foreground"
                : "border-border border hover:bg-muted"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
