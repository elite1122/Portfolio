import { useState } from "react";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import MotionReveal from "../Common/MotionReveal";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Automation", "Full Stack", "Frontend"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const flagship = projectsData.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="section-container border-b border-obsidian-700/60 relative"
    >
      {/* Section Header */}
      <MotionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="editorial-eyebrow mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
              <span>01 // Selected Systems</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight">
              Production AI &amp; Full-Stack Work.
            </h2>
            <p className="font-sans text-sm sm:text-base text-ivory-400 mt-2 max-w-xl">
              Autonomous voice platforms, full-stack web applications, and verified client solutions
              engineered for production reliability.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="flex flex-wrap gap-1.5 p-1 bg-obsidian-900 border border-obsidian-700 rounded-lg self-start md:self-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-accent ${
                  activeCategory === cat
                    ? "bg-lime-muted text-lime-accent border border-lime-border font-medium shadow-sm"
                    : "text-ivory-400 hover:text-ivory-100 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* FLAGSHIP FEATURED SYSTEM: CogniDrift (Shown when "All" or "AI & Automation" is active) */}
      {(activeCategory === "All" || activeCategory === "AI & Automation") && flagship && (
        <MotionReveal delay={0.1} className="mb-14 sm:mb-20">
          <div className="editorial-card !p-0 overflow-hidden border-obsidian-700 hover:border-lime-accent/40 transition-colors shadow-2xl bg-obsidian-900/60">
            {/* Top Identity & Action Header */}
            <div className="p-6 sm:p-8 lg:p-10 border-b border-obsidian-800">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="editorial-badge-lime !text-[11px]">
                      FLAGSHIP AI PLATFORM
                    </span>
                    <span className="font-mono text-xs text-ivory-500">
                      {flagship.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-lime-accent/10 border border-lime-accent/30 font-mono text-[11px] text-lime-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse"></span>
                      PRODUCTION PLATFORM
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory-100 tracking-tight">
                    {flagship.name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-lime-accent font-medium">
                    {flagship.tagline}
                  </p>
                  <p className="font-sans text-sm sm:text-base text-ivory-400 leading-relaxed pt-1">
                    {flagship.description}
                  </p>
                </div>

                {/* Primary Flagship Actions */}
                <div className="flex sm:flex-col lg:flex-row items-center gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedProject(flagship)}
                    className="editorial-btn-primary !py-2.5 !px-5 text-xs font-mono w-full sm:w-auto"
                  >
                    <span>System Architecture</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>

                  <a
                    href={flagship.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-btn-secondary !py-2.5 !px-5 text-xs font-mono w-full sm:w-auto"
                  >
                    <span>Launch Live Site</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Expansive Full-Width Browser Mockup Viewport */}
            <div className="bg-obsidian-950 p-3 sm:p-6 lg:p-8 border-b border-obsidian-800">
              <div className="rounded-xl overflow-hidden border border-obsidian-700/90 shadow-2xl bg-obsidian-900 group">
                {/* Browser Window Header Chrome */}
                <div className="px-4 py-3 bg-obsidian-950 border-b border-obsidian-800 flex items-center justify-between font-mono text-xs text-ivory-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-accent/80 inline-block"></span>
                    <span className="ml-2 font-mono text-[11px] text-ivory-500 hidden sm:inline-block">
                      CogniDrift OS · Voice &amp; Scheduling Platform
                    </span>
                  </div>

                  {/* Centered URL Address Pill */}
                  <div className="px-4 py-1 rounded-md bg-obsidian-900 border border-obsidian-800 text-[11px] text-ivory-300 font-mono flex items-center gap-1.5 truncate max-w-[200px] sm:max-w-xs">
                    <svg
                      className="w-3 h-3 text-lime-accent shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    <span className="truncate">https://cognidrift.com</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-lime-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-ping"></span>
                    <span>200 OK</span>
                  </div>
                </div>

                {/* Wide Screenshot Display */}
                <div
                  className="relative aspect-[16/9] lg:aspect-[21/10] bg-obsidian-950 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(flagship)}
                >
                  <img
                    src={flagship.img}
                    alt="CogniDrift Autonomous AI Receptionist Platform Interface"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                  {/* Subtle blend gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Bottom Architecture Highlights & Technology Grid */}
            <div className="p-6 sm:p-8 lg:p-10 bg-obsidian-900/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: 4 Architecture Capability Cards (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
                  <span>Core Engineering &amp; Architectural Modules</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {flagship.architecturePoints?.map((pt) => (
                    <div
                      key={pt.title}
                      className="p-4 rounded-lg bg-obsidian-950/80 border border-obsidian-800 hover:border-obsidian-700 transition-colors"
                    >
                      <div className="font-mono text-xs text-lime-accent font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
                        {pt.title}
                      </div>
                      <p className="font-sans text-xs text-ivory-400 mt-1.5 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Production Tech Stack Chips (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
                  <span>Production Technology Stack</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {flagship.techStack.map((tech) => (
                    <span key={tech} className="editorial-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      )}

      {/* REGULAR PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {(activeCategory === "All"
          ? regularProjects.filter((p) => !p.featured)
          : filteredProjects
        ).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* REUSABLE TECHNICAL SYSTEM MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Project;
