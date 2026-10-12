import React, { useState, useEffect } from "react";
import projectOne from "../../assets/Project1.png";
import projectTwo from "../../assets/project2.png";
import projectThree from "../../assets/project3.png";
import projectFour from "../../assets/Project4.png";

const cognidrift = projectThree;

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
            img: cognidrift,
            name: "CogniDrift — AI-Powered Receptionist & Communication Platform",
            techStack: [
                "React 18",
                "Vite",
                "Tailwind CSS",
                "Framer Motion",
                "Three.js",
                "Retell Client SDK",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "Twilio",
                "OpenAI",
                "Resend",
            ],
            description:
                "CogniDrift is a unified AI front-office that automates every call, chat, and lead — a 24/7 AI workforce for businesses. The platform spans an AI Phone Receptionist with natural conversations, an SMS Agent, an embeddable Web Chatbot, and a Web Voicebot, paired with an AI Calendar (Cal.com), automated outbound calls, and smart support tickets. A multi-tenant admin dashboard exposes real-time analytics, conversation monitoring, multi-model chat, and CRM integration, with vertical solutions for Healthcare, Real Estate, Professional Services, Call Centers, and Local Services.",
            challenges:
                "Building low-latency, natural Voice AI on top of Retell and Twilio while keeping turn-taking responsive; orchestrating OpenAI across multiple products (chat, voice, SMS, tickets) without leaking context between tenants; designing a three-package monorepo (frontend, backend, dashboard) that ships independently to Vercel and Railway; and wiring up Cal.com scheduling so AI agents can book appointments end-to-end.",
            improvements:
                "Expanding into more industry verticals, deeper conversation analytics, support for additional LLM providers, multilingual voice agents, and tighter CRM/helpdesk integrations.",
            live_link: "https://cognidrift.com",
            category: "AI Platform",
            featured: true,
        },
        {
            img: projectFour,
            name: "Insightly News - Modern Newspaper Platform",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "JWT", "Stripe"],
            description:
                "Insightly is a modern, interactive, and user-friendly newspaper full-stack website designed to deliver news efficiently while offering a seamless reading experience with premium features. Fully responsive across all devices, with SweetAlert notifications for actions like successful event creation, updates, or cancellations. Robust backend APIs ensure seamless CRUD operations for user profiles and registrations.",
            challenges:
                "Faced challenges implementing a complex content management system for multiple publishers and journalists, building a subscription-based payment system with free and premium tiers, developing an advanced search and filtering system for articles, and creating a responsive design that works seamlessly across all devices while maintaining fast loading speeds for news content.",
            improvements:
                "Future enhancements include implementing AI-powered news recommendation algorithms, adding real-time breaking news notifications, developing a mobile app for iOS and Android, integrating social media sharing and commenting systems, adding multimedia content support (videos, podcasts), and implementing advanced analytics for reader engagement tracking.",
            github_link: "https://github.com/elite1122/Insightly-Client",
            live_link: "https://insightly-facts.web.app/",
            category: "Full Stack"
        },
        {
            img: projectOne,
            name: "Go Marathon BD - Marathon Management System",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "JWT"],
            description:
                "A full-stack Marathon Management System connecting organizers and participants. Users can create events, register, and manage their dashboard with secure login and database integration. Safe and seamless user login with email/password and Google authentication via Firebase. Organizers manage events and track participants, while participants view and update their registrations from a personal dashboard.",
            challenges:
                "Designing role-based dashboards for organizers and participants, securing JWT-protected APIs end to end, and keeping registration counts and event metadata in sync between MongoDB and the client without race conditions.",
            improvements:
                "Planned enhancements include real-time event leaderboards, payment integration for paid registrations, push notifications for event reminders, and analytics for organizers to track participant engagement.",
            github_link: "https://github.com/elite1122/Go-Marathon-BD-Client",
            live_link: "https://go-marathon-bd.web.app/",
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
                            className="glass-card p-4 lg:p-6 group hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in flex flex-col"
                            style={{animationDelay: `${index * 200}ms`}}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden rounded-xl mb-4 lg:mb-6 shadow-lg">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {project.featured && (
                                    <div className="absolute top-2 lg:top-4 left-2 lg:left-4">
                                        <span className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                                            <span>★</span> Featured
                                        </span>
                                    </div>
                                )}
                                <div className="absolute top-2 lg:top-4 right-2 lg:right-4">
                                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="space-y-3 lg:space-y-4 flex-grow flex flex-col">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.name}
                                </h3>
                                
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1 lg:gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span 
                                            key={i}
                                            className="bg-gray-900/40 text-cyan-300 px-2 lg:px-3 py-1 rounded-full text-xs font-semibold border border-gray-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Description Preview */}
                                <p className="text-gray-300 text-xs lg:text-sm line-clamp-3 flex-grow">
                                    {project.description.substring(0, 120)}...
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-2 lg:gap-3 pt-3 lg:pt-4 mt-auto">
                                    <button
                                        className="flex-1 gradient-button px-3 lg:px-4 py-2 text-xs lg:text-sm"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Details
                                    </button>
                                    {project.github_link && (
                                        <a
                                            href={project.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 glass-card hover:bg-gray-800/60 transition-all duration-300 rounded-lg shadow-sm"
                                            aria-label="View source on GitHub"
                                        >
                                            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-300 hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    )}
                                    <a
                                        href={project.live_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 glass-card hover:bg-gray-800/60 transition-all duration-300 rounded-lg shadow-sm"
                                    >
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-300 hover:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in">
                    <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900/60">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gray-900/70 backdrop-blur-sm p-6 border-b border-gray-800 flex justify-between items-center shadow-sm">
                            <h3 className="text-2xl font-bold gradient-text">
                                {selectedProject.name}
                            </h3>
                            <button
                                className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
                                onClick={() => setSelectedProject(null)}
                            >
                                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-8">
                            {/* Project Image */}
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src={selectedProject.img}
                                    alt={selectedProject.name}
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-gradient-to-r from-cyan-500/60 to-blue-500/60 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                                        {selectedProject.category}
                                    </span>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-lg font-bold text-gray-100 mb-4">Technology Stack</h4>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.techStack.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="bg-gray-900/40 text-cyan-300 px-4 py-2 rounded-full font-semibold border border-gray-800 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h4 className="text-lg font-bold text-gray-100 mb-4">Project Overview</h4>
                                <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                            </div>

                            {/* Challenges */}
                            <div>
                                <h4 className="text-lg font-bold text-gray-100 mb-4">Challenges & Solutions</h4>
                                <p className="text-gray-300 leading-relaxed">{selectedProject.challenges}</p>
                            </div>

                            {/* Future Improvements */}
                            <div>
                                <h4 className="text-lg font-bold text-gray-100 mb-4">Future Enhancements</h4>
                                <p className="text-gray-300 leading-relaxed">{selectedProject.improvements}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-6">
                                {selectedProject.github_link && (
                                    <a
                                        href={selectedProject.github_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 gradient-button px-6 py-3 text-center shadow-xl"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            View on GitHub
                                        </span>
                                    </a>
                                )}
                                <a
                                    href={selectedProject.live_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${selectedProject.github_link ? "flex-1 outline-button" : "flex-1 gradient-button"} px-6 py-3 text-center shadow-lg`}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Visit Live Site
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
