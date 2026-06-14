import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/resume-data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-200 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            label="Experience"
            title="Professional experience"
            description="Delivering consistent, high-quality customer service in demanding environments."
          />
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-neutral-200 md:block" />

          {experience.map((job, index) => (
            <FadeIn key={job.company} delay={index * 0.1}>
              <div className="relative md:pl-10">
                <div className="absolute -left-1.5 top-2 hidden h-3 w-3 rounded-full border border-neutral-400 bg-white md:block" />
                <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-[0_0_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.06)]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-neutral-900">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-neutral-600">{job.company}</p>
                    </div>
                    <p className="text-sm text-neutral-500">{job.period}</p>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-neutral-600"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
