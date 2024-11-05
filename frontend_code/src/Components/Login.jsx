import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast"; // Importing toast notifications
import { useNavigate } from "react-router-dom"; // For navigation after login
import "../css/Login.css"; // Importing CSS for styling
import axios from "axios"; // Importing axios for HTTP requests

const Login = () => {
  // State to hold form data (email and password)
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage loading status
  const navigate = useNavigate(); // Hook for navigation

  // Handle input change to update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields before submission
  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("All fields are required."); // Show error if fields are empty
      return false; // Return false to prevent submission
    }
    return true; // Return true if validation passes
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!validateForm()) return; // Validate form

    try {
      setIsSubmitting(true); // Set submitting state to true

      // Send login request to server
      const response = await axios.post("http://localhost:8080/login", formData);
      const { username } = response.data; // Get username from response

      if (response.status === 200) {
        toast.success(`Welcome, ${username}! Redirecting...`); // Show success message

        // Store login state and username in localStorage
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", username);

        // Redirect to homepage after a delay
        setTimeout(() => {
          navigate("/"); 
        }, 2000);
      } else {
        toast.error("Invalid credentials. Please try again."); // Show error for invalid credentials
      }
    } catch (error) {
      toast.error("Login failed. Please try again."); // Show error if login fails
      console.error("Login Error:", error); // Log error for debugging
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="login-container">
      <Toaster position="top-center" reverseOrder={false} /> {/* Notification toaster */}
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange} // Update email on change
              className="input-field"
              placeholder="Enter your email"
              required // HTML5 validation
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange} // Update password on change
              className="input-field"
              placeholder="Enter your password"
              required // HTML5 validation
            />
          </div>

          <button
            type="submit"
            className={`relative btn-login ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`} // Disable button if submitting
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging In..." : "Login"} {/*Change button text based on submitting state */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
