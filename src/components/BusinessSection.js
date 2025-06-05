import React from 'react';

function BusinessSection() {
  return (
    <section className="py-20 bg-gray-100 text-center" id="explore">
      <h2 className="text-3xl font-bold text-black mb-6">Key Business Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/mnt/data/WhatsApp Image 2025-06-05 at 15.47.32.jpeg" // Replace with relevant image for Global Education
            alt="Global Education"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Global Education Business to nurture talent worldwide.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/mnt/data/4.jpeg" // Replace with relevant image for Trade and Distribution
            alt="Trade and Distribution"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Trade and Distribution to ensure global reach and expansion.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/mnt/data/5.jpeg" // Replace with relevant image for Real Estate
            alt="Real Estate Development"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Real Estate Development & Smart City Projects to create sustainable urban environments.</p>
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
