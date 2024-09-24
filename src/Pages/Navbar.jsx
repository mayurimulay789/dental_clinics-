// Navbar.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageIndex, setQuotes } from '../redux/features/uiSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentImageIndex = useSelector((state) => state.ui.currentImageIndex);
  const quotes = useSelector((state) => state.ui.quotes);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Dispatch initial quotes
    dispatch(
      setQuotes([
        'Keep your teeth healthy',
        'Your smile is our passion',
        'Quality dental care for your family',
      ])
    );

    // Timer to cycle through images
    const timer = setInterval(() => {
      dispatch(setImageIndex((currentImageIndex + 1) % 3)); // Assuming you have 3 images
    }, 5000);

    return () => clearInterval(timer);
  }, [dispatch, currentImageIndex]);

  return (
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
          <div className="items-center hidden space-x-6 md:flex">
            {['Home', 'Service', 'Blog', 'Contact', 'About'].map((item) => (
              <motion.div
                key={item}
                className="text-gray-800 transition duration-300 hover:text-blue-700"
                whileHover={{ scale: 1.1 }}
              >
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </motion.div>
            ))}
            <motion.button
              className="px-4 py-2 text-white transition duration-300 rounded-lg sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            className="mt-4 space-y-2 md:hidden"
          >
            {['Home', 'Services', 'Blog', 'Contact', 'About'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-gray-800 transition duration-300 hover:text-blue-700"
              >
                {item}
              </Link>
            ))}
            <button className="w-full px-6 py-2 text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
              Appointment
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
