import { useContext, useEffect, useState } from "react";
import Axios from "axios";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

import { API_URL } from "../../../config";
import { AuthContext } from "../../context/authContext";

const Settings = () => {
  const [edit, setEdit] = useState(false);
  const [email, setEmail] = useState();

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;

  const handleUpdateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const res = await Axios.get(`${API_URL}/api/email/${userId}`);
        setEmail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmail();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEdit(false);

    try {
      const res = await Axios.put(
        `${API_URL}/api/email/${userId}`,
        {
          email: email,
        },
        {
          withCredentials: true,
        }
      );

      console.log(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings-parent">
      <NavBar />

      {!edit ? (
        <div>
          <span
            onClick={() => {
              setEdit(true);
              setEmail("");
            }}
          >
            edit{" "}
          </span>
          <span>{email}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => handleUpdateEmail(e.target.value)}
            placeholder="email@email.com"
            required
          />
          <div style={{ marginLeft: "8px" }}>
            <button type="submit">save</button>
          </div>
        </form>
      )}

      <Footer />
    </div>
  );
};

export default Settings;
