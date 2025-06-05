import React from 'react';

function ContactSection() {
  return (
    <section className="bg-gray-100 text-center py-20" id="contact">
      <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-10">
        Get in touch for personalized assistance on your student visa journey to South Korea.
      </p>

      {/* Contact Form */}
      <form className="max-w-md mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-left text-xl font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-left text-xl font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-left text-xl font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 rounded-md hover:bg-red-500 transition duration-300"
        >
          Get in Touch
        </button>
      </form>

      <img
        src="https://media.istockphoto.com/photos/young-woman-working-from-home-picture-id1211534393?k=20&m=1211534393&s=612x612&w=0&h=3dtkRjLtS7xxzLGBpz6FGJtqOFmPCmZ3RKNMMZPdl6w="
        alt="Contact Us"
        className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg mt-10"
      />
    </section>
  );
}

export default ContactSection;
