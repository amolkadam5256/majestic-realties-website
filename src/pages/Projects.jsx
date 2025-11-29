import React from 'react'
import { Helmet } from "react-helmet";
import ProjectHome from '../components/projectComp/ProjectHome';
import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';
import CommitmentSection from '../components/AboutComp/CommitmentSection';
import SubCards from '../components/HomeComp/SubCards';
const Projects = () => {
  return (
    <div className="w-full pt-16">


      <Helmet>
        {/* Page Title */}
        <title>Our Projects | Majestic Realties Pune</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore the premium real estate projects by Majestic Realties Pune. Discover luxury homes, residential townships, and investment opportunities across Pune and Maharashtra."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Majestic Realties projects, Pune real estate, luxury homes, residential townships, property investment Pune, real estate projects"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Our Projects | Majestic Realties Pune" />
        <meta
          property="og:description"
          content="Explore the premium real estate projects by Majestic Realties Pune. Discover luxury homes, residential townships, and investment opportunities across Pune and Maharashtra."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="URL_TO_PROJECT_FEATURE_IMAGE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects | Majestic Realties Pune" />
        <meta
          name="twitter:description"
          content="Explore the premium real estate projects by Majestic Realties Pune. Discover luxury homes, residential townships, and investment opportunities across Pune and Maharashtra."
        />
        <meta name="twitter:image" content="URL_TO_PROJECT_FEATURE_IMAGE" />
      </Helmet>


      <ProjectHome />
      <SubCards />
      <BottomSection />
      <CommitmentSection />
      <CallToAction />
    </div>
  )
}

export default Projects