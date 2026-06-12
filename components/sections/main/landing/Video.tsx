import Image from "next/image";
import { Play } from "lucide-react";
import bg from "@/assets/video/video.png";

const Video = () => {
  return (
    <section className="container py-6 -mt-64">
      <div className="relative overflow-hidden rounded-2xl">
        <Image src={bg} alt="Organic farm" fill className="object-cover" />
        {/* green tint overlay */}
        <div className="absolute inset-0 bg-green-900/30" />

        {/* Content */}
        <div className="relative flex h-120 flex-col items-center justify-center gap-5 px-6 py-16 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Know More About Us
          </p>
          <h2 className="max-w-lg text-3xl font-bold leading-snug md:text-4xl">
            We&apos;re the Best Organic Farm in the World
          </h2>

          {/* Play button */}
          <button
            className="cursor-pointer flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/40"
            aria-label="Play video"
          >
            <Play size={22} className="translate-x-0.5 fill-white text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Video;
