import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <span className="relative">
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "React Specialist",
            "Frontend Engineer",
            "UI/UX Enthusiast",
            "Problem Solver",
            "Tech Innovator",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 80,
          cursor: "|",
          wrapperClassName: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold",
          cursorClassName: "text-cyan-400 animate-pulse",
        }}
      />
    </span>
  );
}

export default Type;