import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { LaptopFrame } from "@/components/ui/LaptopFrame";

const benefitsLeft = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing( cash, cheques, mandates, NEFT, RTGS etc)",
];

const benefitsRight = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function BenefitItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <Image
        src="/sections/tick.png"
        alt=""
        width={18}
        height={18}
        className="mt-[2px] h-[18px] w-[18px] shrink-0"
        aria-hidden
      />
      <span className="font-[var(--font-archivo)] text-[16px] leading-[1.3] text-[#B5C3CF]/90">
        {children}
      </span>
    </li>
  );
}

export function BenefitsSection() {
  return (
    <section className="relative mt-20 lg:mt-28">
      <Container>
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1.08fr_1fr]">
          <div className="order-2 lg:order-1 motion-safe:fade-up overflow-hidden">
            <LaptopFrame
              src="/sections/laptop-kyc.png"
              alt="Operations dashboard screen"
              cutoff="left"
              variant="thin"
            />
          </div>

          <div className="order-1 lg:order-2 max-w-[560px] motion-safe:fade-up [animation-delay:120ms]">
            <h2 className="font-[var(--font-archivo)] text-[27px] leading-[1.3] font-normal text-[#E9F4F9] sm:text-[30px]">
              Run a more efficient, flexible,and digitally connected corebanking system
            </h2>
            <p className="mt-7 font-[var(--font-archivo)] text-[16px] leading-[1.3] font-normal text-[#E9F4F9]/85">
              What you will get:
            </p>

            <div className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              <ul className="space-y-3">
                {benefitsLeft.map((b) => (
                  <BenefitItem key={b}>{b}</BenefitItem>
                ))}
              </ul>
              <ul className="space-y-3">
                {benefitsRight.map((b) => (
                  <BenefitItem key={b}>{b}</BenefitItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

