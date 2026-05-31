import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";

/* ─────────────────────────────────────────────
   PALETTE
───────────────────────────────────────────── */
const C = {
  bg: "#F5F2EB",
  bgAlt: "#EFEBE2",
  ink: "#1C1B1A",
  inkLight: "#2B2620",
  inkMuted: "#6B6560",
  rule: "rgba(43,38,32,0.14)",
  accent: "#A0624A",
  sage: "#7A8C72",
  warm: "#C4A882",
};

/* ─────────────────────────────────────────────
   GLOBAL STYLE INJECTION
───────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@300;400&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #F5F2EB; cursor: none !important; overflow-x: hidden; }
  * { cursor: none !important; }
  ::selection { background: rgba(160,98,74,0.18); }
  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-thumb { background: rgba(43,38,32,0.18); border-radius: 99px; }

  /* SVG grain filter */
  .grain-overlay {
    position: fixed; inset: 0; pointer-events: none; z-index: 9998;
    opacity: 0.028;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 180px 180px;
  }

  /* Responsive Experience Section */
  .experience-row {
    display: flex;
    gap: 2rem;
    padding: 2.2rem 0;
    align-items: flex-start;
  }
  .experience-row-left {
    min-width: 148px;
    flex-shrink: 0;
  }
  .experience-row-rule {
    width: 0.5px;
    background: rgba(43,38,32,0.14);
    align-self: stretch;
    min-height: 60px;
    flex-shrink: 0;
  }
  .experience-row-right {
    flex-grow: 1;
  }
  @media (max-width: 768px) {
    .experience-row {
      flex-direction: column;
      gap: 1.2rem;
      padding: 1.6rem 0;
    }
    .experience-row-left {
      min-width: auto;
      width: 100%;
    }
    .experience-row-rule {
      display: none;
    }
  }

  /* Responsive Custom Cursor */
  @media (hover: none) {
    .custom-cursor-outer, .custom-cursor-inner {
      display: none !important;
    }
    body, * {
      cursor: auto !important;
    }
  }
