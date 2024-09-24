import { motion } from 'framer-motion'
import { CheckCircle, Smile } from 'lucide-react'
import image from '../assets/about.jpg'
const features = [
  { id: 1, text: 'Award Winning' },
  { id: 2, text: 'Professional Staff' },
  { id: 3, text: '24/7 Opened' },
  { id: 4, text: 'Fair Prices' },
]

export default function AboutUs() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 bg-blue-200 rounded-full w-96 h-96 mix-blend-multiply filter blur-xl" />
        <div className="absolute top-0 right-0 bg-green-200 rounded-full w-96 h-96 mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-0 transform -translate-x-1/2 bg-yellow-100 rounded-full left-1/2 w-96 h-96 mix-blend-multiply filter blur-xl" />
      </div>
      <div className="absolute inset-0">
        <div className="flex items-center justify-center w-full h-full">
          <Smile className="text-gray-100 w-96 h-96 opacity-20" />
        </div>
      </div>
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 lg:w-1/2 lg:pr-16 lg:mb-0"
          >
            <h2 className="mb-2 text-sm font-semibold tracking-wide text-blue-600 uppercase">About Us</h2>
            <h3 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              The World's Best Dental Clinic That You Can Trust
            </h3>
            <p className="mb-6 text-xl italic text-gray-600">
              Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore
            </p>
            <p className="mb-8 text-gray-700">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <motion.li 
                  key={feature.id}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: feature.id * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-500" />
                  {feature.text}
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-semibold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500"
            >
              Make Appointment
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute transform -inset-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl rotate-3" />
              <img
                src={image}
                alt="Dentist with patient"
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
