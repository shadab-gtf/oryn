import { GlobalParallaxDirector } from "@/components/motion/GlobalParallaxDirector";
import { GlobalPresenceSection } from "@/components/sections/home/GlobalPresenceSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { MaterialLanguageSection } from "@/components/sections/home/MaterialLanguageSection";
import { PhilosophyPreviewSection } from "@/components/sections/home/PhilosophyPreviewSection";
import { PrivateInquirySection } from "@/components/sections/home/PrivateInquirySection";
import { SignatureResidencesSection } from "@/components/sections/home/SignatureResidencesSection";
import { SpatialIntelligenceSection } from "@/components/sections/home/SpatialIntelligenceSection";
import { getHomePage } from "@/lib/api/home";
import { getMarkets } from "@/lib/api/markets";
import { getFeaturedProperties } from "@/lib/api/properties";

export default async function Home() {
  const homePromise = getHomePage();
  const propertiesPromise = getFeaturedProperties();
  const marketsPromise = getMarkets();
  const content = await homePromise;

  return (
    <>
      <GlobalParallaxDirector />
      <HeroSection content={content.hero} />
      <PhilosophyPreviewSection content={content.philosophy} />
      <SpatialIntelligenceSection content={content.spatialIntelligence} />
      <SignatureResidencesSection propertiesPromise={propertiesPromise} />
      <MaterialLanguageSection content={content.materialLanguage} />
      <GlobalPresenceSection marketsPromise={marketsPromise} />
      <PrivateInquirySection content={content.privateInquiry} />
    </>
  );
}
