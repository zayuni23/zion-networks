// @ts-nocheck

import React, { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../../store/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/zionet-logo.png";
import * as dataJsx from "../../data/data.jsx";

const Header = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [error, setError] = useState(null); // Error state for login and registration
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(formData));
    if (result.meta.requestStatus === "fulfilled") {
      setRegisterModalOpen(false);
      navigate("/login");
    } else {
      setError("Registration failed, please try again.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email: formData.email, password: formData.password };
    const result = await dispatch(loginUser(loginData));
    if (result.error) {
      setError(result.error.message);
    } else if (result.payload) {
      setLoginModalOpen(false);
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-14">
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Zion Networks Logo"
            width={300}
            height={80}
            className="object-contain h-14"
          />
        </NavLink>
        <nav className="flex items-center gap-4">
          {dataJsx.navItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Main Nav Item */}
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  `px-4 py-2 rounded ${
                    isActive
                      ? "bg-green-100 text-green-700 font-semibold"
                      : "hover:bg-green-100 hover:text-green-700"
                  } flex items-center`
                }
                onClick={(e) => {
                  if (item.subItems) {
                    e.preventDefault(); // Prevent navigation if dropdown exists
                    toggleDropdown(index);
                  }
                }}
              >
                {item.icon && <item.icon className="mr-2" />}
                {item.title}
              </NavLink>

              {/* Dropdown Menu */}
              {item.subItems && openDropdown === index && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
                  {item.subItems.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.url}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-green-100 text-green-700 font-semibold"
                            : "hover:bg-green-100 hover:text-green-700"
                        }`
                      }
                    >
                      {subItem.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative group">
              <FaUserCircle
                size={30}
                className="text-gray-700 cursor-pointer"
              />
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                <Link
                  to={
                    user.role === "admin"
                      ? "/admin/dashboard"
                      : "/customer/dashboard"
                  }
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => setRegisterModalOpen(true)}
                className="px-4 py-2 bg-[#0D874C]/70 text-white rounded hover:bg-[#0D874C]"
              >
                Get Started
              </button>
              <button
                onClick={() => setLoginModalOpen(true)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>

      {isLoginModalOpen && (
        <Modal title="Login" onClose={() => setLoginModalOpen(false)}>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-2"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#0D874C]/70 text-white py-2 rounded mt-4"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </Modal>
      )}

      {isRegisterModalOpen && (
        <Modal title="Register" onClose={() => setRegisterModalOpen(false)}>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-2"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#0D874C]/70 text-white py-2 rounded mt-4"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </Modal>
      )}
    </header>
  );
};

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded shadow-lg w-96 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="text-gray-700"
        >
          &times;
        </button>
      </div>
      {children}
    </div>
  </div>
);

export default Header;
