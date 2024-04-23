import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/authContext";

import "./navbar.scss";

import leftArrow from "../../imgs/left-arrow.svg";
import settingsIcon from "../../imgs/settings-icon.svg";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const getPageNameFromPath = () => {
    if (path === "/found") {
      return "| Found";
    } else if (path === "/lost") {
      return "| Lost";
    } else if (path === "/dashboard") {
      return "| Dashboard";
    } else if (path === "/settings") {
      return "| Settings";
    } else {
      return "";
    }
  };

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar-parent">
      <ul className="info">
        <li>
          {location.pathname === "/" ? (
            <p className="logo">L&F</p>
          ) : (
            <Link to="/">
              <img
                className="go-back"
                src={leftArrow}
                alt="go back to home page"
              />
            </Link>
          )}
        </li>
        <li className="current-location">{getPageNameFromPath()}</li>
      </ul>

      <ul className="menu">
        {currentUser && (
          <>
            <li>
              <Link to="/dashboard" className="dashboard">
                Dashboard
              </Link>
            </li>
            <li className="settings">
              <Link to="/settings" className="btn nav icon">
                <img src={settingsIcon} alt="settings page button" />
              </Link>
            </li>
          </>
        )}
        {/* logout and delete cookies and local storage */}
        <li>
          {currentUser ? (
            <span onClick={logout} className="btn nav">
              Logout
            </span>
          ) : (
            <Link to="/login" className="login">
              Login
            </Link>
          )}
          {!currentUser && (
            <Link to="/register" className="btn nav">
              Register
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
