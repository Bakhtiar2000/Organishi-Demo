import { Leaf, ShieldCheck, Truck, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "100% Certified Organic",
    description:
      "Every product carries USDA organic certification. No pesticides, no GMOs — just pure, natural goodness.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Quality Guaranteed",
    description:
      "We inspect and test every batch before delivery. If you're not satisfied, we'll make it right.",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Same-Day Delivery",
    description:
      "Order before noon and receive your fresh produce the same day. Free delivery on orders over $50.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Supporting Local Farms",
    description:
      "We partner directly with local organic farmers, ensuring fair pay and sustainable agricultural practices.",
  },
];

const WhyOrganic = () => {
  return (
    <section className="container">
      <div className="mb-12 text-center">
        <h2 className="title-text mb-3">Why Choose Organishi?</h2>
        <p className="description-text mx-auto max-w-xl">
          We&apos;re more than a grocery store — we&apos;re a commitment to your health and the
          planet&apos;s future.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
          >
            <div className="text-primary bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-green-100">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-base font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyOrganic;
