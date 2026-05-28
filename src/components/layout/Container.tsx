import type { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1320px] px-3 sm:px-5 lg:px-8", className)}>
      {children}
    </div>
  );
}

