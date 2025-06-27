import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen p-4">
      <nav className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">React Task Manager</h1>
        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/task-manager">Tasks</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-2 py-1 rounded"
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>
      {children}
      <footer className="text-center text-sm mt-6 text-gray-500">
        © 2025 PowerLearn Project. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
