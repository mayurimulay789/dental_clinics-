import React from 'react'
import ServicePage from './ServicePage';
import HeroSection from './HeroSection';
import ServiceBlock from './ServiceBlock';
import Abouts from './Abouts';
import BannerSection from './BannerSection';
function MainLayout() {
  return (
    <>
   <BannerSection/>
   <ServicePage />
   <HeroSection />
   <Abouts/>
   <ServiceBlock/>
   </>
  )
}

export default MainLayout