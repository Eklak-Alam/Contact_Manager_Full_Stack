import React, { useEffect, useState } from "react"; // Import React and necessary hooks
import { useNavigate } from "react-router-dom"; // Import navigation hook to move between routes
import { toast } from "react-hot-toast"; // Import toast for notifications

const Navbar = () => {
  // State variables
  const [isLogin, setIsLogin] = useState(false); // Track whether the user is logged in
  const [username, setUsername] = useState(""); // Store the username of the logged-in user
  const [isLoading, setIsLoading] = useState(true); // Track whether data is loading

  const navigate = useNavigate(); // Create a navigation instance

  // Check login status and username when the component loads
  useEffect(() => {
    // Retrieve login status and username from local storage
    const loggedIn = localStorage.getItem("isLogin") === "true";
    const storedUsername = localStorage.getItem("username");

    // Set state based on whether the user is logged in
    if (loggedIn && storedUsername) {
      setIsLogin(true);
      setUsername(storedUsername);
    } else {
      setIsLogin(false);
      setUsername("");
    }

    setIsLoading(false); // Loading complete
  }, []);

  // Navigate to Login page
  const handleLogin = () => navigate("/login");

  // Navigate to Sign-Up page
  const handleSignUp = () => navigate("/signup");

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("isLogin"); // Remove login status
    localStorage.removeItem("username"); // Remove username
    setIsLogin(false); // Update state
    setUsername("");
    navigate("/"); // Redirect to home page
    toast.success("Logged out successfully."); // Show success message
  };

  // Display a loading message while waiting for data to load
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white transition-opacity duration-300 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and site name */}
        <div className="flex items-center space-x-4">
          <img
            src="https://e7.pngegg.com/pngimages/732/601/png-clipart-computer-icons-android-google-contacts-contact-rectangle-black-thumbnail.png"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-lg font-semibold text-gray-800">Eklak Contact</h1>
        </div>

        {/* Search bar */}
        <div className="flex items-center w-72 md:w-96 lg:w-[28rem]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>

        {/* Navigation links and user actions */}
        <div className="flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
            Contact Me
          </a>
          <a href="/addContact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
            Add Contact
          </a>
          <a href="/preview" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
            Preview
          </a>

          {isLogin ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                Welcome, {username} {/* Display username if logged in */}
              </span>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 rounded-md bg-red-500 hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Login
              </button>
              <button
                onClick={handleSignUp}
                className="ml-4 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar; // Export Navbar component to use in other parts of the app
