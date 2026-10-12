import { motion, useReducedMotion } from "framer-motion";

/**
 * MotionReveal: A restrained, accessible viewport entrance transition.
 * Automatically respects `prefers-reduced-motion` and ensures content remains
 * visible even if animations fail to execute.
 */
export const MotionReveal = ({
  children,
  className = "",
  delay = 0,
  yOffset = 18,
  duration = 0.45,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionReveal;
