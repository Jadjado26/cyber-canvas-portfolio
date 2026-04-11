import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "> Initializing system...",
  "> Loading portfolio modules...",
  "> Compiling assets............",
  "> Establishing connection...",
  "> System ready.",
  "> Welcome.",
];

const TerminalLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const timeout = setTimeout(() => setVisibleLines((v) => v + 1), 350);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(onComplete, 600);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-lg w-full px-6">
        <div className="border border-border p-6 glow-box font-mono text-sm">
          <div className="text-muted-foreground mb-4 text-xs">SYSTEM BOOT v2.0.26</div>
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`mb-1 ${i === bootLines.length - 1 ? "text-primary glow" : "text-muted-foreground"}`}
            >
              {line}
            </motion.div>
          ))}
          {visibleLines < bootLines.length && (
            <span className="typing-cursor text-muted-foreground" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalLoader;
