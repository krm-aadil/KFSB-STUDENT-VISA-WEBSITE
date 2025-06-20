import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

function ContactSection() {
  return (
    <section
      className="py-20 text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://ugc.futurelearn.com/uploads/images/d5/26/d5264532-7d42-4cf8-8a79-d518378ee0f2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="contact"
    >
      {/* Dark Overlay for Text Contrast */}
      <div className="bg-black bg-opacity-40 py-20">
        <h2 className="text-4xl font-extrabold text-white mb-6">Contact KFSB</h2>
        <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
          Reach out to us for any business inquiries or collaborations. We are always open to new ideas and partnerships.
        </p>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Phone Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-black text-4xl mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-lg text-black">+82 10 7569 6369</p>
            <p className="text-lg text-black">+94 77 009 6369</p>
          </div>

          {/* Email Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-black text-4xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-lg text-gray-700">
              <a href="mailto:kfsbnest@gmail.com" className="text-black">kfsbnest@gmail.com</a>
            </p>
          </div>

          {/* Address Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-black text-4xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sri Lanka Office</h3>
            <p className="text-lg text-gray-700">
              Orex City Shopping Complex, 4th Floor, No. 558, Ekala, Ja Ela, Sri Lanka
            </p>
            
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-black text-4xl mb-4">
              <FaMapMarkerAlt />
            </div>
             <h3 className="text-xl font-semibold mb-2 mt-4">Korea Office</h3>
            <p className="text-lg text-gray-700">
              56 Hadang-ro, Mokpo-si, Jeollanam-do, Sangdong 960-2, 3rd Floor, 2nd Unit, Korea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
