import { Link } from "react-scroll";
import MotionReveal from "../Common/MotionReveal";

const AboutMe = () => {
  const driveLink =
    "https://drive.google.com/file/d/1ZG7w3i65OOZ8gJhQsv5pxb_wdIYZOmrX/view?usp=sharing";

  const tenets = [
    {
      index: "01",
      title: "Low-Latency Conversational Voice",
      description:
        "Prioritizing natural turn-taking, fast audio streaming, and resilient interruptions by optimizing the complete pipeline across telephony, speech recognition, and model inference.",
    },
    {
      index: "02",
      title: "End-to-End System Ownership",
      description:
        "Building without architectural handoff friction—from high-fidelity React interfaces to Node.js/Python microservices, database schemas, and external API orchestrations.",
    },
    {
      index: "03",
      title: "Deterministic Business Automation",
      description:
        "Grounding conversational AI with real business actions: autonomous calendar bookings via Cal.com, Google Calendar synchronizations, and reliable CRM pipeline updates.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Md Rasheduzzaman Elite"
      className="section-container border-b border-obsidian-700/60 relative"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Authentic Narrative & Actions (7 cols) */}
        <MotionReveal className="lg:col-span-7 space-y-6">
          <div className="editorial-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
            <span>04 // Background &amp; Philosophy</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight leading-tight">
            Engineering at the Intersection of{" "}
            <span className="text-lime-accent">Conversational AI</span>{" "}
            <span className="font-editorial-serif italic font-normal text-ivory-300">
              &amp; Full-Stack Systems.
            </span>
          </h2>

          <div className="space-y-4 font-sans text-sm sm:text-base text-ivory-400 leading-relaxed">
            <p>
              I am an AI Engineer and Full-Stack Developer with a background in Computer Science &amp;
              Engineering from Daffodil International University (CGPA 3.89 / 4.00). My work centers on
              building production-ready conversational voice platforms, automated phone receptionists,
              and modern web architectures that solve real operational workflows.
            </p>

            <p>
              Rather than treating artificial intelligence as a disconnected prototype or static chat
              interface, I treat speech models, LLM APIs, and telephony protocols as first-class,
              integrated components of scalable software systems. At CogniDrift and Developer World LLC,
              I shipped platforms where voice agents interact with users in natural language, negotiate
              calendars, and synchronize lead intelligence directly into enterprise backends.
            </p>

            <p>
              My full-stack foundations allow me to operate across the entire lifecycle: translating
              product requirements and Figma designs into clean React interfaces, orchestrating
              asynchronous backend services in Node.js and Python, and deploying resilient cloud
              integrations.
            </p>
          </div>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-obsidian-800">
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-primary !py-2.5 !px-5 text-xs font-mono"
              aria-label="Download verified Curriculum Vitae in PDF format"
            >
              <span>Download CV (PDF)</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={400}
              offset={-80}
              className="editorial-btn-secondary !py-2.5 !px-5 text-xs font-mono cursor-pointer"
            >
              Start a Conversation
            </Link>
          </div>
        </MotionReveal>

        {/* Right Column: Architectural Tenets & Principles (5 cols) */}
        <MotionReveal className="lg:col-span-5 space-y-4" delay={0.15}>
          <div className="px-4 py-2 bg-obsidian-900 border border-obsidian-800 rounded-lg font-mono text-xs text-lime-accent uppercase tracking-wider flex items-center justify-between">
            <span>Engineering Principles</span>
            <span className="text-ivory-500 text-[10px]">VERIFIED_APPROACH</span>
          </div>

          <div className="space-y-3">
            {tenets.map((tenet) => (
              <div
                key={tenet.index}
                className="editorial-card p-5 sm:p-6 border-obsidian-700/80 hover:border-obsidian-600 transition-colors"
              >
                <div className="font-mono text-xs text-lime-accent font-semibold mb-1">
                  {`PRINCIPIUM ${tenet.index} //`}
                </div>
                <h3 className="font-heading text-lg font-bold text-ivory-100 tracking-tight mb-2">
                  {tenet.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ivory-400 leading-relaxed">
                  {tenet.description}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default AboutMe;