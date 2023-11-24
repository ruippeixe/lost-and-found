import PropTypes from "prop-types";
import "./found.scss";

const What = (props) => {
  return (
    <div className="form-control">
      <h1>What did you find?</h1>

      <select
        value={props.data.what}
        onChange={(e) => props.updateFieldHandler("what", e.target.value)}
        required
      >
        <option value="" disabled>
          Select the item
        </option>
        <option value="passport">Passport</option>
        <option value="keys">Keys</option>
      </select>
    </div>
  );
};

What.propTypes = {
  data: PropTypes.object.isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default What;
