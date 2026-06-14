import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillPill from "@/components/ui/SkillPill";
import { skills } from "@/lib/resume-data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-neutral-200 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            label="Skills"
            title="Core capabilities"
            description="Technical and interpersonal skills honed through high-volume customer-facing work."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
