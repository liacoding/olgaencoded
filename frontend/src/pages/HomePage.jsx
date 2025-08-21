import { personalData } from "@/utils/data/personal-data";
import AboutSection from "../components/About";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white"> 
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Skills />
        <Projects />
        <Footer />
      </div>  
    )
  };