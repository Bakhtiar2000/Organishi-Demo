"use client";

import Marquee from "react-fast-marquee";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/custom/CategoryCard";

const AllCategories = () => {
    return (
        <section className="py-12">
            <div className="container overflow-hidden">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold">All Categories</h2>
                    <div className="bg-primary mt-2 h-1 w-10 rounded-full" />
                </div>
                <Marquee gradient={false} speed={40} pauseOnHover>
                    {categories.map((category) => (
                        <div key={category.id} className="mx-2 py-2">
                            <CategoryCard category={category} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default AllCategories;
