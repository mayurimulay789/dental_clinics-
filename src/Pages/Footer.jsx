import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTelegramPlane, FaLinkedin } from 'react-icons/fa';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-r from-teal-500 to-green-500">
      {/* Decorative SVG at the top */}
      <div className="absolute top-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-16">
          <path d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,69.3C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#ffffff"/>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="px-4 pt-24 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* About Us Section */}
          <div className="animate-fadeIn">
            <h3 className="mb-4 text-2xl font-bold text-white">Smile Bright Dental</h3>
            <p className="mb-4 text-gray-200">Providing top-quality dental care with a gentle touch. Your smile is our priority!</p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors duration-300 hover:text-gray-200">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-gray-200">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-gray-200">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-gray-200">
                <FaTelegramPlane size={24} />
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-gray-200">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn">
            <h3 className="mb-4 text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-gray-100">About Us</a></li>
              <li><a href="#" className="hover:text-gray-100">Services</a></li>
              <li><a href="#" className="hover:text-gray-100">Appointments</a></li>
              <li><a href="#" className="hover:text-gray-100">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="animate-fadeIn">
            <h3 className="mb-4 text-xl font-semibold text-white">Contact Information</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center space-x-2">
                <EnvironmentOutlined className="text-xl" />
                <span>123 Dental Street, Tooth City</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneOutlined className="text-xl" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailOutlined className="text-xl" />
                <span>info@smilebright.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="animate-fadeIn">
            <h3 className="mb-4 text-xl font-semibold text-white">Subscribe to Our Newsletter</h3>
            <p className="mb-4 text-gray-200">Get the latest updates and offers directly in your inbox!</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 text-gray-800 rounded-md" />
              <button className="px-4 py-2 font-semibold text-white rounded-md bg-emerald-600 hover:bg-emerald-700">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="pt-8 mt-12 text-center border-t border-emerald-400">
          <p className="text-gray-200">&copy; 2024 Dental Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
