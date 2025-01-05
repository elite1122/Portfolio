import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const form = useRef();
    const contact_info = [
        { logo: "mail", text: "rasheduzzamanelite@gmail.com", link: "mailto:rasheduzzamanelite@gmail.com" },
        { logo: "call-outline", text: "+8801755926275" },
        {
            logo: "logo-whatsapp",
            text: "+8801755926275",
            link: "https://wa.me/8801755926275",
        },
        { logo: "location", text: "Jhenaidah, Bangladesh" },
    ];

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_ID
            )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    // console.error("FAILED...", error.text);
                    toast.error("Failed to send message. Please try again.");
                }
            );

    };

    return (
        <section id="contact" className="py-10 px-3">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold text-gray-100">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

                <div
                    className="mt-16 flex md:flex-row flex-col
          gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
                >
                    {/* Form */}
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="input input-bordered text-base"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            required
                            className="input input-bordered text-base"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={10}
                            required
                            className="textarea textarea-bordered text-base"
                        />
                        <button
                            type="submit"
                            className="btn btn-primary bg-[#0891B2] rounded-2xl border-none w-max"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-7 text-gray-300">
                        {contact_info.map((contact, i) => (
                            <div
                                key={i}
                                className="flex flex-row text-left gap-4 flex-wrap items-center"
                            >
                                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center bg-cyan-600 rounded-full">
                                    <ion-icon name={contact.logo}></ion-icon>
                                </div>
                                {contact.link ? (
                                    <a
                                        href={contact.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="md:text-base text-sm break-words  hover:underline"
                                    >
                                        {contact.text}
                                    </a>
                                ) : (
                                    <p className="md:text-base text-sm break-words">{contact.text}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </section>
    );
};

export default ContactForm;
