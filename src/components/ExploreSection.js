import React from 'react';

function ExploreSection() {
  return (
    <section className="py-20 bg-gray-100 text-center" id="explore">
      <h2 className="text-3xl font-bold text-black mb-6">Key Business Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/mnt/data/4.jpeg"
            alt="Global Education"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Global Education Programs to foster international talent and innovation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/mnt/data/5.jpeg"
            alt="Trade and Distribution"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Global trade and distribution to supply products and services worldwide.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/mnt/data/WhatsApp Image 2025-06-05 at 15.47.32.jpeg"
            alt="Smart Cities"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Developing smart cities for a sustainable and eco-friendly future.</p>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
