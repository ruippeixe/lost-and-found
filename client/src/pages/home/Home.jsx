import { Link } from "react-router-dom";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

import "./home.scss";
import "../../styles/buttons.scss";

const Home = () => {
  document.title = "Lost & Found";

  return (
    <div className="home">
      <NavBar />

      <div className="choose">
        <div className="top-container">
          <h1 className="title">Lost or Found something?</h1>
        </div>

        <div className="bottom-container">
          <div className="links">
            <Link to="/lost" className="btn inverse">
              lost
            </Link>
            <Link to="/found" className="btn">
              found
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
