import React, { useState } from "react";
import './index.css'; // Tailwind CSS Import

// Sections
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ExploreSection from "./components/ExploreSection";
import ContactSection from "./components/ContactSection";

function App() {
  // State to toggle the mobile menu
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
          {/* <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div> */}

          {/* Navbar Links - Visible only when hamburger is clicked */}
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0 w-full`}
          >
            <li><a href="#home" className="text-xl hover:text-red-500 transition duration-300 w-full text-center">Home</a></li>
            <li><a href="#about" className="text-xl hover:text-red-500 transition duration-300 w-full text-center">About</a></li>
            <li><a href="#explore" className="text-xl hover:text-red-500 transition duration-300 w-full text-center">Explore</a></li>
            <li><a href="#contact" className="text-xl hover:text-red-500 transition duration-300 w-full text-center">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('https://sektor3-0.pl/wp-content/uploads/2021/11/blog-sektor30hangul.jpg')" }} // Hero background image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Study in South Korea Easily</h1>
          <p className="text-lg md:text-2xl mb-6">
            Expert guidance for Sri Lankan students on Korean visas and education.
          </p>
          <a href="#about" className="bg-white hover:bg-red-600 text-black font-bold py-3 px-6 rounded-md text-lg transition duration-300">
            Get Started Today
          </a>
        </div>
      </section>

      {/* Sections */}
      <div id="home">
        <HomeSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="explore">
        <ExploreSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; 2025 KFSB SRILANKA | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
