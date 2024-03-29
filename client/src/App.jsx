import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/home/Home";
import Lost from "./pages/lost/Lost";
import Found from "./pages/found/Found";
import Error from "./pages/error/Error";
import Axios from "axios";
import { API_URL } from "../config.js";
import Register from "./pages/Register";
import Login from "./pages/Login";

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

  const cleanFormFields = () => {
    setData(Object.fromEntries(Object.keys(data).map((key) => [key, ""])));
  };

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
                    foundData={foundData}
                    setFoundData={setFoundData}
                    cleanFormFields={cleanFormFields}
                  />
                }
              />
              <Route path="/lost" element={<Lost foundData={foundData} />} />

              <Route path="*" element={<Error />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
