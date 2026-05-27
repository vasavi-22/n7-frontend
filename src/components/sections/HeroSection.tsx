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
    <main className="relative mt-14 overflow-visible lg:mt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.08fr]">
          <section className="max-w-[560px] motion-safe:fade-up">
            <h1 className="font-[var(--font-archivo)] text-[46px] leading-[1.12] font-medium text-[#E9F4F9] sm:text-[58px]">
              The new foundation
              <br />
              of modern banking
            </h1>
            <p className="mt-5 max-w-[520px] font-[var(--font-archivo)] text-[22px] leading-[1.38] font-normal text-[#E9F4F9]/78">
              We drive innovation and growth, provide seamless customer experience and operational
              excellence
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                intent="gradient"
                type="button"
                className="min-w-[172px] px-7 py-4 text-[15px]"
              >
                Request Demo
              </Button>
              <Button intent="outline" type="button" className="min-w-[172px] px-7 py-4 text-[15px]">
                Contact Us
              </Button>
            </div>

            <div className="mt-20">
              <p className="font-[var(--font-archivo)] text-base leading-[1.3] font-medium text-[#E9F4F9]">
                Trusted By:
              </p>
              <div className="mt-2 flex w-full max-w-[680px] flex-wrap items-center gap-x-4 gap-y-2">
                {trustedBy.map((company) => (
                  <p
                    key={company.name}
                    className="inline-flex min-h-[18.397855758666992px] items-center gap-[4.6px] text-[13.8px] leading-[110%] font-bold text-[#586E84]"
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
          </section>

          <section className="relative mx-auto w-full max-w-[680px] lg:mx-0 motion-safe:fade-up [animation-delay:120ms]">
            <div className="relative mx-auto aspect-[640/364] w-full">
              <div
                className="pointer-events-none absolute left-[48%] top-[45%] h-[76%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[60px]"
                style={{
                  background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
                }}
              />
              <div className="absolute left-[14%] top-[5%] h-[91%] w-[62%] overflow-hidden rounded-[31px]">
                <Image
                  src="/hero-woman.png"
                  alt="Woman using phone and laptop"
                  width={768}
                  height={512}
                  priority
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <article className="absolute right-[1.5%] top-[4%] w-[39%] rounded-[18px] border border-white/35 bg-[#ECECEC]/78 px-4 py-4 shadow-[0_14px_45px_rgba(0,0,0,0.22),0_0_0_1px_rgba(255,255,255,0.28)] backdrop-blur-md sm:px-5 sm:py-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-[linear-gradient(160deg,#9CC2F0,#4A6BB3)]" />
                    <div>
                      <p className="whitespace-nowrap font-[var(--font-archivo)] text-[15px] font-medium text-[#1F1F1F]">
                        Toni Kross
                      </p>
                      <p className="font-[var(--font-archivo)] text-[10px] text-[#7B7B7B]">
                        Good Morning
                      </p>
                    </div>
                  </div>
                  <BellIcon className="h-5 w-5 text-[#262626]" />
                </div>
                <p className="mt-3 font-[var(--font-archivo)] text-[11px] text-[#7B7B7B]">Total Balance</p>
                <p className="font-[var(--font-archivo)] text-[clamp(20px,2.3vw,41px)] leading-tight font-medium text-[#081E69]">
                  $42,295.00 USD
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="space-y-2">
                    <span className="mx-auto grid h-9 w-9 place-content-center rounded-[12px] bg-[#D2D2D2] sm:h-11 sm:w-11">
                      <CameraIcon className="h-4 w-4 text-[#1A1A1A] sm:h-5 sm:w-5" />
                    </span>
                    <p className="whitespace-nowrap font-[var(--font-chivo-mono)] text-[8px] text-[#111] sm:text-[10px]">
                      Fund Transfer
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="mx-auto grid h-9 w-9 place-content-center rounded-[12px] bg-[#E4E4E4] sm:h-11 sm:w-11">
                      <WalletIcon className="h-4 w-4 text-[#1A1A1A] sm:h-5 sm:w-5" />
                    </span>
                    <p className="whitespace-nowrap font-[var(--font-chivo-mono)] text-[8px] text-[#111] sm:text-[10px]">
                      Add Money
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="mx-auto grid h-9 w-9 place-content-center rounded-[12px] bg-[#E4E4E4] sm:h-11 sm:w-11">
                      <Squares2X2Icon className="h-4 w-4 text-[#1A1A1A] sm:h-5 sm:w-5" />
                    </span>
                    <p className="whitespace-nowrap font-[var(--font-chivo-mono)] text-[8px] text-[#111] sm:text-[10px]">
                      More
                    </p>
                  </div>
                </div>
              </article>

              <article className="absolute bottom-[6%] left-[0%] w-[41%] rounded-[14px] border border-white/45 bg-[#F2F2F2]/82 px-3 py-3 shadow-[0_14px_45px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.3)] backdrop-blur-md sm:px-4 sm:py-3">
                <p className="font-[var(--font-archivo)] text-[clamp(20px,2vw,30px)] font-medium leading-tight text-[#161616]">
                  Recent activity
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#ECECEC] px-2.5 py-1 font-[var(--font-archivo)] text-[10px] text-[#606060]">
                    This Day
                  </span>
                  <span className="rounded-full bg-[#081E69] px-2.5 py-1 font-[var(--font-archivo)] text-[10px] text-white">
                    This Week
                  </span>
                  <span className="rounded-full bg-[#ECECEC] px-2.5 py-1 font-[var(--font-archivo)] text-[10px] text-[#606060]">
                    This Month
                  </span>
                  <span className="rounded-full bg-[#ECECEC] px-2.5 py-1 font-[var(--font-archivo)] text-[10px] text-[#606060]">
                    6 Month
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-content-center rounded-[9px] bg-[#7A66FF]">
                      <ArrowUpRightIcon className="h-4 w-4 text-white" />
                    </span>
                    <div>
                      <p className="whitespace-nowrap font-[var(--font-archivo)] text-[16px] font-medium text-[#111]">
                        To Jin - Work
                      </p>
                      <p className="font-[var(--font-archivo)] text-[10px] text-[#838383]">12 jun 2022</p>
                    </div>
                  </div>
                  <p className="whitespace-nowrap font-[var(--font-chivo-mono)] text-[32px] leading-none text-[#161616]">
                    -$59
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

