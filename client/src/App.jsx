import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/home/Home";
import Lost from "./pages/lost/Lost";
import Found from "./pages/found/Found";
import Error from "./pages/error/Error";

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

  const cleanFormFields = () => {
    setData(Object.fromEntries(Object.keys(data).map((key) => [key, ""])));
  };

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
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
