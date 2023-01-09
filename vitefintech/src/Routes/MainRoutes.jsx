import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../Pages/User/User";
import Admin from "../Pages/Admin/Admin";
import Accept from "../Pages/Admin/Accept";
import Reject from "../Pages/Admin/Reject";
import Navbar from "../components/Navbar";
import Dashboard from "../Pages/Dashboard";
import RequireAuth from "../PrivateRoute/RequireAuth";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/dashboard"
          element={
            // <RequireAuth>
              <Dashboard />
            // </RequireAuth>
          }
        />
        <Route path="/accept" element={<Accept />} />
        <Route path="/reject" element={<Reject />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
