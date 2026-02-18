import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero section-padding overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-primary mb-4 text-sm md:text-base">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
            Saurabh Kumar
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            DevOps Engineer
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            I build and automate cloud infrastructure, CI/CD pipelines, and scalable systems.
            Open source contributor passionate about Kubernetes, AWS, and developer tooling.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Get In Touch
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/saurabhkr952"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/saurabhkr952"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:saurabhkr952@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
