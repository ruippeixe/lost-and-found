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

  const [error, setError] = useState(null);

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
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="form">
        <div className="top-container">
          <div className="element">
            <h1 className="title">Welcome back!</h1>
            <label>Username</label>
            <input
              className="input-box"
              type="text"
              name="username"
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
              Login
            </button>
            {error && <p>{error}</p>}
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
