import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { resumePdfFilename, resumePdfPath } from "@/lib/resume-data";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="border-t border-neutral-200 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            label="Resume"
            title="View or download my resume"
            description="Full professional history, available as a styled web view or executive PDF."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.03)]">
            <p className="mx-auto mb-8 max-w-md text-neutral-600">
              Access a complete overview of my experience, skills, and
              qualifications — formatted for recruiters and hiring managers.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/resume" variant="primary">
                View Resume
              </Button>
              <Button
                href={resumePdfPath}
                download={resumePdfFilename}
                variant="secondary"
              >
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
