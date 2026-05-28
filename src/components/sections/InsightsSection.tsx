import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";
import { TextLink } from "@/components/ui/TextLink";

type InsightCardProps = {
  title: string;
  author: string;
  date: string;
  withImage?: boolean;
};

function InsightCard({ title, author, date, withImage }: InsightCardProps) {
  return (
    <article className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
      <p className="font-mono text-[10px] tracking-[0.18em] text-[#00B4FD]/55">GETTING STARTED</p>

      <div className="mt-4 grid gap-5">
        {withImage ? (
          <div className="overflow-hidden rounded-[14px] bg-[#081E69]/25 px-6 py-7">
            <div className="grid grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Image
                  key={idx}
                  src="/sections/section-8-icon.png"
                  alt=""
                  width={76}
                  height={76}
                  className="mx-auto h-[64px] w-[64px]"
                  aria-hidden
                />
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <h3 className="font-archivo text-[22px] leading-[1.2] font-normal text-[#E9F4F9]">
            {title}
          </h3>
          <div className="mt-3 flex items-center gap-3 text-[11px] text-[#B5C3CF]/70">
            <span className="font-archivo text-[14px] tracking-[0.18em] text-[#64A8C4]/55">{author}</span>
            <span className="font-archivo text-[14px] tracking-[0.18em] text-[#64A8C4]/55">{date}</span>
          </div>
        </div>

        <Button
          intent="outline"
          type="button"
          className="font-mono h-[40px] w-full mt-7 rounded-[12px] border-white/15 text-[11px] text-[#B5C3CF]/80 hover:text-[#E9F4F9]"
        >
          Read More
        </Button>
      </div>
    </article>
  );
}

export function InsightsSection() {
  return (
    <section className="relative py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div className="max-w-[520px] motion-safe:fade-up">
            <h2 className="font-archivo text-[40px] leading-[1.1] font-normal text-[#E9F4F9]">
              Get yourself up-to-speed on
              <br />
              all the things happening in
              <br />
              fintech
            </h2>
            <div className="mt-10">
              <Button intent="outline" type="button" className="h-[49px] w-[184px] rounded-[10px]">
                Insights
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 motion-safe:fade-up [animation-delay:120ms]">
            <div className="md:col-span-2">
              <InsightCard
                title="How to transition from a traditional to a digital bank"
                author="David Grohl"
                date="17/08/24"
                withImage
              />
            </div>
            <InsightCard
              title="How to transition from a traditional to a digital bank"
              author="David Grohl"
              date="17/08/24"
            />
            <InsightCard
              title="How to transition from a traditional to a digital bank"
              author="David Grohl"
              date="17/08/24"
            />

            <div className="md:col-span-2 flex justify-end pt-2">
              <TextLink href="#" className="mt-8 w-fit text-[14px]" arrowVariant="right">
                  <span className="border-b border-[#00B4FD]/50 pb-[2px] font-mono">READ</span>&nbsp;ALL INSIGHTS
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

