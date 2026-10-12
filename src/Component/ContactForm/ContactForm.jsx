import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import MotionReveal from "../Common/MotionReveal";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState("idle"); // 'idle' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const directEmail = "rasheduzzamanelite@gmail.com";

  const contactChannels = [
    {
      title: "Direct Email",
      value: directEmail,
      href: `mailto:${directEmail}`,
      actionLabel: "Send Email",
      icon: (
        <svg className="w-4 h-4 text-lime-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      title: "WhatsApp Direct",
      value: "+880 1755 926275",
      href: "https://wa.me/8801755926275",
      actionLabel: "Open WhatsApp",
      icon: (
        <svg className="w-4 h-4 text-lime-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      title: "Direct Voice",
      value: "+880 1755 926275",
      href: "tel:+8801755926275",
      actionLabel: "Place Call",
      icon: (
        <svg className="w-4 h-4 text-lime-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      title: "Physical Base",
      value: "Dhaka, Bangladesh",
      href: null,
      actionLabel: "Timezone GMT+6",
      icon: (
        <svg className="w-4 h-4 text-lime-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ];

  const socialProfiles = [
    {
      label: "GitHub",
      href: "https://github.com/elite1122",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rzelite/",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/rz_elite_",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/_rz.elite_/",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      errors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!trimmedEmail) {
      errors.email = "Please enter your email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    if (!trimmedMessage) {
      errors.message = "Please enter your message.";
    } else if (trimmedMessage.length < 10) {
      errors.message = "Message must be at least 10 characters so I can understand your requirements.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Prevent accidental duplicate submissions
    if (isSubmitting) return;

    if (!validateForm()) {
      toast.warn("Please complete the required fields with valid details.");
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicId = import.meta.env.VITE_PUBLIC_ID;

    if (!serviceId || !templateId || !publicId) {
      setDeliveryStatus("error");
      setStatusMessage("Email service configuration is not fully active. Please use the direct email link below.");
      toast.error("Transmission endpoint unconfigured. Please use direct email fallback.");
      return;
    }

    setIsSubmitting(true);
    setDeliveryStatus("idle");
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicId
      );

      // Reset the form ONLY after confirmed successful delivery
      setDeliveryStatus("success");
      setStatusMessage("Transmission confirmed. Thank you for reaching out—I will respond to your inquiry shortly.");
      toast.success("Transmission successful! I will respond to your inquiry shortly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFieldErrors({});
      if (form.current) {
        form.current.reset();
      }
    } catch {
      // Keep form content intact on delivery failure so user never loses their typed message
      setDeliveryStatus("error");
      setStatusMessage("Transmission could not be dispatched via server pipeline. Please click the direct email button below to transmit your message directly.");
      toast.error("Transmission failed. You can send your message directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Build a pre-filled direct fallback mailto link using current typed data
  const fallbackMailto = `mailto:${directEmail}?subject=${encodeURIComponent(
    formData.subject.trim() || "AI & Full-Stack Engineering Inquiry"
  )}&body=${encodeURIComponent(
    `Hello Rasheduzzaman,\n\nSender: ${formData.name.trim() || "[Your Name]"}\nEmail: ${
      formData.email.trim() || "[Your Email]"
    }\n\n${formData.message.trim() || "[Project details / Inquiry]"}`
  )}`;

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="section-container relative"
    >
      <MotionReveal>
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="editorial-eyebrow mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
            <span>06 // Inquiries &amp; Transmission</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight">
            Initiate Contact &amp; Collaboration.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory-400 mt-2 max-w-2xl leading-relaxed">
            Available for conversational AI engineering, voice agent architecture, and full-stack system contracts.
            Send a direct transmission or connect via verified channels below.
          </p>
        </div>
      </MotionReveal>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Message Form (7 cols) */}
        <MotionReveal className="lg:col-span-7" delay={0.1}>
          <div className="editorial-card !p-0 overflow-hidden border-obsidian-700/80 shadow-2xl">
            {/* Header Telemetry Bar */}
            <div className="px-5 sm:px-6 py-3.5 bg-obsidian-900 border-b border-obsidian-800 flex items-center justify-between font-mono text-[11px] text-ivory-400">
              <span className="text-lime-accent flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-accent"></span>
                <span>DIRECT_TRANSMISSION // FORM</span>
              </span>
              <span className="text-ivory-500">ENDPOINT_ACTIVE</span>
            </div>

            <div className="p-6 sm:p-8">
              {/* Delivery Feedback Banner: Success */}
              {deliveryStatus === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 p-4 rounded-lg bg-obsidian-900 border border-lime-accent/40 text-ivory-100 space-y-2"
                >
                  <div className="flex items-center gap-2 text-lime-accent font-mono text-xs font-semibold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>TRANSMISSION CONFIRMED</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ivory-300">
                    {statusMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setDeliveryStatus("idle")}
                    className="font-mono text-xs text-lime-accent hover:underline pt-1 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {/* Delivery Feedback Banner: Error Fallback */}
              {deliveryStatus === "error" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-lg bg-obsidian-900 border border-red-500/40 text-ivory-100 space-y-3"
                >
                  <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span>DISPATCH NOTICE</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ivory-300 leading-relaxed">
                    {statusMessage}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={fallbackMailto}
                      className="editorial-btn-primary !text-xs !py-2 !px-4 font-mono"
                    >
                      Open in Email Client (Direct Fallback)
                    </a>
                  </div>
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold">
                      Sender Name <span className="text-lime-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      aria-required="true"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "error-name" : undefined}
                      className={`w-full bg-obsidian-900 border rounded-lg px-4 py-3 text-ivory-100 placeholder-ivory-500 focus:outline-none focus:ring-1 text-base sm:text-sm font-sans transition-colors ${
                        fieldErrors.name
                          ? "border-red-500/80 focus:border-red-400 focus:ring-red-400"
                          : "border-obsidian-700/80 focus:border-lime-accent focus:ring-lime-accent"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p id="error-name" role="alert" className="font-sans text-xs text-red-400 pt-0.5">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold">
                      Email Address <span className="text-lime-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="alex@company.com"
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "error-email" : undefined}
                      className={`w-full bg-obsidian-900 border rounded-lg px-4 py-3 text-ivory-100 placeholder-ivory-500 focus:outline-none focus:ring-1 text-base sm:text-sm font-sans transition-colors ${
                        fieldErrors.email
                          ? "border-red-500/80 focus:border-red-400 focus:ring-red-400"
                          : "border-obsidian-700/80 focus:border-lime-accent focus:ring-lime-accent"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="error-email" role="alert" className="font-sans text-xs text-red-400 pt-0.5">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold">
                    Inquiry Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Voice AI Platform / Full-Stack Project / Advisory"
                    className="w-full bg-obsidian-900 border border-obsidian-700/80 rounded-lg px-4 py-3 text-ivory-100 placeholder-ivory-500 focus:border-lime-accent focus:outline-none focus:ring-1 focus:ring-lime-accent text-base sm:text-sm font-sans transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-wider text-ivory-300 font-semibold">
                    Transmission Content <span className="text-lime-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your technical requirements, architectural goals, or engineering timeline..."
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "error-message" : undefined}
                    className={`w-full bg-obsidian-900 border rounded-lg px-4 py-3 text-ivory-100 placeholder-ivory-500 focus:outline-none focus:ring-1 text-base sm:text-sm font-sans transition-colors resize-none leading-relaxed ${
                      fieldErrors.message
                        ? "border-red-500/80 focus:border-red-400 focus:ring-red-400"
                        : "border-obsidian-700/80 focus:border-lime-accent focus:ring-lime-accent"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="error-message" role="alert" className="font-sans text-xs text-red-400 pt-0.5">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="editorial-btn-primary w-full justify-center !py-3.5 text-xs font-mono tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Transmitting Message...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Transmission</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </MotionReveal>

        {/* Right Column: Verified Channels & Status (5 cols) */}
        <MotionReveal className="lg:col-span-5 space-y-6" delay={0.2}>
          {/* Direct Verified Channels Card */}
          <div className="editorial-card !p-0 overflow-hidden border-obsidian-700/80">
            <div className="px-5 sm:px-6 py-3.5 bg-obsidian-900 border-b border-obsidian-800 font-mono text-[11px] text-lime-accent uppercase tracking-wider flex items-center justify-between">
              <span>Direct Verified Channels</span>
              <span className="text-ivory-500">AUTHENTICATED</span>
            </div>

            <div className="p-5 sm:p-6 space-y-3">
              {contactChannels.map((channel) => {
                const Content = (
                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-obsidian-900 border border-obsidian-800 hover:border-obsidian-700 transition-colors">
                    <div className="p-2 rounded-md bg-obsidian-800/80 border border-obsidian-700/60 mt-0.5">
                      {channel.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-ivory-500">
                        {channel.title}
                      </div>
                      <div className="font-heading font-medium text-sm text-ivory-100 truncate mt-0.5">
                        {channel.value}
                      </div>
                    </div>
                    <div className="font-mono text-[10px] text-lime-accent self-center">
                      {channel.actionLabel}
                    </div>
                  </div>
                );

                return channel.href ? (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-accent rounded-lg"
                    aria-label={`${channel.title}: ${channel.value}`}
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={channel.title}>{Content}</div>
                );
              })}
            </div>
          </div>

          {/* Operational Status Card */}
          <div className="editorial-card p-5 sm:p-6 border-obsidian-700/80 space-y-3.5">
            <div className="font-mono text-[11px] uppercase tracking-wider text-ivory-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse"></span>
              <span>Operational Status</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-ivory-300">
                <span className="text-ivory-500">ENGAGEMENT:</span>
                <span className="text-lime-accent">AI &amp; Full-Stack Contracts</span>
              </div>
              <div className="flex items-center justify-between text-ivory-300">
                <span className="text-ivory-500">RESPONSE LATENCY:</span>
                <span>Within 24 Hours</span>
              </div>
              <div className="flex items-center justify-between text-ivory-300">
                <span className="text-ivory-500">BASE LOCATION:</span>
                <span>Dhaka, Bangladesh · GMT+6</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="editorial-card p-5 sm:p-6 border-obsidian-700/80">
            <div className="font-mono text-[11px] uppercase tracking-wider text-ivory-400 font-semibold mb-3">
              Verified Social Profiles
            </div>
            <div className="flex items-center gap-2.5">
              {socialProfiles.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-obsidian-900 border border-obsidian-800 text-ivory-300 hover:text-lime-accent hover:border-obsidian-700 transition-colors flex items-center justify-center gap-1.5 font-mono text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-accent"
                  aria-label={`Open ${social.label} profile`}
                >
                  {social.icon}
                  <span className="hidden sm:inline text-[11px]">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default ContactForm;
