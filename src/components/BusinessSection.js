import React from 'react';

function BusinessSection() {
  return (
    <section className="py-20 bg-gray-100" id="explore">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">
          Key Business Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Global Education Business to nurture talent worldwide.",
              img: "https://media.istockphoto.com/id/1313809238/photo/happy-multiracial-group-of-students-taking-selfie-closeup.jpg?s=612x612&w=0&k=20&c=qxd81NEwqVGkzgen-jRgHEC6hIu7OIm8QgcU-miCuQE=",
              alt: "Global Education",
            },
            {
              title:
                "Trade and Distribution to ensure global reach and expansion.",
              img: "https://www.lloydslist.com/-/media/lloyds-list/images/stock-images/flags/south-korea-flag-containers-trade.png?rev=391158be41d94a40bbbf2b24db85d6a8",
              alt: "Trade and Distribution",
            },
            {
              title:
                "Real Estate Development & Smart City Projects to create sustainable urban environments.",
              img: "https://images.mansionglobal.com/im-335269?width=1299&height=867",
              alt: "Real Estate Development",
            },
            {
              title: "Sustainable Solar Projects.",
              img: "https://storage.googleapis.com/cdn.media.bluedot.so/bluedot.koreaexpose/wordpress/2018/02/Solar_agriculture_945.jpg",
              alt: "Solar Projects",
            },
            {
              title: "Wind Energy Projects.",
              img: "https://compareelectricity.com/wp-content/uploads/2018/01/Wind-and-Solar-Services.jpg",
              alt: "Wind Energy",
            },
            {
              title:
                "Smart Farming to create sustainable Green environments.",
              img: "https://www.libelium.com/wp-content/uploads/2016/06/ps_senseye_big.jpg",
              alt: "Smart Farming",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <p className="text-lg text-gray-600 font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;