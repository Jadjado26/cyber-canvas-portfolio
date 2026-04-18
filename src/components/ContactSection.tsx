import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Gamepad2 } from "lucide-react";

const socials = [
  { icon: Mail, label: "EMAIL", value: "dev@example.com", href: "mailto:dev@example.com" },
  { icon: Github, label: "GITHUB", value: "github.com/jadthegoat", href: "https://github.com/jadthegoat" },
  { icon: Linkedin, label: "LINKEDIN", value: "linkedin.com/in/jadthegoat", href: "https://linkedin.com/in/jadthegoat" },
  { icon: Gamepad2, label: "ROBLOX", value: "roblox.com/user/jadthegoat", href: "https://www.roblox.com/users/profile?username=jadthegoat" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-2 font-mono">// CONTACT</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-wider mb-12 glow">
            SEND MESSAGE
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-border p-4 glow-box hover:border-primary/50 transition-all group"
              >
                <s.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-mono">{s.label}</div>
                  <div className="text-sm font-mono text-foreground">{s.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label className="text-[10px] tracking-[0.2em] text-muted-foreground font-mono mb-2 block uppercase">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-sm font-mono text-foreground focus:border-primary focus:outline-none transition-colors"
                  maxLength={field === "email" ? 255 : 100}
                />
              </div>
            ))}
            <div>
              <label className="text-[10px] tracking-[0.2em] text-muted-foreground font-mono mb-2 block">
                MESSAGE
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm font-mono text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              className="border border-primary px-8 py-3 text-xs tracking-[0.2em] font-mono text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border glitch-hover w-full"
            >
              {sent ? "> MESSAGE SENT ✓" : "> TRANSMIT"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
