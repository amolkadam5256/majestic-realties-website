import React from 'react'
import AboutMajestic from '../components/AboutComp/AboutMajestic';
import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';
const About = () => {
  return (
    <div className="w-full">
      <AboutMajestic />
      <BottomSection />
      <CallToAction />
    </div>
  )
}

export default About