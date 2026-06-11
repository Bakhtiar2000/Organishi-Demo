import Image from "next/image";
import highlightEffect from "@/assets/banner/freshness-highlight-effect-line.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto bg-white py-10">
      <div className="text-center text-xl quicksand-font mx-auto mb-4 ">
        <h1 className="">
          Savor the
          <span className="text-[#8BA32A] relative inline-block mx-2">
            Freshness{" "}
            <Image
              src={highlightEffect}
              alt="Highlight"
              className="inline-block absolute -top-6"
            />
          </span>
        </h1>
        <h1>of Organic Goodness</h1>

      </div>
      <p className="w-160 mx-auto text-center text-muted-foreground">From certified organic farms directly to your table. Fresh, pure, and packed with nature's goodness — delivered to your doorstep.</p>
    

    {/* TODO: Add section as per design given in context. */}
    </section>
  );
};

export default HeroSection;
