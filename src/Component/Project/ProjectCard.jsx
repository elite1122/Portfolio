import { useState, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cardItem } from "../Common/motionVariants";

/* ─── SVG Icons ──────────────────────────────────────────────────── */
const IconGitHub = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const IconExternal = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const IconArrow = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

/* ─── Spotlight border hook ──────────────────────────────────────── */
function useSpotlight(ref) {
  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ref.current.style.setProperty("--sx", `${x}%`);
      ref.current.style.setProperty("--sy", `${y}%`);
    },
    [ref]
  );
  return handleMouseMove;
}

/* ─── Tilt hook (fine pointer only) ─────────────────────────────── */
function useTilt(ref, enabled) {
  const handleMouseMove = useCallback(
    (e) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const maxDeg = 5;
      ref.current.style.transform = `perspective(900px) rotateY(${dx * maxDeg}deg) rotateX(${-dy * maxDeg}deg)`;
    },
    [enabled, ref]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "";
  }, [ref]);

  return { handleMouseMove, handleMouseLeave };
}

/* ═══════════════════════════════════════════════════════════════════
   ProjectCard
   ═══════════════════════════════════════════════════════════════════ */
const ProjectCard = ({ project, onSelect, index = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  // Determine if this device has a fine pointer (mouse, not touch)
  const isFinePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches;

  const spotlightHandler = useSpotlight(cardRef);
  const { handleMouseMove: tiltMove, handleMouseLeave: tiltLeave } = useTilt(
    cardRef,
    isFinePointer && !shouldReduceMotion
  );

  const onMouseMove = (e) => {
    spotlightHandler(e);
    tiltMove(e);
  };

  const onMouseLeave = () => {
    tiltLeave();
    setHovered(false);
  };

  // Format index as 2-digit string
  const indexLabel = String(index + 1).padStart(2, "0");

  // Clamp tech chips to max 4 visible
  const visibleTech = project.techStack.slice(0, 4);
  const extraTech = project.techStack.length - 4;

  // URL to show in browser bar
  const displayUrl = project.live_link
    ? project.live_link.replace(/^https?:\/\//, "")
    : `${project.id}.dev`;

  return (
    <motion.article
      ref={cardRef}
      variants={cardItem}
      layout
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseMove={shouldReduceMotion ? undefined : onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => setHovered(true)}
      className="group relative flex flex-col bg-obsidian-850 rounded-xl overflow-hidden
                 border border-obsidian-700/80
                 transition-colors duration-300
                 hover:border-lime-accent/30
                 shadow-lg hover:shadow-2xl
                 cursor-pointer
                 focus-within:ring-2 focus-within:ring-lime-accent focus-within:ring-offset-2 focus-within:ring-offset-obsidian-950"
      style={{
        /* Spotlight border radial gradient tracked by mouse */
        "--sx": "50%",
        "--sy": "50%",
        backgroundImage: hovered && !shouldReduceMotion
          ? "radial-gradient(300px circle at var(--sx) var(--sy), rgba(198,241,53,0.06), transparent 70%)"
          : "none",
        willChange: "transform",
        transition: "transform 0.15s ease, border-color 0.3s, box-shadow 0.3s, background-image 0.1s",
      }}
      aria-label={`${project.name} — ${project.category}`}
      data-cursor-view="true"
    >
      {/* ── Large background index number ──────────────────────── */}
      <span
        className="absolute top-3 left-3 z-10 font-mono text-5xl font-bold leading-none select-none pointer-events-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px rgba(198,241,53,0.18)",
          letterSpacing: "-0.04em",
        }}
        aria-hidden="true"
      >
        {indexLabel}
      </span>

      {/* ── Browser chrome header ──────────────────────────────── */}
      <div className="px-4 py-2.5 bg-obsidian-900 border-b border-obsidian-800 flex items-center justify-between gap-3 font-mono z-10">
        {/* Traffic-light dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-lime-accent/70" aria-hidden="true" />
        </div>

        {/* URL pill */}
        <div className="flex-1 flex items-center gap-1.5 px-3 py-1 rounded-md bg-obsidian-950 border border-obsidian-800 min-w-0">
          <svg className="w-2.5 h-2.5 text-lime-accent/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <span className="text-[11px] text-ivory-400 truncate">{displayUrl}</span>
        </div>

        {/* Category badge */}
        <span className="shrink-0 px-2 py-0.5 rounded bg-lime-muted border border-lime-border text-lime-accent font-mono text-[11px] font-medium whitespace-nowrap">
          {project.category}
        </span>
      </div>

      {/* ── Thumbnail ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        {/* Skeleton / blur-up placeholder */}
        {!imgLoaded && (
          <div
            className="absolute inset-0 bg-obsidian-900 animate-pulse"
            aria-hidden="true"
          />
        )}

        <img
          src={project.img}
          alt={`${project.name} application interface screenshot`}
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover object-top transition-all duration-700
            ${shouldReduceMotion ? "" : "group-hover:scale-[1.04]"}
            ${imgLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Dark gradient overlay for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-obsidian-950/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* "View case study" label — slides up on hover */}
        <div
          className={`absolute bottom-0 inset-x-0 flex items-center justify-center gap-2 py-3
            font-mono text-xs font-medium text-lime-accent tracking-wider uppercase
            transition-all duration-300 ease-out
            ${hovered && !shouldReduceMotion ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          aria-hidden="true"
        >
          <span>View case study</span>
          <motion.span
            animate={hovered && !shouldReduceMotion ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconArrow />
          </motion.span>
        </div>
      </div>

      {/* ── Card body ─────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Project name */}
        <h4 className="font-heading text-base sm:text-lg font-bold text-ivory-100 group-hover:text-lime-accent transition-colors duration-200 leading-snug">
          {project.name}
        </h4>

        {/* Tagline */}
        <p className="font-mono text-xs text-lime-accent/80 leading-relaxed">
          {project.tagline}
        </p>

        {/* Description — clamped */}
        <p className="font-sans text-sm text-ivory-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {visibleTech.map((tech) => (
            <span key={tech} className="editorial-badge text-xs">
              {tech}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="editorial-badge text-xs text-ivory-500">
              +{extraTech}
            </span>
          )}
        </div>
      </div>

      {/* ── Action row ────────────────────────────────────────── */}
      <div className="px-5 pb-5 pt-0 flex items-center gap-2">
        <button
          onClick={() => onSelect(project)}
          className="flex-1 min-h-[44px] editorial-btn-secondary !text-xs !py-2 font-mono text-center
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-850"
        >
          Details
        </button>

        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} source code on GitHub`}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg
                       bg-obsidian-800 border border-obsidian-700
                       text-ivory-300 hover:text-lime-accent hover:border-obsidian-600
                       transition-colors duration-150
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-850"
          >
            <IconGitHub />
          </a>
        )}

        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} live deployment`}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg
                       bg-obsidian-800 border border-obsidian-700
                       text-ivory-300 hover:text-lime-accent hover:border-obsidian-600
                       transition-colors duration-150
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-850"
          >
            <IconExternal />
          </a>
        )}
      </div>

      {/* ── 1px lime left accent on hover ─────────────────────── */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-lime-accent rounded-l-xl
          transition-opacity duration-300
          ${hovered && !shouldReduceMotion ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />
    </motion.article>
  );
};

export default ProjectCard;
