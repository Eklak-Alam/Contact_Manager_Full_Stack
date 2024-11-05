import React, { useState } from "react"; // Import React and useState hook
import { toast, Toaster } from "react-hot-toast"; // Import toast for notifications
import "../css/SignUp.css"; // Import custom CSS for styling the SignUp component
import axios from "axios"; // Import axios for making HTTP requests

const SignUp = () => {
  // Initialize state for form data and submitting status
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission status

  // Handle changes in form input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update formData with the current input
  };

  // Validate form input before submission
  const validateForm = () => {
    const { username, email, password } = formData;
    // Check if fields are filled and password meets the length requirement
    if (!username || !email || password.length < 6) {
      toast.error("All fields are required. Password must be at least 6 characters.");
      return false; // Return false if validation fails
    }
    return true; // Return true if validation passes
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!validateForm()) return; // Validate form before proceeding

    try {
      setIsSubmitting(true); // Set submitting state to true

      // Make a POST request to the sign-up endpoint with form data
      const response = await axios.post("http://localhost:8080/signup", formData);

      console.log(response?.data?.username); // Log the username from response

      // Check response status for success
      if (response.status === 201 || response.status === 200) {
        toast.success("Sign-up successful! 🎉");

        // Save login status and username in localStorage for persistence
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('username', JSON.stringify(formData.username));

        // Reset form data after successful sign-up
        setFormData({ username: "", email: "", password: "" });
      } else {
        toast.error("Registration failed. Please try again."); // Handle non-successful response
      }
    } catch (error) {
      toast.error("Signup failed. Username may already exist."); // Handle error in signup
      console.error("Signup Error:", error); // Log error details
    } finally {
      setIsSubmitting(false); // Reset submitting state after completion
    }
  };

  return (
    <div className="signup-container"> {/* Container for sign-up form */}
      <Toaster position="top-center" reverseOrder={false} /> {/* Toaster for notifications */}
      <div className="signup-form"> {/* Sign-up form wrapper */}
        <h2 className="signup-title">Sign Up</h2> {/* Form title */}
        <form onSubmit={handleSubmit} className="space-y-6"> {/* Form element */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username" // Input name matches state field
              id="username"
              value={formData.username} // Controlled input
              onChange={handleChange} // Update state on change
              className="input-field" // CSS class for styling
              placeholder="Enter your username" // Placeholder text
              required // Makes this field mandatory
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email" // Email input type
              name="email"
              id="email"
              value={formData.email} // Controlled input
              onChange={handleChange} // Update state on change
              className="input-field" // CSS class for styling
              placeholder="Enter your email" // Placeholder text
              required // Makes this field mandatory
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password" // Password input type
              name="password"
              id="password"
              value={formData.password} // Controlled input
              onChange={handleChange} // Update state on change
              className="input-field" // CSS class for styling
              placeholder="Enter your password (min 6 characters)" // Placeholder text
              required // Makes this field mandatory
            />
          </div>

          <button
            type="submit" // Submit button for the form
            className={`relative btn-signup ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`} // Conditional classes for styling
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"} {/*Change button text based on submission state*/}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp; // Export SignUp component
