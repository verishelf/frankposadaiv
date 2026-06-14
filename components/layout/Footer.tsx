import { personalInfo } from "@/lib/resume-data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
        <p className="tracking-wide">{personalInfo.domain}</p>
      </div>
    </footer>
  );
}
