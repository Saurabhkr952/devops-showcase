import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-lg mx-auto"
        >
          <FileText size={40} className="mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Last updated: February 2026
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              <Eye size={16} />
              View Online
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
