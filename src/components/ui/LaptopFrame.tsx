import Image from "next/image";
import clsx from "clsx";

type LaptopFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  cutoff?: "left" | "right" | "none";
  variant?: "thin" | "default";
};

export function LaptopFrame({
  src,
  alt,
  className,
  priority,
  cutoff = "none",
  variant = "default",
}: LaptopFrameProps) {
  const isThin = variant === "thin";
  return (
    <div
      className={clsx(
        "relative mx-auto w-full max-w-[760px] overflow-visible",
        cutoff === "left" ? "lg:-translate-x-24" : "",
        cutoff === "right" ? "lg:translate-x-24" : "",
        className,
      )}
    >
      <div className="relative">
        <div className="pointer-events-none absolute -inset-10 opacity-60">
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#00B4FD]/12 blur-[70px]" />
          <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-[#003ACE]/12 blur-[75px]" />
        </div>

        {/* Outer “laptop” frame */}
        <div
          className={clsx(
            "relative bg-[#07131A] shadow-[0_30px_90px_rgba(0,0,0,0.55)]",
            isThin ? "rounded-[16px] border border-[#00B4FD]/75" : "rounded-[12px] border border-[#00B4FD]/70",
          )}
          style={isThin ? { borderWidth: "1.05px" } : undefined}
        >
          <div
            className={clsx(
              "pointer-events-none absolute border border-[#003ACE]/35",
              isThin ? "inset-[1px] rounded-[15px]" : "inset-[1px] rounded-[11px]",
            )}
          />

          {/* Screen bezel */}
          <div className={clsx(isThin ? "p-[12px]" : "p-[10px] sm:p-[12px]")}>
            <div className={clsx("relative overflow-hidden bg-[#EAEAEA]", isThin ? "rounded-[14px]" : "rounded-[10px]")}>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 760px"
                  priority={priority}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base bar */}
        <div
          className={clsx(
            "pointer-events-none mx-auto mt-5 rounded-full border border-[#00B4FD]/55 bg-[linear-gradient(180deg,rgba(0,180,253,0.10),rgba(0,58,206,0.06))]",
            isThin ? "h-[16px] w-[82%]" : "h-[18px] w-[78%]",
          )}
          style={isThin ? { borderWidth: "1.05px" } : undefined}
        />
      </div>
    </div>
  );
}

