import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import "./login.scss";

const Login = () => {
  document.title = "Lost & Found";

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      if (error.response.status === 404) {
        setUsernameError(error.response.data.message);
        setPasswordError(null);
      } else if (error.response.status === 400) {
        setUsernameError(null);
        setPasswordError(error.response.data.message);
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="form">
        <div className="top-container">
          <div className="element">
            <h1 className="title">Welcome back!</h1>

            <div className={`field ${usernameError ? "error" : ""}`}>
              <label className="label">Username</label>
              <input
                className="input-box"
                type="text"
                name="username"
                onChange={handleChange}
                required
              />
              {usernameError && <p className="info">{usernameError}</p>}
            </div>

            <div className={`field ${passwordError ? "error" : ""}`}>
              <label className="label">Password</label>
              <input
                className="input-box"
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
              {passwordError && <p className="info">{passwordError}</p>}
            </div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="element">
            <button type="submit" className="btn inverse w-100 mb-8">
              Login
            </button>
            <span className="link">
              Need an account? <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
