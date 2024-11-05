import React, { useState, useEffect } from 'react';
import { getContactById, updateContact } from '../Service/Service'; // Import service functions
import { useParams, useNavigate } from 'react-router-dom'; // For routing
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const EditContact = () => {
    const { id } = useParams(); // Get contact ID from route
    const navigate = useNavigate(); // For navigation after successful update
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        address: '',
        gender: '',
        imageUrl: '',
    });

    // Fetch contact details when the component loads
    useEffect(() => {
        const fetchContact = async () => {
            if (!id) {
                console.error("ID is undefined!");
                setError("Invalid contact ID.");
                return;
            }
            try {
                const data = await getContactById(id);
                setFormData(data);
            } catch (err) {
                setError('Failed to load contact details.');
                console.error(err);
            }
        };
    
        if (id) fetchContact(); // Only fetch if ID is valid
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveChanges = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
    
        try {
            // Call the update function with the current form data
            await updateContact(id, formData);
    
            // Notify the user of the success
            toast.success('Contact updated successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    
            // Redirect after the notification
            setTimeout(() => {
                navigate('/preview'); // Navigate back to the contact list after a delay
            }, 3000);
        } catch (error) {
            console.error('Error updating contact:', error);
            setError('Failed to update contact. Please try again.');
            toast.error('Failed to update contact. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Edit Contact</h2>

            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
                    {error}
                </div>
            )}

            <form className="space-y-6" onSubmit={saveChanges}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
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
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
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
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <div className="mt-2">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                                className="form-radio text-blue-600"
                                required
                            />
                            <span className="ml-2">Male</span>
                        </label>

                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                                className="form-radio text-blue-600"
                                required
                            />
                            <span className="ml-2">Female</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 rounded-md transition duration-300 ${
                        isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
            <ToastContainer 
                position="top-right" 
                autoClose={3000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                rtl={false} 
                pauseOnFocusLoss 
                draggable 
                pauseOnHover 
                theme="light" 
            />
        </div>
    );
};

export default EditContact;
