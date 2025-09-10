import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from './components/AboutComp/PrivacyPolicy';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Royal_Vista from './components/projectComp/Royal_Vista';
import Royal_Casa from './components/projectComp/Royal_Casa';
import Mount_Castle from './components/projectComp/Mount_Castle';
import PageWrapper from './components/PageWrapper';
import Loader from './components/Loader';
import InfoModal from './components/InfoModal';
import ErrorPage from './components/ErrorPage';
import OurTeam from './pages/OurTeam';
import Mount_Castle_Farmhouse_Bungalow_Plots_In_yevat from './Landinge_page/Mount_Castle_Farmhouse_Bungalow_Plots_In_yevat';
import Royal_Vista_NA_Residential_Plots_Yavat from './Royal_Vista_Landing_Page/Royal_Vista_NA_Residential_Plots_Yavat';
import RoyalCasaNaResidentialPlotsYavatMalshiras from './Royal_Casa_Landing_Page/RoyalCasaNaResidentialPlotsYavatMalshiras';

// all your routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/our-team" element={<PageWrapper><OurTeam /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/projects/royal_vista" element={<PageWrapper><Royal_Vista /></PageWrapper>} />
        <Route path="/projects/royal_casa" element={<PageWrapper><Royal_Casa /></PageWrapper>} />
        <Route path="/projects/mount_castle" element={<PageWrapper><Mount_Castle /></PageWrapper>} />

        {/* your new landing page */}
        <Route
          path="/mount-castle-farmhouse-bungalow-plots-yevat"
          element={<Mount_Castle_Farmhouse_Bungalow_Plots_In_yevat />}
        />
        {/* your new landing page */}
        <Route
          path="/royal-vista-na-residential-plots-yevat"
          element={<Royal_Vista_NA_Residential_Plots_Yavat />}
        />
        {/* your new landing page */}
        <Route
          path="/royal-casa-na-residential-plots-yavat"
          element={<RoyalCasaNaResidentialPlotsYavatMalshiras />}
        />

        <Route path="*" element={<PageWrapper><ErrorPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// wrapper to control header/footer
const Layout = ({ children }) => {
  const location = useLocation();

  // all paths where header/footer should be hidden:
  const noHeaderFooterRoutes = [
    '/mount-castle-farmhouse-bungalow-plots-yevat',
    '/royal-vista-na-residential-plots-yevat',
    '/royal-casa-na-residential-plots-yavat',
  ];

  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-grow pt-0 max-w-screen mx-auto w-full p-2">
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen text-black overflow-x-hidden">
          <InfoModal isOpen={showModal} onClose={() => setShowModal(false)} />
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </div>
      )}
    </Router>
  );
};

export default App;
