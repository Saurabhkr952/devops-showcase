import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "K8s Multi-Cluster Manager",
    description:
      "A tool for managing multiple Kubernetes clusters with a unified dashboard. Supports cluster health monitoring, workload deployment, and cost optimization.",
    tech: ["Kubernetes", "Go", "React", "Prometheus"],
    highlights: ["Reduced cloud costs by 35%", "Manages 20+ clusters"],
    github: "https://github.com/saurabhkr952",
  },
  {
    title: "CI/CD Pipeline Framework",
    description:
      "Reusable GitHub Actions workflows and templates for building, testing, and deploying microservices across multiple environments.",
    tech: ["GitHub Actions", "Docker", "Helm", "ArgoCD"],
    highlights: ["70% faster deployments", "Used by 15+ teams"],
    github: "https://github.com/saurabhkr952",
  },
  {
    title: "Infrastructure as Code Templates",
    description:
      "Production-ready Terraform modules for AWS infrastructure including VPC, EKS, RDS, and monitoring stack.",
    tech: ["Terraform", "AWS", "Ansible", "Bash"],
    highlights: ["100+ stars on GitHub", "Full AWS coverage"],
    github: "https://github.com/saurabhkr952",
  },
  {
    title: "Log Aggregation Platform",
    description:
      "Centralized logging solution built on ELK stack with custom dashboards for application performance monitoring.",
    tech: ["Elasticsearch", "Logstash", "Kibana", "Docker"],
    highlights: ["Processes 1M+ logs/min", "99.99% data retention"],
    github: "https://github.com/saurabhkr952",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="space-y-1">
                {project.highlights.map((h) => (
                  <p key={h} className="text-xs text-accent flex items-center gap-1">
                    <ExternalLink size={10} />
                    {h}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
