import { useState } from "react";
import Axios from "axios";
import { API_URL } from "../../config.js";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  document.title = "Lost & Found";

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios.post(`${API_URL}/api/auth/register`, inputs);
      console.log(res);
      // if successful navigate to login page
      // navigate("/login");
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
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Register</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;
