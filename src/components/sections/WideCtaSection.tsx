import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";

export function WideCtaSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col gap-10 rounded-[18px] bg-[#000D12] px-8 py-12 shadow-[0_30px_90px_rgba(0,0,0,0.55)] lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-14">
          <div className="max-w-[620px]">
            <h2 className="font-archivo text-[43px] leading-[1.1] font-normal text-[#E9F4F9] sm:text-[48px]">
              Take the full advantage of
              <br />
              going paper-less now.
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] font-archivo leading-[1.55] text-[#B5C3CF]/70">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures,
              simplify banking operations
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button intent="outline" type="button" className="h-[44px] w-[168px] rounded-[12px] font-mono">
              Contact Us
            </Button>
            <Button intent="gradient" type="button" className="h-[44px] w-[168px] rounded-[12px] font-mono">
              Request Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

