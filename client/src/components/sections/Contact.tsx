import { motion } from "framer-motion";
import { PROFILE } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const links = [
    {
      href: `mailto:${PROFILE.contact.email}`,
      label: "Email",
      icon: Mail,
      value: PROFILE.contact.email,
    },
    {
      href: PROFILE.contact.linkedin,
      label: "LinkedIn",
      icon: Linkedin,
      value: "andrewsameh22",
      external: true,
    },
    {
      href: PROFILE.contact.github,
      label: "GitHub",
      icon: Github,
      value: "andrewsameh22",
      external: true,
    },
    {
      href: `tel:${PROFILE.contact.phone.replace(/\s/g, "")}`,
      label: "Phone",
      icon: Phone,
      value: PROFILE.contact.phone,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-primary/[0.03] -z-10" />
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Open to full-time roles and freelance projects. Based in Egypt.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {links.map(({ href, label, icon: Icon, value, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-3 p-6 min-w-[140px] rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <span className="text-xs text-muted-foreground truncate max-w-full px-2">{value}</span>
              </a>
            ))}
          </div>

          <footer className="mt-20 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
