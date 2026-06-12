import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsList } from "@/data/news";

const News = () => {
  return (
    <section className="py-16">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-1">
            <div className="bg-primary h-1 w-6 rounded-full" />
            <div className="bg-primary h-1 w-6 rounded-full" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsList.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Image + date badge */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Date badge */}
                <div className="absolute bottom-3 left-3 flex flex-col items-center rounded-md bg-white px-3 py-1.5 text-center shadow">
                  <span className="text-lg font-bold leading-none text-foreground">
                    {post.day}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {post.month}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-base font-bold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog`}
                  className="text-primary flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
                >
                  Read More <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
