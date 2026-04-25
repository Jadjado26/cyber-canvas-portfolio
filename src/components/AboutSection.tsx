import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.png";
import surgeBrawler from "@/assets/surge-brawler.png";

const stats = [
  { label: "LEVEL", value: "25" },
  { label: "XP", value: "10,000+" },
  { label: "PROJECTS", value: "50+" },
  { label: "QUESTS", value: "∞" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-[0.4em] text-muted-foreground mb-2 font-mono">// ABOUT</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-wider mb-12 glow">
          PLAYER PROFILE
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 border border-border glow-box overflow-hidden">
              <img src={profileAvatar} alt="Developer profile" className="w-full h-full object-cover" width={512} height={512} loading="lazy" />
            </div>
            <a
              href="https://brawlstars.fandom.com/wiki/Surge"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-4 -right-4 w-20 h-20 border border-primary bg-background overflow-hidden glow-box hover:scale-110 transition-transform duration-200"
              aria-label="View Surge brawler info"
            >
              <img src={surgeBrawler} alt="Surge brawler from Brawl Stars" className="w-full h-full object-cover" width={512} height={512} loading="lazy" />
            </a>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8">
            Hey, I'm Jad — a developer who loves building cool stuff on the web. I created this
            site so you can get to know everything about me. When I'm not coding, you'll find me
            grinding on Brawl Stars, hitting the field for some football, dropping buckets on
            the basketball court, or spiking on the volleyball court. Game on. 🎮⚽🏀🏐
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-border p-4 glow-box">
                <div className="text-xs text-muted-foreground font-mono mb-1">{stat.label}</div>
                <div className="font-display text-2xl text-primary glow">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
