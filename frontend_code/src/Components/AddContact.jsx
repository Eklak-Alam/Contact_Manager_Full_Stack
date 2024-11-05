import React, { useState } from 'react'; // Import React and useState hook
import { addContact } from '../Service/Service'; // Import the addContact function from the service
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { ToastContainer, toast } from 'react-toastify'; // Import Toast components for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const AddContact = () => {
    const [error, setError] = useState(null); // State for storing error messages
    const [isSubmitting, setIsSubmitting] = useState(false); // State for tracking submission status
    const navigate = useNavigate(); // Initialize navigate function for routing
    const [formData, setFormData] = useState({ // State for form data
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        address: '',
        gender: '',
        imageUrl: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        setFormData({ ...formData, [name]: value }); // Update form data state
    };

    // Function to save a contact
    const saveContact = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setIsSubmitting(true); // Set submitting state to true
        setError(null); // Reset error state

        try {
            await addContact(formData); // Call addContact with form data
            toast.success('Contact added successfully!', { // Show success toast
                position: 'top-center',
                autoClose: 3000,
            });                        
            setTimeout(() => {
                navigate('/preview'); // Redirect to preview page after 3 seconds
            }, 3000);
        } catch (error) {
            console.error('Error adding contact:', error); // Log error in console
            setError('Failed to add contact. Please try again.'); // Set error message
            toast.error('Failed to add contact. Please try again.', { // Show error toast
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        } finally {
            setIsSubmitting(false); // Set submitting state to false
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg shadow-lg mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Add New Contact</h2>

            {error && ( // Conditionally render error message if exists
                <div className="bg-red-200 text-red-800 p-4 rounded-md mb-4">
                    {error}
                </div>
            )}

            <form className="space-y-6" onSubmit={saveContact}> {/* Form to add contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Grid layout for input fields */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName" // Name of the input field
                            value={formData.firstName} // Value controlled by state
                            onChange={handleChange} // Handle change event
                            required // Make field required
                            className="mt-1 block w-full border border-gray-400 rounded-md p-3 focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-400 rounded-md p-3 focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-400 rounded-md p-3 focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-400 rounded-md p-3 focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-400 rounded-md p-3 focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-400 rounded-md p-3 focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-400 rounded-md p-3 focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting} // Disable button while submitting
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    {isSubmitting ? 'Adding...' : 'Add Contact'} {/* Button text changes based on submitting state */}
                </button>
            </form>

            <ToastContainer /> {/* Container for toast notifications */}
        </div>
    );
};

export default AddContact; // Export the AddContact component as default
