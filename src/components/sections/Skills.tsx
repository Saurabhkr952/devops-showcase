import { motion } from "framer-motion";

const skills = [
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Helm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
  { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  { name: "Kustomize", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted-foreground">Technologies I work with daily</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.15, y: -5 }}
              className="flex flex-col items-center gap-2 group"
              title={skill.name}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-secondary/50 border border-border/50 group-hover:shadow-glow group-hover:border-primary/30 transition-all">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 md:w-10 md:h-10"
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-muted-foreground font-mono group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
