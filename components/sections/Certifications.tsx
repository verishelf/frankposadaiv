import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/resume-data";

export default function Certifications() {
  return (
    <section className="border-t border-neutral-200 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            label="Certifications"
            title="Credentials & compliance"
          />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.name} delay={index * 0.1}>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.05)]">
                <p className="text-sm font-medium text-neutral-900">
                  {cert.shortName}
                </p>
                <p className="mt-2 text-sm text-neutral-500">{cert.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
