import React from 'react'
import Navbar2 from './Navbar2'
import HeroSection2 from './HeroSection2'
import About2 from './About2'
import MountCastleGallery from './MountCastleGallery'
import CallToAction2 from './CallToAction2'
import Contact2 from './Contact2'
import Footer2 from './Footer2'


const Mount_Castle_Farmhouse_Bungalow_Plots_In_yevat = () => {
  return (

    <>
      <Helmet>
        {/* Title */}
        <title>Mount Castle – Premium Residential Project Near Pune | Majestic Realties</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover Mount Castle by Majestic Realties — a premium residential project near Pune offering NA-approved plots, modern layouts, connectivity advantages, and secure investment opportunities. Explore amenities, layout plans, and book your dream land today."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Mount Castle Pune, Majestic Realties Mount Castle, Mount Castle project details"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.majesticrealties.com/mount-castle" />

        {/* OG Tags */}
        <meta property="og:title" content="Mount Castle – Premium Residential Project Near Pune" />
        <meta
          property="og:description"
          content="Premium NA-approved residential plots near Pune by Majestic Realties. Explore modern layouts, amenities, and investment-ready plotting options."
        />
        <meta property="og:url" content="https://www.majesticrealties.com/mount-castle" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.majesticrealties.com/assets/mount-castle-banner.jpg"
        />
        <meta property="og:site_name" content="Majestic Realties" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mount Castle – Premium Residential Project Near Pune" />
        <meta
          name="twitter:description"
          content="Explore Mount Castle NA-approved layouts, amenities, and premium residential plots near Pune."
        />
        <meta
          name="twitter:image"
          content="https://www.majesticrealties.com/assets/mount-castle-banner.jpg"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      "name": "Mount Castle – Residential Plots",
      "description": "Premium NA-approved plotting project by Majestic Realties near Pune.",
      "url": "https://www.majesticrealties.com/mount-castle",
      "image": "https://www.majesticrealties.com/assets/mount-castle-banner.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
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
      <div className="">
        <Navbar2 />
        <HeroSection2 />
        <About2 />
        <MountCastleGallery />
        <CallToAction2 />
        <Contact2 />
        <Footer2 />
      </div>
    </>
  )
}

export default Mount_Castle_Farmhouse_Bungalow_Plots_In_yevat   