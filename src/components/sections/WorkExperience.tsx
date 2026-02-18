import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Associate DevOps Engineer",
    company: "Techolution",
    location: "Remote",
    period: "Dec 2025 – Present",
    points: [
      "Architected a Zero Trust database access solution for AlloyDB by leveraging Identity-Aware Proxy (IAP) and AlloyDB Auth Proxy, eliminating public IP exposure and enabling compliant, secure localhost connectivity for development teams.",
      "Automated the scaling of AlloyDB & GKE clusters dev environments using GCP Cloud Scheduler and Nodepool APIs to spin down spot nodes to zero outside of business hours and on weekends — reducing compute expenses by 40%.",
    ],
  },
  {
    title: "DevOps Trainee",
    company: "Accuknox",
    location: "Remote",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Led the restoration of the production EU region in a fresh Kubernetes cluster, including critical databases (MongoDB, PostgreSQL, HashiCorp Vault) and 100+ microservices; created detailed Disaster Recovery documentation.",
      "Developed and maintained GitHub Actions workflows, resolving failures to ensure reliable CI/CD pipelines.",
      "Implemented k0s and RKE2 in an air-gapped GCP environment across Debian and Rocky Linux, setting up a private registry, SSL certificates, and validating Helm deployments for 100+ microservices.",
    ],
  },
  {
    title: "DevOps Intern",
    company: "Cloudraft",
    location: "Remote",
    period: "Dec 2024 – Mar 2025",
    points: [
      "Set up GitOps pipelines (ArgoCD, Helm, Kustomize, ACR, ESO) and assisted migration of 12+ microservices, conducting KT sessions so the client team could manage additional environments across 3 regions.",
      "Automated observability stack deployment (kube-prometheus-stack, Tempo, Loki, OpenTelemetry Operator) via ArgoCD, Helm & Kustomize.",
      "Built reusable Terraform modules for AKS, including VNET & remote state management.",
      "Configured Grafana alerts in prod & non-prod environments to detect issues early and speed up incident response.",
      "Authored technical blogs on PostgreSQL monitoring & Kubernetes security.",
    ],
  },
  {
    title: "Open-Source Contributor",
    company: "CNCF Kepler",
    location: "",
    period: "",
    points: [
      { text: "Optimized Dockerfile, reducing image size by 2×.", link: "https://github.com/sustainable-computing-io/kepler/pull/168", pr: "PR #168" },
      { text: "Improved CI pipeline build time ~10× with advanced caching.", link: "https://github.com/sustainable-computing-io/kepler/pull/1046", pr: "PR #1046" },
    ],
  },
  {
    title: "Freelance DevOps Engineer",
    company: "Freelancing",
    location: "",
    period: "",
    points: [
      "Migrated CI/CD workflows for 12+ repositories from Bitbucket Pipelines to GitHub Actions.",
      "Dockerized Selenium tests, created Jenkins pipelines, cutting test execution time by ~40%.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4 top-1.5 w-3 h-3 rounded-full bg-gradient-primary ring-4 ring-background" />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-mono text-sm flex items-center gap-1.5 mt-0.5">
                      <Briefcase size={13} />
                      {exp.company}
                    </p>
                  </div>
                  {(exp.period || exp.location) && (
                    <div className="text-xs text-muted-foreground sm:text-right shrink-0 mt-1 sm:mt-0">
                      {exp.period && <p className="font-mono">{exp.period}</p>}
                      {exp.location && (
                        <p className="flex items-center gap-1 sm:justify-end mt-0.5">
                          <MapPin size={11} />
                          {exp.location}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Points */}
                <ul className="space-y-2 mt-3">
                  {exp.points.map((point, j) => {
                    const isOss = typeof point === "object" && "link" in point;
                    return (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                        <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {isOss ? (
                          <span>
                            {(point as { text: string; link: string; pr: string }).text}{" "}
                            <a
                              href={(point as { text: string; link: string; pr: string }).link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-primary hover:underline"
                            >
                              {(point as { text: string; link: string; pr: string }).pr}
                              <ExternalLink size={11} />
                            </a>
                          </span>
                        ) : (
                          <span>{point as string}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
