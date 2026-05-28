import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";
import { LaptopFrame } from "@/components/ui/LaptopFrame";
import Image from "next/image";
import { TextLink } from "@/components/ui/TextLink";

export function ProductShowcaseSection() {
  return (
    <section className="relative mt-28 mb-32 lg:mt-32">
      <Container>
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1fr_1.08fr]">
          <div className="max-w-[580px] motion-safe:fade-up">
            <h2 className="font-archivo text-[44px] leading-[1.12] font-normal text-[#E9F4F9] sm:text-[52px]">
              A complete cloud-based
              <br />
              core banking.
            </h2>
            <p className="mt-5 max-w-[420px] font-archivo text-[16px] leading-[1.35] font-normal text-[#B5C3CF]/90">
              Faster time to market with our cloud-based
              <br />
              core banking services
            </p>

            <div className="mt-9 flex flex-col items-start gap-4">
              <Button intent="gradient" type="button" className="h-[44px] w-[168px] rounded-[10px]">
                Request Demo
              </Button>
              <TextLink href="#" className="translate-y-0.5 text-[14px]" arrowVariant="right">
                <span className="border-b border-[#00B4FD]/50 pb-[2px] font-mono">Learn</span>&nbsp;More
              </TextLink>
            </div>
          </div>

          <div className="motion-safe:fade-up [animation-delay:120ms] overflow-hidden">
            <Image
              src="/sections/laptop-aml.png"
              alt="Core banking dashboard screen"
              width={500}
              height={400}
              className="w-[91%] h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

