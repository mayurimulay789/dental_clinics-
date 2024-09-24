import React from 'react'
import { motion } from 'framer-motion'
import { FaTooth, FaUsers, FaClock, FaAward } from 'react-icons/fa'
import image from '../assets/carousel-2.jpg'
const features = [
  { icon: <FaTooth className="w-6 h-6" />, title: 'Expert Dentists', description: 'Our team of highly skilled dentists ensures top-quality care.' },
  { icon: <FaUsers className="w-6 h-6" />, title: 'Patient-Centered', description: 'We prioritize your comfort and satisfaction above all else.' },
  { icon: <FaClock className="w-6 h-6" />, title: 'Modern Technology', description: 'State-of-the-art equipment for precise and efficient treatments.' },
  { icon: <FaAward className="w-6 h-6" />, title: 'Award-Winning', description: 'Recognized for excellence in dental care and patient satisfaction.' },
]

export default function AboutUs() {
  return (
    <section className="py-16 overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Smile Bright Dental Clinic
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Providing exceptional dental care with a gentle touch since 1995.
          </p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={image}
              alt="Dental team"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              At Smile Bright, we're committed to providing comprehensive dental care in a comfortable and welcoming environment. Our team of experienced professionals uses the latest technology to ensure you receive the best possible treatment.
            </p>
            <p className="text-gray-600">
              We believe in educating our patients about oral health and preventive care, empowering you to maintain a healthy smile for life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 font-semibold text-white transition duration-300 rounded-full shadow-md bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500"
            >
              show More
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <div className="mb-4 text-blue-500">{feature.icon}</div>
              <h4 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
