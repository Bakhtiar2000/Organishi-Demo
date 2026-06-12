import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";
import { mockProducts } from "@/data/products";
import NewsLetter from "@/components/sections/shared/NewsLetter";

const offerProducts = mockProducts.filter((p) => p.discount && p.discount > 0);
const allOffers = [...mockProducts].slice(0, 9);

export default function OffersPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-linear-to-r from-orange-500 via-amber-400 to-yellow-300">
        <div className="container py-14 text-white">
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-white/80">
            Limited Time
          </p>
          <h1 className="mb-2 text-4xl font-extrabold">Hot Offers &amp; Deals</h1>
          <p className="text-white/80 max-w-lg text-sm">
            Fresh discounts every day on organic produce, dairy, dry foods and more. Stock up
            while stocks last.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Breadcrumb items={[{ label: "Offers" }]} />

        {/* Featured offer strip */}
        <div className="mt-6 mb-8 flex items-center gap-3 rounded-2xl bg-orange-50 border border-orange-200 px-6 py-4">
          <Tag className="text-orange-500 shrink-0" size={20} />
          <p className="text-sm font-medium text-orange-700">
            Use code <span className="font-bold">ORGANIC20</span> at checkout to get an extra 20% off
            on all orders above $25.
          </p>
          <Link
            href="/products"
            className="ml-auto shrink-0 rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>

        {/* Offer cards */}
        <h2 className="mb-5 text-xl font-bold">All Offers</h2>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {allOffers.map((product) => {
            const discount = product.discount ?? 15;
            const discounted = +(product.price * (1 - discount / 100)).toFixed(2);
            return (
              <div
                key={product.id}
                className="group relative rounded-2xl border bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Badge */}
                <span className="absolute top-2 left-2 z-10 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                  {discount}% OFF
                </span>

                <div className="relative h-44 bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-3">
                  <p className="text-sm font-semibold truncate">{product.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-primary font-bold">${discounted}</span>
                    <span className="text-muted-foreground text-xs line-through">
                      ${product.price}
                    </span>
                  </div>
                  <Link
                    href="/products"
                    className="mt-2 flex items-center justify-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary/90 transition-colors"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-primary to-green-600 px-8 py-10 text-center text-white">
          <h3 className="mb-2 text-2xl font-bold">Can&apos;t find what you&apos;re looking for?</h3>
          <p className="text-white/80 mb-5 text-sm">
            Browse our full catalogue for hundreds of organic products at everyday low prices.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary hover:bg-gray-100 transition-colors"
          >
            View All Products <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <NewsLetter />

    </div>
  );
}
