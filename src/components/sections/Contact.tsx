import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:saurabhkr952@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground">Feel free to reach out!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:saurabhkr952@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm">
                  saurabhkr952@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground text-sm">+91-7004080678</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground text-sm">Patna, India</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/saurabhkr952" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/saurabhkr952" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:saurabhkr952@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              maxLength={200}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
