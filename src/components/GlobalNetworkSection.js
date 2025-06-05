import React from 'react';

function GlobalNetworkSection() {
  return (
    <section className="py-20 bg-gray-100 text-center" id="global-network">
      <h2 className="text-3xl font-bold text-black mb-6">Global Network</h2>
      <p className="text-lg text-gray-700 mb-10">
        We have established strong connections across the globe, partnering with innovative companies and organizations to drive mutual growth and support in diverse regions.
      </p>
      <img
        src="/mnt/data/2.jpeg"  // Replace with an image showcasing global networks
        alt="Global Network"
        className="mx-auto rounded-lg shadow-lg"
      />
    </section>
  );
}

export default GlobalNetworkSection;
