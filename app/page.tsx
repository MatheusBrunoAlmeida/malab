'use client'
// import Banner from "@/components/banner";
import dynamic from "next/dynamic";

export default function Home() {
  const BannerComponent = dynamic(() => import('../components/banner'), {
    ssr: false,
  })
  
  const OfficeSectionComponent = dynamic(() => import('../components/office-section'), {
    ssr: false,
  })

  const DiferenciaisComponent = dynamic(() => import('../components/diferenciais'), {
    ssr: false,
  })

  const AreasComponent = dynamic(() => import('../components/areas'), {
    ssr: false,
  })
  
  const TeamComponent = dynamic(() => import('../components/team'), {
    ssr: false,
  })

  const FaleConoscoComponent = dynamic(() => import('../components/faleconosco'), {
    ssr: false,
  })
  
  return (
    <div>
      <BannerComponent />
      <OfficeSectionComponent />
      <AreasComponent />
      <TeamComponent />  
      <DiferenciaisComponent />
      <FaleConoscoComponent />
    </div>
  )
}
