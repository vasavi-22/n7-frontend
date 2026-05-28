import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/TextLink";

export function CaseStudiesSection() {
  return (
    <section className="relative py-18 pb-24">
      <Container>
        <h2 className="text-center font-archivo text-[45px] leading-[1.2] font-normal text-[#E9F4F9]">
          Our Case Studies
        </h2>

        <div className="relative mt-10 overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-[420px_1fr]">
            <div className="relative">
              <div className="rounded-[18px] bg-[#0D2A6B]/60 p-8">
                <div className="grid grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Image
                      key={idx}
                      src="/sections/section-8-icon.png"
                      alt=""
                      width={92}
                      height={92}
                      className="mx-auto h-[84px] w-[84px]"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-[520px]">
              <p className="text-[12px] font-mono tracking-[0.18em] text-[#00B4FD]/55">GETTING STARTED</p>
              <h3 className="mt-4 font-archivo text-[34px] leading-[1.15] font-normal text-[#E9F4F9]">
                How we help brand
                <br />
                reach out to more
                <br />
                people
              </h3>

              <div className="mt-6 flex items-center gap-3 text-[12px] text-[#B5C3CF]/70">
                <Image
                  src="/sections/zoomerr-icon.png"
                  alt="Zoomerr"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-[20px]">Zoomerr</span>
              </div>

              <button
                type="button"
                className="mt-8 inline-flex h-[44px] w-full items-center justify-center rounded-[12px] border border-white/15 font-[var(--font-chivo-mono)] text-[11px] uppercase text-[#B5C3CF]/80 transition-colors hover:bg-white/10 hover:text-[#E9F4F9]"
              >
                Read More
              </button>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-4 pb-9 mt-7">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#00B4FD]/35 text-[#00B4FD]/80 transition-colors hover:bg-white/10"
              aria-label="Previous"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              <span className="h-[6px] w-[18px] rounded-full bg-[#00B4FD]/60" />
              <span className="h-[6px] w-[6px] rounded-full bg-white/15" />
              <span className="h-[6px] w-[6px] rounded-full bg-white/15" />
              <span className="h-[6px] w-[6px] rounded-full bg-white/15" />
            </div>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#00B4FD]/35 text-[#00B4FD]/80 transition-colors hover:bg-white/10"
              aria-label="Next"
            >
              →
            </button>
          </div>

          <div className="absolute right-32 hidden lg:block">
            <TextLink href="#" className="mt-8 w-fit text-[14px]" arrowVariant="right">
              <span className="border-b border-[#00B4FD]/50 pb-[2px] font-mono">VIEW</span>&nbsp;ALL
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

