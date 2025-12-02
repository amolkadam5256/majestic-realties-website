import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>404 – Page Not Found | Majestic Realties</title>

        {/* Description */}
        <meta
          name="description"
          content="The page you are looking for does not exist or may have been moved. Please return to the homepage or explore Majestic Realties projects."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="404 error, page not found, Majestic Realties error page"
        />

        {/* IMPORTANT: Prevent indexing */}
        <meta name="robots" content="noindex, nofollow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.majesticrealties.com/404" />

        {/* OG Meta Tags */}
        <meta property="og:title" content="404 – Page Not Found | Majestic Realties" />
        <meta
          property="og:description"
          content="This page could not be found. Visit Majestic Realties homepage or explore our residential projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.majesticrealties.com/404" />
        <meta
          property="og:site_name"
          content="Majestic Realties"
        />
        <meta
          property="og:image"
          content="https://www.majesticrealties.com/assets/404-banner.jpg"
        />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="404 – Page Not Found | Majestic Realties"
        />
        <meta
          name="twitter:description"
          content="Oops! This page could not be found. Head back to Majestic Realties homepage."
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "404 – Page Not Found",
      "url": "https://www.majesticrealties.com/404",
      "description": "This is the 404 error page of Majestic Realties. The requested page could not be found.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Majestic Realties",
        "url": "https://www.majesticrealties.com"
      }
    }
  `}
        </script>
      </Helmet>



      <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-4 py-20">
        <div className="text-center space-y-6 max-w-xl w-full">
          <h1 className="justify-center text-9xl font-extrabold text-yellow-400 flex gap-2">
            <div className="inline-block animate-bounce" style={{ animationDelay: "0ms" }}>4</div>
            <div className="inline-block animate-bounce" style={{ animationDelay: "300ms" }}>0</div>
            <div className="inline-block animate-bounce" style={{ animationDelay: "600ms" }}>4</div>
          </h1>

          <h2 className="text-3xl font-bold">Oops! Page Not Found</h2>
          <p className="text-base text-gray-600">
            We couldn’t find the page you were looking for. <br />
            If you’re searching for specific information, please contact us.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-yellow-500 border border-yellow-500 px-6 py-2.5 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            <FaArrowLeft className="text-lg" />
            Back to Home
          </Link>

          <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg text-left space-y-5 w-full">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-500 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold">Our Office</h3>
                <p className="text-sm text-gray-700">
                  3rd Floor, Bandal Spaces, <br />
                  Paud Rd., Kothrud, Pune
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-yellow-500 text-lg" />
              <a
                href="tel:+917843077794"
                className="text-gray-800 hover:text-black text-sm"
              >
                +91 78430 77794
              </a>
            </div>

            <div className="flex items-center gap-4 ">
              <FaEnvelope className="text-yellow-500 text-lg" />
              <a
                href="mailto:zakki@majesticrealties.com"
                className="text-gray-800 hover:text-black text-sm"
              >
                zakki@majesticrealties.com
              </a>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default ErrorPage;
