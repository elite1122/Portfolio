import Typewriter from "typewriter-effect";

function Type() {
  return (
    <span className="inline-block">
      <Typewriter
        options={{
          strings: [
            "Conversational AI Architect",
            "Voice Automation Specialist",
            "LLM Integration Engineer",
            "Full-Stack Web Developer",
            "Autonomous Workflow Builder",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 25,
          delay: 60,
          cursor: "▍",
          wrapperClassName: "text-lime-accent font-mono font-medium tracking-tight",
          cursorClassName: "text-lime-accent animate-pulse font-mono ml-0.5",
        }}
      />
    </span>
  );
}

export default Type;