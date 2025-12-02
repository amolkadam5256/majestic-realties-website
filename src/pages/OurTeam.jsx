import React from 'react';
import Team from '../components/AboutComp/Team';
import { Helmet } from "react-helmet";

const OurTeam = () => {
    return (
        <div className="w-full pt-16 ">
            <Helmet>
                {/* Page Title */}
                <title>Meet Our Team | Real Estate Experts in Pune | Majestic Realties</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Meet the professional team behind Majestic Realties Pune. Our experienced real estate experts specialize in NA plots, farmhouse projects, residential developments, and property investment guidance across Pune and Maharashtra."
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="Majestic Realties team, Pune real estate team, real estate experts Pune, property consultants Pune, Majestic Realties staff, real estate professionals Pune, NA plots experts Pune, Pune property advisors"
                />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.majesticrealties.com/our-team" />

                {/* Open Graph */}
                <meta property="og:title" content="Meet Our Team | Real Estate Experts in Pune" />
                <meta
                    property="og:description"
                    content="Meet the expert real estate professionals at Majestic Realties Pune. We guide you with trust, transparency, and years of experience in NA plots and premium projects."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.majesticrealties.com/our-team" />
                <meta
                    property="og:image"
                    content="https://www.majesticrealties.com/assets/team-banner.jpg"
                />
                <meta property="og:site_name" content="Majestic Realties" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meet Our Team | Majestic Realties Pune" />
                <meta
                    name="twitter:description"
                    content="Discover the expert team behind Majestic Realties—specialists in Pune real estate, NA plots, farmhouse projects, and property investments."
                />
                <meta
                    name="twitter:image"
                    content="https://www.majesticrealties.com/assets/team-banner.jpg"
                />

                {/* JSON-LD Schema (Team Page) */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Majestic Realties",
      "url": "https://www.majesticrealties.com",
      "logo": "https://www.majesticrealties.com/assets/logo.png",
      "description": "A trusted real estate company in Pune offering NA plots, farmhouse plotting, residential projects, and investment opportunities.",
      "department": {
        "@type": "Organization",
        "name": "Majestic Realties Team",
        "description": "Team of experienced real estate professionals specializing in Pune property market."
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 78430 77794",
        "email": "zakki@majesticrealties.com",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.facebook.com/majesticrealties",
        "https://www.instagram.com/majesticrealties",
        "https://www.linkedin.com/company/majesticrealties"
      ]
    }
    `}
                </script>
            </Helmet>

            <Team />
        </div>
    );
};

export default OurTeam;
``
