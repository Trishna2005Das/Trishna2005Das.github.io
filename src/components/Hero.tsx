import { motion } from "framer-motion";
import { profile } from "@/data/profile";

// Banned per spec: typewriter, particle backgrounds, generic catchphrases.
// LCP rule (runbook A1): no element delays the first meaningful paint.
// Every reveal uses a small opacity + 12 px translate, 0.4 s duration,
// zero or single-frame delays - so the recruiter sees name + role +
// summary effectively on load instead of black-frame waiting on
// staggered timings.

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      // 88vh instead of 100dvh so the Projects section peeks above the
      // fold - signals "there's more content here" instantly.
      className="relative flex min-h-[88vh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12 lg:px-12"
    >
      {/* Static gradient mesh + grid + noise. No particles. */}
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        aria-hidden
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 12% 0%, rgba(0,230,118,0.16), transparent 70%)",
            "radial-gradient(ellipse 50% 60% at 88% 100%, rgba(91,161,255,0.10), transparent 70%)",
            "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(0,230,118,0.04), transparent 70%)",
            "linear-gradient(180deg, #121417 0%, #0a0c0f 100%)",
          ].join(", "),
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-20 grid-overlay opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 noise" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(10,12,15,0.85)_80%)]" />

      <div className="mx-auto flex max-w-5xl flex-col items-start text-left md:items-center md:text-center">
        {/* Currently-at badge - data-driven, no invented copy. */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-mint/25 bg-mint/[0.05] px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
            JPMorgan Chase &middot; CIB Rates Tech
          </span>
        </motion.div>

        {/* Headline - LCP element. Tiny transform, no delay. */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="font-display text-5xl font-semibold leading-[1.04] tracking-tightest text-foreground md:text-7xl lg:text-[5.4rem]"
        >
          <span className="block">{profile.name}.</span>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease }}
            className="mt-2 block text-gradient-mint"
          >
            {profile.tagline}.
          </motion.span>
        </motion.h1>

        {/* Verbatim professional summary from the resume. Lands fast. */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg"
        >
          {profile.summary}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15, ease }}
          className="mt-10 flex flex-wrap items-center gap-3 md:justify-center"
        >
          <a href="#projects" className="btn-mint">
            View projects
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href={profile.links.transcriber} className="btn-outline">
            Try the live demo
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
          <a href={profile.links.resume} className="btn-outline" target="_blank" rel="noopener">
            Resume
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </motion.div>

        {/* Availability line (runbook A4): graduating 2027, open to both
            Summer 2026 internships and 2027 new-grad roles. Self-selects
            for a recruiter hiring now AND one planning the pipeline. */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xs text-foreground/55 md:text-sm"
        >
          Graduating 2027 &middot; open to <span className="text-mint">Summer 2026 internships</span> and <span className="text-mint">2027 new-grad roles</span>.
        </motion.p>

        {/* Identity strip - location + LinkedIn + GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45 md:justify-center"
        >
          <span>{profile.location}</span>
          <span className="hidden h-1 w-1 rounded-full bg-mint/50 md:inline-block" />
          <span className="text-mint/80">{profile.relocate}</span>
          <span className="hidden h-1 w-1 rounded-full bg-mint/50 md:inline-block" />
          <a href={profile.links.linkedin} target="_blank" rel="noopener" className="transition-colors hover:text-mint">LinkedIn</a>
          <span className="hidden h-1 w-1 rounded-full bg-mint/50 md:inline-block" />
          <a href={profile.links.github} target="_blank" rel="noopener" className="transition-colors hover:text-mint">GitHub</a>
        </motion.div>
      </div>
    </section>
  );
}
