import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";

export function ClosingCtaSection() {
  return (
    <section className="relative mt-20 pb-16 lg:mt-28 lg:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(closest-side,rgba(0,180,253,0.12),rgba(0,0,0,0))]" />
      <Container>
        <div className="relative overflow-hidden rounded-[22px] p-[1.59px]">

          <div
            className="relative rounded-[20px] px-7 py-12 sm:px-10 lg:px-14 lg:py-16"
            style={{
              background:
                "radial-gradient(55% 130% at 10% 55%, rgba(0,180,253,0.12) 0%, rgba(0,58,206,0.08) 35%, rgba(0,0,0,0) 72%), radial-gradient(60% 120% at 92% 52%, rgba(0,58,206,0.10) 0%, rgba(0,0,0,0) 64%), linear-gradient(32.64deg, #02171F 30.8%, rgba(0, 0, 0, 0) 77.46%)",
            }}
          >
            <div className="pointer-events-none absolute -left-6 top-1/2 hidden h-[72%] w-[54%] -translate-y-1/2 rounded-[18px] bg-[#071B23]/65 lg:block" />

            <div className="pointer-events-none absolute right-[-6%] top-[-18%] select-none font-[var(--font-archivo)] text-[160px] leading-none text-white/[0.04] sm:text-[220px] lg:text-[320px]">
              CB7
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[520px] motion-safe:fade-up">
                <h2 className="font-archivo text-[40px] leading-[1.12] font-normal text-[#E9F4F9] sm:text-[48px]">
                  Take the full advantage of
                  <br />
                  going paper-less now.
                </h2>
                <p className="mt-6 max-w-[520px] font-archivo text-[14px] leading-[1.45] text-[#B5C3CF]/90">
                  CB7 helps your financial institution improve the client experience, automate and
                  optimize procedures, simplify banking operations
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start lg:justify-end motion-safe:fade-up [animation-delay:120ms]">
                <Button intent="outline" type="button" className="h-[44px] w-[168px] rounded-[10px]">
                  Contact Us
                </Button>
                <Button intent="gradient" type="button" className="h-[44px] w-[168px] rounded-[10px]">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

