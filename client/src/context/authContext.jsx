import { createContext, useEffect, useState } from "react";
import { API_URL } from "../../config";
import Axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await Axios.post(`${API_URL}/api/auth/login`, inputs, {
      withCredentials: true,
    });
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await Axios.post(
      `${API_URL}/api/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
