import React from 'react';

function VisaInfoSection() {
  return (
    <section className="bg-gray-100 text-center py-20" id="visa-info">
      <h2 className="text-3xl font-bold text-black mb-6">How to Apply for a Korean Student Visa</h2>
      <p className="text-lg text-gray-700 mb-10">
        Here’s everything you need to know about applying for a student visa in South Korea.
      </p>
      <ul className="text-left max-w-2xl mx-auto space-y-4">
        <li className="text-lg text-black">Step 1: Gather your documents</li>
        <li className="text-lg text-black">Step 2: Complete your online application</li>
        <li className="text-lg text-black">Step 3: Schedule and attend the visa interview</li>
      </ul>

      {/* Visa Image */}
      <div className="mt-10">
        <img
          src="https://images.unsplash.com/photo-1619179834700-7a886aac80cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWElMjBmbGFnfGVufDB8fDB8fHww"
          alt="Korean Flag"
          className="w-full md:w-1/2 mx-auto rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
}

export default VisaInfoSection;
