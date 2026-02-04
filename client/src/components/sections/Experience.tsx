import { motion } from "framer-motion";
import { Building2, Calendar, ChevronRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Where I've worked
          </h2>
        </motion.div>

        <div className="relative pl-4 md:pl-6 border-l-2 border-border space-y-12">
          {PROFILE.experience.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06 }}
              className="relative -left-[2px] pl-8 md:pl-10"
            >
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card px-3 py-1.5 rounded-lg border border-border w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                {exp.description && (
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                )}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Key projects
                    </span>
                    <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.projects.map((proj, i) => (
                        <li
                          key={i}
                          className="flex gap-2 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/20 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-sm font-semibold text-foreground">{proj.name}</span>
                            <p className="text-xs text-muted-foreground mt-0.5">{proj.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
