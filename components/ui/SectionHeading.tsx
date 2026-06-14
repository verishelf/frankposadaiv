interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
        {label}
      </p>
      <h2 className="text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}
