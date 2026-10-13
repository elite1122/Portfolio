import projectOne from "../assets/Project1.png";
import projectTwo from "../assets/project2.png";
import projectThree from "../assets/project3.png";
import projectFour from "../assets/Project4.png";
import cognidriftImg from "../assets/cognidrift.png";
import classioImg from "../assets/classio.png";
import marathonImg from "../assets/marathon.png";

export const projectsData = [
  {
    id: "cognidrift",
    img: cognidriftImg,
    name: "CogniDrift — AI-Powered Receptionist & Communication Platform",
    tagline: "Autonomous Voice AI & Omnichannel Front-Office Infrastructure",
    period: "May 2025 – May 2026",
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Retell SDK",
      "Twilio",
      "OpenAI",
      "Node.js",
      "Express",
      "MongoDB",
      "Cal.com",
      "Resend",
    ],
    description:
      "CogniDrift is a unified AI front-office platform that automates incoming calls, SMS conversations, and appointment scheduling for modern businesses. The system integrates natural voice turn-taking with low latency, automated calendar coordination via Cal.com, and an embeddable multi-model chatbot. A multi-tenant administrative console provides real-time conversation auditing, analytics telemetry, and CRM synchronization across multiple commercial verticals.",
    challenges:
      "Engineered low-latency, natural turn-taking on top of Retell Client SDK and Twilio; orchestrated OpenAI context handling across simultaneous voice, chat, and SMS workflows without cross-tenant memory leakage; architected automated Cal.com booking flows validating calendar availability in real time; and structured modular front-end packages deployed seamlessly.",
    improvements:
      "Expanding multi-language real-time speech translation, deeper conversational intelligence analytics, additional LLM provider fallbacks, and turnkey integrations with major enterprise CRMs and ticketing systems.",
    live_link: "https://cognidrift.com",
    github_link: null,
    category: "AI & Automation",
    featured: true,
    architecturePoints: [
      { title: "Real-time Voicebot", desc: "Low-latency telephony handling via Retell SDK & Twilio" },
      { title: "Smart Scheduling", desc: "Autonomous appointment booking via Cal.com & Google Calendar" },
      { title: "Omnichannel Pipeline", desc: "Unified voice, SMS agents, and web chat widgets" },
      { title: "Telemetry & Multi-tenant", desc: "Live call logs, transcript analytics, and CRM syncing" },
    ],
  },
  {
    id: "classio",
    img: classioImg,
    name: "Classio — Full-Stack Restaurant ERP & Smart Ordering Platform",
    tagline: "Bilingual Ordering, Real-Time POS, KDS & FIFO Inventory Engine",
    period: "2025 – Present",
    techStack: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB (Native Driver)",
      "Tailwind CSS",
      "JWT",
      "Vite",
    ],
    description:
      "Classio is a high-performance single-branch restaurant management system featuring a bilingual (EN/BN) customer ordering web app, real-time POS, Kitchen Display System (KDS), and automated procurement. Architected with native MongoDB driver multi-document ACID transactions, recipe-based FIFO inventory depletion, and financial drawer reconciliation.",
    challenges:
      "Engineered a Bill of Materials (BOM) inventory engine that automatically depletes raw ingredients using FIFO (First-In, First-Out) costing batches upon order confirmation to deliver accurate Cost of Goods Sold (COGS) analytics. Implemented double-entry principles separating payables from physical cash, featuring tamper-evident cashier daily drawer closing with opening float, cash sales, operational expenses, and surplus/shortage audit logs. Architected the backend using the official native MongoDB Node.js driver (MongoClient singleton) with ACID multi-document transactions without Mongoose, reducing query overhead and memory footprint.",
    improvements:
      "Multi-branch enterprise synchronization with cross-store transfer manifests, offline-first progressive POS caching with conflict-free background reconciliation, automated procurement re-orders via supplier APIs, and AI-driven daily dish demand forecasting.",
    github_link: "https://github.com/elite1122", // Replace with your repository link if specific
    live_link: null, // Replace with your live demo deployment URL
    category: "Full Stack",
    featured: false,
    architecturePoints: [
      {
        title: "End-to-End Restaurant Management",
        desc: "Bilingual (EN/BN) customer ordering web app, real-time POS, Kitchen Display System (KDS), and automated procurement.",
      },
      {
        title: "Recipe-Based FIFO Inventory Engine",
        desc: "Bill of Materials (BOM) engine that automatically depletes raw ingredients using FIFO costing batches upon order confirmation for accurate COGS analytics.",
      },
      {
        title: "Financial Accounting & Shift Reconciliation",
        desc: "Double-entry float balancing, sales auditing, operational expense logs, and tamper-evident cashier drawer closing.",
      },
      {
        title: "High-Performance Native MongoDB",
        desc: "ACID multi-document transactions using official native MongoClient singleton without Mongoose, minimizing latency and RAM overhead.",
      },
      {
        title: "Security & Role-Based Access Control (RBAC)",
        desc: "Least-privilege JWT authentication for Owner, Cashier, and Kitchen roles, rate limiting, and 45+ automated integration tests.",
      },
    ],
  },
  {
    id: "insightly",
    img: projectFour,
    name: "Insightly News — Modern Editorial Publishing Platform",
    tagline: "Interactive Full-Stack Journalism & Content Management",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "JWT",
      "Stripe",
    ],
    description:
      "A full-stack editorial newspaper platform engineered for high-performance article consumption and publisher content management. Features role-based publisher administration, article review workflows, Firebase authentication, JWT-guarded API routes, and a Stripe payment gateway powering premium subscription tiers.",
    challenges:
      "Architecting a multi-publisher content submission and editorial approval pipeline; implementing secure payment webhooks with Stripe for tiered memberships; and building performant article searching and tag-filtering over MongoDB collections with pagination.",
    improvements:
      "Planned additions include AI-assisted article summarization, personalized reading recommendation feeds, and push notification dispatching for breaking news bulletins.",
    github_link: "https://github.com/elite1122/Insightly-Client",
    live_link: "https://insightly-facts.web.app/",
    category: "Full Stack",
    featured: false,
  },
  {
    id: "marathon",
    img: marathonImg,
    name: "Marathon Management System",
    tagline: "Role-Based Event Coordination & Registration Dashboard",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "JWT",
    ],
    description:
      "A full-stack athletic event orchestration portal connecting marathon organizers with participants. Features secure email/password and Google OAuth via Firebase, participant dashboards with registration updates, real-time participant tallies, and organizer tools to publish, edit, or track running events.",
    challenges:
      "Designing role-segregated UI workflows for event hosts vs runners; securing REST API endpoints with JWT tokens; and preventing race conditions in participant counters during simultaneous registration bursts.",
    improvements:
      "Planned enhancements include automated timing chip integrations, runner bib number generation, and post-race downloadable finish certificates.",
    github_link: "https://github.com/elite1122/Marathon-Management-System",
    live_link: "https://gomarathonbd.web.app/",
    category: "Full Stack",
    featured: false,
  },
  {
    id: "winter-donation",
    img: projectOne,
    name: "Winter Cloth Donation Portal",
    tagline: "Community Aid & Volunteer Distribution Platform",
    techStack: ["React", "Tailwind CSS", "DaisyUI", "Firebase Auth"],
    description:
      "A community aid platform facilitating the collection and distribution of warm clothing to vulnerable communities. Connects regional donors directly with verified local volunteer collection points across Bangladesh, featuring interactive division-by-division donation drives.",
    challenges:
      "Designing an intuitive multi-step donation pledge flow with volunteer pickup coordination, ensuring responsive layouts across mobile devices used by field volunteers.",
    improvements:
      "Adding live SMS notifications for donors when their contribution is distributed and geo-mapping volunteer collection centers.",
    github_link: "https://github.com/elite1122/Winter-Clothing-Donation-Website-Design",
    live_link: "https://winter-cloth-donation-auth.web.app/",
    category: "Full Stack",
    featured: false,
  },
  {
    id: "gadget-heaven",
    img: projectTwo,
    name: "Gadget Heaven Electronics Store",
    tagline: "High-Performance Consumer Electronics Catalog",
    techStack: ["React", "Tailwind CSS", "Context API", "Local Storage"],
    description:
      "A sleek consumer hardware catalog application featuring dynamic category filtering, cart management, persistent wishlists, price sorting, and detailed specification views. Emphasizes clean UI architecture with persistent client state.",
    challenges:
      "Maintaining coordinated state between cart calculations, wishlist balances, and available inventory limits across route transitions without unexpected rerenders.",
    improvements:
      "Integrating a live payment gateway, user order history tracking, and inventory stock webhooks.",
    github_link: "https://github.com/elite1122/Gadget-Heaven-Website-Design-Using-Core-React-and-Tailwind-CSS",
    live_link: "https://gadget-heaven.netlify.app",
    category: "Frontend",
    featured: false,
  },
  {
    id: "dream11-bpl",
    img: projectThree,
    name: "Dream 11 Making in BPL",
    tagline: "Tactical Fantasy Cricket Lineup Builder",
    techStack: ["React", "Tailwind CSS", "Custom Hooks"],
    description:
      "An interactive sports strategy application where cricket fans assemble their optimal Bangladesh Premier League fantasy squads. Enforces real-world budget constraints, player category balance rules, and dynamic lineup validation.",
    challenges:
      "Implementing real-time roster budget validation and enforcing role-based team caps (batsmen, bowlers, all-rounders) with instant UI feedback.",
    improvements:
      "Adding live match score integrations and head-to-head fantasy league scoring algorithms.",
    github_link: "https://github.com/elite1122/Dream-11-Making-in-BPL-Website-Design",
    live_link: "https://make-your-bpl-dream11-team.netlify.app/",
    category: "Frontend",
    featured: false,
  },
];
