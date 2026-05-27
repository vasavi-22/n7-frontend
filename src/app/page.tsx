import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ClosingCtaSection } from "@/components/sections/ClosingCtaSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { DigitalBankingSection } from "@/components/sections/DigitalBankingSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { WideCtaSection } from "@/components/sections/WideCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { navItems, solutions, trustedBy } from "@/content/home";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000D12]">
      <div className="pointer-events-none absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-[5%] rounded-full bg-[#0E6BDE]/25 blur-[120px]" />

      <SiteHeader navItems={navItems} />
      <HeroSection trustedBy={trustedBy} />
      <SolutionsSection solutions={solutions} />
      <ProductShowcaseSection />
      <BenefitsSection />
      <ClosingCtaSection />
      <MarqueeSection />
      <DigitalBankingSection />
      <InsightsSection />
      <CaseStudiesSection />
      <WideCtaSection />
      <FooterSection />
    </div>
  );
}
