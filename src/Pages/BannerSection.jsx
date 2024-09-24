import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSliderImages } from '../redux/features/sliderImageSlice'

const BannerSection = () => {
  const dispatch = useDispatch()
  const currentImageIndex = useSelector((state) => state.ui.currentImageIndex)
  const quotes = useSelector((state) => state.ui.quotes)
  const sliderImages = useSelector((state) => state.sliderImages.images)

  useEffect(() => {
    dispatch(fetchSliderImages())
  }, [dispatch])

  return (
    <section className="relative h-screen">
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {sliderImages.length > 0 && (
          <img
            src={sliderImages[currentImageIndex % sliderImages.length].url}
            alt="Hero background"
            className="object-cover w-full h-full"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white sm:px-6 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {quotes[currentImageIndex % quotes.length]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-lg text-center sm:text-xl md:text-2xl lg:text-3xl"
        >
          Experience top-quality dental care at Dental Hub
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <button className="px-6 py-3 text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
            Book Appointment
          </button>
          <button className="px-6 py-3 text-blue-700 transition duration-300 bg-white border border-blue-500 rounded-lg hover:bg-blue-50">
            Learn More
          </button>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute transform -translate-x-1/2 bottom-4 left-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  )
}

export default BannerSection