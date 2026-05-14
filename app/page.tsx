import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItStarted from "@/components/HowItStarted";
import OurTeam1 from "@/components/OurTeam1";
import OurTeam2 from "@/components/OurTeam2";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Stats />
      <HowItStarted />
      <WhatWeBuild />
      <WhyChoose />
      <OurTeam1 />
      <OurTeam2 />
      <TechStack />
      <CTA />
      <Footer />
    </>
  );
}
