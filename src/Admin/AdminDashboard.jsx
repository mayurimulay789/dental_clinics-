import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Moon, Sun } from 'lucide-react';
import { useNavigate, Routes, Route } from 'react-router-dom'; // Add Routes and Route
import Navbar from './AdminNavbar';
import Sidebar from './AdminSidebar';
import MainContent from './MainContent';
import Footer from './AdminFooter';
import SliderImage from './SliderImage';
import UserDashboard from '../User/UserDashboard'; // Import UserDashboard
import BookAppointment from '../Pages/BookAppointment'; // Import Appointment Module
import Appointment from '../Admin/Appointment'
import YouTubeVideo from './YouTubeVideo';
import Blog from './Blog';
export default function AdminDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const theme = useSelector((state) => state.ui.theme);
  const navigate = useNavigate(); // To programmatically navigate to login page

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white transition bg-red-500 rounded-full hover:bg-red-600"
        >
          Logout
        </button>
      </Navbar>
      <div className="flex h-[1000px]">
        <Sidebar collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <MainContent>
          {/* Routes to render different modules */}
          <Routes>
            <Route path="/sliderimage" element={<SliderImage />} />
            <Route path="userdashboard" element={<UserDashboard />} /> {/* User Module */}
            <Route path="/appointment" element={<Appointment />} /> {/* Appointment Module */}
            <Route path="/youtubevideo" element={<YouTubeVideo />} /> {/* Appointment Module */}
            <Route path="/blogpost" element={<Blog />} /> {/* Appointment Module */}

          
          </Routes>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}
