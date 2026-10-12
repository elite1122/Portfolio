import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="editorial-card !p-0 max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-obsidian-900 border-obsidian-700 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 bg-obsidian-950/95 backdrop-blur-md px-6 py-4 border-b border-obsidian-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-accent"></span>
            <span className="font-mono text-xs text-lime-accent uppercase tracking-wider">
              {`${project.category} // SPECS`}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project specifications modal"
            className="p-1.5 rounded-lg text-ivory-400 hover:text-ivory-100 hover:bg-obsidian-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-accent"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3
              id="modal-project-title"
              className="font-heading text-2xl sm:text-3xl font-bold text-ivory-100"
            >
              {project.name}
            </h3>
            <p className="font-mono text-xs text-lime-accent mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Project Image Viewport */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-obsidian-700 bg-obsidian-950">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Technology Stack Grid */}
          <div className="p-4 rounded-lg bg-obsidian-850 border border-obsidian-800 space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold">
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="editorial-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold">
              System Architecture &amp; Overview
            </h4>
            <p className="font-sans text-sm sm:text-base text-ivory-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenges */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold">
              Technical Challenges &amp; Solutions
            </h4>
            <p className="font-sans text-sm text-ivory-400 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Planned Enhancements */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-lime-accent font-semibold">
              Future Roadmap &amp; Planned Scalability
            </h4>
            <p className="font-sans text-sm text-ivory-400 leading-relaxed">
              {project.improvements}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-obsidian-800">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-btn-secondary flex-1 text-center text-xs font-mono py-2.5"
              >
                View Source on GitHub
              </a>
            )}
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-primary flex-1 text-center text-xs font-mono py-2.5"
            >
              Visit Live Deployment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
