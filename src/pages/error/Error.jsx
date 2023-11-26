import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div>sorry, page not found</div>

      <Link to="/">go back to homepage</Link>
    </>
  );
};

export default Error;
