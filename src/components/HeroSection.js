import React from 'react';

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://hrmasia.com/wp-content/uploads/2023/09/159179961_m_normal_none.png')" }} // Replace with your hero background image
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">KFSB - Korea Federation of Small Business</h1>
        <p className="text-lg md:text-2xl mb-6">
          Empowering innovation and global leadership.
        </p>
        <a href="#about" className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full text-lg transition duration-300">
          Learn More About Us
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
