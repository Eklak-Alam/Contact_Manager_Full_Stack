import './App.css'; // Import the main CSS file for styling
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import About from './Components/About'; // Import the About component
import Contact from './Components/Contact'; // Import the Contact component
import Footer from './Components/Footer'; // Import the Footer component
import HomePage from './Components/HomePage'; // Import the HomePage component
import Navbar from './Components/Navbar'; // Import the Navbar component
import AddContact from './Components/AddContact'; // Import the AddContact component
import Preview from './Components/Preview'; // Import the Preview component
import EditContact from './Components/EditContact'; // Import the EditContact component
import SignUp from './Components/SignUp'; // Import the SignUp component
import Login from './Components/Login'; // Import the Login component
import ProtectedRoute from './Components/ProtectedRoute'; // Import the ProtectedRoute component for route protection

function App() {
  return (
    <Router> {/* Wrap the application in the Router component for routing functionality */}
      <Navbar /> {/* Render the Navbar component */}
      <Routes> {/* Define the routes for the application */}
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
        <Route path="/addContact" element={<AddContact />} /> {/* Add contact page route */}
        
        {/* Protecting the routes */}
        <Route
          path="/preview"
          element={
            <ProtectedRoute> {/* Use ProtectedRoute to protect the Preview component */}
              <Preview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editContact/:id" //{/* Dynamic route for editing a contact */}
          element={
            <ProtectedRoute> {/* Use ProtectedRoute to protect the EditContact component */}
              <EditContact />
            </ProtectedRoute>
          }
        />
        
        {/* Public Routes */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign up page route */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
      </Routes>
      <Footer /> {/* Render the Footer component */}
    </Router>
  );
}

export default App; // Export the App component as default
