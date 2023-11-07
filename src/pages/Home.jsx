import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Found or Lost something?</h1>

      <Link to="/found">found</Link>
      <br />
      <Link to="/lost">lost</Link>
    </>
  );
};

export default Home;
