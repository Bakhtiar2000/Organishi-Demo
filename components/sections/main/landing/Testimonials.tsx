import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Health Coach",
    review:
      "Organishi has completely transformed how I shop for groceries. The produce is incredibly fresh and I love knowing exactly where my food comes from.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "David Chen",
    role: "Father of Three",
    review:
      "As a parent, I care deeply about what my family eats. Organishi makes it easy and affordable to serve organic meals every day. The delivery is always on time!",
    rating: 5,
    avatar: "DC",
  },
  {
    name: "Emma Patel",
    role: "Nutritionist",
    review:
      "I recommend Organishi to all my clients. The quality is consistently excellent, and their variety of organic options is unmatched in the area.",
    rating: 5,
    avatar: "EP",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="title-text mb-3">What Our Customers Say</h2>
          <p className="description-text mx-auto max-w-lg">
            Join thousands of happy families who trust Organishi for their organic needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="text-rating h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed italic">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
