import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const form = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('contact');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const contact_info = [
        { 
            logo: "mail", 
            text: "rasheduzzamanelite@gmail.com", 
            link: "mailto:rasheduzzamanelite@gmail.com",
            title: "Email",
            color: "from-red-500 to-orange-500"
        },
        { 
            logo: "call-outline", 
            text: "+8801755926275",
            link: "tel:+8801755926275",
            title: "Phone",
            color: "from-blue-500 to-cyan-500"
        },
        {
            logo: "logo-whatsapp",
            text: "+8801755926275",
            link: "https://wa.me/8801755926275",
            title: "WhatsApp",
            color: "from-green-500 to-emerald-500"
        },
        {
            logo: "location",
            text: "Dhaka, Bangladesh",
            title: "Location",
            color: "from-purple-500 to-pink-500"
        },
    ];

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_ID
            );
            
            toast.success("Message sent successfully! I'll get back to you soon.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            
            form.current.reset();
        } catch (error) {
            toast.error("Failed to send message. Please try again or contact me directly.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-container">
            <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Contact <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">
                        Let's discuss your next project or just say hello!
                    </p>
                </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Contact Form */}
                    <div className="glass-card p-6 lg:p-8 order-2 lg:order-1 hover:shadow-2xl transition-all duration-500">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-4 lg:mb-6">
                            Send Message
                        </h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4 lg:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                <div className="space-y-1 lg:space-y-2">
                                    <label className="text-gray-300 font-semibold text-sm lg:text-base">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full bg-gray-900/60 border-2 border-gray-800 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-gray-100 placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm lg:text-base"
                                    />
                                </div>
                                <div className="space-y-1 lg:space-y-2">
                                    <label className="text-gray-300 font-semibold text-sm lg:text-base">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full bg-gray-900/60 border-2 border-gray-800 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-gray-100 placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm lg:text-base"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-1 lg:space-y-2">
                                <label className="text-gray-300 font-semibold text-sm lg:text-base">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-gray-900/60 border-2 border-gray-800 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-gray-100 placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm lg:text-base"
                                />
                            </div>

                            <div className="space-y-1 lg:space-y-2">
                                <label className="text-gray-300 font-semibold text-sm lg:text-base">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me about your project or just say hello..."
                                    rows={4}
                                    required
                                    className="w-full bg-gray-900/60 border-2 border-gray-800 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-gray-100 placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-sm lg:text-base lg:rows-6"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="gradient-button w-full px-6 lg:px-8 py-3 lg:py-4 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base shadow-xl"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-4 w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        Send Message
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                        <div className="glass-card p-6 lg:p-8 hover:shadow-2xl transition-all duration-500">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-4 lg:mb-6">
                                    Get In Touch
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
                                    I'm always excited to work on new projects and collaborate with amazing people. 
                                    Whether you have a project in mind, want to discuss opportunities, or just want 
                                    to say hello, I'd love to hear from you!
                                </p>

                            <div className="space-y-4 lg:space-y-6">
                                {contact_info.map((contact, i) => (
                                    <div
                                        key={i}
                                        className="group animate-fade-in"
                                        style={{animationDelay: `${i * 150}ms`}}
                                    >
                                        {contact.link ? (
                                            <a
                                                href={contact.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-600/30 hover:shadow-lg transition-all duration-300 group"
                                            >
                                                <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                                    <ion-icon name={contact.logo} className="text-lg lg:text-xl text-white"></ion-icon>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-100 font-bold group-hover:text-cyan-400 transition-colors duration-300 text-sm lg:text-base">
                                                        {contact.title}
                                                    </h4>
                                                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 text-xs lg:text-sm">
                                                        {contact.text}
                                                    </p>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-900/40 rounded-lg border border-gray-800">
                                                <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center shadow-md`}>
                                                    <ion-icon name={contact.logo} className="text-lg lg:text-xl text-white"></ion-icon>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-100 font-bold text-sm lg:text-base">{contact.title}</h4>
                                                    <p className="text-gray-300 text-xs lg:text-sm">{contact.text}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="glass-card p-6 lg:p-8 hover:shadow-2xl transition-all duration-500">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-100 mb-3 lg:mb-4">
                                Quick Info
                            </h3>
                            <div className="space-y-3 lg:space-y-4">
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <span className="text-gray-300 font-medium text-sm lg:text-base">Available for freelance work</span>
                                </div>
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-gray-300 font-medium text-sm lg:text-base">Response time: Within 24 hours</span>
                                </div>
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-300 font-medium text-sm lg:text-base">Timezone: GMT+6 (Bangladesh)</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-6 lg:p-8 hover:shadow-2xl transition-all duration-500">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-100 mb-3 lg:mb-4">
                                Follow Me
                            </h3>
                            <div className="flex gap-3 lg:gap-4">
                                {[
                                    { icon: "logo-github", link: "https://github.com/elite1122", color: "hover:bg-gray-800/60" },
                                    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/rzelite/", color: "hover:bg-blue-600/40" },
                                    { icon: "logo-twitter", link: "https://x.com/rz_elite_", color: "hover:bg-blue-500/40" },
                                    { icon: "logo-instagram", link: "https://www.instagram.com/_rz.elite_/", color: "hover:bg-pink-600/40" }
                                ].map((social, index) => (
                                    <a
                                        key={social.icon}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 lg:w-12 lg:h-12 bg-gray-900/50 border border-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 shadow-sm`}
                                    >
                                        <ion-icon name={social.icon} className="text-lg lg:text-xl text-gray-300 hover:text-white"></ion-icon>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Container with custom styling */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                toastStyle={{
                    background: 'rgba(30, 41, 59, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    color: '#f8fafc'
                }}
            />
        </section>
    );
};

export default ContactForm;
