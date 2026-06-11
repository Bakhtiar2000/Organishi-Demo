import { productCategories } from "@/data/categories";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = productCategories.find((cat) => cat.slug === slug);

  if (!category) notFound();

  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-2xl font-semibold">{category.name}</h1>
    </div>
  );
}
