import Image from "next/image";
import { Container } from "@/components/layout/Container";

const items = ["N7", "Say", "to the new way of banking", "CB7", "Say", "to the new way of banking"];

export function MarqueeSection() {
  return (
    <section className="mt-20 bg-[#F4F8FB] py-5 text-[#0B0E10]">
      <Container>
        <div className="relative overflow-hidden">
          <div className="marquee flex w-max items-center gap-6">
            {/* row 1 */}
            <div className="flex items-center gap-6 whitespace-nowrap">
              {items.map((label, idx) => (
                <span key={`a-${idx}`} className="inline-flex items-center gap-6">
                  <span className="font-[var(--font-archivo)] text-[28px] leading-none font-semibold tracking-[-0.01em]">
                    {label === "N7" || label === "CB7" ? (
                      <span className={label === "N7" ? "text-[#00B4FD]" : "text-[#003ACE]"}>
                        {label}
                      </span>
                    ) : (
                      label
                    )}
                  </span>
                  <Image
                    src="/sections/section-6-icon.png"
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] opacity-60"
                    aria-hidden
                  />
                </span>
              ))}
            </div>

            {/* row 2 (duplicate for seamless loop) */}
            <div className="flex items-center gap-6 whitespace-nowrap">
              {items.map((label, idx) => (
                <span key={`b-${idx}`} className="inline-flex items-center gap-6">
                  <span className="font-[var(--font-archivo)] text-[28px] leading-none font-semibold tracking-[-0.01em]">
                    {label === "N7" || label === "CB7" ? (
                      <span className={label === "N7" ? "text-[#00B4FD]" : "text-[#003ACE]"}>
                        {label}
                      </span>
                    ) : (
                      label
                    )}
                  </span>
                  <Image
                    src="/sections/section-6-icon.png"
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] opacity-60"
                    aria-hidden
                  />
                </span>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-[linear-gradient(90deg,#F4F8FB,rgba(244,248,251,0))]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-[linear-gradient(-90deg,#F4F8FB,rgba(244,248,251,0))]" />
        </div>
      </Container>
    </section>
  );
}

