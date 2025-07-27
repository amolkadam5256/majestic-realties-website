import React from 'react'
import ProjectHome from '../components/projectComp/ProjectHome';
import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';
import CommitmentSection from '../components/AboutComp/CommitmentSection';
import Team from '../components/AboutComp/Team'
import SubCards from '../components/HomeComp/SubCards';
const Projects = () => {
  return (
    <div className="w-full">
      <ProjectHome/>
      <SubCards/>
      <BottomSection />
      <CommitmentSection />
      <Team/>
      <CallToAction />
    </div>
  )
}

export default Projects