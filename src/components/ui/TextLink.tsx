import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";
import Image from "next/image";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  withArrow?: boolean;
  arrowVariant?: "northEast" | "right";
};

export function TextLink({
  className,
  withArrow = true,
  arrowVariant = "northEast",
  children,
  ...props
}: TextLinkProps) {
  return (
    <a
      className={clsx(
        "inline-flex items-center gap-[3px] font-[var(--font-chivo-mono)] text-[12px] leading-none font-normal uppercase text-[#00B4FD] transition-colors hover:text-[#4dc9ff]",
        className,
      )}
      {...props}
    >
      {children}
      {withArrow ? (
        arrowVariant === "right" ? (
          <Image
            src="/sections/arrow-right.png"
            alt=""
            width={14}
            height={14}
            className="h-[14px] w-[14px]"
            aria-hidden
          />
        ) : (
          <span aria-hidden>↗</span>
        )
      ) : null}
    </a>
  );
}

