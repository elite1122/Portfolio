
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
        { text: "AI Engineer @ Cognidrift", count: "1+", icon: "🤖" },
        { text: "CGPA · CSE, DIU", count: "3.89", icon: "🎓" },
        { text: "Production AI Projects", count: "5", icon: "🚀" },
        { text: "Languages Spoken", count: "3", icon: "🌐" },
    ];

    const skills = [
        "Agentic AI Architectures",
        "Real-time Voice AI",
        "LLM + RAG Pipelines",
        "Node.js & Python Backends",
        "Figma → Production UI",
        "Scalable Cloud Architecture"
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
                        AI Developer & Full-Stack Engineer building agentic, voice-first products
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
                                I'm an Innovative AI Developer and Full-Stack Engineer with specialized
                                experience building Agentic AI solutions and autonomous Voice AI platforms.
                                I integrate LLMs with real-time communication tools and orchestrate
                                complex workflows in Node.js and Python.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                                Currently I'm an Artificial Intelligence Engineer at Cognidrift (Utah, USA),
                                where I ship AI-powered receptionist platforms — pairing real-time voice AI
                                and NLP with Google Calendar and CRM automations on a scalable architecture.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                                I graduated in Computer Science & Engineering from Daffodil International
                                University with a CGPA of 3.89/4.00, and I have a proven track record of
                                turning high-fidelity Figma designs into clean, AI-driven web architectures.
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
                                        <h4 className="text-gray-100 font-bold text-sm lg:text-base">Production AI, not demos</h4>
                                        <p className="text-gray-300 text-sm lg:text-base">I ship Agentic AI and Voice AI systems that handle real users — not throwaway prototypes.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 lg:gap-4 group">
                                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-100 font-bold text-sm lg:text-base">Full-Stack + AI Fluency</h4>
                                        <p className="text-gray-300 text-sm lg:text-base">I move from React + Tailwind frontends to Node.js / Python backends and LLM orchestration without handoffs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 lg:gap-4 group">
                                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-100 font-bold text-sm lg:text-base">Design-to-Code Discipline</h4>
                                        <p className="text-gray-300 text-sm lg:text-base">Proven track record of turning high-fidelity Figma designs into scalable, AI-driven web architectures.</p>
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