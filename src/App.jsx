import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Components/Spinner";
import MainLayout from "./Pages/MainLayout";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import BookAppointment from "./Pages/BookAppointment";
import Service from "./Pages/Service";
import Register from './Pages/Register';
import Login from './Pages/Login';
import AdminDashboard from './Admin/AdminDashboard';
import UserDashboard from './User/UserDashboard';
import ProtectedRoute from './Components/ProtectedRoutes';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  const { user } = useSelector((state) => state.auth); // Checking user state

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Navbar /><MainLayout /><Footer /></>} />
          <Route path="/home" element={<><Navbar /><MainLayout /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/service" element={<><Navbar /><Service /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
          <Route path="/bookappointment" element={<><Navbar /><BookAppointment /><Footer /></>} />
          
          {/* Protected Routes */}
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard/*"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Authentication Routes */}
          <Route 
            path="/login" 
            element={user ? (
              user.role === 'admin' ? <Navigate to="/admin/dashboard" /> : <Navigate to="/user/dashboard" />
            ) : <Login />} 
          />
          <Route path="/register" element={<Register />} />

          {/* Redirect to home if no matching route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
