import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const driveLink =
    "https://drive.google.com/file/d/1q8LywmTilOJTShI9wAiqfk7CN81Za3_1/view?usp=sharing";

  const navigateToResume = () => {
    window.open(driveLink, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-xl shadow-cyan-500/10 border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer group"
            >
              <span className="text-2xl font-bold font-heading tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 animate-pulse-slow">
                ELITE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-display font-semibold tracking-wide transition-all duration-300 cursor-pointer hover:bg-gray-800/50 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <div className="hidden md:block">
            <button
              onClick={navigateToResume}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-display font-bold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-cyan-500/50"
            >
              Download CV
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 shadow-lg shadow-cyan-500/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 block px-4 py-3 rounded-lg text-base font-display font-semibold tracking-wide transition-all duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                navigateToResume();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-3 rounded-lg text-base font-display font-bold tracking-wide transition-all duration-300 shadow-lg shadow-cyan-500/50"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
