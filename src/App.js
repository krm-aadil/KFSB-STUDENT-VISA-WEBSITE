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
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

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

      {/* Company Information Section */}
      <div className="bg-gray-100 py-20 text-center" id="contact">
        <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
        <p className="text-lg text-gray-700 mb-4">For inquiries, you can reach us at:</p>
        <div className="space-y-4">
          <p className="text-lg text-black"><strong>Phone:</strong> 010 3932 2357</p>
          <p className="text-lg text-black"><strong>Email:</strong> kfsb23@naver.com</p>
          <p className="text-lg text-black"><strong>Address:</strong> Byeongjeomjungang-ro 170beon-gil, Hwaseong-si, Gyeonggi-do, Republic of Korea (SINDO Building 4th Floor)</p>
        </div>
      </div>
    </div>
  );
}

export default App;
