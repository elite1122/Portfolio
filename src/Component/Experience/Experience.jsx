import { experienceData } from "../../data/experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="section-container border-b border-obsidian-700/60 relative"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="editorial-eyebrow mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
          <span>02 // Chronology</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight">
          Professional Experience &amp; Tenures.
        </h2>
        <p className="font-sans text-sm sm:text-base text-ivory-400 mt-2 max-w-2xl leading-relaxed">
          Verified industry tenure engineering autonomous voice AI systems, conversational
          receptionists, LLM integrations, and modern full-stack web applications.
        </p>
      </div>

      {/* Structured Editorial Timeline */}
      <div className="space-y-8 lg:space-y-10">
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            className="editorial-card !p-0 overflow-hidden border-obsidian-700/80 hover:border-obsidian-600 transition-all duration-200 shadow-xl"
          >
            {/* Header Telemetry Row */}
            <div className="px-5 sm:px-8 py-3.5 bg-obsidian-900 border-b border-obsidian-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-ivory-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-accent"></span>
                <span className="text-ivory-200 font-semibold uppercase tracking-wider">
                  {`ROLE 0${index + 1} // ${exp.company.toUpperCase()}`}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-lime-accent font-medium">
                  {exp.period}
                </span>
                <span className="text-obsidian-600">/</span>
                <span className="text-ivory-500">
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-ivory-100 tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm text-lime-accent font-medium mt-1">
                    {exp.company}
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-obsidian-900 border border-obsidian-800 text-[11px] font-mono text-ivory-400 self-start sm:self-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-ivory-500"></span>
                  <span>TENURE CONCLUDED</span>
                </div>
              </div>

              {/* High-level Summary */}
              <p className="font-sans text-sm sm:text-base text-ivory-300 leading-relaxed max-w-3xl">
                {exp.summary}
              </p>

              {/* Responsibilities Bullets */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs uppercase tracking-wider text-ivory-400 font-semibold">
                  Core Engineering Responsibilities:
                </div>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-ivory-400 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-accent mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Chips */}
              <div className="pt-4 border-t border-obsidian-800/80">
                <div className="font-mono text-[11px] uppercase tracking-wider text-ivory-500 mb-2">
                  Key Technologies &amp; Frameworks:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="editorial-badge !text-[11px] hover:border-lime-accent/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
