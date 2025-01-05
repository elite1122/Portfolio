
const AboutMe = () => {
    const info = [
        { text: "Completed Projects", count: "10" },
    ];


    const driveLink = "https://drive.google.com/file/d/1OzuOrRm0Rn9g7xwO6RUO9zUZHkvxFjtr/view?usp=drivesdk";


    const navigateToResume = () => {
        window.open(driveLink, "_blank");
    };

    return (
        <section id="about" className="py-8 text-gray-300">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                I have completed my CSE degree from Daffodil International University.As a learner, I believe hardworking and team working capability is  a foremost need to be successful.  This CV site of mine, is a digital way of documenting everything I've done , everything I've learned through experiences and how I see myself in the next future years. I like to  develop myself everyday since I never want to limit myself! If you'd like to learn more about me, browse and look through the site. If you see something you like or you want to discuss, feel free to drop a line for me.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {info.map((content) => (
                                    <div key={content.text} className="pl-4 md:pl-14">
                                        <h3 className="md:text-4xl text-2xl font-semibold text-gray-300">
                                            {content.count}
                                            <span className="text-cyan-600">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutMe;