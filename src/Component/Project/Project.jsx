import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import StackingCards from "./StackingCards";
import ViewCursor from "../Common/ViewCursor";
import MotionReveal from "../Common/MotionReveal";
import { staggerContainer, staggerChild, lineDraw, EASE } from "../Common/motionVariants";

/* ─── SVG Icons ──────────────────────────────────────────────────── */
const IconArrow = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const IconExternal = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-lime-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

/* ─── Category counts ─────────────────────────────────────────────── */
const CATEGORIES = ["All", "AI & Automation", "Full Stack", "Frontend"];

function getCategoryCounts() {
  const counts = { All: projectsData.length };
  CATEGORIES.slice(1).forEach((cat) => {
    counts[cat] = projectsData.filter((p) => p.category === cat).length;
  });
  return counts;
}

/* ─── Magnetic button hook (fine pointer only) ───────────────────── */
function useMagnet(strength = 0.3) {
  const ref = useRef(null);
  const handleMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      ref.current.style.transform = `translate(${dx}px, ${dy}px)`;
    },
    [strength]
  );
  const handleLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);
  return { ref, handleMove, handleLeave };
}

/* ─── Flagship Mockup with parallax ─────────────────────────────── */
const FlagshipMockup = ({ project, onSelect }) => {
  const shouldReduceMotion = useReducedMotion();
  const [imgLoaded, setImgLoaded] = useState(false);
  const mockupRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-20, 20]
  );

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || shouldReduceMotion) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) vid.play().catch(() => {});
        else vid.pause();
      },
      { threshold: 0.3 }
    );
    obs.observe(vid);
    return () => obs.disconnect();
  }, [shouldReduceMotion, project.id]);

  return (
    <motion.div
      ref={mockupRef}
      style={{ y }}
      className="rounded-xl overflow-hidden border border-obsidian-700/90 shadow-2xl bg-obsidian-900 group cursor-pointer"
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
      aria-label={`Open ${project.name} case study`}
    >
      {/* Browser chrome */}
      <div className="px-4 py-3 bg-obsidian-950 border-b border-obsidian-800 flex items-center justify-between font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-lime-accent/70" aria-hidden="true" />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-obsidian-900 border border-obsidian-800 text-xs text-ivory-300 max-w-[240px] truncate">
          <svg className="w-2.5 h-2.5 text-lime-accent/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <span className="truncate">{project.live_link || "cognidrift.com"}</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-lime-accent font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-ping" aria-hidden="true" />
          <span>200 OK</span>
        </div>
      </div>

      {/* Video or Screenshot */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {project.video && !shouldReduceMotion ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top"
            aria-label={`${project.name} video demonstration`}
          />
        ) : (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 bg-obsidian-900 animate-pulse" aria-hidden="true" />
            )}
            <img
              src={project.img}
              alt={`${project.name} platform interface`}
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover object-top transition-all duration-700
                group-hover:scale-[1.02]
                ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/50 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      </div>
    </motion.div>
  );
};

/* ─── Flagship Floating Tech Chips ──────────────────────────────── */
const FloatingChip = ({ tech, delay, style }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8, y: 8 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, ease: EASE, delay }}
    className="editorial-badge !text-xs absolute hidden xl:inline-flex"
    style={style}
    aria-hidden="true"
  >
    {tech}
  </motion.span>
);

