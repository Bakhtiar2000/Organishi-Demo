import Link from "next/link";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { TProduct } from "@/types/product.type";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="bg-muted relative h-52 w-full overflow-hidden">
          <div className="flex h-full w-full items-center justify-center text-6xl">
            {product.emoji}
          </div>
          {product.isOrganic && (
            <div className="bg-primary text-primary-foreground absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-xs font-medium">
              Organic
            </div>
          )}
          <button className="text-muted-foreground hover:text-danger absolute top-3 right-3 rounded-full bg-white p-1.5 shadow transition-colors">
            <Heart size={16} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <p className="text-muted-foreground mb-0.5 text-xs">{product.category}</p>
          <h3 className="hover:text-primary mb-1 font-semibold transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1">
          <Star className="text-rating h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-muted-foreground text-xs">({product.reviewCount})</span>
        </div>

        {/* Price + Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.unit && (
              <span className="text-muted-foreground text-xs"> / {product.unit}</span>
            )}
          </div>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-colors">
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
