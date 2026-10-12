import { educationData } from "../../data/educationData";
import MotionReveal from "../Common/MotionReveal";

const Education = () => {
  return (
    <section
      id="education"
      aria-label="Academic Education and Certifications"
      className="section-container border-b border-obsidian-700/60 relative"
    >
      {/* Section Header */}
      <MotionReveal>
        <div className="mb-12 sm:mb-16">
          <div className="editorial-eyebrow mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
            <span>05 // Academics &amp; Qualifications</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight">
            Academic Foundation &amp; Credentials.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory-400 mt-2 max-w-2xl leading-relaxed">
            Undergraduate degree in Computer Science &amp; Engineering, proven academic consistency,
            professional certifications, and language capabilities.
          </p>
        </div>
      </MotionReveal>

      {/* Degrees Timeline List */}
      <div className="space-y-6 mb-12 sm:mb-16">
        {educationData.degrees.map((edu, index) => (
          <MotionReveal key={edu.degree} delay={index * 0.08}>
            <div
              className="editorial-card !p-0 overflow-hidden border-obsidian-700/80 hover:border-obsidian-600 transition-colors shadow-lg"
            >
            {/* Header Telemetry Bar */}
            <div className="px-5 sm:px-6 py-3 bg-obsidian-900 border-b border-obsidian-800 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-ivory-400">
              <span className="text-lime-accent font-medium">
                {`DEGREE 0${index + 1} // ${edu.level.toUpperCase()}`}
              </span>
              <span className="text-ivory-500">{edu.period}</span>
            </div>

            {/* Degree Content */}
            <div className="p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-ivory-100 tracking-tight">
                    {edu.degree}
                  </h3>
                  <span className="editorial-badge-lime !text-[11px] font-mono">
                    {edu.grade}
                  </span>
                </div>
                <div className="font-mono text-xs text-ivory-300">
                  {edu.institution}
                  <span className="text-ivory-500 ml-2">/ {edu.location}</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-ivory-400 leading-relaxed max-w-3xl pt-1">
                  {edu.description}
                </p>
              </div>
            </div>
            </div>
          </MotionReveal>
        ))}
      </div>

      {/* Certifications & Languages Grid */}
      <MotionReveal delay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Certifications Card */}
        <div className="editorial-card !p-0 overflow-hidden border-obsidian-700/80 flex flex-col justify-between">
          <div>
            <div className="px-5 sm:px-6 py-3 bg-obsidian-900 border-b border-obsidian-800 font-mono text-[11px] text-lime-accent uppercase tracking-wider flex items-center justify-between">
              <span>Verified Certification</span>
              <span className="text-ivory-500">PROGRAMMING HERO</span>
            </div>
            <div className="p-6 space-y-4">
              {educationData.certifications.map((cert) => (
                <div key={cert.title} className="space-y-3">
                  <div>
                    <h4 className="font-heading text-lg font-bold text-ivory-100">
                      {cert.title}
                    </h4>
                    <div className="font-mono text-xs text-lime-accent/90 mt-0.5">
                      {cert.issuer} · <span className="text-ivory-500">{cert.period}</span>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] text-ivory-400">
                    Curriculum Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="editorial-badge !text-[11px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 py-2.5 bg-obsidian-900/60 border-t border-obsidian-800/80 font-mono text-[10px] text-ivory-500">
            COMPLETED // CREDENTIAL_VERIFIED
          </div>
        </div>

        {/* Languages Card */}
        <div className="editorial-card !p-0 overflow-hidden border-obsidian-700/80 flex flex-col justify-between">
          <div>
            <div className="px-5 sm:px-6 py-3 bg-obsidian-900 border-b border-obsidian-800 font-mono text-[11px] text-lime-accent uppercase tracking-wider flex items-center justify-between">
              <span>Language Proficiencies</span>
              <span className="text-ivory-500">MULTILINGUAL</span>
            </div>
            <div className="p-6 space-y-3">
              {educationData.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-3 rounded-lg bg-obsidian-900 border border-obsidian-800 flex items-center justify-between"
                >
                  <div>
                    <div className="font-heading font-bold text-sm text-ivory-100">
                      {lang.name}
                    </div>
                    <div className="font-sans text-xs text-ivory-400 mt-0.5">
                      {lang.proficiency}
                    </div>
                  </div>
                  <span className="editorial-badge !text-[10px] font-mono">
                    {lang.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 py-2.5 bg-obsidian-900/60 border-t border-obsidian-800/80 font-mono text-[10px] text-ivory-500">
            COMMUNICATION // GLOBAL_TEAM_READY
          </div>
        </div>
      </div>
      </MotionReveal>
    </section>
  );
};

export default Education;