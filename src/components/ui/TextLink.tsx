import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  withArrow?: boolean;
};

export function TextLink({ className, withArrow = true, children, ...props }: TextLinkProps) {
  return (
    <a
      className={clsx(
        "inline-flex items-center gap-[3px] border-b border-[#00B4FD]/50 font-[var(--font-chivo-mono)] text-[12px] leading-none font-normal uppercase text-[#00B4FD] transition-colors hover:text-[#4dc9ff]",
        className,
      )}
      {...props}
    >
      {children}
      {withArrow ? <span aria-hidden>↗</span> : null}
    </a>
  );
}

