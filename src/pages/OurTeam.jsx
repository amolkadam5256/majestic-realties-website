import React from 'react';
import Team from '../components/AboutComp/Team';
import { Helmet } from "react-helmet";
import TeamCardCompact from '../components/AboutComp/TeamCardCompact'

const OurTeam = () => {
    return (
        <div className="w-full pt-16 ">


            <Helmet>
                {/* Page Title */}
                <title>Meet Our Team | Majestic Realties Pune</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Meet the expert team at Majestic Realties Pune. Our experienced real estate professionals guide you through property investments with trust, transparency, and excellence."
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="Majestic Realties team, Pune real estate experts, property consultants, real estate professionals, meet our team"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Meet Our Team | Majestic Realties Pune" />
                <meta
                    property="og:description"
                    content="Meet the expert team at Majestic Realties Pune. Our experienced real estate professionals guide you through property investments with trust, transparency, and excellence."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="URL_TO_TEAM_FEATURE_IMAGE" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meet Our Team | Majestic Realties Pune" />
                <meta
                    name="twitter:description"
                    content="Meet the expert team at Majestic Realties Pune. Our experienced real estate professionals guide you through property investments with trust, transparency, and excellence."
                />
                <meta name="twitter:image" content="URL_TO_TEAM_FEATURE_IMAGE" />
            </Helmet>

            <Team />
        </div>
    );
};

export default OurTeam;
``
