import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import InvertedComma from "@/assets/inverted_comma.png";

const Testimonials = () => {
  return (
    <section className="bg-[#eef3ee] pt-16 pb-80">
      <div className="container">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">What Our Client Says</h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-1">
            <div className="bg-primary h-1 w-6 rounded-full" />
            <div className="bg-primary h-1 w-6 rounded-full" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col items-center">
              {/* Quote card */}
              <div className="w-full rounded-2xl bg-white p-4 flex flex-col items-center justify-center gap-4 shadow-sm">
                <Image src={InvertedComma} alt="Inverted comma" className="text-primary text-5xl font-serif leading-none" />
                <p className="text-center text-sm text-foreground/80">
                  {t.content}
                </p>
              </div>

              {/* Avatar */}
              <div className="mt-6 flex flex-col items-center gap-2">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-white ring-offset-2 ring-offset-[#eef3ee]">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
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
