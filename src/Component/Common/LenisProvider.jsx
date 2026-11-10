import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { LenisContext } from "./lenisContext";

const LenisProvider = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) { lenis.raf(time); rafId = requestAnimationFrame(raf); }
    rafId = requestAnimationFrame(raf);

    // Pause when a modal/detail locks body scroll
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") lenis.stop();
      else lenis.start();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [shouldReduceMotion]);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
};

export default LenisProvider;
