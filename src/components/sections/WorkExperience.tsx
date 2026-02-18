import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "TechCorp Solutions",
    location: "Remote",
    period: "Jan 2023 – Present",
    points: [
      "Designed and managed Kubernetes clusters on AWS EKS serving 50M+ requests/day",
      "Built CI/CD pipelines with GitHub Actions and ArgoCD, reducing deployment time by 70%",
      "Implemented Infrastructure as Code using Terraform and Helm charts for 100+ microservices",
      "Set up monitoring stack with Prometheus and Grafana, achieving 99.9% uptime SLA",
    ],
  },
  {
    title: "Cloud Infrastructure Engineer",
    company: "StartupXYZ",
    location: "Patna, India",
    period: "Jun 2021 – Dec 2022",
    points: [
      "Migrated monolithic application to containerized microservices on Docker and Kubernetes",
      "Automated infrastructure provisioning with Ansible, reducing setup time from days to hours",
      "Managed AWS services including EC2, S3, RDS, Lambda, and CloudFront",
      "Implemented GitOps workflows with ArgoCD for declarative infrastructure management",
    ],
  },
  {
    title: "Junior DevOps Engineer",
    company: "Digital Innovations",
    location: "Bangalore, India",
    period: "Aug 2020 – May 2021",
    points: [
      "Configured Jenkins pipelines for automated testing and deployment",
      "Managed Linux servers and wrote Bash scripts for automation tasks",
      "Set up centralized logging with ELK stack for application monitoring",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 hover:shadow-glow transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-mono text-sm flex items-center gap-1">
                    <Briefcase size={14} />
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                  <p>{exp.period}</p>
                  <p className="flex items-center gap-1 md:justify-end">
                    <MapPin size={12} />
                    {exp.location}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
