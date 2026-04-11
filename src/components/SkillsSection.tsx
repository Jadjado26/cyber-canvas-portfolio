import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "Git", level: 90 },
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="text-xs tracking-[0.2em] font-mono text-foreground">{name}</span>
      <span className="text-xs font-mono text-muted-foreground">{level}/100</span>
    </div>
    <div className="h-2 bg-secondary border border-border overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
        className="h-full bg-primary glow-border"
      />
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-[0.4em] text-muted-foreground mb-2 font-mono">// SKILLS</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-wider mb-12 glow">
          SKILL TREE
        </h2>
      </motion.div>

      <div className="border border-border p-8 glow-box">
        <div className="text-xs text-muted-foreground font-mono mb-6">
          ┌─ COMBAT STATS ─────────────────┐
        </div>
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} index={i} />
        ))}
        <div className="text-xs text-muted-foreground font-mono mt-6">
          └────────────────────────────────┘
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
