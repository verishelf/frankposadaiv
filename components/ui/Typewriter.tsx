"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 28,
  className = "",
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayed(text.slice(0, index + 1));
        index += 1;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p className={className}>
      {displayed}
      {showCursor && (
        <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-neutral-400 align-middle" />
      )}
    </p>
  );
}
