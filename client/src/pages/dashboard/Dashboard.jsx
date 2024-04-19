import { useContext, useEffect, useState } from "react";
import Axios from "axios";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

import { AuthContext } from "../../context/authContext";
import { API_URL } from "../../../config";

import "./dashboard.scss";

import deleteIcon from "../../imgs/delete-icon.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.id;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await Axios.get(`${API_URL}/api/item/${userId}`);
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [userId]);

  const handleDeleteItem = async (itemId) => {
    try {
      const res = await Axios.delete(`${API_URL}/api/item/${itemId}`, {
        withCredentials: true,
      });
      console.log(res.data.message);

      // Filter out the deleted item
      setItems(items.filter((item) => item.id !== itemId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-parent">
      <NavBar />

      {currentUser ? (
        <div className="items">
          <div className="top-container">
            <h1 className="title">Dashboard</h1>
            <p className="sub-title">All your found items</p>
          </div>
          <div className="bottom-container">
            {items.length > 0 ? (
              items.map((item) => (
                <div className="element" key={item.id}>
                  <div
                    className="delete"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <img
                      className="icon"
                      src={deleteIcon}
                      alt="delete this item"
                    />
                  </div>

                  <div className="item">
                    <div className="info">
                      <div className="what">
                        <p className="label">
                          What: <span>{item.what}</span>
                        </p>
                      </div>
                      <div className="who">
                        <p className="label">
                          Who: <span>{item.who}</span>
                        </p>
                      </div>
                    </div>
                    <div className="where">
                      <div className="place">
                        <p className="label">
                          Place: <span>{item.place}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="not-found">
                <h1 className="title">
                  You currently have no added found items.
                </h1>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="not-authenticated">
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
      )}

      <Footer />
    </div>
  );
};

export default Dashboard;
