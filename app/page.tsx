import type { Metadata } from "next";
import Navbar from "@/components/sections/shared/Navbar";
import Footer from "@/components/sections/shared/Footer";
import HeroSection from "@/components/sections/main/landing/HeroSection";
import FeaturedCategories from "@/components/sections/main/landing/FeaturedCategories";
import FeaturedProducts from "@/components/sections/main/landing/FeaturedProducts";
import WhyOrganic from "@/components/sections/main/landing/WhyOrganic";
import Testimonials from "@/components/sections/main/landing/Testimonials";
import Offers from "@/components/sections/main/landing/Offers";

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
        <Offers />
        <FeaturedCategories />
        <WhyOrganic />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
