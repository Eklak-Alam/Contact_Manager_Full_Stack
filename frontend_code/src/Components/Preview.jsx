import React, { useEffect, useState } from "react";
import { deleteContact, getContact } from "../Service/Service"; // Importing service functions
import { useNavigate } from "react-router-dom"; // For navigation
import { ToastContainer, toast } from "react-toastify"; // For notifications
import "react-toastify/dist/ReactToastify.css"; // CSS for toast notifications
import Model from '../Components/Model'; // Importing Modal component

const Preview = () => {
  const [contacts, setContacts] = useState([]); // State to hold contacts
  const [error, setError] = useState(null); // State to hold error message
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [contactToDelete, setContactToDelete] = useState(null); // Track which contact to delete

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContact(); // Fetch contacts from server
        setContacts(data); // Update contacts state
      } catch (error) {
        setError(error.message); // Set error message on failure
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchContacts(); // Call the function to fetch contacts
  }, []); // Empty dependency array to run on mount

  const handleEdit = (id) => {
    toast.info("Redirecting to edit...", { autoClose: 2000 }); // Show notification for redirect
    setTimeout(() => {
      navigate(`/editContact/${id}`); // Navigate to edit contact page
    }, 2000);
  };

  const handleDelete = (id) => {
    setContactToDelete(id); // Set the ID of the contact to delete
    setIsModalOpen(true); // Open the modal
  };

  const confirmDelete = async () => {
    try {
      await deleteContact(contactToDelete); // Call delete function
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactToDelete) // Update contacts state to remove deleted contact
      );
      toast.success("Contact deleted successfully!"); // Show success message
    } catch (error) {
      toast.error(`Failed to delete contact: ${error.message}`); // Show error message
    }
    setIsModalOpen(false); // Close the modal
    setContactToDelete(null); // Clear the contact ID
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setContactToDelete(null); // Clear the contact ID
  };

  if (loading) {
    return (
      <p>
        <span className="text-blue-600 text-lg">Please Wait</span> Loading
        contacts...
      </p>
    );
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message
  }

  return (
    <div className={`p-8 bg-gray-200 min-h-screen ${isModalOpen ? "opacity-50" : ""}`}>
      <ToastContainer /> {/* Toast notifications container */}
      <Model
        isOpen={isModalOpen} // Pass modal state
        onClose={closeModal} // Pass close function
        onConfirm={confirmDelete} // Pass confirm function
      />
      <h2 className="text-4xl font-extrabold text-center mb-8 py-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg tracking-wide uppercase transform transition duration-300 hover:scale-105">
        Contact Preview
      </h2>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="border border-gray-300 p-2">{contact.name}</td>
                <td className="border border-gray-300 p-2">{contact.email}</td>
                <td className="border border-gray-300 p-2">{contact.phone}</td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => handleEdit(contact.id)} className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(contact.id)} className="ml-2 text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Preview;
