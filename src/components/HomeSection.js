import React from 'react';

function HomeSection() {
  return (
    <section className="py-20 bg-white text-center md:flex md:items-center" id="about">
      <div className="md:w-1/2 p-4">
        <img
          src="https://img.freepik.com/premium-photo/happy-university-student-korean-girl-takes-selfie-with-her-papers-digital-tablet-holds-smartphon_1258-151401.jpg" // Replace with your image
          alt="Korean Visa Services"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-4xl font-bold text-black mb-4">About KSFB Services</h2>
        <p className="text-lg text-black mb-6">
          Welcome to KSFB, your trusted partner in navigating the journey of studying in South Korea. We are dedicated to providing comprehensive support and expert advice to Sri Lankan students seeking to further their education in Korea.
          At KSFB, we specialize in providing expert guidance for Sri Lankan students aspiring to study in South Korea. Our team is dedicated to helping you navigate the complexities of obtaining a Korean student visa.
        </p>
      </div>
    </section>
  );
}

export default HomeSection;
