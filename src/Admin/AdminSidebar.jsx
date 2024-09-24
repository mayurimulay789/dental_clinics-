import React, { useState, useEffect } from 'react';
import { Home, Users, Calendar, Image, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling

export default function Sidebar({ collapsed, onCollapse }) {
  const [isMobile, setIsMobile] = useState(false);

  // Example: Fetch or dynamically set menu items (can be based on user roles or permissions)
  const [menuItems, setMenuItems] = useState([
    { icon: Home, text: 'Dashboard', link: '/admin/dashboard' },
    { icon: Users, text: 'Users', link: 'users' },
    { icon: Calendar, text: 'Appointments', link: 'adminappointments' },
    { icon: Image, text: 'Slider Images', link: 'sliderimage' },
    { icon: Image, text: 'Blog', link: 'blogpost' },
    { icon: Image, text: 'YouTubeVideo', link: 'youtubevideo' },

  ]);

  // Update state for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consider mobile if the width is less than or equal to 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle sidebar on mobile
  const handleMobileToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="p-2 m-4 text-white bg-gray-800 rounded-full lg:hidden focus:outline-none"
          onClick={handleMobileToggle}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white transition-all duration-300 ease-in-out h-screen fixed top-0 z-50 ${
          collapsed ? 'w-16' : 'w-64'
        } ${isMobile ? (isMobile ? 'left-0' : '-left-64') : 'lg:relative lg:left-0'} lg:transition-none`}
      >
        {/* Top Section */}
        <div>
          <div className="flex items-center justify-between p-4">
            {!collapsed && <span className="text-lg font-bold">Admin Panel</span>}
            <button
              onClick={onCollapse}
              className="p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          </div>

          {/* Dynamic Menu Items */}
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `flex items-center p-4 transition-colors duration-200 ${
                        isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    <item.icon className="w-5 h-5" />
                    {!collapsed && <span className="ml-4">{item.text}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4">
          {!collapsed && <span className="text-sm text-gray-400">© 2024 Admin Panel</span>}
        </div>
      </aside>

      {/* Mobile Overlay - Clicking this will close the sidebar */}
      {isMobile && isMobile && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={handleMobileToggle}
        ></div>
      )}
    </>
  );
}
