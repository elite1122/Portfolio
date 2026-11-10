import { motion, useReducedMotion } from "framer-motion";
import { skillsData } from "../../data/skillsData";
import MotionReveal from "../Common/MotionReveal";
import { lineDraw } from "../Common/motionVariants";

/* ─── Collect all tech items for the marquee ────────────────────── */
const allTech = skillsData.flatMap((d) => [...d.applied, ...d.exploring]);

/* ─── Bento sizing map (lg grid: 12 cols) ───────────────────────── */
const bentoConfig = [
  { colSpan: "lg:col-span-7 lg:row-span-2" }, // AI & Conversational — large
  { colSpan: "lg:col-span-5" },                // Frontend Engineering
  { colSpan: "lg:col-span-5" },                // Backend Development
  { colSpan: "lg:col-span-7" },                // Data & Automation
];

/* ─── Single domain card ────────────────────────────────────────── */
const DomainCard = ({ domain, bento }) => (
  <div className={`${bento.colSpan} editorial-card !p-0 overflow-hidden border-obsidian-700/80 hover:border-obsidian-600 transition-all duration-200 shadow-xl flex flex-col h-full`}>
    {/* Domain Header Bar */}
    <div className="px-5 sm:px-6 py-3 bg-obsidian-900 border-b border-obsidian-800 flex items-center justify-between font-mono text-xs text-ivory-400">
      <span className="text-lime-accent">{domain.eyebrow}</span>
      <span className="text-ivory-500 font-medium">PRODUCTION_READY</span>
    </div>

    {/* Domain Content */}
    <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col">
      <div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-ivory-100 tracking-tight">
          {domain.category}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-ivory-400 leading-relaxed mt-1.5">
          {domain.description}
        </p>
      </div>

      {/* Applied Technologies */}
      <div className="space-y-2 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" aria-hidden="true" />
            Verified Production Stack
          </span>
          <span className="font-mono text-xs text-ivory-500">{domain.applied.length} items</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {domain.applied.map((tech) => (
            <span key={tech} className="editorial-badge text-xs hover:border-lime-accent/50 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Exploring */}
      {domain.exploring?.length > 0 && (
        <div className="pt-2 border-t border-obsidian-800/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-ivory-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full border border-ivory-500" aria-hidden="true" />
              Actively Exploring
            </span>
            <span className="font-mono text-xs text-ivory-600">{domain.exploring.length} items</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {domain.exploring.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-obsidian-900/80 border border-dashed border-obsidian-700 text-ivory-400 font-mono text-xs hover:border-ivory-500 hover:text-ivory-200 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Bottom Status Line */}
    <div className="px-6 py-3 bg-obsidian-900/60 border-t border-obsidian-800/80 font-mono text-xs text-ivory-500 flex items-center justify-between">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-lime-accent/60" aria-hidden="true" />
        PRODUCTION TESTED
      </span>
      <span>{domain.applied.length} PRODUCTION · {domain.exploring.length} EXPLORING</span>
    </div>
  </div>
);

/* ─── Tech Marquee ───────────────────────────────────────────────── */
const TechMarquee = () => {
  // Duplicate for seamless loop
  const doubled = [...allTech, ...allTech];

  return (
    <div
      className="relative overflow-hidden mt-10 py-3 border-y border-obsidian-800"
      aria-hidden="true"
    >
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />

      <div className="marquee-track gap-3">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="shrink-0 px-3 py-1 rounded-md bg-obsidian-850 border border-obsidian-700 text-ivory-400 font-mono text-xs mx-1.5"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   Skills Section
   ═══════════════════════════════════════════════════════════════════ */
const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-label="Technical Expertise"
      className="section-container border-b border-obsidian-700/60 relative"
    >
      {/* Section Header */}
      <MotionReveal>
        <div className="mb-12 sm:mb-16">
          <div className="editorial-eyebrow mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" aria-hidden="true" />
            <span>03 // Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight">
            Technical Expertise &amp; Stack Domains.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory-400 mt-2 max-w-2xl leading-relaxed">
            Technologies and tooling verified through production deployment across conversational AI
            platforms, front-office automation, and scalable full-stack web applications.
          </p>

          {/* Thin animated accent rule drawing in on reveal */}
          <motion.div
            variants={lineDraw}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className="h-[1px] bg-gradient-to-r from-lime-accent/50 via-obsidian-700 to-transparent mt-6 origin-left"
            aria-hidden="true"
          />
        </div>
      </MotionReveal>

      {/* Bento grid */}
      <MotionReveal delay={0.05}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-auto">
          {skillsData.map((domain, index) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              bento={bentoConfig[index] ?? { colSpan: "lg:col-span-6" }}
            />
          ))}
        </div>
      </MotionReveal>

      {/* Infinite tech marquee — hidden for reduced-motion */}
      {!shouldReduceMotion && <TechMarquee />}
    </section>
  );
};

export default Skills;
