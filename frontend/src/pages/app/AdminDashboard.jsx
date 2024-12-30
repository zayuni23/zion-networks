// @ts-nocheck

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaCogs,
  FaSignOutAlt,
  FaChartBar,
  FaShoppingCart,
  FaPlus,
  FaTrash,
  FaEdit,
  FaEnvelope,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Internet Package", price: 50 },
    { id: 2, name: "Router", price: 120 },
  ]);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Product",
      price: 0,
    };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: "New User",
      email: "new@example.com",
    };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Admin dashboard sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col">
        <div className="p-6 text-center font-bold text-xl border-b border-[#0D874C]">
          <Link to="/">Admin Dashboard</Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-800 hover:bg-[#0D874C]/70 transition-colors "
          >
            <FaTachometerAlt /> Dashboard
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#0D874C]/70 transition-colors"
          >
            <FaShoppingCart /> Products
          </Link>
          <Link
            to="/admin/users"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#0D874C]/70 transition-colors"
          >
            <FaUsers /> Users
          </Link>
        </nav>
        <div>
          <Link
            to="/logout"
            className="flex items-center gap-2 px-4 py-2 text-sm text-red-300 hover:text-white"
          >
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 text-white bg-[#0D874C]/70 rounded-md hover:bg-green-700"
              onClick={handleAddProduct}
            >
              Add New Product
            </button>
            <button
              className="px-4 py-2 text-white bg-[#0D874C]/70 rounded-md hover:bg-green-700"
              onClick={handleAddUser}
            >
              Add New User
            </button>
          </div>
        </header>

        {/* Statistics */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center gap-4">
            <FaUsers size={30} className="text-green-700" />
            <div>
              <h2 className="text-xl font-bold">{users.length}</h2>
              <p className="text-gray-600">Total Users</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center gap-4">
            <FaShoppingCart size={30} className="text-green-700" />
            <div>
              <h2 className="text-xl font-bold">{products.length}</h2>
              <p className="text-gray-600">Total Products</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center gap-4">
            <FaChartBar size={30} className="text-green-700" />
            <div>
              <h2 className="text-xl font-bold">5</h2>
              <p className="text-gray-600">Active Orders</p>
            </div>
          </div>
        </section>

        {/* Products Management */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4">Manage Products</h2>
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="p-4">#</th>
                <th className="p-4">Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-4">{product.id}</td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4 flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                      <FaEdit />
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Users Management */}
        <section>
          <h2 className="text-xl font-bold mb-4">Manage Users</h2>
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="p-4">#</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-4">{user.id}</td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4 flex gap-2">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
