import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import brawlStarsLogo from "@/assets/brawl-stars-logo.png";
import realMadridLogo from "@/assets/real-madrid-logo.png";
import gojoSatoru from "@/assets/gojo-satoru.png";

// JJK volume covers
import jjkVol1 from "@/assets/jjk/vol1.jpg";
import jjkVol2 from "@/assets/jjk/vol2.jpg";
import jjkVol3 from "@/assets/jjk/vol3.jpg";
import jjkVol4 from "@/assets/jjk/vol4.jpg";
import jjkVol5 from "@/assets/jjk/vol5.jpg";
import jjkVol6 from "@/assets/jjk/vol6.jpg";
import jjkVol7 from "@/assets/jjk/vol7.jpg";
import jjkVol8 from "@/assets/jjk/vol8.jpg";
import jjkVol13 from "@/assets/jjk/vol13.jpg";
import jjkVol14 from "@/assets/jjk/vol14.jpg";

const jjkCovers: Record<number, string> = {
  1: jjkVol1, 2: jjkVol2, 3: jjkVol3, 4: jjkVol4,
  5: jjkVol5, 6: jjkVol6, 7: jjkVol7, 8: jjkVol8,
  13: jjkVol13, 14: jjkVol14,
};

const JUMIA_URL = "https://www.jumia.ma/";


const roles = ["Web Developer", "Software Engineer", "Full-Stack Developer", "UI/UX Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    if (!deleting && text === currentRole) {
      const timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(deleting ? currentRole.slice(0, text.length - 1) : currentRole.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-6 font-mono">
            // HELLO WORLD
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-primary glow mb-6">
            JAD INFO
          </h1>
          <div className="h-8 mb-8">
            <span className="font-mono text-lg md:text-xl text-muted-foreground">
              {">"} {text}
            </span>
            <span className="inline-block w-3 h-5 bg-primary ml-1 animate-pulse" />
          </div>
          <p className="text-muted-foreground font-mono text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            Crafting digital experiences with clean code and pixel-perfect design.
            Passionate about building performant, accessible web applications.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="border border-primary px-8 py-3 text-xs tracking-[0.2em] font-mono text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border glitch-hover"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="border border-border px-8 py-3 text-xs tracking-[0.2em] font-mono text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              CONTACT ME
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 flex-wrap">
            <a
              href="https://supercell.com/en/games/brawlstars/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform duration-200"
              aria-label="Brawl Stars"
            >
              <img
                src={brawlStarsLogo}
                alt="Brawl Stars logo"
                width={1024}
                height={512}
                loading="lazy"
                className="h-40 md:h-56 w-auto"
              />
            </a>
            <a
              href="https://www.fcbarcelona.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform duration-200"
              aria-label="FC Barcelona"
            >
              <img
                src={realMadridLogo}
                alt="FC Barcelona logo"
                width={512}
                height={512}
                loading="lazy"
                className="h-40 md:h-56 w-auto"
              />
            </a>
          </div>
          <div className="mt-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-primary glow mb-2">
              JUJUTSU KAISEN
            </h2>
            <p className="font-mono text-sm text-muted-foreground mb-6">
              // Ces mangas sont en vente — cliquez pour acheter sur Jumia
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap max-w-4xl mx-auto">
              {Object.entries(jjkCovers).map(([vol, cover]) => (
                <a
                  key={vol}
                  href={JUMIA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg overflow-hidden border border-border/30 hover:scale-105 hover:border-primary/50 transition-all duration-300 shadow-lg"
                >
                  <img
                    src={cover}
                    alt={`Jujutsu Kaisen Vol. ${vol}`}
                    width={140}
                    height={210}
                    loading="lazy"
                    className="h-40 md:h-52 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>


      {/* Gojo Satoru - right side */}
      <a
        href="https://www.roblox.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Roblox"
        className="hidden lg:block absolute right-4 bottom-0 z-20 hover:scale-105 transition-transform duration-200"
      >
        <img
          src={gojoSatoru}
          alt="Gojo Satoru"
          width={512}
          height={768}
          loading="lazy"
          className="h-[28rem] xl:h-[32rem] w-auto drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
        />
      </a>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-border/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-border/30" />
    </section>
  );
};

export default HeroSection;
