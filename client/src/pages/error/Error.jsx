import { Link } from "react-router-dom";

import "./error.scss";
import "../../styles/buttons.scss";

const Error = () => {
  document.title = "L&F - Oops...";

  return (
    <div className="error-parent">
      <div className="title">Sorry, the page was not found.</div>

      <Link to="/">
        <div className="btn inverse">go back to homepage</div>
      </Link>
    </div>
  );
};

export default Error;
