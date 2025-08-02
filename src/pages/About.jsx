import React from 'react'
import AboutMajestic from '../components/AboutComp/AboutMajestic';
import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';
import CommitmentSection from '../components/AboutComp/CommitmentSection';
import Team from '../components/AboutComp/Team'
const About = () => {
  return (
    <div className="w-full">
      <AboutMajestic />
      <BottomSection />
      <CommitmentSection />
      <CallToAction />
    </div>
  )
}

export default About