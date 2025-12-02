import React from 'react';
import { Helmet } from 'react-helmet';
import RoyalVistaHero from './RoyalVistaHero';
import NavbarRoyalVista from './NavbarRoyalVista';
import AboutRoyalVista from './AboutRoyalVista';
import RoyalVistaGallery from './RoyalVistaGallery';
import RoyalVistaCallToAction from './RoyalVistaCallToAction';
import RoyalVistaFooter from './RoyalVistaFooter';
import RoyalVistaContact from './RoyalVistaContact';

const RoyalVistaNAResidentialPlots = () => {
  return (
    <div>
      {/* Helmet SEO */}
      <Helmet>
        {/* Title */}
        <title>Royal Vista – Premium Residential Project Near Pune | Majestic Realties</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover Royal Vista by Majestic Realties — a premium residential project near Pune offering modern plots, easy connectivity, and investment-ready properties. Explore layout, amenities, and secure your dream land today."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Royal Vista Pune project, Plots in Royal Vista near Pune"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.majesticrealties.com/projects/royal-vista" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Royal Vista – Premium Residential Project Near Pune" />
        <meta
          property="og:description"
          content="Premium residential plots near Pune by Majestic Realties. Modern layouts, amenities, and investment-ready properties."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.majesticrealties.com/projects/royal-vista" />
        <meta property="og:site_name" content="Majestic Realties" />
        <meta
          property="og:image"
          content="https://www.majesticrealties.com/assets/royal-vista-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Royal Vista – Premium Residential Project Near Pune" />
        <meta
          name="twitter:description"
          content="Explore Royal Vista residential plots near Pune by Majestic Realties. Modern layouts, amenities, and secure investment opportunities."
        />
        <meta
          name="twitter:image"
          content="https://www.majesticrealties.com/assets/royal-vista-banner.jpg"
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Residence",
              "name": "Royal Vista",
              "url": "https://www.majesticrealties.com/projects/royal-vista",
              "description": "Premium residential plots near Pune by Majestic Realties with modern layouts, amenities, and investment-ready properties.",
              "image": "https://www.majesticrealties.com/assets/royal-vista-banner.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pondhe",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "provider": {
                "@type": "Organization",
                "name": "Majestic Realties",
                "url": "https://www.majesticrealties.com"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Page Components */}
      <NavbarRoyalVista />
      <RoyalVistaHero />
      <AboutRoyalVista />
      <RoyalVistaGallery />
      <RoyalVistaCallToAction />
      <RoyalVistaContact />
      <RoyalVistaFooter />
    </div>
  );
};

export default RoyalVistaNAResidentialPlots;
