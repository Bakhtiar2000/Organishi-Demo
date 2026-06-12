"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";
import { TProduct } from "@/types/product.type";

const ProductCard2 = ({ product }: { product: TProduct }) => {
  const outOfStock = product.stock === 0;
  const hasDiscount = !!product.discount && product.discount > 0;
  const discountedPrice = hasDiscount ? product.price * (1 - product.discount! / 100) : null;

  return (
    <div className="group flex items-center gap-3 rounded-xl border bg-white p-2.5 transition-all hover:border-primary hover:shadow-sm">
      {/* Thumbnail */}
      <Link href={`/products/${product.id}`} className="shrink-0">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-50">
          <Image src={product.image} alt={product.name} fill className="object-contain p-1.5" />
        </div>
      </Link>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <Link href={`/products/${product.id}`}>
          <h4 className="hover:text-primary mb-0.5 line-clamp-1 text-sm font-semibold transition-colors">
            {product.name}
          </h4>
        </Link>

        <div className="mb-1.5 flex items-center gap-1.5">
          {hasDiscount ? (
            <>
              <span className="text-primary text-sm font-bold">
                ${discountedPrice!.toFixed(2)}
              </span>
              <span className="text-muted-foreground text-xs line-through">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-primary text-sm font-bold">${product.price.toFixed(2)}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          {/* Stars */}
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={11}
                className={
                  s <= Math.round(product.rating)
                    ? "text-rating fill-current"
                    : "fill-current text-gray-200"
                }
              />
            ))}
          </div>

          {/* Action icons — appear on hover */}
          <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              className="text-muted-foreground hover:text-primary rounded p-0.5 transition-colors"
              aria-label="Quick view"
            >
              <Eye size={13} />
            </button>
            <button
              className="text-muted-foreground hover:text-red-500 rounded p-0.5 transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={13} />
            </button>
            <button
              disabled={outOfStock}
              className={`rounded p-0.5 transition-colors ${
                outOfStock
                  ? "cursor-not-allowed text-gray-300"
                  : "text-muted-foreground hover:text-primary"
              }`}
              aria-label="Add to cart"
            >
              <ShoppingCart size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
