import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";
import { TextLink } from "@/components/ui/TextLink";
import { ClosingCtaSection } from "./ClosingCtaSection";

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <Image
        src="/sections/tick.png"
        alt=""
        width={18}
        height={18}
        className="mt-[2px] h-[31px] w-[30px] shrink-0"
        aria-hidden
      />
      <span className="text-[16px] font-archivo leading-[1.45] text-[#0B0E10]/70">{children}</span>
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
            <h2 className="text-[53px] font-archivo leading-[1.1] font-semibold tracking-[-0.02em] text-[#0B0E10]">
              Digital banking
              <br />
              out-of-the-box
            </h2>
            <p className="mt-4 text-[16px] font-archivo leading-[1.55] text-[#0B0E10]/60">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <Button intent="gradient" className="h-[45px] w-[190px] rounded-[10px]" type="button">
                Request Demo
              </Button>
              <TextLink href="#" className="mt-6 w-fit text-[14px]" arrowVariant="right">
                    <span className="border-b border-[#00B4FD]/50 pb-[2px] font-mono">Learn</span>&nbsp;More
              </TextLink>
            </div>
          </div>

          {/* Content grid */}
          <div className="relative grid gap-y-16 lg:gap-y-20">
            {/* Block 1 */}
            <div className="relative grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center">
              <PhoneMock src="/sections/section-7-phone-1.png" className="mx-auto w-[260px] lg:mx-0" priority />
              <div className="max-w-[420px]">
                <p className="text-[16px] font-archivo font-bold text-black">
                  Fully compliant with regulatory requirement
                </p>
                <p className="mt-3 text-[16px] font-archivo leading-[1.55] text-[#0B0E10]/60">
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
                <p className="text-[16px] font-archivo font-semibold text-[#0B0E10]/75">No legacy IT systems</p>
                <p className="mt-3 text-[16px] font-archivo leading-[1.55] text-[#0B0E10]/60">
                  Our Digital Banking solution and technology supports help financial institutions take advantage of
                  digital transformation by assuring customer trust and regulatory compliance.
                </p>
                <ul className="mt-5 space-y-2">
                  <Bullet>Adaptive to integrate API</Bullet>
                  <Bullet>Ambient User Experience</Bullet>
                  <Bullet>Cloud-native With lower TCO</Bullet>
                </ul>
              </div>
              <PhoneMock src="/sections/section-7-phone-2.png" className="mx-auto w-[260px] lg:mx-0 lg:justify-self-end" />
            </div>

            {/* Block 3 */}
            <div className="relative grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center">
              <PhoneMock src="/sections/section-7-phone-3.png" className="mx-auto w-[260px] lg:mx-0" />
              <div className="max-w-[420px]">
                <p className="text-[16px] font-archivo font-semibold text-[#0B0E10]/75">No traditional branches</p>
                <p className="mt-3 text-[16px] font-archivo leading-[1.55] text-[#0B0E10]/60">
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
      <div className="bg-[#02171F] mt-20 rounded-[20px] mx-4 sm:mx-8 lg:mx-35 min-h-[380px]">
      <Container>
        <div className="relative overflow-hidden rounded-[22px] p-[1.59px]">

          <div
            className="relative rounded-[20px] px-9 py-12 sm:px-10 lg:px-14 lg:py-16"
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
              <div className="max-w-[550px] motion-safe:fade-up">
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
      </div>
    </section>
  );
}

