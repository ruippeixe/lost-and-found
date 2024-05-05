import { useState } from "react";
import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { API_URL } from "../../../config.js";

import "./register.scss";

const Register = () => {
  document.title = "Lost & Found";

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const { page } = location.state || { page: "/" };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInvalid = () => {
    setPasswordError(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError(false);

    try {
      const res = await Axios.post(`${API_URL}/api/auth/register`, inputs);
      console.log(res.data.message);

      if (page === "/found") navigate("/login", { state: { page } });
      else navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        if (error.response.data.message === "Username already exists.") {
          setUsernameError(error.response.data.message);
          setEmailError(null);
        } else if (error.response.data.message === "Email already exists.") {
          setUsernameError(null);
          setEmailError(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className="register-parent">
      <form onSubmit={handleSubmit} className="form">
        <div className="top-container">
          <div className="element">
            <h1 className="title">Create an Account</h1>

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

            <div className={`field ${emailError ? "error" : ""}`}>
              <label className="label">Email</label>
              <input
                className="input-box"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
              {emailError && <p className="info">{emailError}</p>}
            </div>

            <div className={`field ${passwordError ? "error" : ""}`}>
              <label className="label">Password</label>
              <input
                className="input-box"
                type="password"
                name="password"
                onChange={handleChange}
                onInvalid={handleInvalid}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$"
                required
              />
              {passwordError && (
                <p className="info">
                  Password must be 6+ characters with at least 1 letter, 1
                  digit, and 1 special character.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="element">
            <button type="submit" className="btn inverse w-100 mb-8">
              Register
            </button>
            <span className="link">
              Already have an account?{" "}
              <Link to="/login" state={{ page: page }}>
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
