/**
 * Shared Framer Motion variant library.
 * All durations 0.5–0.9s, easing cubic-bezier(0.22, 1, 0.36, 1) — "spring pop".
 * Import and use across all components for consistent, maintainable motion.
 */

export const EASE = [0.22, 1, 0.36, 1];

/** Fade up — the standard reveal entrance */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

/** Stagger container — wraps children with staggered entrance */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Stagger child — used inside staggerContainer */
export const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/** Scale in — for cards, modals, popups */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

/** Line draw — for horizontal dividers/underlines (scaleX from 0 to 1) */
export const lineDraw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Spring pop — for badges, chips, accent elements */
export const springPop = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 22,
      delay,
    },
  }),
};

/** Card grid item — for AnimatePresence layout animations */
export const cardItem = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

