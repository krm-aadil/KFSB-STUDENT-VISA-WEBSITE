import React from 'react';

function ESGManagementSection() {
  return (
    <section className="py-20 bg-white text-center" id="esg-management">
      <h2 className="text-3xl font-bold text-black mb-6">ESG Management</h2>
      <p className="text-lg text-gray-700 mb-10">
        KFSB is committed to building a sustainable future through our ESG framework. We focus on environmental sustainability, social responsibility, and transparent governance.
      </p>

      <div className="flex justify-around mb-10">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Environment</h3>
          <p className="text-lg text-gray-700">We lead efforts in reducing carbon footprints through eco-friendly initiatives and sustainable development projects.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Society</h3>
          <p className="text-lg text-gray-700">We contribute to community development through social responsibility activities, talent development, and volunteer programs.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Governance</h3>
          <p className="text-lg text-gray-700">Our governance structure ensures transparency, fairness, and responsible decision-making across all our operations.</p>
        </div>
      </div>
    </section>
  );
}

export default ESGManagementSection;
