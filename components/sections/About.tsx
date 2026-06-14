import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutSummary } from "@/lib/resume-data";

export default function About() {
  return (
    <section id="about" className="border-t border-neutral-200 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            label="About"
            title="A professional built for scale, precision, and trust."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-600">
            {aboutSummary}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
