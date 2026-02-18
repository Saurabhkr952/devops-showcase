import { motion } from "framer-motion";
import { GitPullRequest, ExternalLink } from "lucide-react";

const contributions = [
  {
    project: "Kubernetes",
    repo: "kubernetes/kubernetes",
    prs: [
      { number: "#12345", desc: "Fixed node scheduling race condition" },
      { number: "#12456", desc: "Added support for custom metrics in HPA" },
    ],
    tech: ["Go", "Kubernetes"],
  },
  {
    project: "ArgoCD",
    repo: "argoproj/argo-cd",
    prs: [
      { number: "#8901", desc: "Improved sync status performance for large clusters" },
    ],
    tech: ["Go", "React"],
  },
  {
    project: "Helm",
    repo: "helm/helm",
    prs: [
      { number: "#5678", desc: "Added chart validation for deprecated APIs" },
    ],
    tech: ["Go", "Kubernetes"],
  },
  {
    project: "Prometheus",
    repo: "prometheus/prometheus",
    prs: [
      { number: "#3456", desc: "Enhanced metric relabeling documentation" },
    ],
    tech: ["Go", "Monitoring"],
  },
];

const OpenSource = () => {
  return (
    <section id="opensource" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Open <span className="text-gradient">Source</span>
          </h2>
          <p className="text-muted-foreground">Projects I've contributed to</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {contributions.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">{c.project}</h3>
                <a
                  href={`https://github.com/${c.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-xs font-mono text-muted-foreground mb-3">{c.repo}</p>
              <div className="space-y-2 mb-4">
                {c.prs.map((pr) => (
                  <div key={pr.number} className="flex items-start gap-2 text-sm">
                    <GitPullRequest size={14} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="font-mono text-primary">{pr.number}</span> – {pr.desc}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {c.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
