import Image from "next/image";
import {
  ArrowUpRightIcon,
  BellIcon,
  CameraIcon,
  Squares2X2Icon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";

type HeroSectionProps = {
  trustedBy: { name: string; logo: string }[];
};

export function HeroSection({ trustedBy }: HeroSectionProps) {
  return (
    <main className="relative mt-14 mb-35 overflow-visible lg:mt-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.08fr]">
          <section className="max-w-[560px] motion-safe:fade-up">
            <h1 className="font-archivo text-[67px] leading-[1.12] font-medium text-[#E9F4F9] sm:text-[58px]">
              The new foundation
              <br />
              of modern banking
            </h1>
            <p className="mt-5 max-w-[520px] font-archivo text-[16px] leading-[1.55] font-normal text-[#E9F4F9]/70">
              We drive innovation and growth, provide seamless
              <br />
              customer experience and operational excellence
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                intent="gradient"
                type="button"
                className="h-[41px] min-w-[168px] rounded-[6px] px-7 py-3 text-[12px]"
              >
                Request Demo
              </Button>
              <Button
                intent="outline"
                type="button"
                className="h-[41px] min-w-[168px] rounded-[6px] px-7 py-3 text-[12px]"
              >
                Contact Us
              </Button>
            </div>
          </section>

          <section className="relative mx-auto w-full max-w-[680px] lg:mx-0 motion-safe:fade-up [animation-delay:120ms]">
            <div className="relative mx-auto aspect-[640/364] w-full">
              <div
                className="pointer-events-none absolute left-[48%] top-[45%] h-[76%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[60px]"
                style={{
                  background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
                }}
              />
              <div className="absolute left-[1%] top-[5%] h-[98%] w-[100%] overflow-hidden rounded-[31px]">
                <Image
                  src="/sections/hero_women1.png"
                  alt="Woman using phone and laptop"
                  width={768}
                  height={512}
                  priority
                  className="h-full w-full object-contain transition-transform duration-500"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 motion-safe:fade-up [animation-delay:240ms]">
          <p className="font-archivo text-[16px] leading-[1.3] font-medium text-[#E9F4F9]/80">
            Trusted By:
          </p>
          <div className="mt-3 flex w-full flex-wrap items-center gap-x-6 gap-y-2">
            {trustedBy.map((company) => (
              <p
                key={company.name}
                className="inline-flex items-center gap-[4.6px] text-[13.8px] leading-[110%] font-bold text-[#586E84]"
                style={{ fontFamily: "var(--font-roboto)" }}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={17.477962493896484}
                  height={18.397855758666992}
                  className="h-[18.397855758666992px] w-[17.477962493896484px]"
                />
                <span className="whitespace-nowrap">{company.name}</span>
              </p>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

