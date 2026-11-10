import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../Common/motionVariants";

/* ─── Icons ──────────────────────────────────────────────────────── */
const IconClose = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const IconLeft = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
const IconRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);
const IconGitHub = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const IconExternal = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-lime-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

/* ─── Focus trap ─────────────────────────────────────────────────── */
function useFocusTrap(containerRef, active) {
  useEffect(() => {
    if (!active || !containerRef.current) return;
    const el = containerRef.current;
    const sel = 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])';
    const getFocusable = () => Array.from(el.querySelectorAll(sel));
    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      const nodes = getFocusable();
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    el.addEventListener("keydown", handleTab);
    // Auto-focus first focusable
    const t = setTimeout(() => getFocusable()[0]?.focus(), 60);
    return () => { el.removeEventListener("keydown", handleTab); clearTimeout(t); };
  }, [active, containerRef]);
}

/* ─── Gallery ────────────────────────────────────────────────────── */
const Gallery = ({ images }) => {
  const [idx, setIdx] = useState(0);
  const touchX = useRef(null);
  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const h = (e) => { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [images.length, prev, next]);

  if (!images?.length) return null;

  return (
    <div className="space-y-3">
      <div className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold">
        {images.length > 1 ? `Gallery — ${idx + 1} / ${images.length}` : "Project Interface"}
      </div>
      <div
        className="relative aspect-video rounded-lg overflow-hidden border border-obsidian-700 bg-obsidian-950"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current == null || images.length <= 1) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx > 48) prev(); else if (dx < -48) next();
          touchX.current = null;
        }}
      >
        <img src={images[idx]} alt={`Gallery view ${idx + 1} of ${images.length}`} loading="lazy" width={1280} height={720}
          className="w-full h-full object-cover object-top" />
        {images.length > 1 && (
          <>
            <button onClick={prev} aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-obsidian-950/70 text-ivory-200 hover:text-lime-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent">
              <IconLeft />
            </button>
            <button onClick={next} aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-obsidian-950/70 text-ivory-200 hover:text-lime-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent">
              <IconRight />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-1.5 justify-center" aria-label="Gallery navigation">
          {images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Image ${i + 1}`} aria-current={i === idx}
              className={`w-2 h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent ${i === idx ? "bg-lime-accent scale-125" : "bg-obsidian-700 hover:bg-obsidian-600"}`} />
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   ProjectDetail
   ═══════════════════════════════════════════════════════════════════ */
const ProjectDetail = ({ project, onClose, projects = [], currentIndex = 0, onNavigate, triggerRef }) => {
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef(null);
  const videoRef = useRef(null);

  useFocusTrap(dialogRef, true);

  /* Scroll lock */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* ESC key */
  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => triggerRef?.current?.focus(), 60);
  }, [onClose, triggerRef]);

  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [handleClose]);

  /* Video in-view autoplay */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || shouldReduceMotion) return;
    const obs = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? vid.play().catch(() => {}) : vid.pause(); },
      { threshold: 0.3 }
    );
    obs.observe(vid);
    return () => obs.disconnect();
  }, [shouldReduceMotion, project.id]);

  const prevP = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextP = projects[(currentIndex + 1) % projects.length];

  /* layoutId keys — omit when reduced motion to skip shared-element */
  const imgId = shouldReduceMotion ? undefined : `img-${project.id}`;
  const titleId = shouldReduceMotion ? undefined : `title-${project.id}`;

  const panelMotion = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } }
    : { initial: { opacity: 0, y: 32, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 24 }, transition: { duration: 0.42, ease: EASE } };

  const content = (
    /* Backdrop */
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-obsidian-950/88 backdrop-blur-md"
      onClick={handleClose}
      role="presentation"
    >
      {/* Panel */}
      <motion.div
        ref={dialogRef}
        {...panelMotion}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        className="relative w-full sm:max-w-3xl lg:max-w-4xl max-h-[92vh] flex flex-col
                   bg-obsidian-900 border border-obsidian-700 shadow-2xl
                   rounded-t-2xl sm:rounded-2xl overflow-hidden"
      >
        {/* Mobile drag handle */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ top: 0, bottom: 0.6 }}
          onDragEnd={(_, info) => {
            if (info.offset.y > 60 || info.velocity.y > 300) handleClose();
          }}
          className="sm:hidden flex justify-center pt-3 pb-2 shrink-0 cursor-grab active:cursor-grabbing touch-none"
          aria-label="Drag down to close"
        >
          <div className="w-12 h-1.5 rounded-full bg-obsidian-700 active:bg-lime-accent/80 transition-colors" />
        </motion.div>

        {/* Sticky top bar */}
        <div className="shrink-0 bg-obsidian-950/95 backdrop-blur-md px-5 sm:px-8 py-3 border-b border-obsidian-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-lime-accent shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs text-lime-accent uppercase tracking-wider truncate">
              {project.category}{" // Case Study"}
            </span>
          </div>
          <button onClick={handleClose} aria-label="Close case study"
            className="shrink-0 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-ivory-400 hover:text-ivory-100 hover:bg-obsidian-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent">
            <IconClose />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 overscroll-contain">

          {/* Hero */}
          <div className="bg-obsidian-950 p-4 sm:p-6 border-b border-obsidian-800">
            <div className="rounded-xl overflow-hidden border border-obsidian-700/80 shadow-xl">
              {/* Browser chrome */}
              <div className="px-4 py-2 bg-obsidian-900 border-b border-obsidian-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/70" aria-hidden="true" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/70" aria-hidden="true" />
                  <span className="w-2 h-2 rounded-full bg-lime-accent/70" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-obsidian-950 border border-obsidian-800 font-mono text-xs text-ivory-400 max-w-[200px] sm:max-w-xs truncate">
                  <svg className="w-2.5 h-2.5 text-lime-accent/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span className="truncate">{project.live_link ? project.live_link.replace(/^https?:\/\//, "") : `${project.id}.dev`}</span>
                </div>
                <div className="w-6" aria-hidden="true" />
              </div>
              {/* Image or video */}
              <div className="relative aspect-video bg-obsidian-950 overflow-hidden">
                {project.video && !shouldReduceMotion ? (
                  <video ref={videoRef} src={project.video} muted loop playsInline
                    className="w-full h-full object-cover object-top"
                    aria-label={`${project.name} demo`} />
                ) : (
                  <motion.img layoutId={imgId} src={project.img}
                    alt={`${project.name} interface`} loading="lazy" width={1280} height={720}
                    className="w-full h-full object-cover object-top" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/30 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Case-study body */}
          <div className="p-5 sm:p-8 space-y-7">

            {/* Title */}
            <div>
              <motion.h3 id="detail-title" layoutId={titleId}
                className="font-heading text-2xl sm:text-3xl font-bold text-ivory-100 tracking-tight leading-tight">
                {project.name}
              </motion.h3>
              <p className="font-mono text-xs sm:text-sm text-lime-accent mt-2 font-medium">{project.tagline}</p>
              {project.period && <p className="font-mono text-xs text-ivory-500 mt-1">{project.period}</p>}
            </div>

            {/* Overview */}
            <section aria-label="Project overview">
              <h4 className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold mb-2">Overview</h4>
              <p className="font-sans text-sm sm:text-base text-ivory-300 leading-relaxed">{project.description}</p>
            </section>

            {/* Optional: Problem */}
            {project.problem && (
              <section aria-label="Problem">
                <div className="p-4 rounded-lg border border-obsidian-700 bg-obsidian-850/60">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ivory-400 font-semibold mb-2">Problem</h4>
                  <p className="font-sans text-sm text-ivory-300 leading-relaxed">{project.problem}</p>
                </div>
              </section>
            )}

            {/* Optional: Solution */}
            {project.solution && (
              <section aria-label="Solution">
                <div className="p-4 rounded-lg border border-lime-border bg-lime-muted">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold mb-2">Solution</h4>
                  <p className="font-sans text-sm text-ivory-300 leading-relaxed">{project.solution}</p>
                </div>
              </section>
            )}

            {/* Architecture modules */}
            {project.architecturePoints?.length > 0 && (
              <section aria-label="Core architecture">
                <h4 className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold mb-3">Core Architecture</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architecturePoints.map((pt) => (
                    <div key={pt.title} className="p-3.5 rounded-lg bg-obsidian-850 border border-obsidian-800 hover:border-obsidian-700 transition-colors">
                      <div className="flex items-start gap-2">
                        <span className="mt-0.5"><IconCheck /></span>
                        <div>
                          <div className="font-mono text-xs text-lime-accent font-semibold">{pt.title}</div>
                          <p className="font-sans text-xs text-ivory-400 mt-1 leading-relaxed">{pt.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Stack */}
            <section aria-label="Technology stack">
              <div className="p-4 rounded-lg bg-obsidian-850 border border-obsidian-800">
                <h4 className="font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold mb-2.5">Technology Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => <span key={t} className="editorial-badge text-xs">{t}</span>)}
                </div>
              </div>
            </section>

            {/* Optional: Result */}
            {project.result && (
              <section aria-label="Result">
                <div className="p-4 rounded-lg border border-lime-border bg-lime-muted">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" aria-hidden="true" /> Result
                  </h4>
                  <p className="font-sans text-sm text-ivory-100 font-medium leading-relaxed">{project.result}</p>
                </div>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section aria-label="Technical challenges">
                <h4 className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold mb-2">Technical Challenges</h4>
                <p className="font-sans text-sm text-ivory-400 leading-relaxed">{project.challenges}</p>
              </section>
            )}

            {/* Improvements */}
            {project.improvements && (
              <section aria-label="Future roadmap">
                <h4 className="font-mono text-xs uppercase tracking-wider text-ivory-400 font-semibold mb-2">Future Roadmap</h4>
                <p className="font-sans text-sm text-ivory-400 leading-relaxed">{project.improvements}</p>
              </section>
            )}

            {/* Gallery */}
            {project.gallery?.length > 0 && <Gallery images={project.gallery} />}

            {/* Prev / Next */}
            {projects.length > 1 && (
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-obsidian-800">
                <button onClick={() => onNavigate(prevP)}
                  className="flex items-center gap-2 font-mono text-xs text-ivory-400 hover:text-lime-accent transition-colors min-h-[44px] px-3 rounded-lg hover:bg-obsidian-850 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent">
                  <IconLeft />
                  <span className="hidden sm:inline truncate max-w-[140px]">{prevP?.name?.split("—")[0]?.trim() ?? "Prev"}</span>
                  <span className="sm:hidden">Prev</span>
                </button>
                <span className="font-mono text-xs text-ivory-500 shrink-0">{currentIndex + 1} / {projects.length}</span>
                <button onClick={() => onNavigate(nextP)}
                  className="flex items-center gap-2 font-mono text-xs text-ivory-400 hover:text-lime-accent transition-colors min-h-[44px] px-3 rounded-lg hover:bg-obsidian-850 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent">
                  <span className="hidden sm:inline truncate max-w-[140px]">{nextP?.name?.split("—")[0]?.trim() ?? "Next"}</span>
                  <span className="sm:hidden">Next</span>
                  <IconRight />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sticky footer actions */}
        <div className="shrink-0 px-5 sm:px-8 py-4 border-t border-obsidian-800 bg-obsidian-950/80 backdrop-blur-sm flex flex-wrap gap-3">
          {project.github_link && (
            <a href={project.github_link} target="_blank" rel="noopener noreferrer"
              className="editorial-btn-secondary flex-1 text-center text-xs font-mono min-h-[44px] flex items-center justify-center gap-2">
              <IconGitHub /> View Source
            </a>
          )}
          {project.live_link && (
            <a href={project.live_link} target="_blank" rel="noopener noreferrer"
              className="editorial-btn-primary flex-1 text-center text-xs font-mono min-h-[44px] flex items-center justify-center gap-2">
              <IconExternal /> Live Site
            </a>
          )}
          {!project.github_link && !project.live_link && (
            <span className="font-mono text-xs text-ivory-500 italic">No external links available.</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(content, document.body);
};

export default ProjectDetail;
