import { categories } from "@/data/categories";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.id }));
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = categories.find((cat) => cat.id.toString() === id);

  if (!category) notFound();

  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-2xl font-semibold">{category.name}</h1>
    </div>
  );
}
