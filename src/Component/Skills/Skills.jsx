import { skillsData } from "../../data/skillsData";
import MotionReveal from "../Common/MotionReveal";

const Skills = () => {
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
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
            <span>03 // Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight">
            Technical Expertise &amp; Stack Domains.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory-400 mt-2 max-w-2xl leading-relaxed">
            Technologies and tooling verified through production deployment across conversational AI
            platforms, front-office automation, and scalable full-stack web applications.
          </p>
        </div>
      </MotionReveal>

      {/* 2x2 Structured Domain Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillsData.map((domain, index) => (
          <MotionReveal key={domain.id} delay={index * 0.08}>
            <div
              className="editorial-card !p-0 overflow-hidden border-obsidian-700/80 hover:border-obsidian-600 transition-all duration-200 shadow-xl flex flex-col justify-between h-full"
            >
            {/* Domain Header Bar */}
            <div>
              <div className="px-5 sm:px-6 py-3 bg-obsidian-900 border-b border-obsidian-800 flex items-center justify-between font-mono text-[11px] text-ivory-400">
                <span className="text-lime-accent">{domain.eyebrow}</span>
                <span className="text-ivory-500 font-medium">PRODUCTION_READY</span>
              </div>

            {/* Domain Content */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-ivory-100 tracking-tight">
                    {domain.category}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-ivory-400 leading-relaxed mt-1.5">
                    {domain.description}
                  </p>
                </div>

                {/* Applied Technologies */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ivory-300 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
                      <span>Verified Production Stack</span>
                    </span>
                    <span className="font-mono text-[10px] text-ivory-500">
                      {`${domain.applied.length} items`}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.applied.map((tech) => (
                      <span
                        key={tech}
                        className="editorial-badge !text-xs hover:border-lime-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actively Exploring / Research */}
                {domain.exploring && domain.exploring.length > 0 && (
                  <div className="pt-2 border-t border-obsidian-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ivory-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full border border-ivory-500"></span>
                        <span>Actively Exploring / In Scope</span>
                      </span>
                      <span className="font-mono text-[10px] text-ivory-600">
                        {`${domain.exploring.length} items`}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.exploring.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-obsidian-900/80 border border-dashed border-obsidian-700 text-ivory-400 font-mono text-[11px] hover:border-ivory-500 hover:text-ivory-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Subtle Status Line */}
            <div className="px-6 py-3 bg-obsidian-900/60 border-t border-obsidian-800/80 font-mono text-[11px] text-ivory-500 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent/60"></span>
                <span>PRODUCTION TESTED</span>
              </span>
              <span>{`${domain.applied.length} PRODUCTION · ${domain.exploring.length} EXPLORING`}</span>
            </div>
          </div>
        </MotionReveal>
      ))}
      </div>
    </section>
  );
};

export default Skills;
