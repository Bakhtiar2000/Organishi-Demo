"use client";

import Image from "next/image";
import Link from "next/link";
import { ICategory } from "@/data/categories";

const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <Link
      href={`/product-category/${category.name.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition-all duration-200 hover:border-primary hover:shadow-md"
    >
      <div className="relative h-24 w-24">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-center text-sm font-medium text-foreground transition-colors group-hover:text-primary">
        {category.name}
      </span>
    </Link>
  );
};

export default CategoryCard;
