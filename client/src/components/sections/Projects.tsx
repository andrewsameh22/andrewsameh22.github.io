import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/data/portfolio";
import { Code2, ExternalLink, Smartphone } from "lucide-react";

function hasValidLink(url: string | undefined): boolean {
  return !!url && url !== "#";
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Featured work
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of projects that demonstrate my skills in action—purpose, technologies, and outcomes. Ordered by impact and recency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted relative flex items-center justify-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {hasValidLink(project.links.android) && (
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-background/90 backdrop-blur border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      title="Android"
                    >
                      <Smartphone className="w-5 h-5" />
                    </a>
                  )}
                  {hasValidLink(project.links.ios) && (
                    <a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-background/90 backdrop-blur border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      title="iOS"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {"repository" in project && typeof (project as { repository?: string }).repository === "string" && (
                    <a
                      href={(project as { repository: string }).repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-background/90 backdrop-blur border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      title="Source code"
                    >
                      <Code2 className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-2 line-clamp-2 leading-relaxed text-sm">
                  {project.description}
                </p>
                {"impact" in project && project.impact && (
                  <p className="text-primary/90 text-xs font-medium mt-2">
                    {project.impact}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
