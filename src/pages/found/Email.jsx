import PropTypes from "prop-types";
import "./found.scss";

const Email = (props) => {
  return (
    <div className="form-control">
      <h1>How to reach you?</h1>

      <input
        type="email"
        value={props.data.email || ""}
        onChange={(e) => props.updateFieldHandler("email", e.target.value)}
        placeholder="Please submit your email address"
        required
      />
    </div>
  );
};

Email.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default Email;
