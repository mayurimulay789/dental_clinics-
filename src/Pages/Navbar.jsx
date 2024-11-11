import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Main from './Main'; // Import the appointment form component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false); // State for showing appointment form
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="bg-white shadow-lg">
        <nav className="container px-4 py-4 mx-auto sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="text-2xl font-bold text-blue-700 transition duration-300 md:text-3xl hover:text-blue-800">
                Dental Hub
              </Link>
            </motion.div>
            <div className="hidden space-x-6 md:flex">
              {navItems.map(({ name, path }) => (
                <motion.div
                  key={name}
                  className={`transition duration-300 hover:text-blue-700 ${
                    location.pathname === path ? 'text-blue-500 font-semibold' : 'text-gray-800'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link to={path}>{name}</Link>
                </motion.div>
              ))}
              <motion.button
                className="px-4 py-2 text-white transition duration-300 rounded-lg sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAppointmentForm(!showAppointmentForm)} // Toggle appointment form
              >
                Appointment
              </motion.button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-95"
            >
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className={`block p-4 text-gray-800 transition duration-300 hover:text-blue-700 ${
                    location.pathname === path ? 'text-blue-500 font-semibold' : ''
                  }`}
                  onClick={() => setIsOpen(false)} // Close menu on item click
                >
                  {name}
                </Link>
              ))}
              <button
                className="w-full px-6 py-2 mt-4 text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                onClick={() => {
                  setIsOpen(false); 
                  setShowAppointmentForm(true); // Open appointment form from mobile menu
                }}
              >
                Appointment
              </button>
            </motion.div>
          )}
        </nav>
      </header>

      {showAppointmentForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 p-8 bg-white rounded-lg md:w-1/2 lg:w-1/3">
            <button
              className="float-right mb-4 text-red-500"
              onClick={() => setShowAppointmentForm(false)} // Close the form
            >
              Close
            </button>
            <Main /> {/* Appointment form */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
