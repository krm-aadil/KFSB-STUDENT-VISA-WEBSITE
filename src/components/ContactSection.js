import React from 'react';

function ContactSection() {
  return (
    <section className="py-20 bg-white text-center" id="contact">
      <h2 className="text-3xl font-bold text-black mb-6">Contact KFSB</h2>
      <div className="max-w-xl mx-auto">
        <p className="text-lg text-gray-700 mb-4">
          Reach out to us for any business inquiries or collaborations. We are always open to new ideas and partnerships.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <p className="text-lg">Chairman: Incheol Shin</p>
          <p className="text-lg">Phone: +82 10 3932 2357</p>
          <p className="text-lg">Fax: +82 70 4131 8944</p>
          <p className="text-lg">Email: <a href="mailto:kfsb23@naver.com" className="text-blue-500">kfsb23@naver.com</a></p>
          <p className="text-lg">Address: Byeongjeomjungang-ro 170beon-gil, Hwaseong-si, Gyeonggi-do, Republic of Korea (SINDO Building 4th Floor)</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
