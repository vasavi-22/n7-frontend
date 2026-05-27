import Image from "next/image";
import clsx from "clsx";

type LaptopFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  cutoff?: "left" | "right" | "none";
};

export function LaptopFrame({ src, alt, className, priority, cutoff = "none" }: LaptopFrameProps) {
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
        <div className="relative rounded-[12px] border border-[#00B4FD]/70 bg-[#07131A] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute inset-[1px] rounded-[11px] border border-[#003ACE]/35" />

          {/* Screen bezel */}
          <div className="p-[10px] sm:p-[12px]">
            <div className="relative overflow-hidden rounded-[10px] bg-[#EAEAEA]">
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
        <div className="pointer-events-none mx-auto mt-5 h-[18px] w-[78%] rounded-full border border-[#00B4FD]/55 bg-[linear-gradient(180deg,rgba(0,180,253,0.10),rgba(0,58,206,0.06))]" />
      </div>
    </div>
  );
}

