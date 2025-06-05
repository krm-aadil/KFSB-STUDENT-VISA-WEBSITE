import React from 'react';

function ExploreSection() {
  return (
    <section className="py-20 bg-white text-center" id="explore">
      <h2 className="text-3xl font-bold text-black mb-6">Explore our journey through education in Korea</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/581ff5eef5e231b25f9c12db/1610740117360-NERWN1Q15FZ18WQSEBDT/20201223175546958_DBYXIVQL.jpg"
            alt="Campus view"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Explore the campuses, student life, and more!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://absoluteinternship.com/wp-content/uploads/1-Discovering-South-Korean-Culture-Internship-Journey-Blog.png"
            alt="Cultural experience in Korea"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Discover the cultural experience of studying in Korea.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2020/10/bigstock-Korean-Lady-In-Hanbok-Or-Korea-311297917.jpg"
            alt="Advice on living and thriving in South Korea"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">Get advice on living, learning, and thriving in South Korea.</p>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
