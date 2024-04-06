import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./navbar.scss";
import leftArrow from "../../imgs/leftArrow.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const NavBar = ({ cleanFormFields }) => {
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

  const handleCleanFormFields = () => {
    if (path === "/found") return cleanFormFields();
    return;
  };

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul className="info">
        <li className="">
          {location.pathname === "/" ? (
            <p className="logo">L&F</p>
          ) : (
            <Link to="/" onClick={handleCleanFormFields}>
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
        {/* retrieving user from local storage */}
        <li>
          <span>{currentUser?.username}</span>
        </li>
        {/* logout and delete cookies and local storage */}
        <li>
          <span>
            {currentUser ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  cleanFormFields: PropTypes.func,
};
