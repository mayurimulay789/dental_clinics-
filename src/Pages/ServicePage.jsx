import { motion } from 'framer-motion'
import { Clock, Search, Phone } from 'lucide-react'

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
}

export default function ServicePage() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="p-6 bg-blue-500 rounded-lg shadow-lg"
          >
            <h3 className="flex items-center mb-4 text-2xl font-bold text-white">
              <Clock className="mr-2" /> Opening Hours
            </h3>
            <ul className="space-y-2 text-white">
              <li>Mon - Fri: 8:00am - 9:00pm</li>
              <li>Saturday: 8:00am - 7:00pm</li>
              <li>Sunday: 8:00am - 5:00pm</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 mt-4 text-blue-600 transition duration-300 bg-white rounded hover:bg-blue-100"
            >
              Appointment
            </motion.button>
          </motion.div>
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="p-6 bg-blue-900 rounded-lg shadow-lg"
          >
            <h3 className="flex items-center mb-4 text-2xl font-bold text-white">
              <Search className="mr-2" /> Search A Doctor
            </h3>
            <input
              type="date"
              className="w-full p-2 mb-2 rounded"
              placeholder="Appointment Date"
            />
            <select className="w-full p-2 mb-2 rounded">
              <option>Select A Service</option>
              <option>General Dentistry</option>
              <option>Cosmetic Dentistry</option>
              <option>Orthodontics</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
            >
              Search Doctor
            </motion.button>
          </motion.div>
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="p-6 bg-orange-500 rounded-lg shadow-lg"
          >
            <h3 className="flex items-center mb-4 text-2xl font-bold text-white">
              <Phone className="mr-2" /> Make Appointment
            </h3>
            <p className="mb-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <p className="text-2xl font-bold text-white">+012 345 6789</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}