import { Link } from "react-scroll";
import eliteProfile from "../../assets/Elite.png";
import Type from "../Other/Type";
import MotionReveal from "../Common/MotionReveal";

const Banner = () => {
  const driveLink =
    "https://drive.google.com/file/d/1q8LywmTilOJTShI9wAiqfk7CN81Za3_1/view?usp=sharing";

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/elite1122",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rzelite/",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/rz_elite_",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/_rz.elite_/",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      aria-label="Hero Overview"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 border-b border-obsidian-700/60 overflow-hidden"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-lime-muted rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-obsidian-800 rounded-full blur-3xl"></div>
      </div>

      <div className="editorial-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Positioning & Content (7 cols) */}
          <MotionReveal className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Live Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-obsidian-900 border border-obsidian-700/80 text-ivory-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-accent"></span>
              </span>
              <span className="text-lime-accent font-medium">Available for opportunities</span>
              <span className="text-obsidian-600">/</span>
              <span className="text-ivory-400 hidden sm:inline">Dhaka, Bangladesh</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-ivory-400">
                Md Rasheduzzaman Elite
              </p>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-ivory-100 leading-[1.06]">
                Architecting{" "}
                <span className="text-lime-accent">Conversational AI</span>{" "}
                <span className="font-editorial-serif italic font-normal text-ivory-300">
                  &amp; Modern Web Platforms.
                </span>
              </h1>
            </div>

            {/* Dynamic Role Sub-heading */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base lg:text-lg text-ivory-300 font-sans">
              <span className="text-ivory-400 font-mono text-xs uppercase tracking-wider">
                Focus:
              </span>
              <Type />
            </div>

            {/* Value Proposition Description */}
            <p className="font-sans text-base sm:text-lg text-ivory-400 leading-relaxed max-w-2xl">
              AI Engineer and Full-Stack Developer specializing in autonomous voice AI platforms,
              low-latency speech pipelines, LLM orchestrations, and production-grade web systems.
              Bridging real-time communication protocols with scalable Node.js, Python, and React
              architectures.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <Link
                to="projects"
                smooth={true}
                duration={450}
                offset={-80}
                className="editorial-btn-primary cursor-pointer !py-3 !px-6 text-sm"
              >
                <span>Explore Projects</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={450}
                offset={-80}
                className="editorial-btn-secondary cursor-pointer !py-3 !px-6 text-sm font-mono"
              >
                Get in Touch
              </Link>

              <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-mono text-ivory-400 hover:text-lime-accent transition-colors border border-transparent hover:border-obsidian-700"
                aria-label="View verified PDF resume on Google Drive"
              >
                <span>View Resume (PDF)</span>
                <svg
                  className="w-3.5 h-3.5"
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

            {/* Verified Credentials Telemetry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 sm:pt-6 border-t border-obsidian-800">
              <div className="p-3.5 rounded-lg bg-obsidian-900/80 border border-obsidian-800">
                <div className="font-mono text-[11px] text-lime-accent uppercase tracking-wider">
                  CogniDrift
                </div>
                <div className="font-sans text-xs text-ivory-300 font-medium mt-0.5">
                  AI Engineer
                </div>
                <div className="font-mono text-[10px] text-ivory-500 mt-1">
                  Voice AI &amp; Receptionists
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-obsidian-900/80 border border-obsidian-800">
                <div className="font-mono text-[11px] text-lime-accent uppercase tracking-wider">
                  Developer World
                </div>
                <div className="font-sans text-xs text-ivory-300 font-medium mt-0.5">
                  AI Engineer
                </div>
                <div className="font-mono text-[10px] text-ivory-500 mt-1">
                  STT/TTS &amp; Calling Agents
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-obsidian-900/80 border border-obsidian-800">
                <div className="font-mono text-[11px] text-lime-accent uppercase tracking-wider">
                  DIU CSE
                </div>
                <div className="font-sans text-xs text-ivory-300 font-medium mt-0.5">
                  CGPA 3.89 / 4.00
                </div>
                <div className="font-mono text-[10px] text-ivory-500 mt-1">
                  B.Sc. in Comp. Science
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Right Column: Architectural Profile Card (5 cols) */}
          <MotionReveal className="lg:col-span-5 flex justify-center lg:justify-end" delay={0.15}>
            <div className="w-full max-w-sm sm:max-w-md bg-obsidian-900 border border-obsidian-700 rounded-xl overflow-hidden shadow-2xl shadow-black/80">
              {/* Studio Workspace Header Bar */}
              <div className="px-4 py-2.5 bg-obsidian-950 border-b border-obsidian-800 flex items-center justify-between font-mono text-[11px] text-ivory-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-accent"></span>
                  <span className="text-ivory-300 font-medium">ELITE // PORTRAIT</span>
                </div>
                <span className="text-ivory-500 text-[10px]">AUTH_VERIFIED</span>
              </div>

              {/* Cropped Profile Image Container (Verified 1535x2048 asset) */}
              <div className="relative aspect-[3/4] bg-obsidian-950 overflow-hidden">
                <img
                  src={eliteProfile}
                  alt="Md Rasheduzzaman Elite — AI Engineer and Full-Stack Developer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Subtle vignette boundary */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Architectural Card Footer & Verified Metadata */}
              <div className="p-4 sm:p-5 bg-obsidian-900 border-t border-obsidian-800 space-y-3">
                <div>
                  <div className="font-heading font-bold text-base text-ivory-100">
                    Md Rasheduzzaman Elite
                  </div>
                  <div className="font-mono text-xs text-lime-accent mt-0.5">
                    Conversational AI · Voice · Full Stack
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-obsidian-800/80 text-xs font-mono text-ivory-400">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <svg
                      className="w-3.5 h-3.5 text-lime-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>Dhaka, BD (GMT+6)</span>
                  </div>

                  {/* Verified Social Handles (Clean SVGs, no emojis) */}
                  <div className="flex items-center gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-ivory-400 hover:text-lime-accent hover:bg-obsidian-800 transition-colors"
                        aria-label={`Open ${social.label} profile`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* Intentional Transition Indicator into Next Section */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-obsidian-800/60 flex items-center justify-between font-mono text-[11px] text-ivory-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
            <span>SYSTEM_ONLINE // PRODUCTION_READY</span>
          </div>
          <Link
            to="projects"
            smooth={true}
            duration={450}
            offset={-80}
            className="flex items-center gap-1.5 text-ivory-400 hover:text-lime-accent cursor-pointer transition-colors"
          >
            <span>SCROLL // 01 PROJECTS</span>
            <svg
              className="w-3.5 h-3.5 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;