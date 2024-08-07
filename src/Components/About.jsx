import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          I'm a passionate developer with a love for creating web applications that are both functional and aesthetically pleasing. I have experience working with a variety of technologies and am always eager to learn more and take on new challenges.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
            <p className="text-gray-600">
              Proficient in JavaScript, React, Tailwind CSS, and other modern web development tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
            <p className="text-gray-600">
              Over 5 years of experience in web development, working on both frontend and backend projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interests</h3>
            <p className="text-gray-600">
              Avid learner with a keen interest in new technologies, UI/UX design, and open-source contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
