import React from 'react';

function HomeSection() {
  return (
    <section className="bg-white text-center py-20" id="home">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-black mb-6">Study in South Korea Easily</h1>
          <p className="text-lg text-gray-700 mb-10">
            Expert guidance for Sri Lankan students on Korean visas.
          </p>
          <a href="#explore" className="bg-black text-white py-2 px-6 rounded-md hover:bg-red-500 transition duration-300">Get Started Today</a>
        </div>

        {/* Image Placeholder */}
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1143896726/photo/beginner-korean-language-learner-writing-hello-word-in-korean-characters-on-a-notebook-macro.jpg?s=2048x2048&w=is&k=20&c=llnj4HwpHwShi8NU5BTU0EX3qu6DVBpRYzGjaORCwWw="
            alt="Korean Language Learning"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
