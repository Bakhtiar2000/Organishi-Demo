import Navbar from "@/components/sections/shared/Navbar";
import Footer from "@/components/sections/shared/Footer";
import WelcomeModal from "@/components/sections/shared/WelcomeModal";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WelcomeModal />
    </>
  );
}
