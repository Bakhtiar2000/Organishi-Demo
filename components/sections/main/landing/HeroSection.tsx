import Image from "next/image";
import Link from "next/link";
import highlightEffect from "@/assets/banner/freshness-highlight-effect-line.jpg";
import banner1 from "@/assets/banner/1.png";
import banner2 from "@/assets/banner/2.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container mx-auto bg-white py-10">
      {/* Heading */}
      <div className="quicksand-font mx-auto mb-4 text-xl">
        <h1>
          Savor the
          <span className="relative mx-2 inline-block text-primary">
            Freshness{" "}
            <Image
              src={highlightEffect}
              alt="Highlight"
              className="absolute -top-6 inline-block"
            />
          </span>
        </h1>
        <h1>of Organic Goodness</h1>
      </div>

      <p className="text-muted-foreground mx-auto mb-8 w-160 text-center">
        From certified organic farms directly to your table. Fresh, pure, and packed with
        nature&apos;s goodness — delivered to your doorstep.
      </p>

      {/* Banner grid */}
      <div className="grid grid-cols-5 gap-3">
        {/* Left — large hero banner */}
        <div className="relative col-span-3 min-h-85 overflow-hidden rounded-2xl">
          <Image src={banner1} alt="Fresh organic food" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-10">
            <h2 className="mb-4 text-4xl font-bold leading-tight text-white">
              Fresh &amp; Healthy
              <br />
              Organic Food
            </h2>
            <div className="border-l-2 border-border pl-4 h-fit mb-4">
              <div className="mb-1 inline-flex items-center gap-2 w-fit">
                <span className="text-sm text-white">Sale up to</span>
                <span className="rounded bg-blue-500 px-2 py-0.5 text-sm font-bold text-white">
                  30% OFF
                </span>
              </div>
              <p className="text-xs text-white/70">Free shipping on all your order.</p>
            </div>
            <Link
              href="/products"
              className="group flex w-fit items-center gap-2 rounded-lg border border-white px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-foreground"
            >
              Shop now <ArrowRight className="group-hover:animate-bounce ml-2" size={16} />
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-2 flex flex-col gap-3">
          {/* Top card — image */}
          <div className="relative flex-1 overflow-hidden rounded-2xl bg-gray-50">
            <Image src={banner2} alt="Summer sale" fill className="object-cover object-right" />
            <div className="absolute inset-0 flex flex-col justify-center p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Summer Sale
              </p>
              <p className="text-3xl font-bold leading-tight text-gray-900">75% OFF</p>
              <p className="mt-1 mb-4 text-xs text-gray-500">Only Fruit &amp; Vegetable</p>
              <Link
                href="/products"
                className="text-primary flex items-center gap-1 text-sm font-semibold hover:underline"
              >
                Shop Now &rarr;
              </Link>
            </div>
          </div>

          {/* Bottom card — green gradient */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-linear-to-br from-primary to-green-600 p-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/80">
              Best Deal
            </p>
            <h3 className="mb-4 text-2xl font-bold leading-tight text-white">
              Special Products
              <br />
              Deal of the Month
            </h3>
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm font-semibold text-white hover:underline"
            >
              Shop Now &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
