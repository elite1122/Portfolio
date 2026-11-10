import { motion, useReducedMotion } from "framer-motion";
import { lineDraw } from "./motionVariants";
import MotionReveal from "./MotionReveal";

/**
 * SectionHeader
 * Consistent Dark Editorial header across all sections:
 * - Mono eyebrow with index label ("01 // Selected Systems")
 * - Large bold display title
 * - Subtle explanatory body
 * - Thin lime-accent line that draws in on viewport reveal
 */
const SectionHeader = ({
  index,
  eyebrow,
  title,
  description,
  children,
  className = "mb-12 sm:mb-16",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <MotionReveal>
        {index && eyebrow && (
          <div className="editorial-eyebrow mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" aria-hidden="true" />
            <span>{index} {"//"} {eyebrow}</span>
          </div>
        )}

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 tracking-tight">
          {title}
        </h2>

        {description && (
          <p className="font-sans text-sm sm:text-base text-ivory-400 mt-2 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}

        {children}

        {/* Thin animated accent rule drawing in on reveal */}
        {!shouldReduceMotion ? (
          <motion.div
            variants={lineDraw}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className="h-[1px] bg-gradient-to-r from-lime-accent/50 via-obsidian-700 to-transparent mt-6 origin-left"
            aria-hidden="true"
          />
        ) : (
          <div className="h-[1px] bg-obsidian-700/70 mt-6" aria-hidden="true" />
        )}
      </MotionReveal>
    </div>
  );
};

export default SectionHeader;
