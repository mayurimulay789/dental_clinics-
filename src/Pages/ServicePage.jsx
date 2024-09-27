import { motion } from 'framer-motion';
import { Clock, Phone, Mail } from 'lucide-react';

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export default function ServicePage() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Opening Hours Box */}
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="p-4 bg-blue-500 rounded-lg shadow-lg"
          >
            <h3 className="flex items-center mb-2 text-xl font-bold text-white">
              <Clock className="mr-2" /> Opening Hours
            </h3>
            <ul className="space-y-1 text-white">
              <li>Mon - Fri: 8:00am - 9:00pm</li>
              <li>Saturday: 8:00am - 7:00pm</li>
              <li>Sunday: 8:00am - 5:00pm</li>
            </ul>
          </motion.div>

          {/* Contact Us Box */}
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="p-4 bg-green-500 rounded-lg shadow-lg"
          >
            <h3 className="flex items-center mb-2 text-xl font-bold text-white">
              <Mail className="mr-2" /> Contact Us
            </h3>
            <p className="mb-2 text-white">Have questions? Reach out to us!</p>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-1 mb-1 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-1 mb-1 rounded"
            />
            <textarea
              rows="2"
              placeholder="Your Message"
              className="w-full p-1 mb-1 rounded"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
            >
              Send Message
            </motion.button>
          </motion.div>

          {/* Make Appointment Box */}
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="p-4 bg-orange-500 rounded-lg shadow-lg"
          >
            <h3 className="flex items-center mb-2 text-xl font-bold text-white">
              <Phone className="mr-2" /> Make Appointment
            </h3>
            <p className="mb-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <p className="text-lg font-bold text-white">+012 345 6789</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