`;

/* ─────────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────────── */
function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);

  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 };
  const trailSpringX = useSpring(trailX, { damping: 40, stiffness: 180 });
  const trailSpringY = useSpring(trailY, { damping: 40, stiffness: 180 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,[data-magnetic]").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="custom-cursor-outer"
        style={{
          position: "fixed",
          left: trailSpringX,
          top: trailSpringY,
          x: "-50%",
          y: "-50%",
          width: hovered ? 52 : 36,
          height: hovered ? 52 : 36,
          borderRadius: "50%",
          border: `0.5px solid ${C.accent}`,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: hovered ? 0.7 : 0.4,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="custom-cursor-inner"
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: C.accent,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   MAGNETIC TEXT
   Pulls gently toward cursor when hovered
───────────────────────────────────────────── */
function MagneticText({ children, style = {}, className = "", strength = 0.35 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 22, stiffness: 180 });
  const springY = useSpring(y, { damping: 22, stiffness: 180 });

  const onMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    },
    [strength]
  );
  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, []);

  return (
    <motion.span
      ref={ref}
      data-magnetic
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: "inline-block", x: springX, y: springY, ...style }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   LENS FOCUS REVEAL
   Elements emerge from blur+scale — like a
   camera lens pulling into sharp focus
───────────────────────────────────────────── */
function LensFocus({ children, delay = 0, style = {}, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
      animate={
        inView
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 1.04, filter: "blur(10px)" }
      }
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        delay,
        filter: { duration: 0.9 },
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   RULE
───────────────────────────────────────────── */
const Rule = ({ style = {} }) => (
  <div style={{ height: "0.5px", background: C.rule, width: "100%", ...style }} />
);
const RuleV = () => (
  <div
    style={{
      width: "0.5px",
      background: C.rule,
      alignSelf: "stretch",
      minHeight: 60,
      flexShrink: 0,
    }}
  />
);

/* ─────────────────────────────────────────────
   TYPOGRAPHY HELPERS
───────────────────────────────────────────── */
const Eyebrow = ({ children, style = {} }) => (
  <p
    style={{
      fontFamily: "'Jost', sans-serif",
      fontSize: "0.58rem",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C.inkMuted,
      ...style,
    }}
  >
    {children}
  </p>
);

const Display = ({ children, style = {}, tag = "h2" }) => {
  const Tag = tag;
  return (
    <Tag
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontWeight: 300,
        color: C.ink,
        lineHeight: 1.02,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

const Body = ({ children, style = {} }) => (
  <p
    style={{
      fontFamily: "'Jost', sans-serif",
      fontWeight: 300,
      color: C.inkMuted,
      lineHeight: 1.78,
      fontSize: "0.84rem",
      ...style,
    }}
  >
    {children}
  </p>
);

const Tag = ({ children }) => (
  <span
    style={{
      fontFamily: "'Jost', sans-serif",
      fontSize: "0.58rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      border: `0.5px solid ${C.rule}`,
      padding: "0.28rem 0.65rem",
      color: C.inkMuted,
    }}
  >
    {children}
  </span>
);

/* ─────────────────────────────────────────────
   SECTION PADDING SHORTHAND
───────────────────────────────────────────── */
const SP = {
  padding: "clamp(5rem,10vw,9rem) clamp(2rem,8vw,10rem)",
};

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  const { scrollY } = useScroll();
  const yPara = useTransform(scrollY, [0, 600], [0, 70]);
  const opaPara = useTransform(scrollY, [0, 380], [1, 0]);

  return (
    <section
      style={{
        ...SP,
        minHeight: "100vh",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "clamp(4rem,10vh,8rem)",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Eyebrow>Portfolio · 2026</Eyebrow>
        <nav style={{ display: "flex", gap: "2rem" }}>
          {["Work", "Projects", "Skills"].map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: C.inkMuted,
                textDecoration: "none",
              }}
            >
              {n}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Name */}
      <motion.div style={{ y: yPara, opacity: opaPara }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ marginBottom: "1.2rem" }}
        >
          <Eyebrow>Full Stack · AI · Automation Engineer</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(4.5rem,14vw,13rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            color: C.ink,
          }}
        >
          <MagneticText strength={0.18}>Trishna</MagneticText>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(4.5rem,14vw,13rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            color: C.accent,
          }}
        >
          <MagneticText strength={0.18}>Das</MagneticText>
        </motion.h1>
      </motion.div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.9 }}
        style={{ marginTop: "clamp(3rem,8vh,7rem)" }}
      >
        <Rule style={{ marginBottom: "1.2rem" }} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <Body style={{ maxWidth: 360 }}>
            Software Engineer building robust backend architectures and automated
            systems — currently at JPMorgan Chase, Mumbai.
          </Body>
          <div style={{ textAlign: "right" }}>
            <Eyebrow style={{ marginBottom: "0.4rem" }}>Contact</Eyebrow>
            <Body>
              trishnadas7897@gmail.com
              <br />
              +91 74395 23511
              <br />
              Mumbai · Open to Relocate
            </Body>
          </div>
        </div>
      </motion.div>

      {/* Ghost numeral */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-2vw",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(8rem,24vw,22rem)",
          fontWeight: 300,
          color: "rgba(43,38,32,0.035)",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        I
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────────── */
const EXPERIENCES = [
  {
    role: "Software Engineer Program Intern",
    org: "JPMorgan Chase & Co.",
    loc: "Mumbai",
    period: "May 2026 — Present",
    tag: "CIB · Rates Tech",
    body: "Selected through a competitive national pipeline (DSA + HireVue). Building email automation systems in Rates Tech under CIB to track and flag process delays across production workflows under enterprise security and compliance standards.",
  },
  {
    role: "Software Development Engineer",
    org: "OPM Corporation",
    loc: "Bhubaneswar",
    period: "Aug – Dec 2025",
    tag: "Project Lead",
    body: "Led architecture across three live products — backend for Ridlin (React, Flask, AWS) coordinating an 8-engineer team; enhanced features for MyFojo (React Native, Django, Azure); collaborated on Paribhaasha's AWS infrastructure.",
  },
  {
    role: "EU Analytics Intern · Full Stack",
    org: "WNS Global Services",
    loc: "Pune",
    period: "May – Aug 2025",
    tag: "LLM Integration",
    body: "Full-stack engineering programme: Flask, Angular, MongoDB. JWT authentication, REST API development, LangChain-based LLM integration, and agentic AI workflows.",
  },
  {
    role: "Cloud Platform & Product Intern",
    org: "Inovaare Clouds Solutions",
    loc: "Bhubaneswar",
    period: "May – Jul 2025",
    tag: "AWS · Healthcare",
    body: "OCR pipeline extracting medical prescriptions via AWS Lambda to S3. Built centralised prior-authorisation automation and KPI dashboards for healthcare workflows.",
  },
  {
    role: "Backend Developer Intern",
    org: "Codecis AI",
    loc: "San Francisco",
    period: "Jan – Mar 2025",
    tag: "Flask · CRM",
    body: "ERP-based employee management dashboard and a centralised social media CRM supporting ad campaign tracking and multi-platform automation using Flask, MongoDB, and AWS.",
  },
];

function ExperienceRow({ exp, i }) {
  return (
    <LensFocus delay={i * 0.06}>
      <div
        className="experience-row"
        style={{
          borderBottom: `0.5px solid ${C.rule}`,
        }}
      >
        <div className="experience-row-left">
          <Eyebrow style={{ marginBottom: "0.4rem" }}>{exp.period}</Eyebrow>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: C.accent,
              marginTop: "0.3rem",
            }}
          >
            {exp.tag}
          </p>
        </div>
        <div className="experience-row-rule" />
        <div className="experience-row-right">
          <MagneticText strength={0.22}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem,2.4vw,1.55rem)",
                color: C.ink,
                lineHeight: 1.2,
                marginBottom: "0.2rem",
              }}
            >
              {exp.role}
            </p>
          </MagneticText>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: C.inkMuted,
              marginBottom: "0.7rem",
            }}
          >
            {exp.org} · {exp.loc}
          </p>
          <Body>{exp.body}</Body>
        </div>
      </div>
    </LensFocus>
  );
}

function WorkSection() {
  return (
    <section id="work" style={{ ...SP, background: C.bg }}>
      <LensFocus>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
        >
          <div>
            <Eyebrow style={{ marginBottom: "1rem" }}>Selected Experience</Eyebrow>
            <Display style={{ fontSize: "clamp(2.6rem,6vw,5.5rem)" }}>
              Where I've
              <br />
              <em style={{ color: C.accent }}>Worked</em>
            </Display>
          </div>
          <Body style={{ maxWidth: 280 }}>
            Five internships across finance, enterprise SaaS, analytics, healthcare
            tech, and AI — each production-grade from day one.
          </Body>
        </div>
      </LensFocus>
      <Rule />
      {EXPERIENCES.map((exp, i) => (
        <ExperienceRow key={i} exp={exp} i={i} />
      ))}
    </section>
  );
}

/* ─────────────────────────────────────────────
   HORIZONTAL PROJECTS SCROLL
   A tall sticky container traps vertical scroll
   and converts it into horizontal motion
───────────────────────────────────────────── */
const PROJECTS = [
  {
    num: "01",
    title: "Hinglish Live Transcriber",
    sub: "Production ASR Web App",
    body: "Engineered a production ASR web app handling ~2,000 daily transcriptions via Groq Whisper and Node.js WebSockets, utilising a split Vercel/Render architecture for ~80ms RTT, live Web Audio API visualisation, and server-side Hunterian transliteration.",
    tech: ["Node.js", "WebSockets", "Groq Whisper", "Web Audio API"],
    accent: C.accent,
  },
  {
    num: "02",
    title: "Warehouse Inventory Dashboard",
    sub: "Sparkathon · Walmart Track",
    body: "Full-stack dashboard (React 18, TypeScript, Tailwind) with 20+ modular components for real-time forecasting. Integrated with a YOLOv8/Tesseract OCR pipeline to autonomously classify and count products from live CCTV feeds.",
    tech: ["React 18", "TypeScript", "YOLOv8", "Tesseract OCR"],
    accent: C.sage,
  },
  {
    num: "03",
    title: "Agent Task Tracker",
    sub: "AI-Powered Task Assignment",
    body: "Dockerized, LangChain-powered multi-agent task management system using a Flask REST API (SQLAlchemy, JWT) and React/TypeScript frontend to autonomously process tasks, log activity, and optimise workflows.",
    tech: ["LangChain", "Docker", "Flask", "React/TypeScript"],
    accent: C.warm,
  },
];

// Each horizontal card
function ProjectCard({ project, isActive }) {
  return (
    <motion.article
      style={{
        width: "min(78vw, 620px)",
        flexShrink: 0,
        padding: "clamp(2.5rem,5vw,4rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        borderLeft: `0.5px solid ${C.rule}`,
        userSelect: "none",
      }}
      animate={
        isActive
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0.32, scale: 0.975, filter: "blur(2px)" }
      }
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(5rem,11vw,8rem)",
            color: "rgba(43,38,32,0.055)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {project.num}
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
            color: C.ink,
            lineHeight: 1.1,
            marginTop: "-0.6rem",
          }}
        >
          {project.title}
        </p>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: project.accent,
            margin: "0.5rem 0 1.5rem",
          }}
        >
          {project.sub}
        </p>
        <Rule style={{ marginBottom: "1.5rem" }} />
        <Body>{project.body}</Body>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "2rem" }}>
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </motion.article>
  );
}

function HorizontalProjects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);

  // Stable cache of each card's natural left offset (measured at x=0)
  // Key insight: measure offsetLeft relative to the track element directly —
  // this is unaffected by any CSS transform applied to the track.
  const cardOffsetsRef = useRef([]);

  const xPx = useMotionValue(0);
  const xSpring = useSpring(xPx, { damping: 44, stiffness: 260, mass: 0.7 });

  const measureOffsets = useCallback(() => {
    if (!trackRef.current) return;
    const cards = Array.from(trackRef.current.querySelectorAll("article"));
    // offsetLeft is relative to offsetParent (the track), unaffected by transform
    cardOffsetsRef.current = cards.map((c) => c.offsetLeft);
  }, []);

  useEffect(() => {
    const id = setTimeout(measureOffsets, 60);
    window.addEventListener("resize", measureOffsets);
    return () => { clearTimeout(id); window.removeEventListener("resize", measureOffsets); };
  }, [measureOffsets]);

  // Snap to index.
  // → on last card wraps to first. ← on first card is disabled (no wrap).
  const snapTo = useCallback((rawIdx) => {
    // Wrap forward only
    const idx = rawIdx >= PROJECTS.length ? 0 : Math.max(0, rawIdx);
    setActiveIdx(idx);
    const offsets = cardOffsetsRef.current;
    if (!offsets.length) return;
    // Align card's left edge to the track's paddingLeft (8vw)
    const pad = window.innerWidth * 0.08;
    xPx.set(pad - offsets[idx]);
  }, [xPx]);

  // Initial snap after offsets are ready
  useEffect(() => {
    const id = setTimeout(() => snapTo(0), 80);
    return () => clearTimeout(id);
  }, []);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") snapTo(activeIdx + 1);
      if (e.key === "ArrowLeft")  snapTo(activeIdx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, snapTo]);

  // Drag / swipe
  const dragStartX = useRef(0);
  const dragStartVal = useRef(0);
  const isDragging = useRef(false);

  const onPointerDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartVal.current = xPx.get();
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    xPx.set(dragStartVal.current + (e.clientX - dragStartX.current));
  };
  const onPointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 60) snapTo(dx < 0 ? activeIdx + 1 : activeIdx - 1);
    else snapTo(activeIdx);
  };

  return (
    <section id="projects" style={{ background: C.bgAlt, overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          padding: "clamp(2rem,4vw,4rem) clamp(2rem,8vw,10rem) 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <Eyebrow style={{ marginBottom: "0.7rem" }}>Work & Builds</Eyebrow>
          <Display style={{ fontSize: "clamp(2.2rem,5vw,4.2rem)" }}>
            Selected
            <em style={{ color: C.sage }}> Projects</em>
          </Display>
        </div>

        {/* Nav: pips + arrows */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          {/* Progress pips — clickable */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            {PROJECTS.map((_, i) => (
              <motion.div
                key={i}
                onClick={() => snapTo(i)}
                animate={{
                  width: i === activeIdx ? 24 : 6,
                  background: i === activeIdx ? C.accent : C.rule,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ height: 2, borderRadius: 99, cursor: "pointer", flexShrink: 0 }}
              />
            ))}
          </div>

          {/* ← → buttons */}
          {[{ label: "←", delta: -1 }, { label: "→", delta: 1 }].map(({ label, delta }) => {
            const isBackDisabled = label === "←" && activeIdx === 0;
            return (
              <motion.button
                key={label}
                onClick={() => !isBackDisabled && snapTo(activeIdx + delta)}
                whileHover={isBackDisabled ? {} : { scale: 1.08 }}
                whileTap={isBackDisabled ? {} : { scale: 0.93 }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  background: "none",
                  border: `0.5px solid ${C.rule}`,
                  color: C.inkMuted,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: isBackDisabled ? "default" : "pointer",
                  opacity: isBackDisabled ? 0.25 : 1,
                  transition: "opacity 0.3s",
                }}
                aria-label={label === "←" ? "Previous project" : "Next project"}
                aria-disabled={isBackDisabled}
              >
                {label}
              </motion.button>
            );
          })}
        </div>
      </div>

      <Rule style={{ margin: "clamp(1.5rem,3vw,2.5rem) 0 0" }} />

      {/* Draggable track */}
      <div
        style={{ overflow: "hidden", height: "clamp(340px,55vh,520px)", touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <motion.div
          ref={trackRef}
          style={{
            display: "flex",
            x: xSpring,
            paddingLeft: "clamp(2rem,8vw,10rem)",
            paddingRight: "clamp(2rem,8vw,10rem)",
            height: "100%",
            alignItems: "center",
            cursor: "grab",
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} isActive={i === activeIdx} />
          ))}
        </motion.div>
      </div>

      {/* Hint */}
      <div style={{ padding: "1rem clamp(2rem,8vw,10rem) clamp(2rem,4vw,3.5rem)", display: "flex", gap: "0.6rem", alignItems: "center" }}>
        <div style={{ width: 20, height: 0.5, background: C.inkMuted, opacity: 0.4 }} />
        <Eyebrow style={{ opacity: 0.4 }}>
          {activeIdx === PROJECTS.length - 1 ? "→ loops back to first" : "Drag · swipe · or use ← → keys"}
        </Eyebrow>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SKILLS
───────────────────────────────────────────── */
const SKILL_GROUPS = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "Dart", "SQL"] },
  { label: "Frameworks", items: ["Flask", "Django", "FastAPI", "Express.js", "Next.js", "Angular", "Flutter", "React"] },
  { label: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Firebase", "Docker", "Jenkins", "GitHub Actions"] },
  { label: "Gen AI & LLMs", items: ["LangChain", "LangGraph", "RAG", "LLM Fine-tuning", "Hugging Face", "MCP"] },
  { label: "ML & Vision", items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "OpenCV", "NLP"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"] },
];

function SkillsSection() {
  return (
    <section id="skills" style={{ ...SP, background: C.bg }}>
      <LensFocus>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
        >
          <div>
            <Eyebrow style={{ marginBottom: "1rem" }}>Capabilities</Eyebrow>
            <Display style={{ fontSize: "clamp(2.6rem,6vw,5.5rem)" }}>
              The
              <br />
              <em style={{ color: C.warm }}>Palette</em>
            </Display>
          </div>
        </div>
      </LensFocus>
      <Rule />
      {SKILL_GROUPS.map((grp, gi) => (
        <LensFocus key={gi} delay={gi * 0.07}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem 2rem",
              padding: "1.6rem 0",
              borderBottom: `0.5px solid ${C.rule}`,
              alignItems: "center",
            }}
          >
            <div style={{ minWidth: 140, flexShrink: 0 }}>
              <Eyebrow>{grp.label}</Eyebrow>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.2rem" }}>
              {grp.items.map((item, ii) => (
                <MagneticText key={item} strength={0.3}>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1rem,1.8vw,1.3rem)",
                      fontWeight: 400,
                      color: C.inkLight,
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = C.accent)}
                    onMouseLeave={(e) => (e.target.style.color = C.inkLight)}
                  >
                    {item}
                  </span>
                </MagneticText>
              ))}
            </div>
          </div>
        </LensFocus>
      ))}
    </section>
  );
}

/* ─────────────────────────────────────────────
   EDUCATION + AWARDS
───────────────────────────────────────────── */
function EducationAwards() {
  return (
    <section style={{ ...SP, background: C.bgAlt }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "clamp(2.5rem,5vw,5rem)",
        }}
      >
        {/* Education */}
        <LensFocus>
          <Eyebrow style={{ marginBottom: "1.2rem" }}>Formation</Eyebrow>
          <Rule style={{ marginBottom: "1.4rem" }} />
          <div style={{ marginBottom: "2rem" }}>
            <MagneticText strength={0.2}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1rem,1.9vw,1.4rem)",
                  color: C.ink,
                  marginBottom: "0.25rem",
                }}
              >
                B.Tech, Computer Science & Engineering
              </p>
            </MagneticText>
            <Eyebrow style={{ marginBottom: "0.4rem" }}>VSSUT, Burla · 2023 — Present</Eyebrow>
            <Body>CGPA 8.6 through 5th semester</Body>
          </div>
          <Rule style={{ marginBottom: "1.4rem" }} />
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(1rem,1.9vw,1.4rem)",
                color: C.ink,
                marginBottom: "0.25rem",
              }}
            >
              Senior Secondary (XII)
            </p>
            <Eyebrow style={{ marginBottom: "0.4rem" }}>Delhi Public School Ruby Park, Kolkata</Eyebrow>
            <Body>CBSE Science · PCM</Body>
          </div>
          <Rule style={{ margin: "1.4rem 0" }} />
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(1rem,1.9vw,1.4rem)",
                color: C.ink,
                marginBottom: "0.25rem",
              }}
            >
              Secondary (X)
            </p>
            <Eyebrow style={{ marginBottom: "0.4rem" }}>Mahadevi Birla Shishu Vihar, Kolkata · ICSE</Eyebrow>
            <Body>95.10%</Body>
          </div>
        </LensFocus>

        {/* Awards */}
        <LensFocus delay={0.1}>
          <Eyebrow style={{ marginBottom: "1.2rem" }}>Recognition</Eyebrow>
          <Rule style={{ marginBottom: "1.4rem" }} />
          {[
            { title: "Runner-up", detail: "Code for Good 2025 Hackathon, J.P. Morgan Services India", col: C.accent },
            { title: "Participant", detail: "ML Hackathon 2025, IIT Bhubaneswar", col: C.sage },
            { title: "Participant", detail: "C-ATHON Coding Competition, iServeU", col: C.inkMuted },
            { title: "Winner", detail: "Maze Hunt 2024, Robotics Club — VSSUT", col: C.warm },
          ].map((a, i, arr) => (
            <div key={i} style={{ marginBottom: i < arr.length - 1 ? "1.2rem" : 0 }}>
              <MagneticText strength={0.25}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1rem,1.8vw,1.25rem)",
                    color: a.col,
                    marginBottom: "0.15rem",
                  }}
                >
                  {a.title}
                </p>
              </MagneticText>
              <Body>{a.detail}</Body>
              {i < arr.length - 1 && <Rule style={{ marginTop: "1.1rem" }} />}
            </div>
          ))}
        </LensFocus>

        {/* Certifications */}
        <LensFocus delay={0.2}>
          <Eyebrow style={{ marginBottom: "1.2rem" }}>Certifications</Eyebrow>
          <Rule style={{ marginBottom: "1.4rem" }} />
          {[
            "Data Analytics Summer Internship — IBM SkillsBuild",
            "Technology Job Simulation — Deloitte Australia, Forage",
            "Crash Course on Python — Google / Coursera",
          ].map((c, i, arr) => (
            <div key={i} style={{ marginBottom: i < arr.length - 1 ? "1.2rem" : 0 }}>
              <Body>{c}</Body>
              {i < arr.length - 1 && <Rule style={{ marginTop: "1.1rem" }} />}
            </div>
          ))}
        </LensFocus>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      style={{
        ...SP,
        background: C.ink,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Eyebrow style={{ color: "rgba(245,242,235,0.35)", marginBottom: "0.8rem" }}>
          Get in touch
        </Eyebrow>
        <MagneticText strength={0.12}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(3rem,9vw,9rem)",
              color: "#F5F2EB",
              lineHeight: 0.95,
              marginBottom: "clamp(2.5rem,6vw,5rem)",
            }}
          >
            Let's build
            <br />
            <em style={{ color: C.warm }}>something.</em>
          </h2>
        </MagneticText>
        <Rule style={{ background: "rgba(245,242,235,0.1)", marginBottom: "1.5rem" }} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "1rem",
          }}
        >
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "rgba(245,242,235,0.55)", marginBottom: "0.3rem" }}>
              trishnadas7897@gmail.com
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "rgba(245,242,235,0.55)" }}>
              +91 74395 23511 · Mumbai, India
            </p>
          </div>
          <Eyebrow style={{ color: "rgba(245,242,235,0.22)" }}>Trishna Das · 2026</Eyebrow>
        </div>
      </motion.div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Cursor />
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden />

      <div style={{ background: C.bg, overflowX: "hidden" }}>
        <Hero />
        <WorkSection />
        <HorizontalProjects />
        <SkillsSection />
        <EducationAwards />
        <Footer />
      </div>
    </>
  );
}
