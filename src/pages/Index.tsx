import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import TerminalLoader from "@/components/TerminalLoader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MyFunSection from "@/components/MyFunSection";
import GooglePhotoSection from "@/components/GooglePhotoSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="scanlines crt-flicker">
      <AnimatePresence>
        {loading && <TerminalLoader onComplete={handleComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <MyFunSection />
          <GooglePhotoSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
