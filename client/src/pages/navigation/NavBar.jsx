import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./navigation.scss";
import leftArrow from '../../imgs/leftArrow.svg';

const NavBar = ({ cleanFormFields }) => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const getPageNameFromPath = () => {
    if (path === "/found") {
      return "Found";
    } else if (path === "/lost") {
      return "Lost";
    } else {
      return "";
    }
  };

  const handleCleanFormFields = () => {
    if (path === "/found") return cleanFormFields();
    return;
  };

  return (
    <div className="navigation">
      <nav>
        <ul>
          <Link to="/" onClick={handleCleanFormFields}>
            <img src={leftArrow} alt="go back to home page" />
          </Link>
          <li>{getPageNameFromPath()}</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  cleanFormFields: PropTypes.func,
};
