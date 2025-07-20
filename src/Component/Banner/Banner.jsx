import React, { useRef, useEffect, useState } from "react";
import elite from "../../assets/Elite.png";
import Type from "../Other/Type";

const Banner = () => {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const driveLink ="https://drive.google.com/file/d/1JXEV3uQdJ7-VjIY0-wXCF9iLU5dfIyGV/view?usp=sharing";
    const navigateToResume = () => {
        window.open(driveLink, "_blank");
    };

    const socialMediaLinks = [
        "https://www.instagram.com/_rz.elite_/",
        "https://github.com/elite1122",
        "https://www.linkedin.com/in/rzelite/",
        "https://x.com/rz_elite_",
    ];

    const social_media = [
        "logo-instagram",
        "logo-github",
        "logo-linkedin",
        "logo-twitter",
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl animate-bounce-slow"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 section-container">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Content Section */}
                    <div className={`space-y-6 lg:space-y-8 order-2 lg:order-1 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        {/* Greeting */}
                        <div className="space-y-3 lg:space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <p className="text-cyan-400 text-sm lg:text-lg font-medium tracking-wide">
                                    Available for opportunities
                                </p>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                <span className="text-slate-100">
                                    Hello, I'm{" "}
                                </span>
                                <br />
                                <span className="gradient-text">
                                    Md Rasheduzzaman
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                    Elite
                                </span>
                            </h1>
                        </div>

                        {/* Dynamic Role */}
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                            <span className="text-slate-300">I'm a </span>
                            <Type />
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                            Passionate about crafting exceptional digital experiences through innovative web development. 
                            I transform ideas into powerful, user-centric solutions with clean code and cutting-edge design.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 lg:py-6">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400">3+</div>
                                <div className="text-slate-400 text-xs sm:text-sm">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">50+</div>
                                <div className="text-slate-400 text-xs sm:text-sm">Projects Built</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400">100%</div>
                                <div className="text-slate-400 text-xs sm:text-sm">Client Satisfaction</div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 lg:pt-4">
                            <button
                                onClick={navigateToResume}
                                className="gradient-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg shadow-cyan-500/25"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Download CV
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                            </button>
                            <button
                                onClick={scrollToContact}
                                className="outline-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Let's Connect
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex gap-3 sm:gap-4 pt-4 lg:pt-6">
                            {social_media?.map((icon, index) => (
                                <a
                                    key={icon}
                                    href={socialMediaLinks[index]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group glass-card p-3 sm:p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                                >
                                    <ion-icon 
                                        name={icon}
                                        class="text-lg sm:text-xl text-slate-400 group-hover:text-cyan-400 transition-colors duration-300"
                                    ></ion-icon>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className={`relative order-1 lg:order-2 transform transition-all duration-1000 delay-300 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl transform scale-110 animate-pulse"></div>
                            
                            {/* Floating rings */}
                            <div className="absolute inset-0 border-2 border-gradient-to-r from-cyan-500/40 to-purple-500/40 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-4 border border-emerald-500/30 rounded-full animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
                            
                            {/* Main image container */}
                            <div className="relative glass-card p-4 sm:p-6">
                                <img 
                                    src={elite} 
                                    alt="Md Rasheduzzaman Elite" 
                                    className="w-full h-auto rounded-2xl object-cover filter brightness-110 contrast-110"
                                />
                            </div>

                            {/* Floating badges - Responsive positioning */}
                            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-card bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold animate-bounce border border-emerald-500/30">
                                🚀 Available for hire!
                            </div>
                            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-card bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold animate-pulse border border-purple-500/30">
                                ⭐ 3+ Years Experience
                            </div>
                            <div className="absolute top-1/2 -left-4 sm:-left-8 glass-card bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-2 py-1 sm:px-3 sm:py-2 text-xs font-semibold animate-float border border-cyan-500/30">
                                💻 Full Stack
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-slate-400 text-xs sm:text-sm">Scroll to explore</span>
                        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-600 rounded-full flex justify-center">
                            <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={contactRef}></div>
        </section>
    );
};


export default Banner;