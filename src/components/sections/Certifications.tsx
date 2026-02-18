import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    org: "The Linux Foundation",
    date: "2023",
    image: "https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
    link: "https://www.credly.com/org/the-linux-foundation/badge/certified-kubernetes-administrator-cka",
  },
  {
    name: "AWS Solutions Architect – Associate",
    org: "Amazon Web Services",
    date: "2022",
    image: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    org: "HashiCorp",
    date: "2023",
    image: "https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png",
    link: "https://www.hashicorp.com/certification/terraform-associate",
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    org: "Google Cloud",
    date: "2022",
    image: "https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
    link: "https://cloud.google.com/learn/certification/cloud-engineer",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <Award className="inline mr-2 text-primary" size={32} />
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-5 text-center group cursor-pointer hover:shadow-glow transition-all"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-20 h-20 mx-auto mb-4 rounded-lg"
                loading="lazy"
              />
              <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
                {cert.name}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.org}</p>
              <p className="text-xs text-primary font-mono mt-1">{cert.date}</p>
              <ExternalLink size={12} className="mx-auto mt-2 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
