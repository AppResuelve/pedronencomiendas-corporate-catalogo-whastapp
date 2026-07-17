// @ts-nocheck
'use client'

import { useModal } from "@/context/ModalContext"
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import RouteSchedule from "@/components/RouteSchedule";
import Pricing from "@/components/Pricing";
import TrustBadges from "@/components/TrustBadges";
import FinalCTA from "@/components/FinalCTA";

export default function HomeClient() {
  const { openModal } = useModal()

  return (
    <main className="overflow-hidden">
      <HeroSection onOpenModal={openModal} />
      <ProblemSolution />
      <RouteSchedule />
      <Pricing onOpenModal={openModal} />
      <TrustBadges />
      <FinalCTA onOpenModal={openModal} />
    </main>
  );
}
