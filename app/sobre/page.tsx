'use client'

import AreasSobre from "@/components/sobre/areas";
import BannerSobre from "@/components/sobre/banner";
import OfficeSectionSobre from "@/components/sobre/office-section";
import Estrutura from "@/components/sobre/estrutura";
import Team from "../../components/team";

export default function Sobre() {
  return (
    <div>
      <BannerSobre />
      <OfficeSectionSobre />
      <AreasSobre />
      <Estrutura />
      <Team />
    </div>
  );
}