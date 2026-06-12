"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { TProduct } from "@/types/product.type";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const outOfStock = product.stock === 0;
  const hasDiscount = !!product.discount && product.discount > 0;
  const discountedPrice = hasDiscount ? product.price * (1 - product.discount! / 100) : null;

  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
      {/* Image area */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-48 w-full overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />

          {/* Sale badge — top left */}
          {hasDiscount && !outOfStock && (
            <div className="absolute top-2 left-2 rounded bg-primary px-2 py-0.5 text-xs font-semibold text-white">
              Sale {product.discount}%
            </div>
          )}

          {/* Out of Stock badge — top right */}
          {outOfStock ? (
            <div className="absolute top-2 right-2 rounded bg-gray-800 px-2 py-0.5 text-xs font-semibold text-white">
              Out of Stock
            </div>
          ) : (
            <button
              className="absolute top-2 right-2 rounded-full bg-white p-1.5 shadow opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="Wishlist"
              onClick={(e) => e.preventDefault()}
            >
              <Heart size={14} className="text-muted-foreground hover:text-red-500" />
            </button>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="hover:text-primary mb-1.5 line-clamp-1 text-sm font-semibold transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mb-2 flex items-center gap-1.5">
          {hasDiscount ? (
            <>
              <span className="text-primary text-base font-bold">
                ${discountedPrice!.toFixed(2)}
              </span>
              <span className="text-muted-foreground text-xs line-through">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-primary text-base font-bold">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stars + Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={13}
                className={
                  star <= Math.round(product.rating)
                    ? "text-rating fill-current"
                    : "fill-current text-gray-200"
                }
              />
            ))}
          </div>

          <button
            disabled={outOfStock}
            className={`rounded-full p-2 transition-colors ${
              outOfStock
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
            aria-label="Add to cart"
          >
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
