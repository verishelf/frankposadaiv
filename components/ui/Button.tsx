import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  download?: string;
  className?: string;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]",
  secondary:
    "border border-neutral-300 bg-transparent text-neutral-900 hover:border-neutral-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.06)]",
  ghost:
    "border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  download,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    const isHash = href.startsWith("#");

    if (isExternal || download) {
      return (
        <a href={href} className={classes} download={download}>
          {children}
        </a>
      );
    }

    if (isHash) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
