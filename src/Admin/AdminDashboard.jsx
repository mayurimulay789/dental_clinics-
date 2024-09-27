import React from "react";

// importing components
import Sidebar from "../Admin/Sidebar";
import Navbar from "./Navbar";
import Dashboard from "../Admin/Dashboard";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex w-full h-full border border-gray-100">
        <div className="w-48 ">
          <Sidebar className="" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="h-12 ">
            <Navbar />
          </div>
          
          <div className="flex-1 p-5 bg-white">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
