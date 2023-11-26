import { Link } from "react-router-dom";
import "./home.scss";
import "../styles/global.scss"

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Lost or Found something?</h1>

      <div className="links">
        <Link to="/lost" className="btn inverse">lost</Link>
        <Link to="/found" className="btn">found</Link>
      </div>
    </div>
  );
};

export default Home;
