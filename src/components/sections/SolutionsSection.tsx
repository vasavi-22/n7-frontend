import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";
import { TextLink } from "@/components/ui/TextLink";

type Solution = {
  title: string;
  description: string;
  icon: string;
  badge?: string;
};

type SolutionsSectionProps = {
  solutions: Solution[];
};

export function SolutionsSection({ solutions }: SolutionsSectionProps) {
  return (
    <section className="relative mt-16 lg:mt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[433px_minmax(0,613.0121459960938px)] lg:items-start lg:justify-between">
          <div className="lg:sticky lg:top-8 lg:h-[185px] motion-safe:fade-up">
            <div className="flex w-full max-w-[433px] flex-col gap-12">
              <h2 className="font-[var(--font-archivo)] text-[37px] leading-[1.2] font-normal tracking-[-0.01em] text-[#E9F4F9]">
                All of our solutions are
                <br />
                tailor-made to your needs
              </h2>
              <Button
                intent="outline"
                type="button"
                className="h-[49px] w-[226px] rounded-[10px] px-[59px] py-[15px]"
              >
                Request Demo
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-[613.0121459960938px] motion-safe:fade-up [animation-delay:120ms]">
            <div className="pointer-events-none absolute bottom-[-10%] right-[-12%] h-[320px] w-[220px] rounded-full bg-[#083A8A]/35 blur-[110px]" />
            <div className="grid grid-cols-1 gap-x-[76px] gap-y-14 md:grid-cols-2 md:gap-y-16">
              {solutions.map((item, index) => (
                <article
                  key={item.title}
                  className={`flex w-full max-w-[268.5060729980469px] flex-col ${
                    index === 4 ? "md:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="h-[50px] w-[50px] shrink-0"
                    />
                    {item.badge ? (
                      <span className="font-[var(--font-chivo-mono)] text-[20px] leading-none text-[#596E84]">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-3 font-[var(--font-archivo)] text-[36px] leading-[1.2] font-normal text-[#E9F4F9]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-[var(--font-archivo)] text-[15px] leading-[1.3] font-normal text-[#B5C3CF]/90">
                    {item.description}
                  </p>

                  <TextLink href="#" className="mt-8 w-fit">
                    Learn More
                  </TextLink>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

