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
        <title>Contact Majestic Realties | Get in Touch</title>

        <meta
          name="description"
          content="Reach out to Majestic Realties for inquiries about land, bungalow plots, farmhouses, or real estate investment in Pune, Lonavala, Mulshi, and surrounding areas."
        />

        <meta
          name="keywords"
          content="Majestic Realties contact, real estate Pune, bungalow plots inquiry, farmhouse plots inquiry, land investment Pune, contact real estate developer"
        />

        <meta property="og:title" content="Contact Majestic Realties" />
        <meta
          property="og:description"
          content="Get in touch with Majestic Realties for property inquiries, site visits, and investment opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://majesticrealties.com/contact" />
        <meta
          property="og:image"
          content="https://majesticrealties.com/assets/contact-banner.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Majestic Realties" />
        <meta
          name="twitter:description"
          content="Reach out to Majestic Realties for bungalow, NA plots, luxury farmhouse, or land investment inquiries in Pune and nearby areas."
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