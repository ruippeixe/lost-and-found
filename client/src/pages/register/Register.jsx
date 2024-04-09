import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { API_URL } from "../../../config.js";

import "./register.scss";

const Register = () => {
  document.title = "Lost & Found";

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post(`${API_URL}/api/auth/register`, inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="form">
        <div className="top-container">
          <div className="element">
            <h1 className="title">Create an Account</h1>
            <label>Username</label>
            <input
              className="input-box"
              type="text"
              name="username"
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              className="input-box"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              className="input-box"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="bottom-container">
          <div className="element">
            <button type="submit" className="btn inverse w-100 mb-8">
              Register
            </button>
            {error && <p>{error}</p>}
            <span className="link">
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
