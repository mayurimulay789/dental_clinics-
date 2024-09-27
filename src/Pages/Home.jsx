import React from "react";
import MainLayout from "../Pages/MainLayout";
import Admin from "../Admin/AdminDashboard";

function Home({ isAuthenticated = false, user }) {
  return (
    <div>
      {isAuthenticated && user && user.role === "admin" ? (
        <>
          <Admin />
        </>
      ) : (
        <>
          <MainLayout />
        </>
      )}
    </div>
  );
}

export default Home;
