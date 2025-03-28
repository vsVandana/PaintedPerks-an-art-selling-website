import React from "react";
import { Link, NavLink,Outlet } from "react-router-dom";
import logo from "./utils/images/logoedit.jpg";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-[#285380] flex flex-col py-6">
        <Link to="/" className="mb-8 pl-6">
          <img src={logo} alt="logo" className="w-38 h-auto" />
        </Link>
        <nav className="flex flex-col space-y-2 w-full">
          <li className="py-3 pl-6 list-none">
            <NavLink to="/admin/products" activeClassName="active" className="text-left hover:text-blue-600">
              Manage Products
            </NavLink>
          </li>
          <li className="py-3 pl-6 list-none">
            <NavLink to="/admin/users" activeClassName="active" className="text-left hover:text-blue-600">
              Users
            </NavLink>
          </li>
          <li className="py-3 pl-6 list-none">
            <NavLink to="/admin/settings" activeClassName="active" className="text-left hover:text-blue-600">
              Settings
            </NavLink>
          </li>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between text-xl bg-white shadow px-6 py-4 rounded-md">
          <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>

        {/* Content rendered by nested routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
