import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-primary glow mb-6">
            JADTHEGOAT
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
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-border/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-border/30" />
    </section>
  );
};

export default HeroSection;
