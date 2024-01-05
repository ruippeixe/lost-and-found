import { Link } from "react-router-dom";
import "./error.scss";
import "../styles/global.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="title">Sorry, the page was not found.</div>

      <Link to="/">
        <button type="button" className="btn inverse">
          go back to homepage
        </button>
      </Link>
    </div>
  );
};

export default Error;
