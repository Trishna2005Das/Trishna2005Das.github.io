// Single source of truth - parsed from the latest resume PDF.
// Update here, every section picks it up.

export const profile = {
  name: "Trishna Das",
  tagline: "Full Stack Software Engineer | AI & Automation Engineer",
  // Verbatim professional summary from the resume - no invented copy.
  summary:
    "Results-oriented Software Engineer with a track record of delivering production-ready features across multiple industry internships. Highly adaptable and collaborative, I specialize in building robust backend architectures and automated systems that drive immediate, measurable technical impact from day one.",
  location: "Mumbai, India",
  relocate: "Open to Relocate",
  email: "trishnadas7897@gmail.com",
  phone: "+91 7439523511",
  links: {
    github: "https://github.com/trishnadas7897",
    linkedin: "https://linkedin.com/in/trishnadas7897",
    resume: "/resume/",
    transcriber: "/transcriber/",
  },
  // Quantified, drawn from the resume bullets. Numbers are kept with
  // enough context that a recruiter can interpret them (runbook A3:
  // "a number you can't link to should get context that makes it
  // defensible or come off the site").
  metrics: [
    { value: "5", label: "industry internships across full-stack, cloud, AI" },
    {
      value: "8",
      label: "engineers coordinated at OPM (sprint planning + reviews)",
    },
    {
      value: "3",
      label: "live products at OPM - Ridlin, MyFojo, Paribhaasha",
    },
    {
      value: "98%",
      label: "attendance-app validation accuracy (see Projects)",
    },
  ],
} as const;

// ----------------------------------------------------------------------------
// Experience
// ----------------------------------------------------------------------------

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlight?: boolean;
  link?: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer Intern - Rates Tech, CIB",
    location: "Mumbai, India",
    period: "May 2026 - Jul 2026",
    highlight: true,
    link: "https://www.jpmorgan.com/",
    bullets: [
      "Selected through a competitive national pipeline (DSA + HireVue) for the Software Engineer Program.",
      "Building email-automation systems in Rates Tech under Corporate & Investment Banking to track and flag process delays across production workflows.",
      "Operating under enterprise security and compliance standards.",
    ],
    stack: ["Java", "Email Automation", "Fixed Income", "CIB"],
  },
  {
    company: "OPM Corporation",
    role: "Software Development Engineer II (Project Lead)",
    location: "Bhubaneswar, India",
    period: "Aug 2025 - Dec 2025",
    bullets: [
      "Led architecture and development across three live products while coordinating an 8-engineer team.",
      "Led backend development for Ridlin (React, Flask, AWS).",
      "Built and enhanced features for MyFojo (React Native, Django, Azure).",
      "Collaborated with stakeholders on Paribhaasha's tech stack and AWS infrastructure.",
    ],
    stack: ["React", "Flask", "AWS", "React Native", "Django", "Azure"],
  },
  {
    company: "WNS Global Services",
    role: "EU Analytics Intern (Full Stack)",
    location: "Pune, India",
    period: "May 2025 - Aug 2025",
    bullets: [
      "Completed a full-stack engineering training programme focused on Flask, Angular, and MongoDB.",
      "Hands-on with JWT authentication, REST API development, LangChain-based LLM integration, and agentic AI workflows.",
    ],
    stack: ["Flask", "Angular", "MongoDB", "JWT", "LangChain", "Agentic AI"],
  },
  {
    company: "Inovaare Clouds Solutions Pvt. Ltd.",
    role: "Cloud Platform & Product Development Intern",
    location: "Bhubaneswar, India",
    period: "May 2025 - Jul 2025",
    bullets: [
      "Contributed to an OCR pipeline that extracts and stores medical prescriptions in AWS S3 via Lambda.",
      "Developed a centralised prior-authorisation automation platform and KPI dashboards for healthcare workflows.",
    ],
    stack: ["AWS Lambda", "S3", "OCR", "Python", "Healthcare Compliance"],
  },
  {
    company: "Codecis AI",
    role: "Backend Developer Intern",
    location: "San Francisco, United States",
    period: "Jan 2025 - Mar 2025",
    bullets: [
      "Built an ERP-based employee management dashboard.",
      "Built a centralised social-media CRM supporting ad-campaign tracking and multi-platform automation using Flask, MongoDB, and AWS.",
    ],
    stack: ["Flask", "MongoDB", "AWS", "ERP", "Social CRM"],
  },
];

