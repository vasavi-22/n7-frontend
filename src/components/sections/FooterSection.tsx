import { Container } from "@/components/layout/Container";
import Image from "next/image";

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const n7Banking = ["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team", "Brand Center"];

export function FooterSection() {
  return (
    <footer className="relative bg-[#000D12] pb-10 pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:items-start">
          <div className="select-none">
            <div className="font-[var(--font-archivo)] text-[210px] leading-none font-semibold tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)]">
              N7
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-2 text-[12px] leading-[1.55] text-[#B5C3CF]/75">
              <p className="text-[16px] font-archivo text-[#E9F4F9]/85">London</p>
              <p className="text-[15px] font-archivo">
                Linktia Infosystems Ltd — CB7,
                <br />
                26 Main Road Sunridge,TN14 6EP,
                <br />
                England, United Kingdom.
              </p>
            </div>

            <div className="space-y-2 text-[12px] leading-[1.55] text-[#B5C3CF]/75">
              <p className="text-[16px] font-archivo text-[#E9F4F9]/85">Dubai</p>
              <p className="text-[15px] font-archivo">
                Linktia Infosystems Ltd —
                <br />
                CB7,Jumeirah Business, Center 5
                <br />
                Cluster W, Jumeirah Lakes Towers,
                <br />
                Dubai, United Arab Emirates
              </p>
            </div>

            <div className="space-y-2 text-[12px] leading-[1.55] text-[#B5C3CF]/75">
              <p className="text-[16px] font-archivo text-[#E9F4F9]/85">London</p>
              <p className="text-[15px] font-archivo">
                Linktia Infosystems Ltd —
                <br />
                CB7,Nirmal, Anand Nagar,
                <br />
                Suncity Road, Pune,
                <br />
                Maharashtra, 411041, India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[340px_1fr]">
          <div />
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[16px] font-archivo font-medium text-[#E9F4F9]/85">Solutions</p>
              <ul className="mt-4 space-y-3 text-[12px] text-[#B5C3CF]/75">
                {solutions.map((s) => (
                  <li key={s} className="flex items-center justify-between gap-0">
                    <a className="hover:text-[#E9F4F9] text-[14px]" href="#">
                      {s}
                    </a>
                    <Image
            src="/sections/arrow-right.png"
            alt=""
            width={14}
            height={14}
            className="h-[14px] w-[14px]"
            aria-hidden
          />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[16px] font-archivo font-medium text-[#E9F4F9]/85">N7 Banking</p>
              <ul className="mt-4 space-y-3 text-[12px] text-[#B5C3CF]/75">
                {n7Banking.map((s) => (
                  <li key={s} className="flex items-center justify-between gap-4">
                    <a className="hover:text-[#E9F4F9] text-[14px]" href="#">
                      {s}
                    </a>
                    <Image
            src="/sections/arrow-right.png"
            alt=""
            width={14}
            height={14}
            className="h-[14px] w-[14px]"
            aria-hidden
          />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[16px] font-archivo font-medium text-[#E9F4F9]/85">Our Socials</p>
              <ul className="mt-4 space-y-3 text-[12px] text-[#B5C3CF]/75">
                {["LinkedIn", "X"].map((s) => (
                  <li key={s} className="flex items-center justify-between gap-4">
                    <a className="hover:text-[#E9F4F9] text-[14px]" href="#">
                      {s}
                    </a>
                    <Image
            src="/sections/arrow-right.png"
            alt=""
            width={14}
            height={14}
            className="h-[14px] w-[14px]"
            aria-hidden
          />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-19 text-[14px] leading-[1.6] text-[#B5C3CF]/45 ml-100">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the
          Companies Act 2006 in England and Wales | Number of Incoorporation 13100092]
        </p>
      </Container>
    </footer>
  );
}

