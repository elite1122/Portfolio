import React from 'react';
import { Link } from "react-scroll";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const quickLinks = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Experience", to: "experience" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" }
    ];

    const socialLinks = [
        { icon: "logo-github", link: "https://github.com/elite1122", label: "GitHub" },
        { icon: "logo-linkedin", link: "https://www.linkedin.com/in/rzelite/", label: "LinkedIn" },
        { icon: "logo-twitter", link: "https://x.com/rz_elite_", label: "Twitter" },
        { icon: "logo-instagram", link: "https://www.instagram.com/_rz.elite_/", label: "Instagram" }
    ];

    return (
        <footer className="relative mt-20 bg-gradient-to-b from-transparent to-black/40 text-gray-300">
            {/* Gradient separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mb-16"></div>
            
            <div className="section-container">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-4">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer group inline-block"
                        >
                            <span className="text-3xl font-bold gradient-text animate-pulse-slow">ELITE</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-md font-medium">
                            AI Developer & Full-Stack Engineer building Agentic AI and autonomous
                            Voice AI platforms — integrating LLMs with real-time communication and
                            scalable Node.js / Python backends.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-900/50 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800/60 hover:border-cyan-400/30 transition-all duration-300 group shadow-sm hover:shadow-md"
                                    aria-label={social.label}
                                >
                                    <ion-icon 
                                        name={social.icon} 
                                        className="text-lg text-gray-300 group-hover:text-cyan-400 transition-colors duration-300"
                                    ></ion-icon>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-100">Quick Links</h3>
                        <div className="space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-100">Get In Touch</h3>
                        <div className="space-y-3">
                            <a 
                                href="mailto:rasheduzzamanelite@gmail.com"
                                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                            >
                                <ion-icon name="mail" className="text-lg group-hover:animate-wiggle text-gray-300"></ion-icon>
                                <span className="text-sm font-medium text-gray-300">rasheduzzamanelite@gmail.com</span>
                            </a>
                            <a 
                                href="tel:+8801755926275"
                                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                            >
                                <ion-icon name="call" className="text-lg group-hover:animate-wiggle text-gray-300"></ion-icon>
                                <span className="text-sm font-medium text-gray-300">+880 1755 926275</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-300">
                                <ion-icon name="location" className="text-lg text-gray-300"></ion-icon>
                                <span className="text-sm font-medium text-gray-300">Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                            <span>© {currentYear} Elite Portfolio. All rights reserved.</span>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
                            <span className="flex items-center gap-2">
                                <span>Made with</span>
                                <span className="text-red-500 animate-pulse">❤️</span>
                                <span>using React & Tailwind CSS</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
            </div>
        </footer>
    );
};

export default Footer;