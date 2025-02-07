import React, { useRef } from "react";
import elite from "../../assets/Elite.png";
import Type from "../Other/Type";

const Banner = () => {
    const contactRef = useRef(null);

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
    return (
        <section
            id="home"
            className="flex py-10 flex-col md:flex-row  items-center"
        >
            <div className="flex flex-1 items-center justify-center h-full">
                <img src={elite} alt="" className="md:w-2/3 h-auto object-cover" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 uppercase">
                            Hi, I'm
                            <br />
                        </span>
                        <span className="text-green-500 uppercase">Md Rasheduzzaman Elite</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        <Type />
                    </h4>
                    <div className="flex flex-col w-fit space-y-4 mt-5">
                        <button
                            className="btn btn-primary bg-[#0891B2] rounded-2xl border-none"
                            onClick={navigateToResume}
                        >
                            Download CV
                        </button>
                        <button className="btn btn-primary border-none rounded-2xl text-md bg-[#0891B2]">Connect with Me</button>
                    </div>
                    <div className="mt-8 text-3xl flex justify-start gap-5">
                        {social_media?.map((icon, index) => (
                            <a
                                key={icon}
                                href={socialMediaLinks[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-white cursor-pointer "
                            >
                                <ion-icon name={icon}></ion-icon>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div ref={contactRef}></div>
        </section>
    );
};


export default Banner;