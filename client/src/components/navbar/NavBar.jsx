import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import "./navbar.scss";

import leftArrow from "../../imgs/leftArrow.svg";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const getPageNameFromPath = () => {
    if (path === "/found") {
      return "| Found";
    } else if (path === "/lost") {
      return "| Lost";
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

      <ul className="items">
        {currentUser && (
          <li className="dashboard">
            <Link to="/dashboard">dashboard</Link>
          </li>
        )}
        {/* logout and delete cookies and local storage */}
        <li>
          <span>
            {currentUser ? (
              <span onClick={logout} className="btn auth logout">
                Logout
              </span>
            ) : (
              <Link to="/login" className="login">
                Login
              </Link>
            )}
          </span>
          <span>
            {!currentUser && (
              <Link to="/register" className="btn auth">
                Register
              </Link>
            )}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
