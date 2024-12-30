// @ts-nocheck
/* eslint-disable no-unused-vars */

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Notice the update here
import Contactpage from "./pages/app/Contactpage"; // Correct import
import Aboutpage from "./pages/app/Aboutpage";
import { Button } from "./components/ui/button";
import Homepage from "./pages/app/Homepage";
import Servicespage from "./pages/app/Servicespage";
import Packagespage from "./pages/app/Packagespage";
import FAQpage from "./pages/app/FAQpage";
import CustomerDashboard from "./pages/app/CustomerDashboard.jsx";
import AdminDashboard from "./pages/app/AdminDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTopButton from "./components/App/BackToTopButton";
import AdminUser from "./pages/app/AdminUser";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/packages" element={<Packagespage />} />
          <Route path="/faq" element={<FAQpage />} />
          {/* Ensure you are using the correct contact page path */}
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
