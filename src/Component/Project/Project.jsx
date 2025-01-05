import React, { useState } from "react";
import projectOne from "../../assets/Project1.png";
import projectTwo from "../../assets/project2.png";
import projectThree from "../../assets/project3.png";

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
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
            live_link: "https://gadget-heaven.netlify.app"
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
            live_link: "https://make-your-bpl-dream11-team.netlify.app/"
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Some of my best works</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-5 mt-10">
                {projects.map((project, index) => (
                    <div key={index} className="bg-slate-800 p-5 rounded-lg shadow-lg">
                        <img
                            src={project.img}
                            alt={project.name}
                            className="rounded-lg w-full h-48 object-cover"
                        />
                        <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
                        <button
                            className="mt-3 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
                            onClick={() => setSelectedProject(project)}
                        >
                            View More
                        </button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-4/5 lg:w-3/5 max-h-[80vh] overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 text-white text-lg"
                            onClick={() => setSelectedProject(null)}
                        >
                            ✖
                        </button>
                        <h3 className="text-2xl font-bold text-cyan-600">
                            {selectedProject.name}
                        </h3>
                        <img
                            src={selectedProject.img}
                            alt={selectedProject.name}
                            className="rounded-lg w-full mt-4"
                        />
                        <h4 className="text-lg font-semibold mt-4">Main Technology Stack:</h4>
                        <ul className="list-disc list-inside mt-2 text-gray-400">
                            {selectedProject.techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <h4 className="text-lg font-semibold mt-4">Brief Description:</h4>
                        <p className="mt-2 text-gray-400">{selectedProject.description}</p>
                        <h4 className="text-lg font-semibold mt-4">Challenges:</h4>
                        <p className="mt-2 text-gray-400">{selectedProject.challenges}</p>
                        <h4 className="text-lg font-semibold mt-4">Future Improvements:</h4>
                        <p className="mt-2 text-gray-400">{selectedProject.improvements}</p>
                        <div className="flex gap-4 mt-6">
                            <a
                                href={selectedProject.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 text-cyan-600 px-4 py-2 rounded hover:bg-gray-600"
                            >
                                GitHub
                            </a>
                            <a
                                href={selectedProject.live_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 text-cyan-600 px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Live
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Project;
