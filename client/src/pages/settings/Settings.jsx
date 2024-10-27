import { useContext, useEffect, useState } from "react";
import Axios from "axios";

import { API_URL } from "../../../config";
import { AuthContext } from "../../context/authContext";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import Unauthorized from "../../components/unauthorized/Unauthorized";

import "./settings.scss";

const Settings = () => {
  const [edit, setEdit] = useState(false);
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.id;

  useEffect(() => {
    if (currentUser) {
      const fetchEmail = async () => {
        try {
          const res = await Axios.get(`${API_URL}/api/item/email/${userId}`);
          setEmail(res.data);
        } catch (err) {
          console.log(err);
        }
      };

      fetchEmail();
    }
  }, [userId, currentUser]);

  const handleEmailUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios.put(
        `${API_URL}/api/item/email/${userId}`,
        {
          email: email,
        },
        {
          withCredentials: true,
        }
      );

      setEdit(false);
      setEmailError(null);
      console.log(res.data.message);
    } catch (error) {
      if (error.response.status === 409)
        setEmailError(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="settings-parent">
      <NavBar />

      {currentUser ? (
        <div className="email">
          <div className="top-container">
            <h1 className="title">Settings</h1>
            <p className="sub-title">Update your credentials</p>
          </div>
          <div className="bottom-container">
            {!edit ? (
              <div className="action">
                <span
                  className="btn settings-btn"
                  onClick={() => {
                    setEdit(true);
                    setEmail("");
                  }}
                >
                  edit
                </span>
                <span className="preview">{email}</span>
              </div>
            ) : (
              <form
                onSubmit={handleEmailUpdate}
                className={`form ${emailError ? "error" : ""}`}
              >
                <button type="submit" className="btn settings-btn inverse">
                  save
                </button>
                <input
                  className="input-box"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                />
                {emailError && <p className="info">{emailError}</p>}
              </form>
            )}
          </div>
        </div>
      ) : (
        <Unauthorized />
      )}

      <Footer />
    </div>
  );
};

export default Settings;
