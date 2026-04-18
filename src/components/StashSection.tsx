import { motion } from "framer-motion";
import robuxImage from "@/assets/robux-money.jpg";

const StashSection = () => {
  return (
    <section id="stash" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-2 font-mono">// STASH</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-wider mb-12 glow">
            THE VAULT
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative border border-border glow-box overflow-hidden group"
        >
          <img
            src={robuxImage}
            alt="Pile of Robux coins with MONEY subtitle in cyberpunk terminal style"
            width={1280}
            height={896}
            loading="lazy"
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 pointer-events-none scanlines opacity-30" />

          <div className="absolute top-4 left-4 text-[10px] font-mono tracking-[0.2em] text-primary/80">
            [ BALANCE_LOADED ]
          </div>
          <div className="absolute top-4 right-4 text-[10px] font-mono tracking-[0.2em] text-primary/80">
            STATUS: ∞
          </div>
          <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
            &gt; ASSET_ID: RBX_001
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StashSection;
