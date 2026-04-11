import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CYBER DASHBOARD",
    description: "Real-time analytics dashboard with dark theme and interactive data visualizations.",
    tech: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "NEON COMMERCE",
    description: "Full-stack e-commerce platform with secure payment processing and inventory management.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "GHOST CHAT",
    description: "End-to-end encrypted messaging app with real-time communication and file sharing.",
    tech: ["React", "Socket.io", "MongoDB"],
  },
  {
    title: "PIXEL TRACKER",
    description: "Project management tool with kanban boards, time tracking, and team collaboration.",
    tech: ["React", "Python", "Redis"],
  },
  {
    title: "VOID CMS",
    description: "Headless content management system with API-first architecture and markdown support.",
    tech: ["TypeScript", "GraphQL", "AWS"],
  },
  {
    title: "MATRIX API",
    description: "RESTful API gateway with rate limiting, authentication, and comprehensive documentation.",
    tech: ["Node.js", "Express", "Docker"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="border border-border p-6 glow-box group hover:border-primary/50 transition-all duration-300"
  >
    <div className="text-xs text-muted-foreground font-mono mb-3">PROJECT_{String(index + 1).padStart(2, "0")}</div>
    <h3 className="font-display text-lg text-primary tracking-wider mb-3 group-hover:glow transition-all">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm font-mono leading-relaxed mb-4">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((t) => (
        <span key={t} className="text-[10px] tracking-wider font-mono border border-border px-2 py-1 text-muted-foreground">
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a href="#" className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
        <ExternalLink size={14} /> LIVE DEMO
      </a>
      <a href="#" className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
        <Github size={14} /> GITHUB
      </a>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-[0.4em] text-muted-foreground mb-2 font-mono">// PROJECTS</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-wider mb-12 glow">
          QUEST LOG
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
