"use client";

import { FormEvent, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/resume-data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name || "Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="border-t border-neutral-200 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            label="Contact"
            title="Let's connect"
            description="Open to Customer Success, SaaS Support, and technical support opportunities."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-2 block text-lg text-neutral-900 transition-opacity hover:opacity-70"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Phone
                </p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="mt-2 block text-lg text-neutral-900 transition-opacity hover:opacity-70"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Location
                </p>
                <p className="mt-2 text-lg text-neutral-900">{personalInfo.location}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-neutral-500"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500 focus:ring-1 focus:ring-neutral-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-neutral-500"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500 focus:ring-1 focus:ring-neutral-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-[0.15em] text-neutral-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500 focus:ring-1 focus:ring-neutral-300"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
