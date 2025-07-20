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
            text: "Jhenaidah, Bangladesh",
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

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold text-slate-100 mb-6">
                            Send Message
                        </h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-slate-300 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-300 font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-slate-300 font-medium">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-300 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me about your project or just say hello..."
                                    rows={6}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="gradient-button w-full px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        Send Message
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6">
                                Get In Touch
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                I'm always excited to work on new projects and collaborate with amazing people. 
                                Whether you have a project in mind, want to discuss opportunities, or just want 
                                to say hello, I'd love to hear from you!
                            </p>

                            <div className="space-y-6">
                                {contact_info.map((contact, i) => (
                                    <div
                                        key={i}
                                        className="group"
                                        style={{animationDelay: `${i * 150}ms`}}
                                    >
                                        {contact.link ? (
                                            <a
                                                href={contact.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 group"
                                            >
                                                <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                    <ion-icon name={contact.logo} class="text-xl text-white"></ion-icon>
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-100 font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                                                        {contact.title}
                                                    </h4>
                                                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                                        {contact.text}
                                                    </p>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                                                    <ion-icon name={contact.logo} class="text-xl text-white"></ion-icon>
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-100 font-semibold">{contact.title}</h4>
                                                    <p className="text-slate-400">{contact.text}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="glass-card p-8">
                            <h3 className="text-xl font-bold text-slate-100 mb-4">
                                Quick Info
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                    <span className="text-slate-300">Available for freelance work</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    <span className="text-slate-300">Response time: Within 24 hours</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span className="text-slate-300">Timezone: GMT+6 (Bangladesh)</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-8">
                            <h3 className="text-xl font-bold text-slate-100 mb-4">
                                Follow Me
                            </h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: "logo-github", link: "https://github.com/elite1122", color: "hover:bg-gray-700" },
                                    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/rzelite/", color: "hover:bg-blue-600" },
                                    { icon: "logo-twitter", link: "https://x.com/rz_elite_", color: "hover:bg-blue-500" },
                                    { icon: "logo-instagram", link: "https://www.instagram.com/_rz.elite_/", color: "hover:bg-pink-600" }
                                ].map((social, index) => (
                                    <a
                                        key={social.icon}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                                    >
                                        <ion-icon name={social.icon} class="text-xl text-slate-400 hover:text-white"></ion-icon>
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
