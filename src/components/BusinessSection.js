import React from 'react';

function BusinessSection() {
  return (
    <section className="py-20 bg-black text-center" id="explore">
      <h2 className="text-4xl font-bold text-white mb-6 ">Key Business Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
        <div className="bg-white  rounded-lg shadow-lg">
          <img
            src="https://www.korea.net/upload/content/editImage/20210728121137334_JKY8R3I1.jpg" // Replace with relevant image for Global Education
            alt="Global Education"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Global Education Business to nurture talent worldwide.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://www.lloydslist.com/-/media/lloyds-list/images/stock-images/flags/south-korea-flag-containers-trade.png?rev=391158be41d94a40bbbf2b24db85d6a8" // Replace with relevant image for Trade and Distribution
            alt="Trade and Distribution"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Trade and Distribution to ensure global reach and expansion.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://images.mansionglobal.com/im-335269?width=1299&height=867" // Replace with relevant image for Real Estate
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
