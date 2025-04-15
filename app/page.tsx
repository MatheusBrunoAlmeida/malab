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

  const AreasComponent = dynamic(() => import('../components/areas'), {
    ssr: false,
  })
  
  const TeamComponent = dynamic(() => import('../components/team'), {
    ssr: false,
  })
  
  return (
    <div>
      <BannerComponent />
      <OfficeSectionComponent />
      <AreasComponent />
      <TeamComponent />  
    </div>
  )
}
