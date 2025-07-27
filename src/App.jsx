import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PrivacyPolicy from './components/AboutComp/PrivacyPolicy'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Royal_Vista from './components/projectComp/Royal_Vista';
import Royal_Casa from './components/projectComp/Royal_Casa';
import Mount_Castle from './components/projectComp/Mount_Castle';

const App = () => {

  useEffect(() => {
  AOS.init({ duration: 1000, once: false });
}, []);

  return (
    <Router>
      <div className="min-h-screen text-black overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-16 max-w-screen mx-auto w-full p-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/projects/royal_vista" element={<Royal_Vista />} />
            <Route path="/projects/royal_casa" element={<Royal_Casa />} />
            <Route path="/projects/mount_castle" element={<Mount_Castle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
