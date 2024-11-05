import React from 'react';

function HomePage() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-white to-blue-400 min-h-[calc(100vh-4rem)] animate-fadeIn">
        {/* Left section: Welcome text */}
        <div className="w-full md:w-3/5 space-y-8 animate-slideInUp">
          <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
            Hey there, Welcome to{' '}
            <span className="text-blue-600">Eklak Contact Manager!</span>
          </h1>
          <p className="text-xl text-gray-700">
            Manage your contacts effortlessly with our feature-rich contact management system.
          </p>

          {/* Buttons for navigation */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a
              href="/about"
              className="inline-block px-8 py-4 text-lg text-white bg-blue-500 hover:bg-blue-700 rounded-md transition duration-300"
            >
              Learn More About the Project
            </a>
            <a
              href="/addContact"
              className="inline-block px-8 py-4 text-lg text-white bg-green-500 hover:bg-green-700 rounded-md transition duration-300"
            >
              Add Contact
            </a>
            <a
              href="/preview"
              className="inline-block px-8 py-4 text-lg text-white bg-purple-500 hover:bg-purple-700 rounded-md transition duration-300"
            >
              Preview Contacts
            </a>
          </div>
        </div>

        {/* Right section: Image */}
        <div className="w-full md:w-2/5 flex justify-center animate-bounceIn">
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/244/724/non_2x/contact-us-or-the-customer-support-hotline-people-connect-businessman-touching-virtual-icons-doing-to-customer-service-call-center-free-png.png"
            alt="Contact Management System"
            className="w-3/4 object-cover rounded-lg"
          />
        </div>
      </section>
    </>
  );
}

export default HomePage; // Export HomePage component
