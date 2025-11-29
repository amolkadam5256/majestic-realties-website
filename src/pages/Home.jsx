import React from 'react';
import { Helmet } from "react-helmet";
import HeroSection from '../components/HomeComp/HeroSection';
import Properties from '../components/HomeComp/Properties';
import SubCards from '../components/HomeComp/SubCards';
import Testimonials from '../components/HomeComp/Testimonials';
import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';

const Home = () => {
  return (
    <div className="w-full pt-16 ">
      <Helmet>
        <title>Majestic Realties | Luxury Properties & Plots in Pune, Mulshi, Lonavala</title>

        <meta
          name="description"
          content="Majestic Realties offers premium residential and commercial plots, farmhouses, and bungalow projects in Pune, Mulshi, Lonavala, and surrounding areas. Explore your dream property today!"
        />

        <meta
          name="keywords"
          content="Majestic Realties, real estate Pune, luxury plots Pune, farmhouse plots Lonavala, bungalow projects, residential plots, investment properties Pune, Mulshi real estate"
        />

        <meta property="og:title" content="Majestic Realties | Luxury Properties & Plots in Pune, Mulshi, Lonavala" />
        <meta
          property="og:description"
          content="Discover premium residential and commercial plots, bungalows, and farmhouses with Majestic Realties. Your dream property awaits in Pune, Mulshi, and Lonavala."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://majesticrealties.com/" />
        <meta
          property="og:image"
          content="https://majesticrealties.com/assets/home-banner.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Majestic Realties | Luxury Properties & Plots in Pune, Mulshi, Lonavala" />
        <meta
          name="twitter:description"
          content="Find premium plots, bungalows, and farmhouses in Pune, Mulshi, and Lonavala with Majestic Realties. Start your property investment journey now!"
        />
        <meta
          name="twitter:image"
          content="https://majesticrealties.com/assets/home-banner.jpg"
        />
      </Helmet>

      <HeroSection />
      <Properties />
      <SubCards />
      <Testimonials />
      <BottomSection />
      <CallToAction />

    </div>
  );
};

export default Home;
``
