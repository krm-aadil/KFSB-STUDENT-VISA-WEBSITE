import React from 'react';

function AboutSection() {
  return (
    <section className="py-20 bg-white text-center md:flex md:items-center" id="about">
      <div className="md:w-1/2 p-4">
        <img
          src="/mnt/data/3.jpeg" // Replace with relevant company image
          alt="About KFSB"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold text-black mb-4">About KFSB</h2>
        <p className="text-lg text-gray-700">
          KFSB, the Korea Federation of Small Business, aims to lead global business innovation by leveraging technology, fostering talent, and creating sustainable growth in various industries such as education, real estate, and trade. We focus on enhancing local economies and contributing to global networks.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
