import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: "gradient" | "outline";
};

export function Button({ className, intent = "outline", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[12px] font-[var(--font-chivo-mono)] text-[12px] leading-[1.3] font-normal uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4FD]/60 focus-visible:ring-offset-0 disabled:opacity-60 disabled:pointer-events-none";

  const styles =
    intent === "gradient"
      ? "bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] text-[#E9F4F9] shadow-[0_10px_28px_rgba(0,58,206,0.45)] hover:-translate-y-0.5 hover:brightness-110"
      : "border border-[#E9F4F9]/55 text-[#E9F4F9] hover:border-[#E9F4F9] hover:bg-white/10";

  return <button className={clsx(base, styles, className)} {...props} />;
}