/* ─── Full Flagship Section ──────────────────────────────────────── */
const FlagshipShowcase = ({ project, onSelect }) => {
  const shouldReduceMotion = useReducedMotion();
  const isFinePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches;

  const magnet1 = useMagnet(0.25);
  const magnet2 = useMagnet(0.25);

  const floatingChips = [
    { tech: "Retell SDK", delay: 0.4, style: { top: "-14px", right: "10%", zIndex: 10 } },
    { tech: "OpenAI", delay: 0.5, style: { top: "30%", right: "-48px", zIndex: 10 } },
    { tech: "Twilio", delay: 0.55, style: { bottom: "20%", right: "-44px", zIndex: 10 } },
    { tech: "Cal.com", delay: 0.6, style: { bottom: "-14px", left: "15%", zIndex: 10 } },
  ];

  return (
    <div className="editorial-card !p-0 overflow-hidden border-obsidian-700 hover:border-lime-accent/40 transition-colors duration-300 shadow-2xl bg-obsidian-900/60">
      {/* ── Identity bar ───────────────────────────────────────── */}
      <div className="p-6 sm:p-8 lg:p-10 border-b border-obsidian-800">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="editorial-badge-lime text-xs">FLAGSHIP AI PLATFORM</span>
          <span className="font-mono text-xs text-ivory-500">{project.period}</span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-lime-accent/10 border border-lime-accent/30 font-mono text-xs text-lime-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse" aria-hidden="true" />
            PRODUCTION PLATFORM
          </span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory-100 tracking-tight leading-tight">
          {project.name}
        </h3>
        <p className="font-mono text-xs sm:text-sm text-lime-accent font-medium mt-2">
          {project.tagline}
        </p>
      </div>

      {/* ── Split layout: description + mockup ─────────────────── */}
      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: description + architecture modules + CTAs */}
        <div className="space-y-6">
          <p className="font-sans text-sm sm:text-base text-ivory-400 leading-relaxed">
            {project.description}
          </p>

          {/* Architecture modules — staggered list */}
          {project.architecturePoints?.length > 0 && (
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" aria-hidden="true" />
                Core Engineering Modules
              </div>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="space-y-2"
                aria-label="Architecture highlights"
              >
                {project.architecturePoints.map((pt) => (
                  <motion.li
                    key={pt.title}
                    variants={shouldReduceMotion ? undefined : staggerChild}
                    className="flex items-start gap-3 p-3 rounded-lg bg-obsidian-950/60 border border-obsidian-800 hover:border-obsidian-700 transition-colors"
                  >
                    <IconCheck />
                    <div>
                      <div className="font-mono text-xs text-lime-accent font-semibold">{pt.title}</div>
                      <p className="font-sans text-xs text-ivory-400 mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}

          {/* CTA buttons with magnetic hover */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div
              ref={magnet1.ref}
              onMouseMove={isFinePointer && !shouldReduceMotion ? magnet1.handleMove : undefined}
              onMouseLeave={magnet1.handleLeave}
              style={{ transition: "transform 0.2s ease" }}
            >
              <button
                onClick={() => onSelect(project)}
                className="editorial-btn-primary min-h-[44px] !text-xs font-mono"
              >
                <span>System Architecture</span>
                <IconArrow />
              </button>
            </div>

            {project.live_link && (
              <div
                ref={magnet2.ref}
                onMouseMove={isFinePointer && !shouldReduceMotion ? magnet2.handleMove : undefined}
                onMouseLeave={magnet2.handleLeave}
                style={{ transition: "transform 0.2s ease" }}
              >
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-btn-secondary min-h-[44px] !text-xs font-mono"
                >
                  <span>Launch Live Site</span>
                  <IconExternal />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right: browser-frame mockup with floating chips */}
        <div className="relative">
          <FlagshipMockup project={project} onSelect={onSelect} />
          {!shouldReduceMotion &&
            floatingChips.map((chip) => (
              <FloatingChip key={chip.tech} {...chip} />
            ))}
        </div>
      </div>

      {/* ── Tech stack footer ──────────────────────────────────── */}
      <div className="px-6 sm:px-8 lg:px-10 py-5 border-t border-obsidian-800 bg-obsidian-900/40">
        <div className="font-mono text-xs uppercase tracking-wider text-ivory-500 mb-3">
          Production Stack
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="editorial-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   Filter Bar with animated sliding pill
   ═══════════════════════════════════════════════════════════════════ */
const FilterBar = ({ active, onChange }) => {
  const categoryCounts = getCategoryCounts();
  const listRef = useRef(null);

  // Keyboard navigation: arrow keys move between tabs
  const handleKeyDown = (e, idx) => {
    const tabs = Array.from(listRef.current?.querySelectorAll("[role='tab']") ?? []);
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      next = (idx + 1) % CATEGORIES.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      next = (idx - 1 + CATEGORIES.length) % CATEGORIES.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      next = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      next = CATEGORIES.length - 1;
    }
    if (next >= 0) {
      tabs[next]?.focus();
      onChange(CATEGORIES[next]);
    }
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-1 p-1 bg-obsidian-900 border border-obsidian-700 rounded-xl self-start md:self-auto"
    >
      {CATEGORIES.map((cat, idx) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(cat)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-1 focus-visible:ring-offset-obsidian-900
              min-h-[36px] flex items-center gap-1.5
              ${isActive ? "text-obsidian-950 font-semibold" : "text-ivory-400 hover:text-ivory-100"}`}
          >
            {/* Sliding pill background */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-lg bg-lime-accent"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10">{cat}</span>
            {/* Count badge */}
            <span
              className={`relative z-10 px-1.5 py-0.5 rounded text-xs font-bold leading-none
                ${isActive ? "bg-obsidian-950/20 text-obsidian-950" : "bg-obsidian-800 text-ivory-500"}`}
            >
              {categoryCounts[cat]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   Main Project Section
   ═══════════════════════════════════════════════════════════════════ */
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const flagship = projectsData.find((p) => p.featured);

  // For the grid: when "All" is active show non-featured only (flagship shown above).
  // When filtering, include all matching projects (even flagship for its category).
  const gridProjects =
    activeCategory === "All"
      ? projectsData.filter((p) => !p.featured)
      : projectsData.filter((p) => p.category === activeCategory);

  // Assign global index across full dataset (for numbering)
  const nonFeaturedAll = projectsData.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="section-container border-b border-obsidian-700/60 relative"
    >
      {/* ── Section header ──────────────────────────────────────── */}
      <MotionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="editorial-eyebrow mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" aria-hidden="true" />
              <span>01 // Selected Systems</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight">
              Production AI &amp; Full-Stack Work.
            </h2>
            <p className="font-sans text-sm sm:text-base text-ivory-400 mt-2 max-w-xl leading-relaxed">
              Autonomous voice platforms, full-stack web applications, and verified client solutions
              engineered for production reliability.
            </p>
          </div>

          {/* Filter bar */}
          <FilterBar active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Thin animated accent rule drawing in on reveal */}
        <motion.div
          variants={lineDraw}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="h-[1px] bg-gradient-to-r from-lime-accent/50 via-obsidian-700 to-transparent mb-12 sm:mb-16 origin-left"
          aria-hidden="true"
        />
      </MotionReveal>

      {/* ── Flagship showcase ──────────────────────────────────── */}
      <AnimatePresence>
        {(activeCategory === "All" || activeCategory === "AI & Automation") && flagship && (
          <motion.div
            key="flagship"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-14 sm:mb-20"
          >
            <FlagshipShowcase project={flagship} onSelect={setSelectedProject} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Grid section heading when filtered ────────────────── */}
      {activeCategory !== "All" && gridProjects.length > 0 && (
        <div className="font-mono text-xs uppercase tracking-wider text-ivory-500 mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" aria-hidden="true" />
          <span>{activeCategory} — {gridProjects.length} project{gridProjects.length !== 1 ? "s" : ""}</span>
        </div>
      )}

      {/* ── Project grid with animated re-flow ────────────────── */}
      {/* Mobile/tablet: standard 2-col grid with AnimatePresence re-flow */}
      <motion.div
        layout
        className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {gridProjects.map((project) => {
            const globalIdx = nonFeaturedAll.findIndex((p) => p.id === project.id);
            const displayIdx = globalIdx >= 0 ? globalIdx : 0;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
                index={displayIdx}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Desktop: scroll-driven stacking cards (single-column, sticky) */}
      <div className="hidden lg:block">
        <AnimatePresence mode="popLayout">
          <StackingCards key={activeCategory}>
            {gridProjects.map((project) => {
              const globalIdx = nonFeaturedAll.findIndex((p) => p.id === project.id);
              const displayIdx = globalIdx >= 0 ? globalIdx : 0;
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  index={displayIdx}
                />
              );
            })}
          </StackingCards>
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {gridProjects.length === 0 && (
        <div className="col-span-full text-center py-16 text-ivory-500 font-mono text-sm">
          No projects in this category yet.
        </div>
      )}

      {/* ── Project detail (shared-element) ────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            projects={projectsData}
            currentIndex={projectsData.findIndex((p) => p.id === selectedProject.id)}
            onNavigate={(p) => setSelectedProject(p)}
          />
        )}
      </AnimatePresence>

      {/* View cursor bubble — desktop only, portal to body */}
      <ViewCursor />
    </section>
  );
};

export default Project;
