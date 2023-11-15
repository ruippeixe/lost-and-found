import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import Lost from "./pages/Lost";
import Found from "./pages/found/Found";
import Error from "./pages/Error";
// import "./App.css";

function App() {
  const [data, setData] = useState({
    what: "",
    who: "",
    where: "",
    date: "",
    time: "",
    email: "",
  });

  const [foundData, setFoundData] = useState([]);

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
                  />
                }
              />
              <Route path="/lost" element={<Lost />} />

              <Route path="*" element={<Error />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
