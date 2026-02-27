import { useState } from "react";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/data/portfolio";
import { Code2, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";

const INITIAL_PROJECT_COUNT = 4;

function hasValidLink(url: string | undefined): boolean {
  return !!url && url !== "#";
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.86 11.06 3 13.83 3 17h18c0-3.17-1.86-5.94-4.4-7.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  );
}

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function Projects() {
  const isMobile = useIsMobile();
  const skipScrollAnimation = isMobile;
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? FEATURED_PROJECTS : FEATURED_PROJECTS.slice(0, INITIAL_PROJECT_COUNT);
  const hasMore = FEATURED_PROJECTS.length > INITIAL_PROJECT_COUNT;

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={skipScrollAnimation ? false : { opacity: 0, y: 24 }}
          whileInView={skipScrollAnimation ? undefined : { opacity: 1, y: 0 }}
          viewport={skipScrollAnimation ? undefined : { once: true, margin: "-80px" }}
          animate={skipScrollAnimation ? { opacity: 1, y: 0 } : undefined}
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
          {projectsToShow.map((project) => (
            <motion.article
              key={project.title}
              initial={skipScrollAnimation ? false : { opacity: 0, y: 16 }}
              whileInView={skipScrollAnimation ? undefined : { opacity: 1, y: 0 }}
              viewport={skipScrollAnimation ? undefined : { once: true, amount: 0.2 }}
              animate={skipScrollAnimation ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted relative flex items-center justify-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={360}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed text-sm">
                  {project.description}
                </p>
                {(hasValidLink(project.links.android) || hasValidLink(project.links.ios) || ("repository" in project && typeof (project as { repository?: string }).repository === "string")) && (
                  <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border/50">
                    {hasValidLink(project.links.android) && (
                      <a
                        href={project.links.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/80 border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                        title="Get it on Google Play"
                      >
                        <AndroidIcon className="w-4 h-4" />
                        <span>Google Play</span>
                      </a>
                    )}
                    {hasValidLink(project.links.ios) && (
                      <a
                        href={project.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/80 border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                        title="Download on the App Store"
                      >
                        <AppStoreIcon className="w-4 h-4" />
                        <span>App Store</span>
                      </a>
                    )}
                    {"repository" in project && typeof (project as { repository?: string }).repository === "string" && (
                      <a
                        href={(project as { repository: string }).repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/80 border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                        title="View source code"
                      >
                        <Code2 className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-muted border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show more ({FEATURED_PROJECTS.length - INITIAL_PROJECT_COUNT} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
