import React from 'react';

function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-white to-blue-400 min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center p-8 animate-fadeIn">
        
        {/* Left Section: Get in Touch */}
        <div className="md:w-1/2 max-w-md space-y-6 p-6">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700">
            I would love to hear from you! Whether you have questions, feedback, or just want to chat, feel free to reach out through the form on the right. I'll get back to you as soon as possible!
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:w-1/2 w-full max-w-md mt-8 md:mt-0 p-6">
          <form className="bg-blue-50 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your First Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Last Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="What do you want to say?"
                required
              ></textarea>
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md transition duration-300"
              >
                Submit
              </button>
              <button
                type="button"
                className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-700 rounded-md transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
