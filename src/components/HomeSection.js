import React from 'react';

function HomeSection() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-black mb-6">Welcome to KSFB</h2>
      <p className="text-lg text-gray-700 mb-10">
        We drive global leadership and innovation, partnering with businesses worldwide to solve today's challenges and create future opportunities.
      </p>
      <img
        src="/mnt/data/2.jpeg" // Image related to global leadership
        alt="Leadership and Innovation"
        className="mx-auto rounded-lg shadow-lg"
      />
    </section>
  );
}

export default HomeSection;
