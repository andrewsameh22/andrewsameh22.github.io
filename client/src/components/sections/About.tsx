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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            About me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-2">
            I'm a <span className="font-semibold text-foreground">Senior Flutter Developer</span> with a
            Computer Science degree (ranked first in my department) and experience across fintech, e-commerce,
            and enterprise apps. I focus on Clean Architecture, performance, and turning complex requirements
            into smooth, user-centered products.
          </p>
          {"careerGoal" in PROFILE && PROFILE.careerGoal && (
            <p className="text-base text-primary/90 font-medium mt-4">
              {PROFILE.careerGoal}
            </p>
          )}
          <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
            Education
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Degree and key academic background—supporting the experience above.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Background</h4>
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
            <div className="mt-5 pt-5 border-t border-border/50 flex items-start gap-3">
              <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">
                  {PROFILE.education.graduationProject.name}
                  <span className="ml-2 text-primary text-xs font-medium">
                    (Grade {PROFILE.education.graduationProject.grade})
                  </span>
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {PROFILE.education.graduationProject.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
