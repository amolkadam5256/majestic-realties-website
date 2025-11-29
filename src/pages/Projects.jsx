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
        {/* ============================================
      PAGE TITLE (Highly SEO-Optimized)
  ============================================ */}
        <title>
          Top Investment Plots Near Pune | Gated Community Projects        </title>

        {/* ============================================
      META DESCRIPTION (Using High-Volume Keywords)
  ============================================ */}
        <meta
          name="description"
          content="
      Explore top NA plots, gated community projects, luxury farmhouse plots, and RERA-approved land developments near Pune & Lonavala. 
      Majestic Realties offers premium investment plots, bungalow plots, and weekend farmhouse lands with high appreciation potential.
    "
        />

        {/* ============================================
      META KEYWORDS (All HIGH-VOLUME Keywords Added)
  ============================================ */}
        <meta
          name="keywords"
          content="
      Investment plots near Pune,
      NA plots Pune,
      RERA approved plots Pune,
      Gated community projects Pune,
      Luxury farmhouse plots near Pune,
      Weekend farmhouse plots Pune,
      Bungalow plots Pune,
      Land developers Pune,
      Commercial real estate,
      Flats for sale,
      Plots near Lonavala,
      Book your plot Pune
    "
        />

        {/* ============================================
      CANONICAL URL
  ============================================ */}
        <link rel="canonical" href={window.location.href} />

        {/* ============================================
      OPEN GRAPH (FACEBOOK / SOCIAL)
  ============================================ */}
        <meta property="og:title" content="Top Investment NA Plots & Gated Community Projects Near Pune | RERA Approved" />
        <meta
          property="og:description"
          content="
      Premium NA plots, luxury farmhouse lands, and RERA-approved projects near Pune by Majestic Realties. 
      High-return investment plots with gated community infrastructure.
    "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="URL_TO_PROJECT_FEATURE_IMAGE" />

        {/* ============================================
      TWITTER CARD
  ============================================ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Investment NA Plots & Gated Community Projects Near Pune | Majestic Realties" />
        <meta
          name="twitter:description"
          content="
      Explore NA plots, gated communities & luxury farmhouse plots near Pune. 
      Premium land investment opportunities by Majestic Realties.
    "
        />
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