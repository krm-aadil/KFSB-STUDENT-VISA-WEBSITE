import React from 'react';

function AboutSection() {
  return (
    <section className="bg-gray-100 text-center py-20" id="about">
      <h2 className="text-3xl font-bold text-black mb-6">About KSFB Services</h2>
      <p className="text-lg text-gray-700 mb-10">
        At KSFB, we specialize in providing expert guidance for Sri Lankan students aspiring to study in South Korea.
      </p>
      <img
        src="https://media.istockphoto.com/photos/happy-student-taking-selfie-picture-id1002824464?k=20&m=1002824464&s=612x612&w=0&h=QckFfjYvb3azM7fA6Szlgk-b7BQeq0oz9-1yftyzowI="
        alt="Student Taking Selfie"
        className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg"
      />
    </section>
  );
}

export default AboutSection;
