import { Link } from "react-router-dom";

import "./unauthorized.scss";

const Unauthorized = () => {
  return (
    <div className="unauthorized">
      <div className="top-container">
        <div className="warning">
          <h1 className="title">This page is restricted.</h1>
          <p className="sub-title"> Please log in to continue.</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="button">
          <Link to="/login" state={{ page: location.pathname }}>
            <div className="btn inverse">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
