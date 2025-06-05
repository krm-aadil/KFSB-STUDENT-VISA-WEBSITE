import React from 'react';
import { FaLeaf, FaHandsHelping, FaBalanceScale } from 'react-icons/fa'; // Import icons

function ESGManagementSection() {
  return (
    <section className="py-20 bg-black text-center" id="esg-management">
      <h2 className="text-4xl font-extrabold text-white mb-12">
        ESG Management
      </h2>
      <p className="text-xl text-white mb-10 px-6 sm:px-0 max-w-4xl mx-auto">
        KFSB is committed to building a sustainable future through our ESG framework. We focus on environmental sustainability, social responsibility, and transparent governance.
      </p>

      {/* ESG Cards */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Environment Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="text-red-500 text-4xl mb-6">
            <FaLeaf />
          </div>
          <h3 className="text-2xl font-semibold text-black mb-4">Environment</h3>
          <p className="text-lg text-gray-700">
            We lead efforts in reducing carbon footprints through eco-friendly initiatives and sustainable development projects. Our green practices ensure a cleaner, greener planet for future generations.
          </p>
        </div>

        {/* Society Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="text-blue-500 text-4xl mb-6">
            <FaHandsHelping />
          </div>
          <h3 className="text-2xl font-semibold text-black mb-4">Society</h3>
          <p className="text-lg text-gray-700">
            We contribute to community development through social responsibility activities, talent development, and volunteer programs. Empowering communities is central to our mission for positive societal impact.
          </p>
        </div>

        {/* Governance Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="text-green-500 text-4xl mb-6">
            <FaBalanceScale />
          </div>
          <h3 className="text-2xl font-semibold text-black mb-4">Governance</h3>
          <p className="text-lg text-gray-700">
            Our governance structure ensures transparency, fairness, and responsible decision-making across all our operations. We adhere to the highest ethical standards to maintain trust and accountability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ESGManagementSection;
