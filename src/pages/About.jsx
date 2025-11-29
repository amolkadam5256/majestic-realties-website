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
        {/* =========================
        PAGE TITLE (SEO)
      ========================= */}
        <title>
          About Majestic Realties | Pune’s Trusted Land Developers | Leading Land
          Development Company in Pune
        </title>

        {/* =========================
        META DESCRIPTION (SEO)
      ========================= */}
        <meta
          name="description"
          content="Welcome to Majestic Realties — your trusted partner for premium land and plot developments in and around Pune. With over a decade of transparent, client-centric service, we specialise in NA plots, bungalow plots, farmhouse-style lands, and gated residential plotted developments. Whether you're investing, building your dream home, or seeking a peaceful weekend getaway, we help turn land ownership into a rewarding long-term journey."
        />

        {/* =========================
        KEYWORDS (HIGH SEARCH VOLUME)
      ========================= */}
        <meta
          name="keywords"
          content="
      Greenfield plots near Pune,
      Plotted development Pune,
      Farmhouse plots near Pune,
      Leading land development company in Pune,
      Trusted land developers Pune,
      NA plots near Pune,
      Bungalow plots Pune,
      Majestic Realties
    "
        />

        {/* ============  =============
        CANONICAL URL
      ========================= */}
        <link rel="canonical" href="https://majesticrealties.com/about" />

        {/* =========================
        OPEN GRAPH (SOCIAL SHARE)
      ========================= */}
        <meta property="og:title" content="About Majestic Realties | Pune’s Trusted Land Developers" />
        <meta
          property="og:description"
          content="Learn about Majestic Realties — Pune’s trusted land and plot development company offering NA plots, farmhouse plots, and premium residential plotted developments with over a decade of expertise."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://majesticrealties.com/about" />
        <meta property="og:image" content="https://majesticrealties.com/assets/building.jpg" />
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
