import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../assets/mm1.jpg'
import image2 from '../assets/lady (5).jpg'
import image3 from '../assets/lady (6).jpg'
const educationalContent = [
  {
    title: "Dental Implant Anatomy",
    image: {image1},
    description: "This image shows the anatomy of a dental implant compared to natural teeth. The implant is anchored in the jawbone, providing a stable foundation for a prosthetic tooth that looks and functions like a natural tooth.",
    details: [
      "The implant post acts as an artificial root",
      "The abutment connects the implant to the crown",
      "The crown is custom-made to match your natural teeth"
    ]
  },
  {
    title: "Oral Hygiene & Tooth Decay",
    image: {image2},
    description: "This illustration demonstrates proper brushing techniques and the progression of tooth decay. Regular brushing and dental check-ups are crucial for maintaining oral health and preventing cavities.",
    details: [
      "Brush all surfaces of your teeth thoroughly",
      "Use a soft-bristled toothbrush and fluoride toothpaste",
      "Replace your toothbrush every 3-4 months",
      "Early stages of decay can often be reversed with good oral hygiene"
    ]
  }
];

const ServiceMainPage= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % educationalContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + educationalContent.length) % educationalContent.length);
  };

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Dental Services</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <motion.img
              key={currentIndex}
              src={educationalContent[currentIndex].image}
              alt={educationalContent[currentIndex].title}
              className="w-full h-64 md:h-96 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">{educationalContent[currentIndex].title}</h3>
            <p className="text-gray-600 mb-4">{educationalContent[currentIndex].description}</p>
            <ul className="list-disc list-inside text-gray-700">
              {educationalContent[currentIndex].details.map((detail, index) => (
                <li key={index} className="mb-2">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Interested in learning more? Schedule a consultation with our dental experts!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
         Link='/contact' > 
            Book an Appointment
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServiceMainPage;