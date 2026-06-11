import Link from "next/link";
import { Leaf, ArrowRight, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="bg-primary absolute -top-24 -right-24 h-96 w-96 rounded-full" />
        <div className="bg-primary absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <Leaf size={14} />
              100% Certified Organic
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl">
              Fresh from the{" "}
              <span className="text-primary">Farm</span>
              <br />
              to Your Table
            </h1>

            <p className="description-text mb-8 max-w-lg">
              Discover nature&apos;s finest organic produce — fruits, vegetables, dairy, and more.
              Delivered fresh to your doorstep, every day.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/products"
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold transition-colors"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="border-primary text-primary hover:bg-primary/10 flex items-center gap-2 rounded-full border-2 px-8 py-3.5 font-semibold transition-colors"
              >
                Our Story
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {[
                "USDA Organic Certified",
                "Free Delivery $50+",
                "Same-Day Available",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheck size={16} className="text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex-1">
            <div className="bg-primary/5 border-primary/10 flex h-80 w-full items-center justify-center rounded-3xl border-2 border-dashed lg:h-[480px]">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                  <Leaf className="text-primary h-12 w-12" />
                </div>
                <p className="text-muted-foreground text-sm font-medium">Hero Image Placeholder</p>
                <p className="text-muted-foreground text-xs">Replace with product/farm imagery</p>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg">
              <p className="text-2xl font-bold text-green-600">500+</p>
              <p className="text-muted-foreground text-xs">Organic Products</p>
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl bg-white p-4 shadow-lg">
              <p className="text-2xl font-bold text-green-600">10k+</p>
              <p className="text-muted-foreground text-xs">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
