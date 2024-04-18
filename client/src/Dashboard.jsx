import { useContext, useEffect, useState } from "react";
import Axios from "axios";

import { AuthContext } from "./context/authContext";
import { API_URL } from "../config";

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;

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
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>What: {item.what}</p>
          <p onClick={() => handleDeleteItem(item.id)}>del</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
