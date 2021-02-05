import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function useTypewriter() {
  useEffect(() => {
    new Typewriter("#languages", {
      strings: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node",
        "CSS",
        "HTML",
        "Python",
        "SQL",
        "NoSQL",
        "Swift",
        "Java",
      ],
      autoStart: true,
      loop: true,
    });
  }, []);
}
