
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

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Section */}
                    <div className="space-y-8">
                        <div className="glass-card p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-slate-100 mb-4">
                                My Journey
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                I have completed my CSE degree from Daffodil International University. 
                                As a passionate developer, I believe that continuous learning and 
                                collaboration are essential for success in this ever-evolving field.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                This portfolio represents my digital journey - documenting everything 
                                I've learned, built, and aspired to achieve. I'm constantly pushing 
                                boundaries and expanding my skill set because I believe there's always 
                                room for growth.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                I love transforming complex problems into elegant solutions through 
                                clean code and innovative design. Feel free to explore my work and 
                                reach out if you'd like to collaborate!
                            </p>
                        </div>

                        {/* Skills Grid */}
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6">
                                What I Bring
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <div 
                                        key={skill}
                                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                                        style={{animationDelay: `${index * 100}ms`}}
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                                        <span className="text-slate-300 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            {info.map((item, index) => (
                                <div 
                                    key={item.text} 
                                    className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                                    style={{animationDelay: `${index * 150}ms`}}
                                >
                                    <div className="text-4xl mb-2">{item.icon}</div>
                                    <div className="text-4xl font-bold gradient-text mb-2">
                                        {item.count}+
                                    </div>
                                    <div className="text-slate-400 font-medium">{item.text}</div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info Card */}
                        <div className="glass-card p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-slate-100">
                                Why Choose Me?
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-200 font-semibold">Quality First</h4>
                                        <p className="text-slate-400">I prioritize clean, maintainable code and exceptional user experiences.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-200 font-semibold">Continuous Learning</h4>
                                        <p className="text-slate-400">Always staying updated with the latest technologies and best practices.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-200 font-semibold">Collaborative Spirit</h4>
                                        <p className="text-slate-400">Strong communication skills and team-oriented approach to development.</p>
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