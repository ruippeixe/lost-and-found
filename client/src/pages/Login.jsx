// import Axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { API_URL } from "../../config";
import { AuthContext } from "../context/authContext";

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
    <form>
      <input
        required
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Login</button>
      {error && <p>{error}</p>}
      <span>
        Don&apos;t you have an account? <Link to="/register">Register</Link>
      </span>
    </form>
  );
};

export default Login;
