import React from 'react'; // Import React

function About() {
  return (
    <>
      <section className="bg-gradient-to-r from-white to-blue-400 min-h-[calc(100vh-4rem)] px-8 py-12 flex flex-col items-center justify-center animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8">
          About Eklak Contact Manager
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl text-center mb-6">
          Eklak Contact Manager is your ultimate solution for organizing and managing your contacts efficiently.
          Our user-friendly platform allows you to store, edit, and retrieve your contacts at any time, ensuring you
          stay connected effortlessly.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Features:</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 mb-6">
          <li>✅ Add, edit, and delete contacts with ease.</li>
          <li>✅ Search and filter your contacts quickly.</li>
          <li>✅ User-friendly interface for a seamless experience.</li>
          <li>✅ Responsive design for accessibility on all devices.</li>
        </ul>

        <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
          <a
            href="/"
            className="inline-block px-6 py-3 text-lg text-white bg-blue-500 hover:bg-blue-700 rounded-md transition duration-300"
          >
            Back to Home
          </a>
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-lg text-white bg-blue-500 hover:bg-blue-700 rounded-md transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default About; // Export the About component as default
