const ProjectCard = ({ project, onSelect }) => {
  return (
    <article className="editorial-card !p-0 flex flex-col justify-between group hover:border-obsidian-600 transition-all duration-200 overflow-hidden shadow-lg">
      <div>
        {/* Frame Header */}
        <div className="px-4 py-2.5 bg-obsidian-900 border-b border-obsidian-800 flex items-center justify-between font-mono text-[11px] text-ivory-400">
          <span className="text-ivory-300 truncate max-w-[180px]">
            {`${project.id.toUpperCase()} // SYS`}
          </span>
          <span className="text-lime-accent text-[10px]">
            {project.category}
          </span>
        </div>

        {/* Project Screenshot Visual */}
        <div className="relative aspect-video bg-obsidian-950 overflow-hidden border-b border-obsidian-800">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-3">
          <h4 className="font-heading text-lg sm:text-xl font-bold text-ivory-100 group-hover:text-lime-accent transition-colors leading-snug">
            {project.name}
          </h4>
          <p className="font-mono text-xs text-lime-accent/80">
            {project.tagline}
          </p>
          <p className="font-sans text-xs sm:text-sm text-ivory-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-1 pt-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="editorial-badge !text-[11px]">
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="editorial-badge !text-[11px] text-ivory-500">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Controls */}
      <div className="p-5 sm:p-6 pt-0 border-t border-obsidian-800/60 mt-4 flex items-center gap-2">
        <button
          onClick={() => onSelect(project)}
          className="editorial-btn-secondary flex-1 !text-xs !py-2 font-mono text-center"
        >
          Details
        </button>

        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-obsidian-800 border border-obsidian-700 text-ivory-300 hover:text-lime-accent hover:border-obsidian-600 transition-colors"
            aria-label={`View ${project.name} source code on GitHub`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        )}

        <a
          href={project.live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-obsidian-800 border border-obsidian-700 text-ivory-300 hover:text-lime-accent hover:border-obsidian-600 transition-colors"
          aria-label={`Open ${project.name} live deployment`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
