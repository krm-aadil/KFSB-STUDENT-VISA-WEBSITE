import React from 'react';

function AboutSection() {
  return (
    <section className="py-20 bg-white text-center md:flex md:items-center" id="about">
      <div className="md:w-1/2 p-4">
        <img
          src="https://img.freepik.com/premium-photo/business-handshake-south-korea-flag-background_654297-84.jpg" // Replace with relevant company image
          alt="About KFSB"
          className="rounded-lg "
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-4xl font-bold text-black mb-4">About KFSB</h2>
        <p className="text-lg text-gray-700">
          KFSB (Korea Federation of Small Business) is a pioneering institution at the heart of South Korea’s entrepreneurial spirit. With a global outlook and a commitment to sustainability, KFSB fosters growth and innovation through partnerships, collaboration, and the strategic deployment of cutting-edge technology across various industries.

We believe in leveraging our international connections to promote global trade, education, and real estate development. With a forward-thinking vision, we empower small and medium-sized enterprises (SMEs) by offering comprehensive services designed to cultivate talent, drive economic development, and create sustainable urban environments.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
