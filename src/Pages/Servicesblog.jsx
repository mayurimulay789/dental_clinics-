import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smile, 
  Thermometer, 
  Shield, 
  Zap, 
  Coffee,
  PhoneCall
} from 'lucide-react';

const services = [
  {
    icon: <Smile className="w-12 h-12 text-blue-500" />,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with treatments like teeth whitening, veneers, and bonding.',
  },
  {
    icon: <Thermometer className="w-12 h-12 text-blue-500" />,
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct bite issues with braces or clear aligners.',
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: 'Preventive Care',
    description: 'Protect your oral health with regular check-ups, cleanings, and educational resources.',
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-500" />,
    title: 'Emergency Dentistry',
    description: 'Immediate care for dental emergencies, including severe pain, trauma, or broken teeth.',
  },
  {
    icon: <Coffee className="w-12 h-12 text-blue-500" />,
    title: 'Restorative Dentistry',
    description: 'Restore damaged or missing teeth with crowns, bridges, and dental implants.',
  },
];

const Servicesblog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-16 text-white bg-blue-600">
        <div className="container px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Dental Services</h1>
          <p className="text-xl md:text-2xl">Comprehensive care for your entire family</p>
        </div>
      </header>

      <main className="container px-4 py-16 mx-auto">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h2 className="ml-4 text-2xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </section>

        <section className="p-8 mt-16 bg-blue-100 rounded-lg">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="mb-4 text-3xl font-bold">Ready to Schedule Your Appointment?</h2>
              <p className="text-xl text-gray-700">Our team is here to provide you with exceptional dental care.</p>
            </div>
            <motion.a
              href="tel:+1234567890"
              className="flex items-center px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneCall className="mr-2" />
              Call Now
            </motion.a>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default Servicesblog;