// ----------------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------------

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    slug: "transcriber",
    name: "Hinglish Live Transcription",
    tagline: "Real-time Hindi + English speech-to-text",
    featured: true,
    description:
      "End-to-end live ASR system: a static frontend on Vercel streams mic audio over a WebSocket to a Node server on Render, which forwards 5-second segments to Groq's Whisper Large v3 with language=hi + a Hinglish prompt, runs server-side Devanagari -> Roman post-processing, and ships clean Hinglish back with word-by-word reveals.",
    liveUrl: "https://transcriber.cyrussaas.com/",
    // Link the repo root (so the README is the storefront) instead of a
    // branch, per runbook A2 ("don't link branches - link the repo root").
    repoUrl: "https://github.com/trishnadas7897/transcriber",
    stack: ["Node 20", "ws", "Groq Whisper", "Web Audio API", "Render", "Vercel"],
    bullets: [
      "Three-layer silence gate: client RMS, server segment-RMS, hallucination filter on output.",
      "Server-side Hunterian romanisation so Hindi reads as clean Latin (`majaa aataa hai`) and embedded English passes through untouched.",
      "Production-grade sister branch (develop): multi-tenant Postgres + RLS, Prometheus, GitHub Actions CI/CD, on-call runbooks.",
    ],
  },
  {
    slug: "warehouse-inventory",
    name: "Warehouse Inventory Dashboard",
    tagline: "AI inventory ops - dashboard + CV pipeline",
    description:
      "React + TypeScript dashboard for warehouse inventory operations, paired with a computer-vision pipeline that uses YOLOv8 detection and Tesseract OCR to read package labels and reconcile stock counts against live records.",
    // Repo root, per runbook A2.
    repoUrl: "https://github.com/trishnadas7897/warehouse-inventory",
    stack: ["React", "TypeScript", "YOLOv8", "OpenCV", "Tesseract"],
    bullets: [
      "Real-time inventory dashboard with role-aware filtering and CSV export.",
      "YOLOv8 object detection + Tesseract OCR for label-driven stock reconciliation.",
      "Team project - I built the React dashboard + the YOLOv8/OCR pipeline.",
    ],
  },
  {
    slug: "agent-task-tracker",
    name: "Agent Task Tracker",
    tagline: "AI-powered task assignment tool",
    description:
      "Agentic AI task-management system built at WNS using Flask and SQLite with REST APIs for automated task assignment, real-time tracking, and workflow optimisation across distributed teams.",
    repoUrl: "https://github.com/trishnadas7897/Agent-Task-Tracker",
    stack: ["Flask", "SQLite", "LangChain", "REST APIs"],
    bullets: [
      "Automated task assignment across distributed teams.",
      "Real-time tracking with role-based access.",
      "Workflow optimisation patterns retired 80 % of manual task-management overhead.",
    ],
  },
  {
    slug: "attendance-app",
    name: "Attendance Management App",
    tagline: "QR + face-based verification system",
    description:
      "Full-stack attendance platform built with Flutter and Flask: QR scanning, facial recognition, encrypted MongoDB storage, and role-based authentication. Achieves 98 % attendance validation accuracy (test set + methodology in the repo README).",
    // Repo root, per runbook A2. If the repo is named differently, the
    // user should rename or symlink - this URL is what /resume links to.
    repoUrl: "https://github.com/trishnadas7897/attendance-app",
    stack: ["Flutter", "Flask", "MongoDB", "OpenCV", "JWT"],
    bullets: [
      "98 % validation accuracy across mixed QR + facial-recognition flows (see repo README for the test set and methodology).",
      "Encrypted-at-rest MongoDB with role-aware endpoints for students, faculty, and admins.",
      "End-to-end ownership: mobile, backend, and recognition pipeline.",
    ],
  },
  {
    slug: "adversarial-ai-detector",
    name: "Adversarial AI Image Detection Pipeline",
    tagline: "CNN classifier for real vs AI-generated imagery",
    description:
      "CNN-based real/fake classifier trained on 100k+ images with adversarial-noise resilience. Built for the IIT Bhubaneswar ML Hackathon 2025.",
    repoUrl: "https://github.com/trishnadas7897/ml-hackathon-iitbbs2025",
    stack: ["PyTorch", "NumPy", "OpenCV", "Adversarial ML"],
    bullets: [
      "Trained on a 100 k+ image dataset across multiple diffusion generators.",
      "Adversarial-noise-resilient architecture - precision/recall/F1 tuned for synthetic-media drift.",
      "Built in 36 hours at the IIT Bhubaneswar ML Hackathon.",
    ],
  },
];

// ----------------------------------------------------------------------------
// Skills - parsed verbatim from the latest resume's SKILLS block.
// ----------------------------------------------------------------------------

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C/C++ STL", "Dart", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Flask", "Django", "FastAPI", "Express.js", "Next.js", "Angular", "Flutter", "React.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Firebase", "Jenkins", "Kubernetes", "GitHub Actions"],
  },
  {
    category: "Gen AI & LLMs",
    items: ["LangChain", "LangGraph (Agentic AI)", "RAG", "LLM Fine-tuning", "MCP", "Hugging Face"],
  },
  {
    category: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Computer Vision (OpenCV)", "NLP"],
  },
];

// ----------------------------------------------------------------------------
// Certifications
// ----------------------------------------------------------------------------

export const certifications = [
  { name: "Data Analytics Summer Internship", issuer: "IBM SkillsBuild" },
  { name: "Technology Job Simulation", issuer: "Deloitte Australia Forage" },
  { name: "Crash Course on Python", issuer: "Google Coursera" },
];

// ----------------------------------------------------------------------------
// Awards - latest resume's AWARDS & ACHIEVEMENTS block.
// ----------------------------------------------------------------------------

export type Achievement = {
  title: string;
  issuer: string;
  year?: string;
  badge?: "primary" | "secondary";
};

export const achievements: Achievement[] = [
  {
    title: "Runner-up - Code for Good 2025 Hackathon",
    issuer: "J.P. Morgan Services India Private Limited",
    year: "2025",
    badge: "primary",
  },
  {
    title: "Participant - ML Hackathon 2025",
    issuer: "IIT Bhubaneswar",
    year: "2025",
    badge: "secondary",
  },
  {
    title: "Participant - C-ATHON Coding Competition",
    issuer: "iServeU",
    year: "2025",
    badge: "secondary",
  },
  {
    title: "Winner - Maze Hunt 2024",
    issuer: "Robotics Club, VSSUT",
    year: "2024",
    badge: "primary",
  },
];

// ----------------------------------------------------------------------------
// Education
// ----------------------------------------------------------------------------

export const education = [
  {
    school: "Veer Surendra Sai University of Technology (VSSUT)",
    degree: "B.Tech, Computer Science & Engineering",
    grade: "SGPA 9.16 (1st sem) - CGPA 8.67 (upto 4th sem)",
    period: "Jan 2023 - Present",
    location: "Burla, India",
  },
  {
    school: "Delhi Public School Ruby Park",
    degree: "Senior Secondary (XII) - CBSE Science (PCM)",
    grade: "",
    period: "",
    location: "Kolkata, India",
  },
  {
    school: "Mahadevi Birla Shishu Vihar",
    degree: "Secondary (X) - ICSE",
    grade: "95.10 %",
    period: "",
    location: "Kolkata, India",
  },
];

export const sectionsNav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];
