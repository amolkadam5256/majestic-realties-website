import React from 'react'
import { Helmet } from "react-helmet";

import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';
import ContactSection from '../components/ContactComp/ContactSection';
import ContactForm from '../components/ContactComp/ContactForm';
const Contact = () => {
  return (
    <div className="w-full pt-16 overflow-x-hidden">
      <Helmet>
        {/* ================================
      PAGE TITLE (High Search Volume)
  ================================== */}
        <title>
          Get in Touch | Buy Plots Near Pune | Contact Majestic Realties
        </title>

        {/* ================================
      META DESCRIPTION
  ================================== */}
        <meta
          name="description"
          content="
      Get in touch with Majestic Realties in Pune for NA plots, bungalow plots, farmhouse land, and trusted real estate investment support. 
      Call or message us to discuss residential plots, land buying, and property options near Pune.
    "
        />

        {/* ================================
      META KEYWORDS (Based on Your Data)
  ================================== */}
        <meta
          name="keywords"
          content="
      Talk to real estate agents Pune,
      Real estate agent Pune,
      Get in touch Majestic Realties,
      Residential plots contact Pune,
      Buy plots near Pune,
      Contact land developers Pune,
      NA plots Pune inquiry,
      Farmhouse plots Pune contact
    "
        />

        {/* ================================
      CANONICAL URL
  ================================== */}
        <link rel="canonical" href="https://majesticrealties.com/contact" />

        {/* ================================
      OPEN GRAPH TAGS
  ================================== */}
        <meta property="og:title" content="Get in Touch | Contact Majestic Realties Pune" />
        <meta
          property="og:description"
          content="
      Contact Majestic Realties for plot buying, farmhouse land inquiries, residential plots, and Pune real estate guidance. 
      Reach out for site visits or investment consultations.
    "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://majesticrealties.com/contact" />
        <meta
          property="og:image"
          content="https://majesticrealties.com/assets/contact-banner.jpg"
        />

        {/* ================================
      TWITTER CARD TAGS
  ================================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get in Touch | Contact Majestic Realties Pune" />
        <meta
          name="twitter:description"
          content="
      Connect with Majestic Realties for NA plots, bungalow plots, luxury farmhouse land, and real estate investment support near Pune.
    "
        />
        <meta
          name="twitter:image"
          content="https://majesticrealties.com/assets/contact-banner.jpg"
        />
      </Helmet>


      <ContactForm />
      <ContactSection />
      <BottomSection />
      <CallToAction />
    </div>
  )
}

export default Contact