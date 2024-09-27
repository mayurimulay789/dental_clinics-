import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AboutLandingPage = () => {
  const stats = [
    { number: 5000, label: 'Happy Patients' },
    { number: 14000, label: 'Consultations' },
    { number: 50, label: 'Dental Solutions' },
    { number: 10, label: 'Years Experience' },
  ];

  const services = [
    'Experienced dentists: Our clinic has a team of experienced dentists who are committed to providing high-quality dental care.',
    'State-of-the-art equipment: Our clinic is equipped with modern dental equipment and technologies.',
    'Comprehensive services: We offer a range of dental services, including routine check-ups, cleanings, fillings, teeth whitening, and more.',
    'Affordable prices: We offer competitive pricing for our services.',
    'Patient-focused care: We prioritize patient comfort and satisfaction.',
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        aria-hidden="true"
      ></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-12">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Caring for all your family's dental needs.
          </motion.h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <motion.p 
              className="text-xl mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide comprehensive dental care for your entire family, ensuring healthy smiles for years to come.
            </motion.p>
          </div>
          <div className="md:w-1/2">
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-sm"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-blue-600 bg-opacity-80 p-4 rounded-lg shadow-lg"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }
              }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              >
                {stat.number > 1000 ? `${stat.number / 1000}K+` : `${stat.number}+`}
              </motion.h2>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Consultation', 'Need Help?', 'Insight'].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-90 text-blue-700 p-6 rounded-lg shadow-lg text-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.1 + 1
                  }
                }
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-sm mb-4">
                {item === 'Consultation' ? 'Schedule your consultation with us today!' : 
                item === 'Need Help?' ? 'Reach out for any inquiries or assistance.' : 
                'Stay updated with our latest news and articles.'}
              </p>
              {item === 'Consultation' && (
                <motion.button 
                  as={Link} 
                  to="/contact" 
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call us
                </motion.button>
              )}
              {item === 'Need Help?' && (
                <motion.button 
                  as={Link} 
                  to="/contact" 
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact us
                </motion.button>
              )}
              {item === 'Insight' && (
                <motion.button 
                  as={Link} 
                  to="/blog" 
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Blog
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutLandingPage;
