
import React, { useEffect, useState } from "react";

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('about');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const info = [
        { text: "Years Experience", count: "3", icon: "⭐" },
        { text: "Completed Projects", count: "50", icon: "🚀" },
        { text: "Happy Clients", count: "25", icon: "😊" },
        { text: "Technologies", count: "15", icon: "💻" },
    ];

    const skills = [
        "Problem Solving",
        "Team Collaboration", 
        "Clean Code",
        "User Experience",
        "Performance Optimization",
        "Modern Frameworks"
    ];

    return (
        <section id="about" className="section-container">
            <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">
                        Passionate developer crafting exceptional digital experiences
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Content Section */}
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                        <div className="glass-card p-6 lg:p-8 space-y-4 lg:space-y-6 hover:shadow-2xl transition-all duration-500 animate-slide-in-left">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-3 lg:mb-4">
                                My Journey
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                                I have completed my CSE degree from Daffodil International University. 
                                As a passionate developer, I believe that continuous learning and 
                                collaboration are essential for success in this ever-evolving field.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                                This portfolio represents my digital journey - documenting everything 
                                I've learned, built, and aspired to achieve. I'm constantly pushing 
                                boundaries and expanding my skill set because I believe there's always 
                                room for growth.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                                I love transforming complex problems into elegant solutions through 
                                clean code and innovative design. Feel free to explore my work and 
                                reach out if you'd like to collaborate!
                            </p>
                        </div>

                        {/* Skills Grid */}
                        <div className="glass-card p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-4 lg:mb-6">
                                What I Bring
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                                {skills.map((skill, index) => (
                                    <div 
                                        key={skill}
                                        className="flex items-center gap-3 p-3 bg-gray-900/40 rounded-lg border border-gray-800 hover:border-cyan-600/30 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                                        style={{animationDelay: `${index * 100}ms`}}
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"></div>
                                        <span className="text-gray-300 font-semibold text-sm lg:text-base">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            {info.map((item, index) => (
                                <div 
                                    key={item.text} 
                                    className="glass-card p-4 lg:p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-scale-in"
                                    style={{animationDelay: `${index * 150}ms`}}
                                >
                                    <div className="text-2xl lg:text-4xl mb-1 lg:mb-2 animate-bounce">{item.icon}</div>
                                    <div className="text-2xl lg:text-4xl font-bold gradient-text mb-1 lg:mb-2">
                                        {item.count}+
                                    </div>
                                    <div className="text-gray-300 font-semibold text-xs lg:text-sm">{item.text}</div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info Card */}
                        <div className="glass-card p-6 lg:p-8 space-y-4 lg:space-y-6 hover:shadow-2xl transition-all duration-500 animate-slide-in-right">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-100">
                                Why Choose Me?
                            </h3>
                            <div className="space-y-3 lg:space-y-4">
                                <div className="flex items-start gap-3 lg:gap-4 group">
                                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-100 font-bold text-sm lg:text-base">Quality First</h4>
                                        <p className="text-gray-300 text-sm lg:text-base">I prioritize clean, maintainable code and exceptional user experiences.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 lg:gap-4 group">
                                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-100 font-bold text-sm lg:text-base">Continuous Learning</h4>
                                        <p className="text-gray-300 text-sm lg:text-base">Always staying updated with the latest technologies and best practices.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 lg:gap-4 group">
                                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-100 font-bold text-sm lg:text-base">Collaborative Spirit</h4>
                                        <p className="text-gray-300 text-sm lg:text-base">Strong communication skills and team-oriented approach to development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;