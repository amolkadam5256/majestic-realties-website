import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

  useEffect(() => {
  AOS.init({ duration: 1000, once: false });
}, []);

  return (
    <Router>
      <div className="min-h-screen text-black overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-26 max-w-screen mx-auto w-full p-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
