import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
            Education &amp; background
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I'm a <span className="font-semibold text-foreground">Senior Flutter Developer</span> with a
            Computer Science degree (ranked first in my department) and experience across fintech, e-commerce,
            and enterprise apps. I focus on Clean Architecture, performance, and turning complex requirements
            into smooth, user-centered products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <p className="font-medium text-foreground">{PROFILE.education.institution}</p>
              <p className="text-sm text-muted-foreground mt-1">{PROFILE.education.degree}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                  GPA {PROFILE.education.gpa}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                  {PROFILE.education.rank}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Graduation project</h3>
              </div>
              <p className="font-medium text-foreground">{PROFILE.education.graduationProject.name}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {PROFILE.education.graduationProject.description}
              </p>
              <span className="inline-block mt-4 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                Grade: {PROFILE.education.graduationProject.grade}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
