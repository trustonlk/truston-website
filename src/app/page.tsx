import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustonIntro } from "@/components/home/TrustonIntro";
import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { WhyTruston } from "@/components/home/WhyTruston";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ClientTrustSection } from "@/components/home/ClientTrustSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Flagship Hero Section */}
      <HeroSection />

      {/* Truston Overview & Physical Engineering Lifecycle */}
      <TrustonIntro />

      {/* Enterprise Solution Architecture Navigator */}
      <EcosystemMap />

      {/* Engineering Authority & Differentiators */}
      <WhyTruston />

      {/* Enterprise Industries Served */}
      <IndustriesSection />

      {/* Verified Client Relationships */}
      <ClientTrustSection />

      {/* Enterprise Consultation CTA */}
      <FinalCTA />
    </div>
  );
}
