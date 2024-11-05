import axios from "axios";

const BASE_URL = 'http://localhost:8080/contact/';

// Fetch all contacts
export const getContact = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data; // Access data directly from response
    } catch (error) {
        throw new Error(`Error fetching contacts: ${error.message}`);
    }
};

// Fetch a contact by ID
export const getContactById = async (id) => {
    if (!id) throw new Error('ID is required to fetch contact.');
    try {
        const response = await axios.get(`${BASE_URL}${id}`);
        console.log("Contact data fetched: ", response.data);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching contact: ${error.message}`);
    }
};


// Add a new contact
export const addContact = async (contact) => {
    try {
        const response = await axios.post(BASE_URL, contact); // Send the contact object
        return response.data;
    } catch (error) {
        throw new Error(`Error adding contact: ${error.message}`);
    }
};

// Update an existing contact
export const updateContact = async (id, data) => {
    try {
        const response = await axios.put(`${BASE_URL}${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error(`Error updating contact: ${error.message}`);
    }
};

// Delete a contact by ID
export const deleteContact = async (id) => {
    try {
        await axios.delete(`${BASE_URL}${id}`);
    } catch (error) {
        throw new Error(`Error deleting contact: ${error.message}`);
    }
};

