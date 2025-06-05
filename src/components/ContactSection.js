import React from 'react';

function ContactSection() {
  return (
    <section className="py-20 bg-black text-center" id="contact">
      <h2 className="text-6xl font-bold text-white mb-6">Contact Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-4">
          <img
            src="https://lh4.googleusercontent.com/proxy/YnTiVLnh5IX8YqeHbWDzriCDS3EbWxqCcqSjPbd1CvMTZJKNAKWRXYHsvMpdCgm3SfogP57RntD3QnulFdcxfjJER2ltCI3Y4nRheZq6Cw9jvkX3togPvQ" // Replace with your contact image
            alt="Contact"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-bold text-white mb-4">How can I help?</h3>
          <p className="text-lg text-white mb-6">
            I understand that each student's situation and needs are unique to them. Let me know more about what you're looking for, and I'll get back to you soon with some ideas.
          </p>
          <form className="max-w-md mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-xl font-medium text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-xl font-medium text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-xl font-medium text-white mb-2">Message</label>
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
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
