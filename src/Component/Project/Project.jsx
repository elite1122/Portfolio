import { useState } from "react";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

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

      {/* FLAGSHIP FEATURED SYSTEM: CogniDrift (Shown when "All" or "AI & Automation" is active) */}
      {(activeCategory === "All" || activeCategory === "AI & Automation") && flagship && (
        <div className="mb-12 sm:mb-16">
          <div className="editorial-card !p-0 overflow-hidden border-obsidian-700 hover:border-lime-accent/40 transition-colors shadow-2xl">
            <div className="grid lg:grid-cols-12 items-stretch">
              {/* Left Column: Deep Technical Narrative (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="editorial-badge-lime !text-[11px]">
                      FLAGSHIP AI PLATFORM
                    </span>
                    <span className="font-mono text-[11px] text-ivory-500">
                      {flagship.period}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory-100 tracking-tight">
                    {flagship.name}
                  </h3>
                  <p className="font-mono text-xs text-lime-accent mt-1">
                    {flagship.tagline}
                  </p>

                  <p className="font-sans text-sm sm:text-base text-ivory-400 leading-relaxed mt-4">
                    {flagship.description}
                  </p>

                  {/* Architecture Capability Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-obsidian-800 my-6">
                    {flagship.architecturePoints?.map((pt) => (
                      <div
                        key={pt.title}
                        className="p-3 rounded-lg bg-obsidian-900 border border-obsidian-800"
                      >
                        <div className="font-mono text-xs text-ivory-200 font-semibold flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-lime-accent"></span>
                          {pt.title}
                        </div>
                        <div className="font-sans text-xs text-ivory-400 mt-0.5">
                          {pt.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {flagship.techStack.map((tech) => (
                      <span key={tech} className="editorial-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Flagship Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-obsidian-800">
                  <button
                    onClick={() => setSelectedProject(flagship)}
                    className="editorial-btn-primary !py-2.5 !px-5 text-xs font-mono"
                  >
                    <span>View Architecture &amp; Details</span>
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
                    className="editorial-btn-secondary !py-2.5 !px-5 text-xs font-mono"
                  >
                    <span>Launch Live Platform</span>
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

              {/* Right Column: Architectural Visual Frame (5 cols) */}
              <div className="lg:col-span-5 bg-obsidian-900 border-t lg:border-t-0 lg:border-l border-obsidian-800 flex flex-col">
                <div className="px-4 py-2.5 bg-obsidian-950 border-b border-obsidian-800 flex items-center justify-between font-mono text-[11px] text-ivory-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime-accent"></span>
                    <span>COGNIDRIFT // FRONT_OFFICE</span>
                  </div>
                  <span className="text-lime-accent text-[10px]">200 OK</span>
                </div>

                <div className="relative flex-1 min-h-[260px] sm:min-h-[340px] bg-obsidian-950 overflow-hidden group">
                  <img
                    src={flagship.img}
                    alt={flagship.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-40"></div>
                </div>

                <div className="p-4 bg-obsidian-900 border-t border-obsidian-800 font-mono text-[11px] text-ivory-400 flex items-center justify-between">
                  <span>URL: cognidrift.com</span>
                  <span className="text-ivory-500">VOICE + SMS + CALENDAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Project;
