import type { Metadata } from "next";
import Navbar from "@/components/sections/shared/Navbar";
import Footer from "@/components/sections/shared/Footer";
import HeroSection from "@/components/sections/main/landing/HeroSection";
import FeaturedProducts from "@/components/sections/main/landing/FeaturedProducts";
import Testimonials from "@/components/sections/main/landing/Testimonials";
import Offers from "@/components/sections/main/landing/Offers";
import AllCategories from "@/components/sections/main/landing/AllCategories";
import LatestProducts from "@/components/sections/main/landing/LatestProducts";
import Video from "@/components/sections/main/landing/Video";

export const metadata: Metadata = {
  title: "Organishi | Fresh & Organic Delivered",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <FeaturedProducts />
        <AllCategories />
        <Offers />
        <LatestProducts />
        <Testimonials />
        <Video />
      </main>
      <Footer />
    </>
  );
}
