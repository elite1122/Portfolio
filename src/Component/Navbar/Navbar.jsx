import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const driveLink =
    "https://drive.google.com/file/d/1q8LywmTilOJTShI9wAiqfk7CN81Za3_1/view?usp=sharing";

  const navigateToResume = () => {
    window.open(driveLink, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Overview", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-obsidian-950/90 backdrop-blur-md border-b border-obsidian-700/80 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <Link
              to="home"
              smooth={true}
              duration={400}
              offset={-80}
              className="cursor-pointer group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent rounded-md py-1"
            >
              <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-ivory-100 group-hover:text-lime-accent transition-colors">
                ELITE
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-lime-accent bg-lime-muted border border-lime-border px-2 py-0.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse"></span>
                AI // FS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary desktop navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-obsidian-900/60 border border-obsidian-700/60 rounded-lg px-3 py-1.5"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={400}
                spy={true}
                offset={-80}
                activeClass="text-lime-accent !bg-obsidian-800 font-medium"
                className="text-ivory-400 hover:text-ivory-100 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-accent"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="contact"
              smooth={true}
              duration={400}
              offset={-80}
              className="editorial-btn-secondary !text-xs !py-2 !px-3.5 cursor-pointer font-mono"
            >
              Contact
            </Link>
            <button
              onClick={navigateToResume}
              className="editorial-btn-primary !text-xs !py-2 !px-3.5 font-mono"
              aria-label="Download Curriculum Vitae in PDF format"
            >
              <span>Resume</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={navigateToResume}
              className="editorial-btn-primary !text-[11px] !py-2 !px-3 font-mono min-h-[40px]"
              aria-label="Open Resume"
            >
              Resume
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-ivory-300 hover:text-lime-accent bg-obsidian-900 border border-obsidian-700 hover:border-obsidian-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent"
            >
              <svg
                className="w-5 h-5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <div
        id="mobile-navigation"
        className={`md:hidden transition-all duration-200 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible border-b border-obsidian-700 bg-obsidian-950/98 backdrop-blur-xl shadow-2xl"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <nav aria-label="Mobile navigation" className="px-4 pt-3 pb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={400}
              offset={-80}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-mono uppercase tracking-wider text-ivory-300 hover:text-lime-accent hover:bg-obsidian-850 border border-transparent hover:border-obsidian-700 transition-colors cursor-pointer min-h-[44px] flex items-center"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-obsidian-800 flex gap-2">
            <Link
              to="contact"
              smooth={true}
              duration={400}
              offset={-80}
              onClick={() => setIsMobileMenuOpen(false)}
              className="editorial-btn-secondary flex-1 text-center font-mono text-xs py-2.5"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                navigateToResume();
                setIsMobileMenuOpen(false);
              }}
              className="editorial-btn-primary flex-1 text-center font-mono text-xs py-2.5"
            >
              Download CV
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
