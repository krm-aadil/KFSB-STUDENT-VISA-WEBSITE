import React, { useState } from "react";
import './index.css'; // Tailwind CSS Import

// Sections
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BusinessSection from "./components/BusinessSection";
import GlobalNetworkSection from "./components/GlobalNetworkSection";
import ESGManagementSection from "./components/ESGManagementSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans bg-white">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 bg-black text-white py-4 shadow-md z-50">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4">
          {/* Logo */}
          <div className="text-6xl font-bold mb-4 flex items-center italic">
            <span className="text-red-500">K</span>
            <span className="text-white">FSB</span>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <ul
            className={`${menuOpen ? "block" : "hidden"} md:flex md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0 w-full`}
          >
            <li><a href="#home" className="text-xl hover:text-red-500 transition duration-300 w-full text-center">Home</a></li>
            <li><a href="#about" className="text-xl hover:text-red-500 transition duration-300 w-full text-center">About</a></li>
            <li><a href="#explore" className="text-xl hover:text-red-500 transition duration-300 w-full text-center">Explore</a></li>
            <li><a href="#contact" className="text-xl hover:text-red-500 transition duration-300 w-full text-center">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Sections */}
      <div id="home">
        <AboutSection />
      </div>
      <div id="about">
        <BusinessSection />
      </div>
      <div id="explore">
        <GlobalNetworkSection />
      </div>
      <div id="contact">
        <ESGManagementSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; 2025 KFSB | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
