import { motion } from "framer-motion";
import { PROFILE } from "@/data/portfolio";
import { Code2, Database, Wrench } from "lucide-react";

const categories: { key: keyof typeof PROFILE.skills; label: string; icon: typeof Code2 }[] = [
  { key: "core", label: "Core", icon: Code2 },
  { key: "backend", label: "Backend & APIs", icon: Database },
  { key: "tools", label: "Tools & DevOps", icon: Wrench },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Tech stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(({ key, label, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-muted/50 text-muted-foreground border border-border/50 hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
