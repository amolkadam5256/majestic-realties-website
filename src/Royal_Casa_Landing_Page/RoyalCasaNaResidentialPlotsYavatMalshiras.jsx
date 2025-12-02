import React from 'react'
import RoyalCasaNavbar from './RoyalCasaNavbar'
import { Helmet } from 'react-helmet';
import Royal_CasaHero from './Royal_CasaHero'
import About_RoyalCasa from './About_RoyalCasa'
import RoyalCasaGallery from './RoyalCasaGallery'
import RoyalCasaCallToAction from './RoyalCasaCallToAction'
import RoyalCasaContact from './RoyalCasaContact'
import RoyalVistaFooter from '../Royal_Vista_Landing_Page/RoyalVistaFooter'

const RoyalCasaNaResidentialPlotsYavatMalshiras = () => {
  return (
    <>

      <Helmet>
        {/* Title */}
        <title>Royal Casa (N.A. Plots) – Premium Gated Plotting Project in Yavat–Malshiras | Majestic Realties</title>

        {/* Description */}
        <meta
          name="description"
          content="Royal Casa by Majestic Realties is a premium gated N.A. residential plotting project in Yavat–Malshiras near Pune–Solapur Highway. Collector-sanctioned plots with top-tier infrastructure, amenities, lush plantations, internal roads, water & electricity connection, street lighting, and spacious layout. Ideal for peaceful living or a weekend home. Loan facility available."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Royal Casa NA plots, Royal Casa Yavat Malshiras, NA plots near Pune, Royal Casa project details, residential plotting near Pune Solapur Highway, Majestic Realties projects"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.majesticrealties.com/projects/royal-casa" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Royal Casa (N.A. Plots) – Premium Gated Plotting Project in Yavat–Malshiras" />
        <meta
          property="og:description"
          content="Premium N.A. residential plotting project near Pune–Solapur Highway. Collector-sanctioned plots, modern infrastructure, club house, children’s play area, basketball court, party lawn, and peaceful surroundings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.majesticrealties.com/projects/royal-casa" />
        <meta property="og:site_name" content="Majestic Realties" />
        <meta
          property="og:image"
          content="https://www.majesticrealties.com/assets/royal-casa-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Royal Casa (N.A. Plots) – Premium Gated Plotting Project | Majestic Realties" />
        <meta
          name="twitter:description"
          content="Explore Royal Casa, a collector-sanctioned residential N.A. plot project in Yavat–Malshiras with modern amenities and excellent connectivity."
        />
        <meta name="twitter:image" content="https://www.majesticrealties.com/assets/royal-casa-banner.jpg" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Residence",
              "name": "Royal Casa (N.A. Plots)",
              "url": "https://www.majesticrealties.com/projects/royal-casa",
              "description": "Premium collector-sanctioned N.A. residential plotting project in Yavat–Malshiras by Majestic Realties with amenities including club house, children's play area, basketball court, street lighting, individual name plates, internal roads, drainage system, water connection, and electricity-ready plots.",
              "image": "https://www.majesticrealties.com/assets/royal-casa-banner.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gate No. 3, Yavat-Saswad Road, Malshiras, Purandar",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.4050",
                "longitude": "74.1100"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Club House" },
                { "@type": "LocationFeatureSpecification", "name": "Party Lawn" },
                { "@type": "LocationFeatureSpecification", "name": "Children’s Play Area" },
                { "@type": "LocationFeatureSpecification", "name": "Basketball Court" },
                { "@type": "LocationFeatureSpecification", "name": "Gated Secure Layout" },
                { "@type": "LocationFeatureSpecification", "name": "Street Lighting" },
                { "@type": "LocationFeatureSpecification", "name": "Water Connection to Every Plot" },
                { "@type": "LocationFeatureSpecification", "name": "Electricity Ready Plots" },
                { "@type": "LocationFeatureSpecification", "name": "Modern Drainage System" }
              ],
              "provider": {
                "@type": "Organization",
                "name": "Majestic Realties",
                "url": "https://www.majesticrealties.com",
                "logo": "https://www.majesticrealties.com/assets/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91 78430 77794",
                  "email": "zakki@majesticrealties.com",
                  "contactType": "customer service"
                }
              }
            }
          `}
        </script>
      </Helmet>

      
      <main>
        <RoyalCasaNavbar />
        <Royal_CasaHero />
        <About_RoyalCasa />
        <RoyalCasaGallery />
        <RoyalCasaCallToAction />
        <RoyalCasaContact />
        <RoyalVistaFooter />
      </main>
    </>
  )
}

export default RoyalCasaNaResidentialPlotsYavatMalshiras