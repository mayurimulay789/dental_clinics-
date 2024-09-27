import React from 'react'
import ServicePage from './ServicePage';
import HeroSection from './HeroSection';
import ServiceBlock from './ServiceBlock';
import Abouts from './Abouts';
import BannerSection from './BannerSection';
import Navbar from './Navbar';
import Footer from './Footer';
function MainLayout() {
  return (
    <>
    <Navbar/>
   <BannerSection/>
   {/* <ServicePage /> */}
   <HeroSection />
   <Abouts/>
   <ServiceBlock/>
   <Footer/>
   </>
  )
}

export default MainLayout