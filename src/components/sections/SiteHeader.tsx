import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Buttons";

type SiteHeaderProps = {
  navItems: string[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="mt-5">
      <Container>
        <div className="mx-auto max-w-[1180px] rounded-[14px] border border-white/10 bg-gradient-to-r from-white/14 to-white/8 px-4 py-3 backdrop-blur-sm sm:px-6">
          <nav className="flex items-center justify-between gap-3">
            <p className="font-[var(--font-archivo)] text-[24px] leading-[1.2] font-medium text-[#E9F4F9]">
              N7
            </p>

            <ul className="hidden items-center gap-5 md:flex">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    className="group inline-flex items-center gap-1.5 font-[var(--font-chivo-mono)] text-[12px] leading-[1.3] font-normal uppercase text-[#E9F4F9]/90 transition-colors hover:text-[#E9F4F9]"
                    type="button"
                  >
                    {item}
                    {item !== "About us" ? (
                      <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-180" />
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>

            <Button intent="outline" className="rounded-[10px] px-5 py-2 sm:px-7" type="button">
              Request Demo
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

