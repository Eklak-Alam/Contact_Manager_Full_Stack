import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  // Return null if modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"> {/* Darker backdrop */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300">
        <h3 className="text-lg font-semibold">Confirm Deletion</h3>
        <p>Are you sure you want to delete this contact?</p>
        <div className="flex justify-end mt-4">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none active:scale-95 transition-transform duration-150"
            onClick={onClose} // Close modal on cancel
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 focus:outline-none active:scale-95 transition-transform duration-150"
            onClick={onConfirm} // Confirm deletion
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
