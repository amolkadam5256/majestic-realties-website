import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// legalExpertspages
import ZakkiSirLegal from './components/legalExpertspages/ZakkiSirLegal'
import CanonicalLink from './CanonicalLink';

// Lazy loading heavy pages
const Navbar = React.lazy(() => import('./components/Navbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const PrivacyPolicy = React.lazy(() => import('./components/AboutComp/PrivacyPolicy'));
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Royal_Vista = React.lazy(() => import('./components/projectComp/Royal_Vista'));
const Royal_Casa = React.lazy(() => import('./components/projectComp/Royal_Casa'));
const Mount_Castle = React.lazy(() => import('./components/projectComp/Mount_Castle'));
const PageWrapper = React.lazy(() => import('./components/PageWrapper'));
const Loader = React.lazy(() => import('./components/Loader'));
const InfoModal = React.lazy(() => import('./components/InfoModal'));
const ErrorPage = React.lazy(() => import('./components/ErrorPage'));
const OurTeam = React.lazy(() => import('./pages/OurTeam'));
const Mount_Castle_Farmhouse_Bungalow_Plots_In_yevat = React.lazy(() =>
  import('./Landinge_page/Mount_Castle_Farmhouse_Bungalow_Plots_In_yevat')
);
const Royal_Vista_NA_Residential_Plots_Yavat = React.lazy(() =>
  import('./Royal_Vista_Landing_Page/Royal_Vista_NA_Residential_Plots_Yavat')
);

const RoyalCasaNaResidentialPlotsYavatMalshiras = React.lazy(() =>
  import('./Royal_Casa_Landing_Page/RoyalCasaNaResidentialPlotsYavatMalshiras')
);

const LegalExpert = React.lazy(() => import('./components/Expert_talk/LegalExpert'));
const FinancialExpert = React.lazy(() => import('./components/Expert_talk/FinancialExpert'));
const ArchitecturalExpert = React.lazy(() => import('./components/Expert_talk/ArchitecturalExpert'));
// Lazy-loaded pages
const Career = React.lazy(() => import('./pages/Career'));
const Influence = React.lazy(() => import('./pages/Influence'));
const MilindNikamPage = React.lazy(() =>
  import('./components/Top_Influencer/MilindNikamPage')
);
const ZakkiKhanPage = React.lazy(() =>
  import('./components/Top_Influencer/ZakkiKhanPage')
);

// FinancialExpertPages
const ZakkiFinancialExpe = React.lazy(() =>
  import('./components/FinancialExpertPages/ZakkiFinancialExpe')
);


// -------------------------------------
// 🔥 Fast Animated Routes
// -------------------------------------
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
        <Route path="/legal-expert" element={<PageWrapper><LegalExpert /></PageWrapper>} />
        <Route path="/financial-expert" element={<PageWrapper><FinancialExpert /></PageWrapper>} />
        <Route path="/architectural-expert" element={<PageWrapper><ArchitecturalExpert /></PageWrapper>} />
        <Route path="/career" element={<PageWrapper><Career /></PageWrapper>} />
        <Route path="/real-estate-influence" element={<PageWrapper><Influence /></PageWrapper>} />



        {/* influence pages */}
        <Route path="/real-estate-influence/milind-nikam" element={<PageWrapper><MilindNikamPage /></PageWrapper>} />
        <Route path="/real-estate-influence/zakki-khan" element={<PageWrapper><ZakkiKhanPage /></PageWrapper>} />

        {/* legal-experts */}
        <Route path="/legal-experts/zakki-khan" element={<PageWrapper><ZakkiSirLegal /></PageWrapper>} />


        {/* Financial Experts */}
        <Route path="/financial-expert/zakki-khan" element={<PageWrapper><ZakkiFinancialExpe /></PageWrapper>} />

        {/* Landing Pages */}
        <Route
          path="/mount-castle-farmhouse-bungalow-plots-yevat"
          element={<Mount_Castle_Farmhouse_Bungalow_Plots_In_yevat />}
        />
        <Route
          path="/royal-vista-na-residential-plots-yevat"
          element={<Royal_Vista_NA_Residential_Plots_Yavat />}
        />
        <Route
          path="/royal-casa-na-residential-plots-yavat"
          element={<RoyalCasaNaResidentialPlotsYavatMalshiras />}
        />

        <Route path="*" element={<PageWrapper><ErrorPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};


// -------------------------------------
// Layout With Hide Header/Footer
// -------------------------------------
const Layout = ({ children }) => {
  const location = useLocation();

  const noHeaderFooterRoutes = [
    '/mount-castle-farmhouse-bungalow-plots-yevat',
    '/royal-vista-na-residential-plots-yevat',
    '/royal-casa-na-residential-plots-yavat',
  ];

  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-grow max-w-screen mx-auto w-full p-2">
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};


// -------------------------------------
// Main App Component
// -------------------------------------
const App = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* ❌ Old fallback removed */}
      {/* ✔ No extra loading, only your Loader works */}
      <Suspense fallback={null}>
        {loading && <Loader onComplete={() => setLoading(false)} />}

        {!loading && (
          <div className="min-h-screen text-black overflow-x-hidden">
            <InfoModal isOpen={showModal} onClose={() => setShowModal(false)} />
            <CanonicalLink />
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </div>
        )}
      </Suspense>
    </Router>
  );
};

export default App;
