"use client";

import Button from "@/components/ui/Button";
import Typewriter from "@/components/ui/Typewriter";
import {
  heroStatement,
  personalInfo,
  resumePdfFilename,
  resumePdfPath,
} from "@/lib/resume-data";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-65px)] flex-col justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-light tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>
        <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
          {personalInfo.title}
        </p>
        <div className="mt-10 max-w-2xl">
          <Typewriter
            text={heroStatement}
            className="text-base leading-relaxed text-neutral-600 sm:text-lg"
          />
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Button href="/resume" variant="primary">
            View Resume
          </Button>
          <Button
            href={resumePdfPath}
            download={resumePdfFilename}
            variant="secondary"
          >
            Download Resume PDF
          </Button>
          <Button href="#contact" variant="ghost">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
