import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCity } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] =
  useState(false);

  document.body.className =
  darkMode ? "dark" : "";


  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  const [darkMode, setDarkMode] =
    useState(false);
  };

  return (
    <nav className="navbar">

      <h2 className="logo">

  <FaCity />

  Area Issues

</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/report">Report</Link>

        {
          isLoggedIn && (
            <Link to="/dashboard">
              Dashboard
            </Link>
          )
        }

        {
          !isLoggedIn ? (
            <Link to="/login">Login</Link>
          ) : (
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          )
        }
          <button
    onClick={() => setDarkMode(!darkMode)}
  >
    Theme
  </button>



      </div>

    </nav>
  );
}

export default Navbar;