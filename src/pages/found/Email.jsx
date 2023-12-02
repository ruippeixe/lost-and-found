import PropTypes from "prop-types";
import "./found.scss";

const Email = (props) => {
  return (
    <>
      <h1 className="title">How to reach you?</h1>

      <input
        type="email"
        value={props.data.email || ""}
        onChange={(e) => props.updateFieldHandler("email", e.target.value)}
        placeholder="Please submit your email address"
        required
      />
    </>
  );
};

Email.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Email;
