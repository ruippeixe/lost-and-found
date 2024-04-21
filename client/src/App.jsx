import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";

import { API_URL } from "../config.js";

import Home from "./pages/home/Home";
import Lost from "./pages/lost/Lost";
import Found from "./pages/found/Found";
import Error from "./pages/error/Error";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/settings/Settings";

function App() {
  const [data, setData] = useState({
    what: "",
    who: "",
    place: "",
    date: "",
    time: "",
    email: "",
  });

  const [foundData, setFoundData] = useState([]);

  const location = useLocation();

  const cleanFormFields = () => {
    setData({
      what: "",
      who: "",
      place: "",
      date: "",
      time: "",
      email: "",
    });
  };

  useEffect(() => {
    if (location.pathname === "/found") {
      cleanFormFields();
    }
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/api/item`);
        setFoundData(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/found"
                element={
                  <Found
                    data={data}
                    setData={setData}
                    setFoundData={setFoundData}
                    cleanFormFields={cleanFormFields}
                  />
                }
              />
              <Route path="/lost" element={<Lost foundData={foundData} />} />

              <Route path="*" element={<Error />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
