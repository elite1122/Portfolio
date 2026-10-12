import React, { useEffect, useState } from 'react';

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('experience');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const experiences = [
        {
            role: 'Artificial Intelligence Engineer',
            company: 'Cognidrift',
            location: 'Utah, USA · Remote',
            period: 'January 2025 — Present',
            type: 'Full-time',
            highlights: [
                'Built AI-powered receptionist platforms with React, Framer Motion, and Tailwind CSS.',
                'Implemented real-time Voice AI with NLP for natural, low-latency conversations.',
                'Automated appointment scheduling through Google Calendar and CRM integrations.',
                'Architected scalable, high-performance UI/UX for autonomous voice workflows.',
            ],
            stack: [
                'React',
                'Framer Motion',
                'Tailwind CSS',
                'Node.js',
                'Python',
                'LLMs',
                'Voice AI',
                'NLP',
                'Google Calendar API',
                'CRM Integrations',
            ],
            color: 'from-cyan-500 to-blue-500',
        },
    ];

    return (
        <section id="experience" className="section-container">
            <div
                className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        My <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        Building production AI systems and shipping autonomous voice products
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/60 via-purple-500/60 to-emerald-500/60 transform md:-translate-x-1/2"></div>

                    <div className="space-y-8 lg:space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={`${exp.company}-${exp.role}`}
                                className={`relative flex items-start ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col md:gap-16 animate-fade-in`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-cyan-400/70 to-blue-500/70 rounded-full transform md:-translate-x-1/2 border border-gray-800 z-10 shadow-lg mt-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-blue-500/40 rounded-full animate-pulse"></div>
                                </div>

                                <div
                                    className={`w-full md:w-5/12 ml-8 lg:ml-12 md:ml-0 ${
                                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                    }`}
                                >
                                    <div className="glass-card p-5 lg:p-8 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <span
                                                className={`px-2 lg:px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${exp.color} text-white shadow-md`}
                                            >
                                                {exp.type}
                                            </span>
                                            <span className="text-gray-300 text-xs lg:text-sm font-semibold">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <h3 className="text-lg lg:text-2xl font-bold text-gray-100 mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                                            {exp.role}
                                        </h3>
                                        <p className="text-cyan-300 font-bold text-sm lg:text-base">
                                            {exp.company}
                                        </p>
                                        <p className="text-gray-400 text-xs lg:text-sm mb-4">
                                            {exp.location}
                                        </p>

                                        <ul
                                            className={`space-y-2 mb-5 ${
                                                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                            } text-left`}
                                        >
                                            {exp.highlights.map((h) => (
                                                <li
                                                    key={h}
                                                    className="flex items-start gap-2 text-gray-300 text-sm lg:text-base leading-relaxed"
                                                >
                                                    <span className="mt-2 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0"></span>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div
                                            className={`flex flex-wrap gap-2 ${
                                                index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                            }`}
                                        >
                                            {exp.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-gray-900/50 text-cyan-300 px-2.5 py-1 rounded-full text-xs font-semibold border border-gray-800"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
