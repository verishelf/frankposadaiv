interface SkillPillProps {
  label: string;
}

export default function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-100 hover:shadow-[0_0_20px_rgba(0,0,0,0.05)]">
      {label}
    </span>
  );
}
