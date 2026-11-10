import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * ViewCursor — Task 6
 * A small lime bubble that tracks the mouse and scales in over project cards.
 * - Desktop / fine pointer only.
 * - Hidden when prefers-reduced-motion is set.
 * - Cards must have data-cursor-view="true" attribute.
 */
const ViewCursor = () => {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 500, damping: 30, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 500, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (shouldReduceMotion) return;

    const onMove = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    const onOver = (e) => {
      setVisible(true);
      setActive(!!e.target.closest("[data-cursor-view]"));
    };
    const onOut = () => setActive(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [mx, my, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return createPortal(
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full bg-lime-accent"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", width: 56, height: 56 }}
      animate={{ scale: active ? 1 : 0, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <span className="font-mono text-xs font-bold text-obsidian-950 uppercase tracking-wider select-none">
        View
      </span>
    </motion.div>,
    document.body
  );
};

export default ViewCursor;
