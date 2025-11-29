import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMajestic from '../components/AboutComp/AboutMajestic';
import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';
import CommitmentSection from '../components/AboutComp/CommitmentSection';
import Team from '../components/AboutComp/Team';

const About = () => {
  return (
    <div className="w-full pt-16">

      {/* SEO Section */}
      <Helmet>
        <title>About Us | Majestic Realties</title>
        <meta
          name="description"
          content="Learn about Majestic Realties – our mission, commitment, team, and how we help you find the best plots, rentals, and real estate investment opportunities near Pune."
        />
        <meta
          name="keywords"
          content="Majestic Realties, About Majestic, Pune real estate, Pune plots, real estate developers, real estate near Pune"
        />
        <meta property="og:title" content="About Majestic Realties" />
        <meta
          property="og:description"
          content="Discover Majestic Realties – trusted real estate partner for plots, rental properties, and investments near Pune."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://majesticrealties.com/about" />
        <meta
          property="og:image"
          content="https://majesticrealties.com/assets/building.jpg"
        />
      </Helmet>

      <AboutMajestic />
      <BottomSection />
      <CommitmentSection />
      <Team />
      <CallToAction />
    </div>
  );
};

export default About;
