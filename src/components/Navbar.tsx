import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState("light-mode");

  function toggleTheme() {
    if (darkMode === "light-mode") {
      setDarkMode("dark-mode");
    } else {
      setDarkMode("light-mode");
    }
  }
  useEffect(() => {
    document.documentElement.className = darkMode;
  }, [darkMode]);
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div>
        <button
          className="toggle-btn"
          onClick={toggleTheme}
        >
          {darkMode === "light-mode" ? <FaToggleOn /> : <FaToggleOff />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
