import Image from "next/image";
import {
  ArrowUpRightIcon,
  BellIcon,
  CameraIcon,
  ChevronDownIcon,
  Squares2X2Icon,
  WalletIcon,
} from "@heroicons/react/24/outline";

const navItems = ["Solutions", "Resources", "About us"];
const trustedBy = [
  { name: "SHELLS", logo: "/trusted/logo-1.png" },
  { name: "SmartFinder", logo: "/trusted/logo-2.png" },
  { name: "Zoomerr", logo: "/trusted/logo-3.png" },
  { name: "ArtVenue", logo: "/trusted/logo-4.png" },
  { name: "kontrastr", logo: "/trusted/logo-5.png" },
  { name: "WAVESMARATHON", logo: "/trusted/logo-6.png" },
];

const solutions = [
  {
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: "/solutions/core-banking.png",
  },
  {
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    icon: "/solutions/digital-banking.png",
  },
  {
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    icon: "/solutions/open-banking.png",
  },
  {
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    icon: "/solutions/loan-origination.png",
    badge: "NBFC",
  },
  {
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    icon: "/solutions/loan-management.png",
    badge: "NBFC",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000D12]">
      <div className="pointer-events-none absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-[5%] rounded-full bg-[#0E6BDE]/25 blur-[120px]" />
      <div className="mx-auto flex w-full max-w-[1320px] flex-col px-4 pb-16 pt-5 sm:px-6 lg:px-10">
        <header className="rounded-[14px] border border-white/10 bg-gradient-to-r from-white/14 to-white/8 px-4 py-3 backdrop-blur-sm sm:px-6">
          <nav className="flex items-center justify-between gap-3">
            <p className="font-[var(--font-archivo)] text-[24px] leading-[1.2] font-medium text-[#E9F4F9]">
              N7
            </p>
            <ul className="hidden items-center gap-9 md:flex">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    className="group inline-flex items-center gap-2 font-[var(--font-chivo-mono)] text-[12px] leading-[1.3] font-normal uppercase text-[#E9F4F9]/90 transition-colors hover:text-[#E9F4F9]"
                    type="button"
                  >
                    {item}
                    {item !== "About us" && (
                      <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:-rotate-180" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="rounded-[10px] border border-[#E9F4F9]/50 px-5 py-2 font-[var(--font-chivo-mono)] text-[12px] leading-[1.3] font-normal uppercase text-[#E9F4F9] transition-all hover:border-[#E9F4F9] hover:bg-white/10 sm:px-7"
              type="button"
            >
              Request Demo
            </button>
          </nav>
        </header>

        <main className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1.08fr]">
          <section className="max-w-[560px]">
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
              <button
                type="button"
                className="min-w-[172px] rounded-[12px] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-7 py-4 font-[var(--font-chivo-mono)] text-[15px] leading-[1.3] font-normal uppercase text-[#E9F4F9] shadow-[0_10px_28px_rgba(0,58,206,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Request Demo
              </button>
              <button
                type="button"
                className="min-w-[172px] rounded-[12px] border border-[#E9F4F9]/55 px-7 py-4 font-[var(--font-chivo-mono)] text-[15px] leading-[1.3] font-normal uppercase text-[#E9F4F9] transition-all duration-300 hover:border-[#E9F4F9] hover:bg-white/10"
              >
                Contact Us
              </button>
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
                    <span className="whitespace-nowrap">
                      {company.name}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="relative mx-auto w-full max-w-[680px] lg:mx-0">
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
        </main>

        <section className="relative mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[433px_minmax(0,613.0121459960938px)] lg:items-start lg:justify-between">
          <div className="lg:sticky lg:top-8 lg:h-[185px]">
            <div className="flex w-full max-w-[433px] flex-col gap-12">
              <h2 className="font-[var(--font-archivo)] text-[37px] leading-[1.2] font-normal tracking-[-0.01em] text-[#E9F4F9]">
                All of our solutions are
                <br />
                tailor-made to your needs
              </h2>
              <button
                type="button"
                className="h-[49px] w-[226px] rounded-[10px] border border-[#E9F4F9]/70 px-[59px] py-[15px] font-[var(--font-chivo-mono)] text-[12px] leading-[1.3] font-normal uppercase text-[#E9F4F9] transition-colors hover:bg-white/10"
              >
                Request Demo
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-[613.0121459960938px]">
            <div className="pointer-events-none absolute bottom-[-10%] right-[-12%] h-[320px] w-[220px] rounded-full bg-[#083A8A]/35 blur-[110px]" />
            <div className="grid grid-cols-1 gap-x-[76px] gap-y-10 md:grid-cols-2 lg:min-h-[1085px]">
              {solutions.map((item, index) => (
                <article
                  key={item.title}
                  className={`flex h-[327px] w-full max-w-[268.5060729980469px] flex-col gap-[26px] ${
                    index === 4 ? "md:col-start-1" : ""
                  }`}
                >
                  <div className="flex h-[96px] items-start justify-between">
                    <Image src={item.icon} alt={item.title} width={50} height={50} className="h-[50px] w-[50px]" />
                    {item.badge ? (
                      <span className="font-[var(--font-chivo-mono)] text-[20px] leading-none text-[#596E84]">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="flex h-[205px] flex-col gap-8">
                    <div className="space-y-3">
                      <h3 className="font-[var(--font-archivo)] text-[36px] leading-[1.2] font-normal text-[#E9F4F9]">
                        {item.title}
                      </h3>
                      <p className="font-[var(--font-archivo)] text-[15px] leading-[1.3] font-normal text-[#B5C3CF]/90">
                        {item.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex h-[21px] w-[102.56884765625px] items-center gap-[3px] border-b border-[#00B4FD]/50 font-[var(--font-chivo-mono)] text-[12px] leading-none uppercase text-[#00B4FD] transition-colors hover:text-[#4dc9ff]"
                    >
                      Learn More
                      <span aria-hidden>↗</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
