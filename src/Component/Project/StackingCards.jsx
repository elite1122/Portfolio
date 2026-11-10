import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * StackingCards — Task 3
 *
 * On desktop (lg+, fine pointer, no reduced-motion):
 * Each card sticks in a staggered stack. As the user scrolls the
 * container, the previous card scales down and the next slides over it.
 *
 * On mobile / reduced-motion: renders a plain vertical stack with no
 * sticky behaviour.
 *
 * Usage:
 *   <StackingCards>
 *     {projects.map((p, i) => <ProjectCard key={p.id} … />)}
 *   </StackingCards>
 */

/* Per-card sticky wrapper — handles its own scroll-driven scale/opacity */
const StickyCard = ({ children, index, total }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scale down from 1 → 0.90 as the card scrolls out
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.025]
  );

  // Slight opacity fade as it recedes
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.6]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${80 + index * 12}px` }} // stagger the sticky offsets
    >
      <motion.div style={{ scale, opacity, transformOrigin: "top center" }}>
        {children}
      </motion.div>
    </div>
  );
};

/* ─── Main export ─────────────────────────────────────────────────── */
const StackingCards = ({ children, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  // Detect fine pointer (mouse) + wide screen at render time
  // We can't use a hook for this easily; use CSS media to handle layout,
  // and JS to control the sticky behaviour.
  const isFinePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;

  const useStacking = isFinePointer && !shouldReduceMotion;

  const cards = Array.isArray(children) ? children : [children];
  const total = cards.length;

  if (!useStacking) {
    // Mobile / reduced-motion fallback: plain flex column
    return (
      <div className={`flex flex-col gap-6 sm:gap-8 ${className}`}>
        {children}
      </div>
    );
  }

  // Desktop stacking mode: extra bottom padding for the scroll room
  return (
    <div
      className={`relative ${className}`}
      // Each card needs ~40vh of scroll room to feel deliberate
      style={{ paddingBottom: `${total * 20}vh` }}
    >
      {cards.map((child, i) => (
        <StickyCard key={i} index={i} total={total}>
          {child}
        </StickyCard>
      ))}
    </div>
  );
};

export default StackingCards;

