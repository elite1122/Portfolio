import React, { useState, useEffect } from "react";
import projectOne from "../../assets/Project1.png";
import projectTwo from "../../assets/project2.png";
import projectThree from "../../assets/project3.png";
import projectFour from "../../assets/project4.png";

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
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

        const section = document.getElementById('projects');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const projects = [
        {
            img: projectFour,
            name: "Insightly - Data Visualization Dashboard",
            techStack: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js", "TailwindCSS", "JWT", "Stripe"],
            description:
                "Insightly is a comprehensive data visualization and analytics platform that transforms complex datasets into interactive, insightful dashboards. Built with the MERN stack, it features real-time data processing, customizable charts, user authentication, and subscription-based access to premium analytics features.",
            challenges:
                "Faced significant challenges with real-time data synchronization across multiple chart components and implementing complex data filtering algorithms. Performance optimization for large datasets required implementing virtual scrolling and data pagination. Integrating secure payment processing with Stripe while maintaining seamless user experience was particularly challenging.",
            improvements:
                "Future enhancements include AI-powered data insights, advanced export capabilities (PDF, Excel), collaborative dashboard sharing, real-time collaboration features, mobile app development, and integration with popular data sources like Google Analytics, SQL databases, and REST APIs.",
            github_link: "https://github.com/elite1122/Insightly-Client",
            live_link: "https://insightly-facts.web.app/",
            category: "Full Stack"
        },
        {
            img: projectOne,
            name: "Winter Cloth Donation Website",
            techStack: ["React", "TailwindCSS", "DaisyUI"],
            description:
                "The Winter Clothing Donation Website connects donors with volunteers to provide winter clothing to those in need, especially vulnerable individuals in rural and low-income areas of Bangladesh. This platform makes it easy for users to donate clothing and support local communities during the colder months.",
            challenges:
                "Faced challenges with implementing a user-friendly interface and ensuring secure data handling for donors and volunteers. Additionally, designing a seamless flow for matching donors with recipients required careful planning and testing.",
            improvements:
                "Plan to include features like real-time donation tracking, recipient feedback, and a multilingual interface to reach a broader audience.",
            github_link: "https://github.com/elite1122/Winter-Clothing-Donation-Website-Design",
            live_link: "https://winter-cloth-donation-auth.web.app/",
            category: "Full Stack"
        },        
        {
            img: projectTwo,
            name: "Gadget Heaven Website",
            techStack: ["React", "TailwindCSS"],
            description:
                "This project is a gadget store built with React that includes a homepage with a banner, a categories sidebar, gadget cards, and a detailed view for each gadget. Users can add items to their cart or wishlist, view items by category, and sort their cart by price. This project implements multiple pages, a 404 error page, a persistent navigation bar, and a footer.",
            challenges:
                "Faced challenges with implementing the dynamic category filter and managing the state of the cart and wishlist across multiple pages. Addressed these by using React Context API for state management and carefully designing the data flow.",
            improvements:
                "Future improvements include adding payment integration, user authentication, and real-time inventory updates. Additionally, plan to optimize performance for larger gadget inventories.",
            github_link: "https://github.com/elite1122/Gadget-Heaven-Website-Design-Using-Core-React-and-Tailwind-CSS",
            live_link: "https://gadget-heaven.netlify.app",
            category: "Frontend"
        },
        {
            img: projectThree,
            name: "Dream 11 Making in BPL Website",
            techStack: ["React", "TailwindCSS"],
            description:
                "Dream 11 Making in BPL Website is an interactive web application where cricket enthusiasts can assemble their ultimate dream team for the Bangladesh Premier League (BPL). Powered by React and Tailwind CSS, this project combines seamless UI with robust functionality, allowing users to strategize, manage budgets, and pick top players to build their ideal lineup.",
            challenges:
                "Faced challenges with implementing player selection logic and budget constraints. These were resolved by leveraging React state management and creating custom hooks for real-time budget updates and player selection validation.",
            improvements:
                "Future plans include adding live player statistics, integration with live match data, and enhancing user experience with animations and drag-and-drop functionality for team formation.",
            github_link: "https://github.com/elite1122/Dream-11-Making-in-BPL-Website-Design",
            live_link: "https://make-your-bpl-dream11-team.netlify.app/",
            category: "Frontend"
        },
    ];

    return (
        <section id="projects" className="section-container">
            <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A showcase of my best work and creative solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="glass-card p-4 lg:p-6 group hover:scale-105 transition-all duration-300"
                            style={{animationDelay: `${index * 200}ms`}}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden rounded-xl mb-4 lg:mb-6">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-2 lg:top-4 right-2 lg:right-4">
                                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-semibold">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="space-y-3 lg:space-y-4">
                                <h3 className="text-lg lg:text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.name}
                                </h3>
                                
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1 lg:gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span 
                                            key={i}
                                            className="bg-white/10 text-slate-300 px-2 lg:px-3 py-1 rounded-full text-xs font-medium border border-white/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Description Preview */}
                                <p className="text-slate-400 text-xs lg:text-sm line-clamp-3">
                                    {project.description.substring(0, 120)}...
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-2 lg:gap-3 pt-3 lg:pt-4">
                                    <button
                                        className="flex-1 gradient-button px-3 lg:px-4 py-2 text-xs lg:text-sm"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Details
                                    </button>
                                    <a
                                        href={project.github_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 glass-card hover:bg-white/10 transition-all duration-300 rounded-lg"
                                    >
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a
                                        href={project.live_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 glass-card hover:bg-white/10 transition-all duration-300 rounded-lg"
                                    >
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 hover:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
                            <h3 className="text-2xl font-bold gradient-text">
                                {selectedProject.name}
                            </h3>
                            <button
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                                onClick={() => setSelectedProject(null)}
                            >
                                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-8">
                            {/* Project Image */}
                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src={selectedProject.img}
                                    alt={selectedProject.name}
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                                        {selectedProject.category}
                                    </span>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-lg font-semibold text-slate-100 mb-4">Technology Stack</h4>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.techStack.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-4 py-2 rounded-full font-medium border border-cyan-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h4 className="text-lg font-semibold text-slate-100 mb-4">Project Overview</h4>
                                <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                            </div>

                            {/* Challenges */}
                            <div>
                                <h4 className="text-lg font-semibold text-slate-100 mb-4">Challenges & Solutions</h4>
                                <p className="text-slate-300 leading-relaxed">{selectedProject.challenges}</p>
                            </div>

                            {/* Future Improvements */}
                            <div>
                                <h4 className="text-lg font-semibold text-slate-100 mb-4">Future Enhancements</h4>
                                <p className="text-slate-300 leading-relaxed">{selectedProject.improvements}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-6">
                                <a
                                    href={selectedProject.github_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 gradient-button px-6 py-3 text-center"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        View on GitHub
                                    </span>
                                </a>
                                <a
                                    href={selectedProject.live_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 outline-button px-6 py-3 text-center"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Project;
