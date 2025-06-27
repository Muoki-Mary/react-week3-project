import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white dark:bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">React Task Manager</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/task-manager" className="hover:underline">
          Tasks
        </Link>
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-600 px-3 py-1 rounded dark:bg-gray-700 dark:text-white"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
