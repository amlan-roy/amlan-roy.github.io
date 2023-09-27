import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full min-h-screen bg-[#0A192F] text-white items-center">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
