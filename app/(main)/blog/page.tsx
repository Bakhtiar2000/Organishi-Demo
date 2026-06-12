import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";
import banner1 from "@/assets/banner/1.png";
import banner2 from "@/assets/banner/2.png";
import NewsLetter from "@/components/sections/shared/NewsLetter";

const posts = [
  {
    id: 1,
    title: "Why Organic Food is Worth Every Penny",
    excerpt:
      "Organic produce might cost a little more upfront, but the long-term benefits for your health, the environment, and local farmers make it a worthwhile investment.",
    image: banner1,
    category: "Health",
    categoryColor: "bg-green-100 text-green-700",
    author: "Amira Rahman",
    date: "June 5, 2026",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "5 Easy Recipes Using Fresh Seasonal Vegetables",
    excerpt:
      "From a crisp summer salad to a hearty stir-fry, these five recipes make the most of in-season organic vegetables available at Organishi right now.",
    image: banner2,
    category: "Recipes",
    categoryColor: "bg-orange-100 text-orange-700",
    author: "Karim Hassan",
    date: "May 28, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "How We Source Our Produce: Farm to Doorstep",
    excerpt:
      "Every item on Organishi goes through a rigorous quality check before it reaches your home. Here's a behind-the-scenes look at our sourcing process.",
    image: banner1,
    category: "Our Story",
    categoryColor: "bg-sky-100 text-sky-700",
    author: "Nadia Islam",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "The Benefits of Eating Honey Every Morning",
    excerpt:
      "Raw organic honey is packed with antioxidants, enzymes, and minerals. Discover why adding a spoonful to your morning routine can transform your wellbeing.",
    image: banner2,
    category: "Nutrition",
    categoryColor: "bg-amber-100 text-amber-700",
    author: "Amira Rahman",
    date: "May 3, 2026",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "Sustainable Packaging: Our Pledge to the Planet",
    excerpt:
      "We've replaced all single-use plastics with biodegradable packaging. Learn about our ongoing commitment to reducing our environmental footprint.",
    image: banner1,
    category: "Sustainability",
    categoryColor: "bg-teal-100 text-teal-700",
    author: "Karim Hassan",
    date: "April 20, 2026",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Understanding Food Labels: Organic vs Natural",
    excerpt:
      "\"Organic\" and \"natural\" are not the same thing. We break down what each certification actually means so you can make informed choices.",
    image: banner2,
    category: "Guide",
    categoryColor: "bg-purple-100 text-purple-700",
    author: "Nadia Islam",
    date: "April 8, 2026",
    readTime: "7 min read",
  },
];

const featured = posts[0];
const rest = posts.slice(1);

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-linear-to-r from-sky-600 via-blue-500 to-indigo-500">
        <div className="container py-14 text-white">
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-white/80">
            Tips, Recipes &amp; Stories
          </p>
          <h1 className="mb-2 text-4xl font-extrabold">Organishi Blog</h1>
          <p className="text-white/80 max-w-lg text-sm">
            Stay informed with the latest articles on organic living, nutrition, seasonal recipes,
            and news from our farm network.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Breadcrumb items={[{ label: "Blog" }]} />

        {/* Featured post */}
        <div className="mt-6 group relative overflow-hidden rounded-2xl border bg-white hover:shadow-md transition-shadow">
          <div className="grid md:grid-cols-2">
            <div className="relative h-56 md:h-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <span
                className={`mb-3 w-fit rounded-full px-3 py-0.5 text-xs font-semibold ${featured.categoryColor}`}
              >
                {featured.category}
              </span>
              <h2 className="text-2xl font-bold leading-snug">{featured.title}</h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="text-muted-foreground mt-4 flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <User size={11} /> {featured.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {featured.readTime}
                </span>
                <span>{featured.date}</span>
              </div>
              <Link
                href="#"
                className="group/btn mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Read Article{" "}
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Post grid */}
        <h2 className="mt-10 mb-5 text-xl font-bold">More Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border bg-white hover:shadow-md transition-shadow"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Date badge */}
                <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-2.5 py-1.5 text-center shadow-sm backdrop-blur-sm">
                  <p className="text-xs font-bold leading-none text-foreground">
                    {post.date.split(" ")[1].replace(",", "")}
                  </p>
                  <p className="text-[9px] font-semibold uppercase text-muted-foreground">
                    {post.date.split(" ")[0]}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <span
                  className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <h3 className="font-bold leading-snug">{post.title}</h3>
                <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="text-muted-foreground mt-3 flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1">
                    <User size={10} /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} /> {post.readTime}
                  </span>
                </div>
                <Link
                  href="#"
                  className="text-primary mt-3 inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                >
                  Read More <ArrowRight size={11} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <NewsLetter />

    </div>
  );
}
