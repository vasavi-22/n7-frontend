import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";
import { TextLink } from "@/components/ui/TextLink";

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#0EA5FF]" />
      <span className="text-[12px] leading-[1.45] text-[#0B0E10]/70">{children}</span>
    </li>
  );
}

function PhoneMock({ src, className, priority }: { src: string; className: string; priority?: boolean }) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt=""
        width={260}
        height={520}
        sizes="(max-width: 768px) 70vw, 260px"
        priority={priority}
        className="h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
      />
    </div>
  );
}

export function DigitalBankingSection() {
  return (
    <section className="relative bg-[#F4F8FB] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-40 -top-36 h-[520px] w-[520px] rounded-full border border-[#C6D7E6]" />
        <div className="absolute left-24 top-8 h-[980px] w-[980px] rounded-full border border-[#C6D7E6]" />
      </div>

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Left intro */}
          <div className="max-w-[360px] motion-safe:fade-up">
            <h2 className="text-[28px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#0B0E10]">
              Digital banking
              <br />
              out-of-the-box
            </h2>
            <p className="mt-4 text-[12px] leading-[1.55] text-[#0B0E10]/60">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>

            <div className="mt-6 flex flex-col items-start gap-3">
              <Button intent="gradient" className="h-[36px] w-[132px] rounded-[9px]" type="button">
                Request Demo
              </Button>
              <TextLink href="#" className="text-[#0EA5FF] border-[#0EA5FF]/50">
                Learn More
              </TextLink>
            </div>
          </div>

          {/* Content grid */}
          <div className="relative grid gap-y-16 lg:gap-y-20">
            {/* Block 1 */}
            <div className="relative grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center">
              <PhoneMock src="/sections/section-7-phone-1.png" className="mx-auto w-[240px] lg:mx-0" priority />
              <div className="max-w-[420px]">
                <p className="text-[12px] font-semibold text-[#0B0E10]/75">
                  Fully compliant with regulatory requirement
                </p>
                <p className="mt-3 text-[12px] leading-[1.55] text-[#0B0E10]/60">
                  This governance of risk management with regulations is assured by our risk management framework that is
                  in line with guidelines which include bank&apos;s operational-risk policies and procedures.
                </p>
                <ul className="mt-5 space-y-2">
                  <Bullet>Pre-integrated Security System</Bullet>
                  <Bullet>Fully Compliant With Regulatory Requirement</Bullet>
                  <Bullet>Digitally Connected Core</Bullet>
                </ul>
              </div>
            </div>

            {/* Block 2 */}
            <div className="relative grid gap-10 lg:grid-cols-[1fr_260px] lg:items-center">
              <div className="max-w-[420px]">
                <p className="text-[12px] font-semibold text-[#0B0E10]/75">No legacy IT systems</p>
                <p className="mt-3 text-[12px] leading-[1.55] text-[#0B0E10]/60">
                  Our Digital Banking solution and technology supports help financial institutions take advantage of
                  digital transformation by assuring customer trust and regulatory compliance.
                </p>
                <ul className="mt-5 space-y-2">
                  <Bullet>Adaptive to integrate API</Bullet>
                  <Bullet>Ambient User Experience</Bullet>
                  <Bullet>Cloud-native With lower TCO</Bullet>
                </ul>
              </div>
              <PhoneMock src="/sections/section-7-phone-2.png" className="mx-auto w-[240px] lg:mx-0 lg:justify-self-end" />
            </div>

            {/* Block 3 */}
            <div className="relative grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center">
              <PhoneMock src="/sections/section-7-phone-3.png" className="mx-auto w-[240px] lg:mx-0" />
              <div className="max-w-[420px]">
                <p className="text-[12px] font-semibold text-[#0B0E10]/75">No traditional branches</p>
                <p className="mt-3 text-[12px] leading-[1.55] text-[#0B0E10]/60">
                  Our Digital Banking out-of-the-box solution provides next-generation retail banking while reducing
                  risk for an existing operational cost to a seamless branchless experience.
                </p>
                <ul className="mt-5 space-y-2">
                  <Bullet>Branchless &amp; Paperless Banking</Bullet>
                  <Bullet>Digital Transformation Capability</Bullet>
                  <Bullet>Optimized, adaptable and Scalable</Bullet>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

